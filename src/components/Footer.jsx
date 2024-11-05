import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f8f8f8] py-[40px] sm:py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center sm:justify-around px-[40px] sm:px-8 gap-8 sm:gap-0">
        
        {/* Logo Section */}
        <div className="w-[75px] sm:w-[161px] h-[58px] sm:h-[125px] flex items-center mx-auto sm:mx-0 sm:ml-[-30px]">
          <img src="/src/assets/logo.webp" alt="Food Truck Logo" className="w-full h-auto" />
        </div>

        {/* Contact Us Section */}
        <div className="w-full sm:w-[232px] space-y-2">
          <h3 className="text-[15.77px] sm:text-[18.84px] font-semibold font-sourceSansPro text-[#0E2368] leading-[35px] sm:leading-[27.22px]">
            Contact Us
          </h3>
          <p className="text-[8.76px] sm:text-[14.66px] text-[#646874] leading-[12px] sm:leading-[23.03px]">
            Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
          </p>
          <p className="text-[8.76px] sm:text-[14.66px] text-[#646874]">
            example2020@gmail.com
          </p>
          <p className="text-[8.76px] sm:text-[14.66px] text-[#646874]">
            (904) 443-0343
          </p>
        </div>

        {/* More Section */}
        <div className="w-full sm:w-auto">
          <h3 className="text-[15.77px] sm:text-[18.84px] font-semibold text-[#0E2368] leading-[35px] sm:leading-[27.22px] mb-4 sm:mb-2">
            More
          </h3>
          <ul className="text-[8.76px] sm:text-[14.66px] text-[#646874] space-y-2 sm:space-y-3">
            <li>About Us</li>
            <li>Products</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start mr-2">
          <div className="flex space-x-4 sm:space-x-8 text-lg sm:text-2xl sm:ml-14 text-[#0E2368] mt-6 sm:mt-0 sm:mb-2">
            <FaInstagram />
            <FaTwitter />
            <FaFacebook />
          </div>
          <p className="text-[8.76px] sm:text-[14.66px] text-[#646874] mt-[-35px] sm:mt-[75px]">
            © 2022 Food Truck Example
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
