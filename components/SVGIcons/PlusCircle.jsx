const PlusCircle = ({ size = 20, ...otherProps }) => {
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
        d="M27.5 50C39.9264 50 50 39.9264 50 27.5C50 15.0736 39.9264 5 27.5 5C15.0736 5 5 15.0736 5 27.5C5 39.9264 15.0736 50 27.5 50ZM27.5 55C42.6878 55 55 42.6878 55 27.5C55 12.3122 42.6878 0 27.5 0C12.3122 0 0 12.3122 0 27.5C0 42.6878 12.3122 55 27.5 55ZM25 26V11H30V26H44V31H30V44H25V31H11V26H25Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlusCircle;
