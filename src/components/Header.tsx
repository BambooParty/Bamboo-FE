import * as React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="bg-bamboo border-gray-200 px-4 lg:px-6 py-4 dark:bg-gray-800 w-screen absolute top-0 left-0">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              대나무숲
            </span>
          </a>
          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page"
                >
                  챗봇
                </a>
              </li>
              <li>
                <a
                  href="board"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  게시판
                </a>
              </li>
              <li>
                <a
                  href="profile"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 "
                >
                  프로필
                </a>
              </li>
              <li>
                <a
                  href="login"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                >
                  로그인
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
