import Image from 'next/image';

const DashNav = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button className="text-white">
              <i className="bx bx-menu bx-sm"></i>
            </button>
            <div className="ml-4">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              <i className="bx bx-search text-white text-xl"></i>
              <input
                type="text"
                className="ml-2 bg-transparent border-b border-white outline-none text-white"
                placeholder="Search..."
                aria-label="Search..."
              />
            </div>
            <ul className="flex ml-4 space-x-4">
              <li>
                <a
                  className="github-button"
                  href="https://github.com/themeselection/sneat-html-admin-template-free"
                  data-icon="octicon-star"
                  data-size="large"
                  data-show-count="true"
                  aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                >
                  Star
                </a>
              </li>
              <li>
                <div className="relative">
                  <Image
                    src="/assets/img/avatars/1.png"
                    alt="Avatar"
                    className="w-8 h-8 rounded-full"
                    width={32}
                    height={32}
                  />
                  <div className="absolute bottom-0 right-0 -mr-1 bg-red-500 rounded-full w-3 h-3"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNav;
