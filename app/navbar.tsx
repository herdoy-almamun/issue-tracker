"use client";
import { Container } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBug } from "react-icons/io5";

const navItems = [
  { id: 1, label: "Dashboard", path: "/" },
  { id: 2, label: "Issues", path: "/issues" },
];

const Navbar = () => {
  const currentPath = usePathname();
  return (
    <div className="bg-gray-200 mb-5 px-3 lg:px-0">
      <Container>
        <nav className="h-16 flex items-center justify-between">
          <ul className="flex items-center gap-6">
            <li>
              <Link href="/">
                <IoBug className="text-2xl" />
              </Link>
            </li>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  className={
                    item.path === currentPath
                      ? "text-[var(--accent-9)]"
                      : "hover:text-[var(--accent-9)]"
                  }
                  href={item.path}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="hover:text-[var(--accent-9)]" href="/signin">
            Sign In
          </Link>
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
