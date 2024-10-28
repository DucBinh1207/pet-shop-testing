import { Svg, SvgProps } from "../svg";

export default function LoadingBtnIcon(props: SvgProps) {
  return (
    <Svg viewBox="0 0 200 200" fill="currentColor" {...props}>
      <linearGradient id="a7">
        <stop offset="0" stop-color="currentColor" stop-opacity="0"></stop>
        <stop offset="1" stop-color="currentColor"></stop>
      </linearGradient>
      <circle
        fill="none"
        stroke="url(#a7)"
        stroke-width="30"
        stroke-linecap="round"
        stroke-dasharray="0 44 0 44 0 44 0 44 0 360"
        cx="100"
        cy="100"
        r="70"
        transform-origin="center"
      >
        <animateTransform
          type="rotate"
          attributeName="transform"
          calcMode="discrete"
          dur="2"
          values="360;324;288;252;216;180;144;108;72;36"
          repeatCount="indefinite"
        ></animateTransform>
      </circle>
    </Svg>
  );
}
