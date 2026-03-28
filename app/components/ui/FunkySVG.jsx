const FunkySVG = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 248 248"
        className="w-6 h-6 md:w-8 md:h-8 drop-shadow-md"
    >
        <path
            fill="url(#p0)"
            fillRule="evenodd"
            d="M62 124c-34.242 0-62 27.759-62 62 0 34.242 27.759 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62-34.242 0-62 27.759-62 62C124 27.76 96.242 0 62 0 27.758 0 0 27.76 0 62c0 34.242 27.759 62 62 62Z"
            clipRule="evenodd"
        />
        <path
            fill="url(#pat)"
            fillRule="evenodd"
            d="M62 124c-34.242 0-62 27.759-62 62 0 34.242 27.759 62 62 62 34.242 0 62-27.758 62-62 0 34.242 27.758 62 62 62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62 34.242 0 62-27.758 62-62 0-34.241-27.758-62-62-62-34.242 0-62 27.759-62 62C124 27.76 96.242 0 62 0 27.758 0 0 27.76 0 62c0 34.242 27.759 62 62 62Z"
            clipRule="evenodd"
            style={{ mixBlendMode: "multiply" }}
        />
        <defs>
            <radialGradient
                id="p0"
                cx="0"
                cy="0"
                r="1"
                gradientTransform="rotate(-48.289 195.768 87.754) scale(235.103 157.04)"
                gradientUnits="userSpaceOnUse"
            >
                <stop stopColor="#FFD9B0" />
                <stop offset=".807" stopColor="#FD9F3B" />
                <stop offset="1" stopColor="#FF8709" />
            </radialGradient>
            <pattern
                id="pat"
                width=".403"
                height=".403"
                patternContentUnits="objectBoundingBox"
            >
                <rect width="100%" height="100%" fill="transparent" />
            </pattern>
        </defs>
    </svg>
);

export default FunkySVG;
