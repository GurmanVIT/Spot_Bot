import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

function Facebook(props) {
    return (
        <Svg
            width={26}
            height={26}
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G clipPath="url(#clip0_1_416)">
                <Path
                    d="M3.555 26h18.89A3.555 3.555 0 0026 22.445V3.555A3.555 3.555 0 0022.445 0H3.555A3.555 3.555 0 000 3.555v18.89A3.555 3.555 0 003.555 26z"
                    fill="#3C599B"
                />
                <Path
                    d="M17.13 9.868h-2.813V8.024c0-.693.459-.855.782-.855h1.985V4.124l-2.733-.01c-3.035 0-3.725 2.27-3.725 3.724v2.03H8.87v3.139h1.755v8.88h3.69v-8.88h2.491l.322-3.139z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_1_416">
                    <Path fill="#fff" d="M0 0H26V26H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export default Facebook;
