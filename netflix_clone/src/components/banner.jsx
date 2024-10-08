const Banner = () => {
  return (
    <div
      className="relative h-[448px] bg-cover bg-center text-white"
      style={{
        backgroundImage:
          "url('https://image.tmdb.org/t/p/original//hVMoqvXs5j9ffun56tZ5YhliSD9.jpg')",
      }}
    >
      <div className="absolute h-[190px] left-8 top-[140px]">
        <h1 className="text-[3rem] font-extrabold pb-1">Ginny &amp; Georgia</h1>
        <div className="flex items-center">
          <button className="banner__button bg-transparent border-none rounded-[0.2vw] cursor-pointer font-bold mr-4 py-2 px-8 transition duration-200 hover:bg-gray-300 hover:text-black">
            Play
          </button>
          <button className="banner__button bg-transparent border-none rounded-[0.2vw] cursor-pointer font-bold mr-4 py-2 px-8 transition duration-200 hover:bg-gray-300 hover:text-black">
            My List
          </button>
        </div>
        <h1 className="text-base h-[80px] leading-[1.3] max-w-[360px] pt-4 w-[45rem]">
          Angsty and awkward fifteen-year-old Ginny Miller often feels more
          mature than her thirty-year-old mother, the irresistible and dynamic
          Georgia Miller...
        </h1>
      </div>
      <div className="absolute bottom-0 w-full h-[7.4rem] bg-gradient-to-t from-[#111] to-[rgba(37,37,37,0.61)]"></div>
    </div>
  );
};

export default Banner;
