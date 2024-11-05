import React, { useState } from 'react';

// Sample articles data
const articles = [
  {
    title: 'Grilled Tomatoes at Home',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: '/src/assets/tomato.webp',
  },
  {
    title: 'Snacks for Travel',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: '/src/assets/snacks.webp',
  },
  {
    title: 'Post-workout Recipes',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: '/src/assets/recepie.webp',
  },
  {
    title: 'How To Grill Corn',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: '/src/assets/grilcorn.webp',
  },
  {
    title: 'Crunchwrap Supreme',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: '/src/assets/meal.webp',
  },
  {
    title: 'Broccoli Cheese Soup',
    content: 'PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley....',
    imgSrc: '/src/assets/bowl.webp',
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
    <section className="py-8">
      <h2 className="text-[36px] sm:text-[56px] text-center sm:text-left sm:ml-[120px] font-semibold text-[#0E2368] mb-[40px] sm:mb-[60px] mt-[80px] sm:mt-0 font-poppins sm:font-sans ">
        Latest Articles
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-8 flex-wrap items-center">
        {currentArticles.map((article, index) => (
          <div
            key={index}
            className="w-[300px] border-[1.2px] border-[#93A2D361] sm:w-[381px] h-auto sm:h-[554px]  gap-1 sm:gap-3  rounded-[18px] p-8 sm:p-7 shadow-lg flex flex-col items-center sm:items-start text-left sm:text-left border-mobile "
          >
            <div className="w-full mb-4">
              <img
                src={article.imgSrc}
                alt={article.title}
                className="w-full h-[185px] sm:h-full p-2 sm:p-0 object-cover rounded-t-lg"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#0E2368] mb-2">
              {article.title}
            </h3>
            <p className="text-[12px] sm:text-base font-sourceSansPro mb-4 line-clamp-none sm:line-clamp-3 leading-[22px] sm:leading-normal text-[#444957]">
              {article.content}
            </p>
            <button className="px-9 sm:px-6 py-2 border-[2px] sm:border-[1.3px] border-[#424961] rounded-full text-[#424961] font-semibold mt-auto">
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-8">
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
