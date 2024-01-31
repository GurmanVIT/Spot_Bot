import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BackImg(props) {
    return (
        <Svg
            width={9}
            height={18}
            viewBox="0 0 9 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.507 12.636a5.142 5.142 0 01-.194-7.068l.194-.205L6.805.377A1.286 1.286 0 018.73 2.074l-.107.12-5.298 4.988a2.571 2.571 0 00-.15 3.473l.15.163 5.298 4.987a1.285 1.285 0 01-1.697 1.925l-.121-.107-5.298-4.987z"
                fill="#000"
            />
        </Svg>

    )
}

export default BackImg;
