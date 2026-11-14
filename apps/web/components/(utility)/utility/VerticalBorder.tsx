const VerticalBorder = () => {
  return (
    <svg
      className="block h-full w-full"
      viewBox="0 0 1 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="100"
        stroke="#262626"
        strokeWidth="1"
        strokeDasharray="2 0.7"
      />
    </svg>
  );
};
export default VerticalBorder;