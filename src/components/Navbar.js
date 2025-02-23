import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center max-w-6xl mx-auto py-6 px-6">
      {/* Logo */}
      <h1 className="text-lg font-bold">
        RISE<span className="text-blue-600">BLOG</span>
      </h1>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-gray-700">
        <li>
          <Link href="/" className="text-blue-600 font-medium">
            Home
          </Link>
        </li>
        <li>
          <Link href="/articles">Articles</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {/* Search Icon */}
      <FiSearch className="text-gray-600 text-xl cursor-pointer" />
    </nav>
  );
}
