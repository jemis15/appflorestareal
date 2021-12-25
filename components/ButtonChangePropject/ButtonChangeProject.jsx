import React from "react";
import BaseText from "../Base/BaseText";
import { Caret, Project as IconProject } from "../SVGIcons";

const ButtonChangeProject = ({
  label,
  isOnlyIcon,
  forwardedRef,
  ...otherProps
}) => {


  return (
    <button
      ref={forwardedRef}
      className={`${
        isOnlyIcon
          ? "hover:bg-gray-200"
          : "flex items-center justify-between w-full border border-gray-300 rounded-md h-12 px-3 ring-blue-200 ring-inset focus:ring-2 focus:border-blue-500"
      }`}
      {...otherProps}
    >
      {isOnlyIcon ? (
        <IconProject size={32} />
      ) : (
        <>
          <div className="flex items-center space-x-3">
            <div>
              <IconProject size={32} />
            </div>
            <BaseText display="truncate" size="value">
              {label}
            </BaseText>
          </div>
          <Caret fill size="16" />
        </>
      )}
    </button>
  );
};

export default React.forwardRef((props, ref) => (
  <ButtonChangeProject {...props} forwardedRef={ref} />
));
