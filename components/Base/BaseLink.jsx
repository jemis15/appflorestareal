import Link from "next/link";

function BaseLink({ to, className, children, ...otherProps }) {
  return (
    <Link href={to}>
      <a className={className} {...otherProps}>
        {children}
      </a>
    </Link>
  );
}

export default BaseLink;
