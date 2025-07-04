import * as React from 'react';
import { SVGProps } from 'react';

const Cube = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path d="M10.3149 1.33514C10.1203 1.22162 9.87968 1.22162 9.68508 1.33514L2.5 5.52643L10 9.90143L17.5 5.52643L10.3149 1.33514Z" fill="currentColor"/>
<path d="M18.125 6.60898L10.625 10.984V18.484L17.8149 14.2899C18.0069 14.1779 18.125 13.9723 18.125 13.75V6.60898Z" fill="currentColor"/>
<path d="M9.375 18.484V10.984L1.875 6.60898V13.75C1.875 13.9723 1.99307 14.1779 2.18508 14.2899L9.375 18.484Z" fill="currentColor"/>
</svg>

);

export default Cube;