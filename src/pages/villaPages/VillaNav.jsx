import { useState } from "react";
import { Menu, X } from "lucide-react";

const VillaNav = ({ currentPage = "villa" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActivePageClass = (page) => {
    switch (page) {
      case "home":
        return currentPage === "home" ? "text-white" : "text-gray-300";
      case "upper":
        return currentPage === "upper" ? "text-white" : "text-gray-300";
      case "ground":
        return currentPage === "ground" ? "text-white" : "text-gray-300";
      default:
        return "text-gray-600";
    }
  };

  return (
    <nav
      className="shadow-sm border-b border-white-200 sticky top-0 z-50"
      style={{ backgroundColor: "#586460" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white-900 rounded flex items-center justify-center"></div>
            <span className="text-lg sm:text-xl font-serif font-semibold text-white">
              Villa Lake Mountain by Artios
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6">
            <a
              href="/"
              className={`${isActivePageClass("home")} hover:text-white-900 transition-colors`}
            >
              Home
            </a>
            <a
              href="/villa/ground"
              className={`${isActivePageClass("ground")} hover:text-white-900 transition-colors`}
            >
              Ground Villa
            </a>
            <a
              href="/villa/upper"
              className={`${isActivePageClass("upper")} hover:text-white-900 transition-colors`}
            >
              Upper Villa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-white-900"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-200 pt-4">
            <a
              href="/"
              className={`block ${isActivePageClass("home")} hover:text-gray-900 transition-colors py-2`}
            >
              Home
            </a>
            <a
              href="/villa/ground"
              className={`block ${isActivePageClass("ground")} hover:text-gray-900 transition-colors py-2`}
            >
              Ground Villa
            </a>
            <a
              href="/villa/upper"
              className={`block ${isActivePageClass("upper")} hover:text-gray-900 transition-colors py-2`}
            >
              Upper Villa
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default VillaNav;
