const Cobros = ({ size = "20px", ...otherProps }) => {
  return (
    <svg
      width={size}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M51 27.5C51 40.4787 40.4787 51 27.5 51C14.5213 51 4 40.4787 4 27.5C4 14.5213 14.5213 4 27.5 4C40.4787 4 51 14.5213 51 27.5ZM44.7523 48.9164C40.0344 52.7218 34.0332 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5C55 34.0332 52.7218 40.0344 48.9164 44.7523C49.0743 44.8586 49.2243 44.9817 49.364 45.1213L70.2487 66.006C71.4202 67.1776 71.4202 69.0771 70.2487 70.2487C69.0771 71.4202 67.1776 71.4202 66.006 70.2487L45.1213 49.364C44.9817 49.2243 44.8586 49.0743 44.7523 48.9164Z"
        fill="black"
      />
    </svg>
  );
};

export default Cobros;