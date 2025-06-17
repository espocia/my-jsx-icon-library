import * as React from 'react';
import { SVGProps } from 'react';

const ChartPie = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path d="M3 10C3 6.13401 6.13401 3 10 3V10H17C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10Z" fill="currentColor"/>
<path d="M11.75 3.22046C14.2098 3.85358 16.1464 5.79017 16.7795 8.25004H11.75V3.22046Z" fill="currentColor"/>
</svg>

);

export default ChartPie;