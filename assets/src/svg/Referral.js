import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Referral(props) {
    return (
        <Svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M5 5V4a3 3 0 116 0v1a.5.5 0 00.5.5v1h1v-1a1 1 0 00-.5-.865V4a4 4 0 10-8 0v.635a1 1 0 00-.5.865v1a1 1 0 00.5.875 4.035 4.035 0 002 3.08v.695L2.35 12.5c-.455.115-2.35.685-2.35 2v1a.5.5 0 00.5.5h7v-1H1v-.5c0-.39.96-.85 1.62-1h.055l4-1.5A.5.5 0 007 11.5v-1.345a.5.5 0 00-.285-.45A3 3 0 015 7a.5.5 0 00-.5-.5v-1A.5.5 0 005 5z"
                fill="#2248F4"
            />
            <Path
                d="M15.145 10.145l-.645.65V9a1 1 0 00-1-1H10v1h3.5v1.795l-.645-.645-.705.705 1.5 1.5a.5.5 0 00.705 0l1.5-1.5-.71-.71zM10.5 12.205l.645.645.705-.705-1.5-1.5a.5.5 0 00-.705 0l-1.5 1.5.705.705.65-.645V14a1 1 0 001 1H14v-1h-3.5v-1.795z"
                fill="#2248F4"
            />
        </Svg>
    )
}

export default Referral;
