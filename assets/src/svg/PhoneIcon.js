import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function PhoneIcon(props) {
    return (
        <Svg
            width={27}
            height={27}
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Rect width={27} height={27} rx={5} fill="#313864" />
            <Path
                d="M15.794 6h-4.588a2.124 2.124 0 00-2.118 2.118v10.764c0 1.165.953 2.118 2.118 2.118h4.588a2.124 2.124 0 002.118-2.118V8.118A2.124 2.124 0 0015.794 6zm-1.412 13.412h-1.764a.354.354 0 01-.353-.353c0-.194.159-.353.353-.353h1.764c.194 0 .353.159.353.353a.354.354 0 01-.353.353zm2.824-2.47H9.794V8.117c0-.777.635-1.412 1.412-1.412h4.588c.777 0 1.412.635 1.412 1.412v8.823z"
                fill="#fff"
            />
        </Svg>
    )
}

export default PhoneIcon;
