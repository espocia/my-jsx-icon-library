import * as React from 'react';
import { SVGProps } from 'react';

const Table = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M5.625 4.75C4.17525 4.75 3 5.92525 3 7.375V12.625C3 14.0747 4.17525 15.25 5.625 15.25H14.375C15.8247 15.25 17 14.0747 17 12.625V7.375C17 5.92525 15.8247 4.75 14.375 4.75H5.625ZM4.75 12.625V11.75H9.125V13.5H5.625C5.14175 13.5 4.75 13.1082 4.75 12.625ZM10.875 13.5H14.375C14.8583 13.5 15.25 13.1082 15.25 12.625V11.75H10.875V13.5ZM10.875 10H15.25V8.25H10.875V10ZM9.125 8.25H4.75V10H9.125V8.25Z" fill="currentColor"/>
</svg>

);

export default Table;