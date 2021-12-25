const Arrow = ({ size = 20, ...otherProps }) => {
  return (
    <svg
      height={size}
      viewBox="0 0 46 57"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M20.8787 56.1213C22.0503 57.2929 23.9497 57.2929 25.1213 56.1213L44.2132 37.0294C45.3848 35.8579 45.3848 33.9584 44.2132 32.7868C43.0416 31.6152 41.1421 31.6152 39.9706 32.7868L23 49.7574L6.02944 32.7868C4.85786 31.6152 2.95837 31.6152 1.7868 32.7868C0.615222 33.9584 0.615222 35.8579 1.78679 37.0294L20.8787 56.1213ZM20 -1.31134e-07L20 54L26 54L26 1.31134e-07L20 -1.31134e-07Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Arrow;
