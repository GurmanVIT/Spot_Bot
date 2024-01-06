import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Password(props) {
    return (
        <Svg
            width={16}
            height={20}
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.726 7.58C0 8.425 0 9.7 0 12.253c0 3.402 0 5.103.968 6.228.13.151.272.293.423.423 1.125.968 2.826.968 6.228.968h.762c3.402 0 5.103 0 6.228-.968.151-.13.293-.272.423-.423.968-1.125.968-2.826.968-6.228 0-2.552 0-3.828-.726-4.671a3.002 3.002 0 00-.317-.317c-.844-.726-2.12-.726-4.671-.726H5.714c-2.551 0-3.827 0-4.67.726a3 3 0 00-.318.317zM8 13.428a.667.667 0 100-1.334.667.667 0 000 1.334zm2.667-.667c0 1.119-.69 2.077-1.667 2.473v1.971H7v-1.971a2.668 2.668 0 113.667-2.473z"
                fill="#313864"
            />
            <Path
                d="M12 7.426v0a4.188 4.188 0 00-1.803-4.169l-.332-.222a4.806 4.806 0 00-5.818.362l-.785.68"
                stroke="#313864"
                strokeWidth={2}
                strokeLinecap="round"
            />
        </Svg>
    )
}

export default Password;
