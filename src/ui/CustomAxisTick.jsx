export function CustomAxisTick({ x, y, payload, fill }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={15}
        y={0}
        dy={16}
        textAnchor="end"
        fill={fill}
        transform="rotate(-25)"
      >
        {payload.value}
      </text>
    </g>
  );
}
export default CustomAxisTick;
