import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises'
import { transform } from '@svgr/core'
import path from 'node:path'

const filledFolder = './icons/filled/'
const outputFolder = './components/filled/'

export default async function svgToJsx() {
	try {
		// Ensure output folder exists
		await mkdir(outputFolder, { recursive: true })

		// Read all .svg files from folder
		const files = await readdir(filledFolder)

		for (const file of files) {
			if (!file.endsWith('.svg')) continue

			const svgPath = path.join(filledFolder, file)
			const svgCode = await readFile(svgPath, 'utf-8')

			const baseName = path.basename(file, '.svg')
			const componentName = baseName
				.split('-')
				.map(word => word.charAt(0).toUpperCase() + word.slice(1))
				.join('')

			// Enhanced SVGR configuration
			const jsCode = await transform(
				svgCode,
				{
					// SVGR options
					icon: true,
					typescript: true,
					expandProps: false,
					replaceAttrValues: {
						'#000': 'currentColor',
						'#000000': 'currentColor',
					},
					svgProps: {
						fill: 'currentColor',
					},
					// Ensure JSX transformation
					plugins: ['@svgr/plugin-jsx'],
				},
				{
					// State passed to plugins
					componentName,
					filePath: svgPath,
				}
			)

			const outputPath = path.join(outputFolder, `${componentName}.tsx`)
			await writeFile(outputPath, jsCode, 'utf-8')
			console.log(`✅ Converted: ${file} → ${componentName}.tsx`)
		}

		console.log(`🎉 Successfully converted ${files.filter(f => f.endsWith('.svg')).length} SVG files`)

	} catch (err) {
		console.error('❌ Error during SVG to JSX conversion:', err)

		// Additional debugging info
		if (err.message.includes('Cannot find module')) {
			console.error('💡 Make sure you have installed: npm install @svgr/core @svgr/plugin-jsx')
		}
	}
}

svgToJsx()
