import Link from "next/link";

export interface LinkNavData {
  href: string;
  label: string;
  status: "active" | "regular";
}

export function NavLink({ href, label, status }: LinkNavData) {
  return (
    <Link
      href={href}
      className={`${
        status === "active" ? "text-ht-orange" : "text-neutral"
      } hover:text-primary-focus`}
    >
      {label}
    </Link>
  );
}
