import * as React from 'react';
import { SVGProps } from 'react';

const ViewBoards = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path d="M12.4615 3H7.53846V16.5385H12.4615V3Z" fill="currentColor"/>
<path d="M13.6923 16.5385H16.4615C17.3112 16.5385 18 15.8497 18 15V4.53846C18 3.68879 17.3112 3 16.4615 3H13.6923V16.5385Z" fill="currentColor"/>
<path d="M3.53846 3H6.30769V16.5385H3.53846C2.68879 16.5385 2 15.8497 2 15V4.53846C2 3.68879 2.68879 3 3.53846 3Z" fill="currentColor"/>
</svg>

);

export default ViewBoards;