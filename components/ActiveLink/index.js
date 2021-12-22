import Link from "next/link";
import { useRouter } from "next/router";
function ActiveLink({ href, children }) {
  const router = useRouter();

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

export default ActiveLink;
