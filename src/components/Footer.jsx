import VLM_LOGO from "../assets/vlm_logo.png";
import {
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Home,
  Mountain,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/villalakemountain/",
      color: "hover:text-blue-600",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/917709589459",
      color: "hover:text-green-600",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/Villalakemountain",
      color: "hover:text-blue-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/villalakemountain/",
      color: "hover:text-pink-600",
    },
    {
      name: "Airbnb",
      icon: Home,
      url: "https://www.airbnb.co.uk/rooms/1677953261025277903",
      color: "hover:text-red-500",
    },
    {
      name: "Booking.com",
      icon: Mountain,
      url: "https://www.booking.com/hotel/lk/villa-lake-mountain.en-gb.html",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <footer className="text-white" style={{ backgroundColor: "#586460" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              {/* <div className="w-10 h-10 bg-white rounded flex items-center justify-center"> */}
              {/* <Mountain className="w-6 h-6 text-gray-900" /> */}
              <img src={VLM_LOGO} alt="logo" className="h-8 w-auto" />

              {/* </div> */}
              <span className="text-xl font-serif font-semibold">
                Villa Lake Mountain by Artios
              </span>
            </div>
            <p className="text-gray-300 text-sm">
              Your perfect lakeside retreat in paradise
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="/villa/upper"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Upper Villa
              </a>
              <a
                href="/villa/ground"
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Ground Villa
              </a>
              {/* check the followng link again */}
              <a
                href="/villa/entire" 
                className="block text-gray-300 hover:text-white transition-colors text-sm"
              >
                Entire Villa
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Weligama, Southern Province</p>
              <p>Sri Lanka</p>
              <p>Email: villalakemountain@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-lg font-semibold">Follow Us & Book</h3>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-2 text-gray-400 transition-colors ${social.color} group`}
                    aria-label={social.name}
                  >
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center group-hover:bg-gray-700 transition-colors"
                      style={{ backgroundColor: "#46504D" }}
                    >
                      <IconComponent className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-xs sm:text-sm">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-grey-800 mt-8 pt-6 text-center">
          <p className="text-white-500 text-sm">
            © {new Date().getFullYear()} Villa Lake Mountain by Artios. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
