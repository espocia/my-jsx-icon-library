import * as React from 'react';
import { SVGProps } from 'react';

const LocationMarker = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M5.89947 4.69848C8.16412 2.43384 11.8358 2.43384 14.1005 4.69848C16.3651 6.96313 16.3651 10.6348 14.1005 12.8995L9.99998 17L5.89947 12.8995C3.63483 10.6348 3.63483 6.96313 5.89947 4.69848ZM9.99998 10.4558C10.915 10.4558 11.6568 9.71405 11.6568 8.79899C11.6568 7.88393 10.915 7.14214 9.99998 7.14214C9.08492 7.14214 8.34312 7.88393 8.34312 8.79899C8.34312 9.71405 9.08492 10.4558 9.99998 10.4558Z" fill="currentColor"/>
</svg>

);

export default LocationMarker;