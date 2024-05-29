"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

interface Route {
  href: string;
  label: string;
  value: string;
  defaultValue: string;
  active: boolean;
}

const MainNav: React.FC<any> = () => {
  const pathname = usePathname();
  console.log(pathname);
  const routes: Route[] = [
    {
      href: "/",
      label: "Inicio",
      value: "inicio",
      defaultValue: "inicio",
      active: pathname === "/" ? false : true,
    },
    {
      href: "/product/prod-001",
      label: "Producto",
      value: "producto",
      defaultValue: "productos",
      active: pathname === "/product/prod-001" ? false : true,
    },
  ];

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      <div className="hidden md:flex gap-3">
        {routes.map((route: any) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium transition-colors hover:text-pink-400",
              route.active ? "text-white" : "text-pink-400"
            )}
          >
            {route.label.toUpperCase()}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
