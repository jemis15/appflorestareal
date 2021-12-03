const Caret = ({ size = "20px", fill, ...otherProps }) => {
  if (fill) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        fill="currentColor"
        viewBox="0 0 16 16"
        {...otherProps}
      >
        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
      </svg>
    );
  }
  return (
    <svg
      width={size}
      viewBox="0 0 46 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        d="M22.6406 24.0331L2.87037 3.59765C2.77003 3.49392 2.74002 3.40782 2.72922 3.34071C2.71629 3.26039 2.7252 3.15909 2.76939 3.05485C2.81358 2.9506 2.8802 2.87376 2.94691 2.82721C3.00266 2.78831 3.08541 2.75 3.22973 2.75L42.7703 2.75C42.9146 2.75 42.9973 2.78831 43.0531 2.82721C43.1198 2.87376 43.1864 2.9506 43.2306 3.05484C43.2748 3.15909 43.2837 3.2604 43.2708 3.34071C43.26 3.40782 43.23 3.49393 43.1296 3.59766L23.3593 24.0331C23.1628 24.2362 22.8372 24.2362 22.6406 24.0331Z"
        stroke="black"
        strokeWidth={5}
      />
    </svg>
  );
};

export default Caret;
