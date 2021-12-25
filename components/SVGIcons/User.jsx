const User = ({ size = "20px", ...otherProps }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 75 75"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.5 35C47.165 35 55 27.165 55 17.5C55 7.83502 47.165 0 37.5 0C27.835 0 20 7.83502 20 17.5C20 27.165 27.835 35 37.5 35ZM33 40C14.7746 40 0 54.7746 0 73V75H75V73C75 54.7746 60.2254 40 42 40H33Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default User;
