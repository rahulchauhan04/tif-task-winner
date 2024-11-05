import { useState } from "react";

// Sample articles data
const articles = [
  {
    title: 'Grilled Tomatoes at Home',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: 'assets/tomato.webp',
  },
  {
    title: 'Snacks for Travel',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: 'assets/snacks.webp',
  },
  {
    title: 'Post-workout Recipes',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: 'assets/recepie.webp',
  },
  {
    title: 'How To Grill Corn',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: 'assets/grilcorn.webp',
  },
  {
    title: 'Crunchwrap Supreme',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: 'assets/meal.webp',
  },
  {
    title: 'Broccoli Cheese Soup',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: 'assets/bowl.webp',
  },
];

const ArticleSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

  // Handle previous page click
  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  // Handle next page click
  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  // Get articles for the current page
  const currentArticles = articles.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="py-4 sm:py-8 px-4 sm:px-0">
      <h2 className="text-[28px]  text-left sm:text-[56px] pl-[75px] sm:pl-[120px] font-semibold text-[#0E2368] mb-[20px] sm:mb-[60px] mt-[40px] sm:mt-0 font-poppins sm:font-sans tracking-[0.04em] sm:tracking-normal">
        Latest Articles
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-[40px] sm:gap-8 flex-wrap items-center">
        {currentArticles.map((article, index) => (
          <div
            key={index}
            className="w-[271px] sm:w-[381px] h-auto sm:h-[554px] border-[1.2px] border-[#93A2D361] rounded-[21px] sm:rounded-[18px] p-4 sm:px-12 sm:py-10  shadow-lg flex flex-col items-start gap-[4px]  sm:gap-3 border-mobile"
          >
            <div className="w-full mb-4">
              <img
                src={article.imgSrc}
                alt={article.title}
                className="w-full h-[166px] sm:h-[185px] object-cover  rounded-[21px] sm:rounded-t-lg"
              />
            </div>
            <h3 className="text-[16px] sm:text-xl font-bold text-[#0E2368] mb-2">
              {article.title}
            </h3>
            <p className="text-[12px] sm:text-base font-sourceSansPro mb-4 leading-[22px] sm:leading-normal text-[#444957]">
              {article.content}
            </p>
            <button className="px-[33px] sm:px-6 py-[10px] sm:py-2 border-[1.2px] sm:border-[1.3px] border-[#424961] rounded-[27px] sm:rounded-full text-[11px] sm:text-base text-[#424961] font-semibold mt-auto">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-[50px] sm:mt-8">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 border rounded-md border-[#AFAFAF] text-[#424961]"
        >
          &lt; {/* Displays the < symbol */}
        </button>
        <span className="text-lg text-[#424961]">
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-3 py-2 border rounded-md border-[#AFAFAF] text-[#424961]"
        >
          &gt; {/* Displays the > symbol */}
        </button>
      </div>
    </section>
  );
};

export default ArticleSection;
