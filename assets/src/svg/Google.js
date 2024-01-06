import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Google(props) {
    return (
        <Svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_1_411)">
                <Path
                    d="M5.762 15.712l-.905 3.379-3.308.07A12.942 12.942 0 010 13c0-2.156.524-4.189 1.454-5.979l2.945.54 1.29 2.928A7.727 7.727 0 005.272 13c0 .954.173 1.869.49 2.712z"
                    fill="#FBBB00"
                />
                <Path
                    d="M25.773 10.571c.15.787.227 1.599.227 2.429 0 .93-.098 1.839-.284 2.714a12.997 12.997 0 01-4.577 7.424h-.001l-3.71-.19-.524-3.277a7.748 7.748 0 003.333-3.957h-6.951v-5.143h12.487z"
                    fill="#518EF8"
                />
                <Path
                    d="M21.138 23.137A12.945 12.945 0 0113 26c-4.95 0-9.255-2.767-11.45-6.84l4.212-3.448a7.73 7.73 0 0011.142 3.959l4.234 3.466z"
                    fill="#28B446"
                />
                <Path
                    d="M21.298 2.993L17.086 6.44A7.732 7.732 0 005.69 10.489L1.454 7.02A12.997 12.997 0 0113 0c3.154 0 6.046 1.124 8.298 2.993z"
                    fill="#F14336"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_411">
                    <Path fill="#fff" d="M0 0H26V26H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Google;
