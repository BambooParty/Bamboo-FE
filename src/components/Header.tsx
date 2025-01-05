import { useConfigStore } from "@/stores/ConfigStore";
import useUserStore from "@/stores/UserStore";
import * as React from "react";

interface IMenu {
  logo: string;
  chatbot: string;
  board: string;
  profile: string;
}

const Header: React.FC = () => {
  const { user } = useUserStore();
  const { language, setLanguage } = useConfigStore();

  const [menu, setMenu] = React.useState<IMenu>();

  React.useEffect(() => {
    const loadMessages = async () => {
      const langPack = await import(`@/lib/locales/${language}.json`);
      setMenu(langPack.menu);
    };
    loadMessages();
  }, [language]);
  return (
    <header>
      <nav className="bg-bamboo border-gray-200 px-4 lg:px-6 py-5 shadow-sm dark:bg-gray-800 w-screen max-w-screen-lg absolute top-2 left-1/2 -translate-x-1/2 rounded-sm">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
          <div className="flex gap-2">
            <a href="/" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                {menu?.logo}
              </span>
            </a>
            <button
              className="bg-transparent"
              onClick={() => setLanguage(language == "en" ? "ko" : "en")}>
              <GlobalIcon />
            </button>
          </div>
          <div className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                  aria-current="page">
                  {menu?.chatbot.toUpperCase()}
                </a>
              </li>
              <li>
                <a
                  href="board"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
                  {menu?.board.toUpperCase()}
                </a>
              </li>
              <li>
                <a
                  href="profile"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 ">
                  {menu?.profile.toUpperCase()}
                </a>
              </li>
              <li>
                <a
                  href="login"
                  className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0">
                  {user
                    ? language == "en"
                      ? "SIGN OUT"
                      : "로그아웃"
                    : language == "en"
                    ? "SIGN IN"
                    : "로그인"}
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

const GlobalIcon = () => (
  <svg
    className="w-5 h-5 stroke-white"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.0593 18.6699L16.9193 14.3999L14.7793 18.6699"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.1699 17.9102H18.6899"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M16.9198 21.9998C14.1198 21.9998 11.8398 19.7298 11.8398 16.9198C11.8398 14.1198 14.1098 11.8398 16.9198 11.8398C19.7198 11.8398 21.9998 14.1098 21.9998 16.9198C21.9998 19.7298 19.7298 21.9998 16.9198 21.9998Z"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5.02 2H8.94C11.01 2 12.01 3.00002 11.96 5.02002V8.94C12.01 11.01 11.01 12.01 8.94 11.96H5.02C3 12 2 11 2 8.92999V5.01001C2 3.00001 3 2 5.02 2Z"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.00922 5.8501H4.94922"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.96875 5.16992V5.84991"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.98946 5.83984C7.98946 7.58984 6.61945 9.00983 4.93945 9.00983"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.01015 9.01001C8.28015 9.01001 7.62016 8.62 7.16016 8"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      opacity="0.4"
      d="M2 15C2 18.87 5.13 22 9 22L7.95 20.25"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      opacity="0.4"
      d="M22 9C22 5.13 18.87 2 15 2L16.05 3.75"
      // stroke="#292D32"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
