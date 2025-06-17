import { exec } from 'child_process';
import { promisify } from 'util';
import { writeFile, mkdir } from 'fs/promises';
import path from 'path';

const execAsync = promisify(exec);

async function build() {
	console.log('🏗️ Starting build process...\n');

	try {
		// Step 1: Convert SVG icons
		console.log('📦 Step 1: Converting SVG icons to JSX components...');
		await execAsync('npm run convert-icons');
		console.log('✅ Icons converted successfully\n');

		// Step 2: Create dist directory
		console.log('📁 Step 2: Creating dist directory...');
		await mkdir('./dist', { recursive: true });
		console.log('✅ Dist directory created\n');

		// Step 3: Build CommonJS
		console.log('🔨 Step 3: Building CommonJS version...');
		await execAsync('npm run build:cjs');
		console.log('✅ CommonJS build completed\n');

		// Step 4: Build ESM
		console.log('🔨 Step 4: Building ESM version...');
		await execAsync('npm run build:esm');
		console.log('✅ ESM build completed\n');

		// Step 5: Create package.json files for better module resolution
		console.log('📄 Step 5: Creating module resolution files...');

		// Create dist/package.json for ESM
		const distPackageJson = {
			"type": "module",
			"main": "./index.js",
			"types": "./index.d.ts"
		};

		await writeFile('./dist/package.json', JSON.stringify(distPackageJson, null, 2));
		console.log('✅ Created dist/package.json\n');

		console.log('🎉 Build completed successfully!');
		console.log('\n📋 Build Summary:');
		console.log('   ✓ SVG icons converted to JSX components');
		console.log('   ✓ TypeScript compiled to JavaScript');
		console.log('   ✓ CommonJS and ESM builds created');
		console.log('   ✓ Type declarations generated');
		console.log('   ✓ Package ready for publishing');

	} catch (error) {
		console.error('❌ Build failed:', error.message);
		process.exit(1);
	}
}

build();
