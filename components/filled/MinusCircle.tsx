import * as React from 'react';
import { SVGProps } from 'react';

const MinusCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM7.375 9.125C6.89175 9.125 6.5 9.51675 6.5 10C6.5 10.4832 6.89175 10.875 7.375 10.875H12.625C13.1082 10.875 13.5 10.4832 13.5 10C13.5 9.51675 13.1082 9.125 12.625 9.125H7.375Z" fill="currentColor"/>
</svg>

);

export default MinusCircle;