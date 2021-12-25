const ALIGN = {
  center: "items-center",
  start: "items-center",
  end: "items-end",
};

const JUSTIFY = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
};

const WRAP = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
};

const FlexLayout = ({
  className,
  align,
  justify,
  direction,
  wrap,
  children,
  ...otherProps
}) => {
  const classFlex = `flex ${justify ? JUSTIFY[justify] : ""} ${
    align ? ALIGN[align] : ""
  } ${wrap ? WRAP[wrap] : ""}`;

  return (
    <div className={classFlex} {...otherProps}>
      {children}
    </div>
  );
};

export default FlexLayout;
