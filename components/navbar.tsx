import MainNav from "@/components/main-nav";
import NavbarActions from "@/components/navbar-actions";
import Container from "@/components/ui/container";
import { color1 } from "@/lib/constants";

import Link from "next/link";

const Navbar = () => {
  return (
    <div
      className="fixed z-30 w-full p-5"
      style={{
        backgroundColor: `${color1}`,
      }}
    >
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <img
              src="/creme_com_cheiro_2.png"
              alt="logo"
              className="w-auto h-10 object-cover"
            />
          </Link>
          <MainNav />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
