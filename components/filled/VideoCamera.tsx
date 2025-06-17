import * as React from 'react';
import { SVGProps } from 'react';

const VideoCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20"  {...props}>
<path d="M3.75 3.75C2.36929 3.75 1.25 4.86929 1.25 6.25V13.75C1.25 15.1307 2.36929 16.25 3.75 16.25H10.625C12.0057 16.25 13.125 15.1307 13.125 13.75V6.25C13.125 4.86929 12.0057 3.75 10.625 3.75H3.75Z" fill="currentColor"/>
<path d="M16.6161 15.625L14.375 13.3839V6.61609L16.6161 4.37497C17.4036 3.58751 18.75 4.14523 18.75 5.25885V14.7411C18.75 15.8547 17.4036 16.4124 16.6161 15.625Z" fill="currentColor"/>
</svg>

);

export default VideoCamera;