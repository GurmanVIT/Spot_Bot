import * as React from "react";
import Svg, { Path } from "react-native-svg";

function LoginIcon(props) {
    return (
        <Svg
            width={18}
            height={14}
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M.013 4.151C0 4.691 0 5.302 0 6v2c0 2.828 0 4.243.879 5.121C1.757 14 3.172 14 6 14h6c2.828 0 4.243 0 5.121-.879C18 12.243 18 10.828 18 8V6c0-.698 0-1.31-.013-1.849L9.97 8.604a2 2 0 01-1.942 0L.013 4.151zm.23-2.121c.083.02.164.052.243.096L9 6.856l8.514-4.73c.079-.044.16-.075.243-.096-.13-.474-.33-.845-.636-1.151C16.243 0 14.828 0 12 0H6C3.172 0 1.757 0 .879.879c-.307.306-.506.677-.636 1.15z"
                fill="#2248F4"
            />
        </Svg>
    )
}

export default LoginIcon;
