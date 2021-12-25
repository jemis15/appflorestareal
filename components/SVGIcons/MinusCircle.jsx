const MinusCircle = ({ size = 20, ...otherProps }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 55 55"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 27.5C50 39.9264 39.9264 50 27.5 50C15.0736 50 5 39.9264 5 27.5C5 15.0736 15.0736 5 27.5 5C39.9264 5 50 15.0736 50 27.5ZM55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5ZM44 31V26H11V31H44Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default MinusCircle;
