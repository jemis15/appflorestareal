import { forwardRef } from "react";

const VARIANT = {
  create: "bg-green-500 hover:bg-green-600 text-white", // green
  primary: "bg-blue-500 hover:bg-blue-600 text-white", // blue
  secondary: "bg-gray-300 hover:bg-gray-400 text-gray-900", // gray
  flat: "bg-transparent hover:bg-gray-100 text-gray-900", // not background
};

const BaseButton = ({
  icon,
  label,
  variant,
  isDisabled,
  isLabelHidden,
  className,
  forwardedRef,
  ...otherProps
}) => {
  var misClases = getClass({ variant, className });
  return (
    <button
      ref={forwardedRef}
      className={`flex items-center justify-center space-x-2 px-3 py-2 rounded-md ${misClases.join(
        " "
      )}`}
      {...otherProps}
    >
      <div>{icon}</div>
      {!isLabelHidden && <div>{label}</div>}
    </button>
  );
};

function getClass({ variant, className }) {
  var clases = [];

  if (variant) {
    VARIANT[variant] && clases.push(VARIANT[variant]);
  }

  if (className) {
    clases.push(className);
  }

  return [...clases];
}

export default forwardRef((props, ref) => (
  <BaseButton {...props} forwardedRef={ref} />
));

// export default BaseButton;
