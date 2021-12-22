import { withRouter } from "next/router";

function ActiveLink({ router, href, children }) {
  const onClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a
      href="/"
      onClick={onClick}
      style={{
        textDecoration: "none",
        color: router.pathname == href ? "rgba(var(--primary))" : "#fff",
      }}
    >
      {children}
    </a>
  );
}

export default withRouter(ActiveLink);
