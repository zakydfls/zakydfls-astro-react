import { Fragment, useState, useEffect } from "react";
import { dataNavbar } from "../../data/dummyData";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMediaPhone, setIsMediaPhone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Function to check if the screen is a media phone
    const checkMediaPhone = () => {
      setIsMediaPhone(window.innerWidth <= 768); // Adjust the breakpoint as per your requirement
    };

    // Check on initial render and add event listener for resizing
    checkMediaPhone();
    window.addEventListener("resize", checkMediaPhone);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkMediaPhone);
    };
  }, []);

  const containerNavbarDefault = {
    hidden: { opacity: 1, top: -500 },
    visible: {
      opacity: 1,
      top: 0,
      transition: {
        duration: 0.8,
        type: "spring",
      },
    },
  };

  const containerNavbarMobile = {
    hidden: { opacity: 1, x: -500 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        type: "spring",
      },
    },
  };

  const containerNavbar = isMediaPhone ? containerNavbarMobile : containerNavbarDefault;

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      {isMediaPhone && ( // Conditionally render the hamburger menu on media phones
        <div
          className="fixed top-5 right-5 z-50 cursor-pointer"
          onClick={handleMenuToggle}
        >
          {/* Hamburger Icon */}
          <div className={`w-8 h-1 mb-1 bg-white transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-8 h-1 mb-1 bg-white transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-8 h-1 bg-white transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      )}

      {isMediaPhone && isOpen && ( // Conditionally render the content of the hamburger menu
        <motion.nav
          className="fixed top-0 left-0 z-40 w-full h-full bg-black bg-opacity-40"
          initial="hidden"
          animate="visible"
          variants={containerNavbarMobile}
        >
          <div className="flex justify-center items-center h-full">
            <ul className="flex flex-col items-center gap-8">
              {dataNavbar.map(({ id, navigate, navigate_url }) => (
                <a
                  key={id}
                  href={navigate_url}
                  className="text-white text-xl font-semibold cursor-pointer"
                  onClick={handleMenuToggle}
                >
                  {navigate}
                </a>
              ))}
            </ul>
          </div>
        </motion.nav>
      )}

      <motion.nav
        className={`flex justify-center top-0 fixed left-1/2 z-50 -translate-x-1/2 my-5 ${isMediaPhone && !isOpen ? 'hidden' : ''}`}
        initial="hidden"
        animate="visible"
        variants={containerNavbarDefault}
      >
        <motion.ul className="xl:flex hidden items-center gap-24 px-20 py-5 bg-white/10 border backdrop-blur-sm drop-shadow-sm hover:drop-shadow-lg transition-all duration-200 rounded-full">
          {dataNavbar.map(({ id, navigate, navigate_url }) => (
            <a
              key={id}
              href={navigate_url}
              className="text-[#1487B9] opacity-50 hover:opacity-100 font-semibold cursor-pointer"
              onClick={isMediaPhone ? handleMenuToggle : undefined} // Close the menu on media phones when a link is clicked
            >
              {navigate}
            </a>
          ))}
        </motion.ul>
      </motion.nav>
    </Fragment>
  );
};

export default Navbar;
