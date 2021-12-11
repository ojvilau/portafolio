import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/profile-pic.png";

const NavLink = ({ href, text }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <Link href={href}>
      <a className={isActive ? "text-blue-500" : ""}>{text}</a>
    </Link>
  );
};

const links = [
  { href: "/", text: "Me" },
  { href: "/work", text: "Work" },
  { href: "/contact", text: "Contact" },
];

const Header = () => (
  <header className="header flex flex-wrap items-center pb-14 w-full">
    <Link href="/">
      <a className="relative mr-8 w-20 h-20 rounded-full overflow-hidden sm:w-24 sm:h-24">
        <Image alt="profile picture" src={profilePic} layout="fill" objectFit="cover" placeholder="blur" />
      </a>
    </Link>

    <div className="font-semibold uppercase">
      <Link href="/">
        <a className="dark:text-gray-200 text-gray-600 text-2xl sm:text-3xl">
          Orlando J Vilau
          <div className="w-16 h-2 bg-blue-600 rounded" />
        </a>
      </Link>
      <nav className="mt-4 sm:mt-6">
        <ul className="flex flex-wrap dark:text-gray-200 text-gray-400 text-base sm:text-lg">
          {links.map((link) => (
            <li key={link.text} className="last:mr-0 mr-4">
              <NavLink {...link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
