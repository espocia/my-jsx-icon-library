import { readdir, readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { transform } from '@svgr/core'
// At top of your file
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Corrected relative to /src/
const filledFolder = path.resolve(__dirname, 'icons/filled')
const outputFolder = path.resolve(__dirname, '../components/filled')
const componentFolder = path.resolve(__dirname, '../components/')

// Manual SVG to JSX transformer as fallback
function svgToReactComponent(svgContent, componentName) {
	// Clean up the SVG content
	let jsxContent = svgContent
		.replace(/xmlns="[^"]*"/g, '') // Remove xmlns
		.replace(/fill="inherit"/g, 'fill="currentColor"') // Replace inherit with currentColor
		.replace(/fill-rule/g, 'fillRule') // Convert to camelCase
		.replace(/clip-rule/g, 'clipRule') // Convert to camelCase
		.replace(/stroke-width/g, 'strokeWidth') // Convert to camelCase
		.replace(/stroke-linecap/g, 'strokeLinecap') // Convert to camelCase
		.replace(/stroke-linejoin/g, 'strokeLinejoin') // Convert to camelCase
		.replace(/<svg([^>]*)>/, '<svg$1 {...props}>') // Add props spreading

	return `import * as React from 'react';
import { SVGProps } from 'react';

const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
  ${jsxContent}
);

export default ${componentName};`
}

export default async function svgToJsx() {
	const convertedComponents = [];

	try {
		// Clean up existing components folder
		try {
			await rm(componentFolder, { recursive: true, force: true });
			console.log('🧹 Cleaned existing components folder');
		} catch (cleanupError) {
			// Ignore if folder doesn't exist
		}

		// Ensure output folder exists
		await mkdir(outputFolder, { recursive: true })
		console.log('📁 Created components/filled folder');

		// Read all .svg files from folder
		const files = await readdir(filledFolder)
		console.log(`📂 Found ${files.filter(f => f.endsWith('.svg')).length} SVG files`);

		for (const file of files) {
			if (!file.endsWith('.svg')) continue

			const svgPath = path.join(filledFolder, file)
			const svgCode = await readFile(svgPath, 'utf-8')

			const baseName = path.basename(file, '.svg')
			const componentName = baseName
				.split('-')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join('')

			let jsCode;

			try {
				// Try SVGR first
				jsCode = await transform(
					svgCode,
					{
						icon: true,
						typescript: true,
						expandProps: false,
						replaceAttrValues: {
							'inherit': 'currentColor',
							'#000': 'currentColor',
							'#000000': 'currentColor',
						},
						svgProps: {
							fill: 'currentColor',
						},
						template: ({ componentName, props, jsx, exports }, { tpl }) => {
							return tpl`
import * as React from 'react';
import { SVGProps } from 'react';

const ${componentName} = (${props}: SVGProps<SVGSVGElement>) => ${jsx};

${exports}
							`;
						},
					},
					{
						componentName,
						filePath: svgPath,
					}
				)

				// Check if SVGR actually transformed it
				if (!jsCode.includes('import') || !jsCode.includes('export')) {
					throw new Error('SVGR failed to transform')
				}

			} catch (svgrError) {
				console.warn(`⚠️ SVGR failed for ${file}, using manual transform`);
				jsCode = svgToReactComponent(svgCode, componentName)
			}

			const outputPath = path.join(outputFolder, `${componentName}.tsx`)
			await writeFile(outputPath, jsCode, 'utf-8')
			console.log(`✅ Converted: ${file} → ${componentName}.tsx`)

			convertedComponents.push(componentName);
		}

		// Generate index files
		await generateIndexFiles(convertedComponents);

		console.log(`🎉 Successfully converted ${convertedComponents.length} SVG files`)
		console.log(`📦 Generated index files for easy importing`)

	} catch (err) {
		console.error('❌ Error during SVG to JSX conversion:', err)

		if (err.message.includes('Cannot find module')) {
			console.error('💡 Make sure you have installed: npm install @svgr/core @svgr/plugin-jsx')
		}

		if (err.code === 'ENOENT' && err.path?.includes('icons/filled')) {
			console.error('💡 Make sure you have created the ./icons/filled/ folder with SVG files')
		}
	}
}

async function generateIndexFiles(componentNames) {
	try {
		// Generate filled/index.ts
		const filledIndexContent = `// Auto-generated exports for filled icons
// This file is generated by convert-icons.js - do not edit manually

${componentNames.map(name => `export { default as ${name} } from './${name}';`).join('\n')}

// Export all as object for grouped access
export const FilledIcons = {
${componentNames.map(name => `  ${name}: require('./${name}'),`).join('\n')}
};
`;

		await writeFile('./components/filled/index.ts', filledIndexContent, 'utf-8');
		console.log('✅ Generated filled/index.ts');

		// Generate main index.ts
		const mainIndexContent = `// Auto-generated main exports
// This file is generated by convert-icons.js - do not edit manually

${componentNames.map(name => `export { default as ${name} } from './filled/${name}';`).join('\n')}

// Export all filled icons as a group
export * as FilledIcons from './filled';

// Export individual categories (can be extended)
export * from './filled';

// Export types for convenience
export type { SVGProps } from 'react';

// Default export with all icons
export default {
${componentNames.map(name => `  ${name}: require('./filled/${name}'),`).join('\n')}
};
`;

		await writeFile('./components/index.ts', mainIndexContent, 'utf-8');
		console.log('✅ Generated main index.ts');

		// Generate package.json for submodule exports (optional)
		const componentPackageJson = {
			"main": "../dist/index.js",
			"module": "../dist/index.esm.js",
			"types": "../dist/index.d.ts"
		};

		await writeFile('./components/package.json', JSON.stringify(componentPackageJson, null, 2), 'utf-8');
		console.log('✅ Generated components/package.json');

	} catch (err) {
		console.error('❌ Error generating index files:', err);
	}
}

// Run the conversion
svgToJsx().catch(console.error);
