import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="sticky bottom-0 w-full p-4 position: fixed bg-white border-t border-gray-200 shadow flex items-center justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <Link className="hover:underline" to="#">
          PetCommunity
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <Link className="mr-4 hover:underline md:mr-6" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="mr-4 hover:underline md:mr-6" to="/Contact">
            Privacy Policy
          </Link>
        </li>
        <li>
          <a
            className="mr-4 hover:underline md:mr-6"
            href="https://www.microsoft.com/en-us/licensing/product-licensing/office"
            target="_blank"
            rel="noopener noreferrer"
          >
            Licensing
          </a>
        </li>
      </ul>
    </footer>
  );
};
