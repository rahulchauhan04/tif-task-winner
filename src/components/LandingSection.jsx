const LandingSection = () => {
     return (
          <div className="relative w-full bg-white">
               {/* Header */}
               <header className="absolute top-0 left-0 z-10 flex items-center justify-end sm:justify-between w-full p-4 sm:p-8">
                    {/* Logo */}
                    <div className="hidden sm:block ml-5 w-[107px] h-[83px]">
                         <img src="/src/assets/logo.webp" alt="Logo" className="w-full h-full" />
                    </div>
                    {/* Get in Touch Button */}
                    <button className="text-white border border-white px-3 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm rounded-full mr-4 sm:mr-[60px]">
                         Get in Touch
                    </button>
               </header>

               {/* Hero Section */}
               <section className="relative flex flex-col-reverse sm:flex-row items-center justify-center w-full min-h-[600px] sm:h-[804px]">
                    {/* Left Side - Text Content */}
                    <div className="w-full px-8 sm:px-0 sm:ml-[50px] mt-8 sm:mt-[150px] max-w-[345px] mx-auto text-center sm:text-left">
                         <h1 className="text-[32px] sm:text-[62px] leading-[40px] sm:leading-[69px] font-bold text-[#0e2368] mb-4 sm:mb-5 tracking-tight">
                              Discover the <span className="text-red-500">Best</span> Food <br /> and Drinks
                         </h1>
                         <p className="text-[14px] sm:text-[16.44px] leading-[22px] sm:leading-[27.41px] text-[#444957] mb-5">
                              Naturally made Healthcare Products for the better care & support of your body.
                         </p>
                         <button className="bg-[#E23744] text-white text-sm sm:text-lg font-bold px-[24px] sm:px-[34px] py-[12px] sm:py-[14px] rounded-[34px] hover:bg-red-600 transition duration-300">
                              Explore Now!
                         </button>
                    </div>

                    {/* Right Side - Image and Red Curve */}
                    <div className="relative w-full sm:w-[752px] h-[400px] sm:h-[804px]">
                         <img src="/src/assets/pizza.webp" alt="Delicious Pizza" className="w-full h-full object-cover object-center rounded-bl-[100px] sm:rounded-bl-[198.9px]" />
                         <img src="/src/assets/redcurve.webp" alt="Red Decorative Background" className="absolute top-0 right-0 w-full sm:w-[752px] h-[426px] sm:h-[839px]" />
                    </div>
               </section>
          </div>
     );
};

export default LandingSection;
