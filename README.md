# My JSX Icon Library

A TypeScript-ready React icon library generated from SVG files.

## Installation

```bash
npm install my-jsx-icon-library
```

## Usage

### Named Imports (Recommended)

```tsx
import { AcademicCap, ArrowsExpand } from 'my-jsx-icon-library';

function MyComponent() {
  return (
    <div>
      <AcademicCap className="w-6 h-6 text-blue-500" />
      <ArrowsExpand className="w-8 h-8 text-red-500" />
    </div>
  );
}
```

### Individual Imports

```tsx
import AcademicCap from 'my-jsx-icon-library/components/filled/AcademicCap';

function MyComponent() {
  return <AcademicCap className="w-6 h-6" />;
}
```

### Group Imports

```tsx
import { FilledIcons } from 'my-jsx-icon-library';

function MyComponent() {
  return <FilledIcons.AcademicCap className="w-6 h-6" />;
}
```

## Props

All icons accept standard SVG props:

```tsx
interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  style?: CSSProperties;
  // ... all other SVG attributes
}
```

## Styling

Icons inherit color from their parent by default:

```tsx
// Using Tailwind CSS
<AcademicCap className="w-6 h-6 text-blue-500" />

// Using inline styles
<AcademicCap style={{ width: 24, height: 24, color: 'blue' }} />

// Using CSS classes
<AcademicCap className="my-icon-class" />
```

## Available Icons

- AcademicCap
- ArrowsExpand
- (Add more icons by placing SVG files in `icons/filled/` and running `npm run build`)

## Development

### Project Structure

```
my-jsx-icon-library/
├── icons/
│   └── filled/          # Place your SVG files here
├── components/          # Generated JSX components (do not edit)
├── dist/               # Built package (do not edit)
├── convert-icons.js    # SVG to JSX converter
└── package.json
```

### Adding New Icons

1. Place SVG files in `icons/filled/`
2. Run `npm run build:icons` to convert them
3. Run `npm run build` to compile the package

### Build Commands

```bash
# Convert SVG files to JSX components
npm run convert-icons

# Build the entire package
npm run build

# Clean build artifacts
npm run clean

# Development build (icons + compile)
npm run dev
```

## TypeScript Support

This library is built with TypeScript and includes full type definitions. All icons are properly typed as React components accepting `SVGProps<SVGSVGElement>`.

## License

MIT
