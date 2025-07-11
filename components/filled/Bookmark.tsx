import * as React from 'react';
import { SVGProps } from 'react';

const Bookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path fillRule="evenodd" clipRule="evenodd" d="M5.86925 3.23812C7.22454 3.08083 8.60294 3 10 3C11.3971 3 12.7755 3.08083 14.1307 3.23812C15.2198 3.3645 16 4.2998 16 5.36872V16.6364C16 16.8254 15.9021 17.001 15.7413 17.1004C15.5805 17.1997 15.3797 17.2088 15.2106 17.1242L10 14.5189L4.78939 17.1242C4.6203 17.2088 4.4195 17.1997 4.25869 17.1004C4.09788 17.001 4 16.8254 4 16.6364V5.36872C4 4.2998 4.78024 3.3645 5.86925 3.23812Z" fill="currentColor"/>
</svg>

);

export default Bookmark;