import Link from "next/link";
import { withRouter } from "next/router";

function ActiveLink({ router, href, children }) {
  return (
    <Link href={href}>
      <a
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
