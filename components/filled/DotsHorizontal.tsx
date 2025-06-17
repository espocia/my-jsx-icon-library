import * as React from 'react';
import { SVGProps } from 'react';

const DotsHorizontal = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path d="M6.5 10C6.5 10.9665 5.7165 11.75 4.75 11.75C3.7835 11.75 3 10.9665 3 10C3 9.0335 3.7835 8.25 4.75 8.25C5.7165 8.25 6.5 9.0335 6.5 10Z" fill="currentColor"/>
<path d="M11.75 10C11.75 10.9665 10.9665 11.75 10 11.75C9.0335 11.75 8.25 10.9665 8.25 10C8.25 9.0335 9.0335 8.25 10 8.25C10.9665 8.25 11.75 9.0335 11.75 10Z" fill="currentColor"/>
<path d="M15.25 11.75C16.2165 11.75 17 10.9665 17 10C17 9.0335 16.2165 8.25 15.25 8.25C14.2835 8.25 13.5 9.0335 13.5 10C13.5 10.9665 14.2835 11.75 15.25 11.75Z" fill="currentColor"/>
</svg>

);

export default DotsHorizontal;