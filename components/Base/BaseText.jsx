const COLORS = {
  heading: "text-gray-900",
  value: "text-gray-600",
  placeholder: "text-gray-500",
};

const SIZES = {
  header1: "text-xl",
  header2: "text-md",
  header3: "text-md",
  header4: "text-sm",
  value: "text-sm",
  valueDescription: "text-xs",
};

const ALIGNS = {
  start: "text-start",
  end: "text-end",
  center: "text-center",
};

const FONTS = {
  bold: "font-semibold",
};

const DISPLAY = {
  truncate: "truncate",
};

const BaseText = ({
  color,
  size,
  textAlign,
  weight,
  display,
  className,
  children,
  ...otherProps
}) => {
  var misClases = getClass({
    color,
    size,
    textAlign,
    weight,
    display,
    className,
  });

  return (
    <div className={misClases.join(" ")} {...otherProps}>
      {children}
    </div>
  );
};

function getClass({ color, size, textAlign, weight, display, className }) {
  var clases = [];

  if (color) {
    COLORS[color] && clases.push(COLORS[color]);
  }

  if (size) {
    SIZES[size] && clases.push(SIZES[size]);
  }

  if (textAlign) {
    ALIGNS[textAlign] && clases.push(ALIGNS[textAlign]);
  }

  if (weight) {
    FONTS[weight] && clases.push(FONTS[weight]);
  }

  if (display) {
    DISPLAY[display] && clases.push(DISPLAY[display]);
  }

  if (className) {
    clases.push(className);
  }

  return [...clases];
}

export default BaseText;
