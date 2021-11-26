import DarkModeToggle from "./DarkModeToggle";
import Header from "./Header";

const Layout = ({ children }) => (
  <div className="mx-auto px-6 py-20 w-full max-w-screen-lg sm:p-20">
    <div className="absolute right-4 top-4 sm:right-20">
      <DarkModeToggle />
    </div>
    <Header />
    <main className="m-auto w-full max-w-2xl lg:px-8">{children}</main>
  </div>
);

export default Layout;
