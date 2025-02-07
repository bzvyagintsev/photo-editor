export function Logo() {
  return (
    <div className="relative size-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 700 700"
        className="absolute inset-0 size-full"
      >
        <defs>
          <linearGradient
            gradientTransform="rotate(202, 0.5, 0.5)"
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            id="ffflux-gradient"
          >
            <stop stopColor="hsl(37, 99%, 67%)" stopOpacity="1" offset="0%" />
            <stop
              stopColor="hsl(316, 73%, 52%)"
              stopOpacity="1"
              offset="100%"
            />
          </linearGradient>
          <filter
            id="ffflux-filter"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.003 0.003"
              numOctaves="1"
              seed="122"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            />
            <feGaussianBlur
              stdDeviation="74 0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              edgeMode="duplicate"
              result="blur"
            />
            <feBlend
              mode="hard-light"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              in2="blur"
              result="blend"
            />
          </filter>
        </defs>
        <rect
          width="700"
          height="700"
          fill="url(#ffflux-gradient)"
          filter="url(#ffflux-filter)"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">PE</span>
      </div>
    </div>
  );
}
