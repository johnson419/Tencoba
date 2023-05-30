const Footer = () => {
    return (
      <footer className="bg-veryDarkBlue">
        <div className="container flex flex-col items-center justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
          <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
            <div className="mx-auto my-6 text-center text-white md:hidden">
              CopyRight &copy; 2023, All Rights Reserved.
            </div>
            <div>
              <img src="/logo.png" alt="logo" className="h-8" />
            </div>
            <div className="flex justify-center space-x-4">
              <a href="#">
                <img src="/link1.png" className="h-8" alt="links" />
              </a>
              <a href="#">
                <img src="/link2.png" className="h-8" alt="links" />
              </a>
              <a href="#">
                <img src="/link3.png" className="h-8" alt="links" />
              </a>
              <a href="#">
                <img src="/link4.png" className="h-8" alt="links" />
              </a>
              <a href="#">
                <img src="/link5.png" className="h-8" alt="links" />
              </a>
            </div>
          </div>
          <div className="flex justify-around space-x-32">
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Home
              </a>
              <a href="#" className="hover:text-brightRed">
                Events
              </a>
              <a href="#" className="hover:text-brightRed">
                Services
              </a>
              <a href="#" className="hover:text-brightRed">
                About Us
              </a>
            </div>
            <div className="flex flex-col space-y-3 text-white">
              <a href="#" className="hover:text-brightRed">
                Careers
              </a>
              <a href="#" className="hover:text-brightRed">
                Community
              </a>
              <a href="#" className="hover:text-brightRed">
                Privacy Policy
              </a>
              <a href="https://storyset.com/people">People illustrations by Storyset</a>
            </div>
          </div>
  
          <div className="flex flex-col justify-between">
            <form action="">
              <div className="flex space-x-3">
                <input
                  type="text"
                  className="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Get updated in your inbox"
                />
                <button
                  className="px-6 py-2 text-white rounded-full bg-blue-500 hover:bg-blue-300 focus:outline-none"
                >
                  Go
                </button>
              </div>
            </form>
            <div className="flex flex-col hidden text-white md:block">
              <p>CopyRight &copy; 2023, All Rights Reserved.</p>
              <a href="https://storyset.com/people">People illustrations by Storyset</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  