"use client";
import {
  Avatar,
  Button,
  Container,
  DropdownMenu,
  Skeleton,
} from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBug } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

const navItems = [
  { id: 1, label: "Dashboard", path: "/" },
  { id: 2, label: "Issues", path: "/issues" },
];

const Navbar = () => {
  const currentPath = usePathname();
  const { data, status } = useSession();
  return (
    <div className="bg-gray-200 mb-5 px-3">
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
          {status === "unauthenticated" && (
            <Link className="hover:text-[var(--accent-9)]" href="/signin">
              <Button>Sign In</Button>
            </Link>
          )}
          {status === "loading" && (
            <Skeleton className="w-10 h-10 !rounded-full" />
          )}
          {status === "authenticated" && (
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <button className="outline-none focus:outline-none">
                  <Avatar
                    radius="full"
                    src={data.user?.image!}
                    fallback={data.user?.name?.slice(0, 1)!}
                  />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Label>{data.user?.name}</DropdownMenu.Label>
                <DropdownMenu.Label> {data.user?.email} </DropdownMenu.Label>
                <DropdownMenu.Separator />
                <DropdownMenu.Item
                  color="red"
                  className="flex items-center justify-between !cursor-pointer"
                  onClick={() => signOut({ callbackUrl: "/" })}
                >
                  <span>Sign Out</span>
                  <IoIosLogOut />
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          )}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
