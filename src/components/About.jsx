const About = () => {
  return (
    <div className="relative w-full mx-auto px-4 sm:px-0 py-[100px]">
      {/* Main Container */}
      <div className="flex flex-col items-center justify-center sm:flex-row w-full max-w-[1440px] mx-auto h-auto sm:h-[653px]">
        
        {/* Background Wrapper - Visible on Both Mobile and Desktop */}
        <div 
          className="absolute top-10 sm:top-[192px] h-full sm:h-[468px] w-full z-[-1]" 
          style={{
            background: 'linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%)'
          }} 
        />

        {/* Content Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-[150px] w-full">
          
          {/* Left Image - Visible Only on Desktop */}
          <div className="w-full sm:w-[384px] h-[320px] sm:h-[468px] overflow-hidden hidden sm:block">
            <img 
              src="/src/assets/girl.webp" 
              alt="About Us" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="w-full sm:w-[447px] flex flex-col items-center sm:items-start text-center sm:text-left p-4 sm:p-0">
            <h2 className="text-[24px] sm:text-[45px] font-bold text-[#0E2368] mb-4 sm:mb-6">
              About Us
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[24px] sm:leading-[27px] text-[#444957] mb-4 sm:mb-8 max-w-[90%] mx-auto sm:mx-0">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
            </p>
            <button className="bg-[#E23744] text-white text-[12px] sm:text-base font-semibold px-[24px] py-[10px] sm:py-[12px] rounded-[21px] hover:bg-red-600 transition duration-300">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
