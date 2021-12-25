const ThreeDots = ({ size = 20, ...otherProps }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 10 40"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <circle cx={5} cy={5} r={5} fill="currentColor" />
      <circle cx={5} cy={20} r={5} fill="currentColor" />
      <circle cx={5} cy={35} r={5} fill="currentColor" />
    </svg>
  );
};

export default ThreeDots;
