import BaseLink from "./Base/BaseLink";
import BaseText from "./Base/BaseText";
import { Logo } from "./SVGIcons";

const FlorestaRealLogo = ({ isTextHidden, sizeLogo = "50" }) => {
  return (
    <BaseLink to="/" className="flex space-x-2">
      <Logo size={sizeLogo} />
      <BaseText
        color="heading"
        size="header1"
        textAlign="start"
        weight="bold"
        display="truncate"
        className={isTextHidden && "hidden"}
      >
        Floresta Real
      </BaseText>
    </BaseLink>
  );
};

export default FlorestaRealLogo;
