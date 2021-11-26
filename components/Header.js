import Link from "next/link";
import Image from "next/image";

const Header = () => (
  <header className="header flex flex-wrap items-center pb-14 w-full">
    <Link href="/">
      <a className="relative mr-8 w-20 h-20 rounded-full overflow-hidden sm:w-24 sm:h-24">
        <Image alt="profile picture" src="/images/profile-pic.jfif" layout="fill" objectFit="cover" />
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
          <li className="last:mr-0 mr-4">
            <Link href="/work">
              <a>Work</a>
            </Link>
          </li>
          <li className="last:mr-0 mr-4">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
