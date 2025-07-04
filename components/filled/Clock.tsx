import * as React from 'react';
import { SVGProps } from 'react';

const Clock = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17ZM11 6.5C11 5.94772 10.5523 5.5 10 5.5C9.44772 5.5 9 5.94772 9 6.5V10C9 10.2652 9.10536 10.5196 9.29289 10.7071L11.7678 13.182C12.1583 13.5725 12.7915 13.5725 13.182 13.182C13.5725 12.7915 13.5725 12.1583 13.182 11.7678L11 9.58579V6.5Z" fill="currentColor"/>
</svg>

);

export default Clock;