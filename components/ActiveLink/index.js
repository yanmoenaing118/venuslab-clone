import Link from "next/link";
import { withRouter } from "next/router";

function ActiveLink({ router, href, children }) {
  const onClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link href={href}>
      <a
        onClick={onClick}
        style={{
          textDecoration: "none",
          color: router.pathname == href ? "rgba(var(--primary))" : "#fff",
        }}
      >
        {children}
      </a>
    </Link>
  );
}

export default withRouter(ActiveLink);
