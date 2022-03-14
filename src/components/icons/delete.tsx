import * as React from "react"
import { SVGProps } from "react"
import './index.css'

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.height || 31}
    height={props.width || 35}
    viewBox="0 0 238 266"
    fill={props.color || "#FFF"}
    className="animated"
    {...props}
  >
    <path d="M86.5 16.4c-3.6 1.6-7.6 6-9.4 10.5L75.8 30h-24c-25.8 0-28.1.4-32.8 5.5-2.2 2.3-2.5 3.6-2.5 9.5s.3 7.2 2.5 9.5c5.2 5.7 1.2 5.5 102.1 5.5 92.7 0 93.1 0 96.9-2.1 4.9-2.8 7-6.6 7-12.9 0-6.3-2.1-10.1-7-12.9-3.5-2-5.3-2.1-28.2-2.1h-24.5l-1.8-3.9c-2.1-4.7-5.9-8.6-9.8-10-4.4-1.7-63.4-1.4-67.2.3zM30.5 82.2c.4 4 2.8 40.6 5.5 81.3 3.6 55.1 5.2 74.9 6.3 77.5 2.3 5.3 5.4 8.8 10 11.3 4.2 2.2 4.3 2.2 66.2 2.5 44.3.2 63.2 0 66.1-.9 5.6-1.5 10.7-5.9 13.5-11.5 2.1-4.4 2.5-9.2 7-81.3 2.7-42.1 4.8-78.7 4.9-81.4V75H29.9l.6 7.2zm64.8 42.9c1.2.6 7.4 6.2 13.7 12.5l11.5 11.4 11-11.1c6.1-6.1 12.2-11.7 13.7-12.5 6.3-3.3 12.9-.6 15.9 6.5 1.7 4.1-.6 8.2-9.7 17.1-4.7 4.7-9.9 10.2-11.6 12.3l-3 3.8 11.6 11.8c6.4 6.6 12 13.1 12.6 14.6 2.3 6-4 14.5-10.7 14.5-3.8 0-6.4-1.9-19.4-14.7l-10.6-10.4-13.2 12.5C95.5 204.5 93.6 206 90.5 206c-4.2 0-10.1-4.7-11-8.9-1-4.8 1.7-9.1 13.4-20.6 6.1-6 11.1-11.4 11.1-12 0-.6-5.4-6.4-11.9-12.9-6.6-6.6-12.2-13-12.6-14.4-2.1-8.3 8-16.1 15.8-12.1z" />
  </svg>
)

export default SvgComponent