import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <div className="flex mt-5 ml-5 mr-5 items-center justify-between">
        {/* logo */}
        <div className="ml-12 pt-2">
          <Link
            href="/"
            passHref
           
          >
            <Image src="/logo.png" alt="logo" width={150} height={10} />{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
