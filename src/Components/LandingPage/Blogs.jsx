import h1 from "../../assets/next.png";
const Blogs = () => {
  const blogs = [
    {
      category: ["Technology", "Programming"],
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f8/23/b8/expect-in-africa-safari.jpg?w=1200&h=-1&s=1",
      title: "10 Best Practices for Writing Clean Code",
    },
    {
      category: ["Travel", "Adventure"],
      image:
        "https://png.pngtree.com/back_origin_pic/05/06/89/6e270dec6f11931302918d797f0eef7a.jpg",
      title: "Top 5 Destinations for Backpackers",
    },
    {
      category: ["Food", "Recipes"],
      image:
        "https://wallpapertag.com/wallpaper/full/8/7/e/221119-travel-background-1920x1080-laptop.jpg",
      title: "Delicious and Easy Pasta Recipes",
    },
  ];
  return (
    <div className="px-3 py-6 mt-11 pt-40 w-full">
      <div className="flex items-center justify-between w-full ">
        <div className="w-1/2">
          <p className="font-cina-geo  text-2xl lg:text-4xl font-bold ">
            Blogs about traveling
          </p>
        </div>

        <div className="w-1/2">
          <p className=" font-cina-geo text-xs lg:text-base text-gray-400">
            One of the most remarkable aspects of travel is its ability to
            broaden our horizons. Stepping foot into unfamiliar territory opens
            doors to new experiences and perspectives. Whether wandering through
            ancient ruins, navigating bustling markets, or savoring exotic
            cuisines, every moment offers a chance to learn and grow.
          </p>
          <button className="btn mt-3 rounded-2xl w-52 bg-white border-x-black border-y-black ">
            Read all blogs
          </button>
        </div>
      </div>

      <div className="lg:grid lg:grid-rows-2 lg:grid-flow-col lg:gap-4 py-11 lg:h-screen flex flex-col gap-2 mt-10">
        <div className=" w-full  bg-base-100 border-2 row-span-2 col-span-1 overflow-hidden rounded-3xl ">
          <figure className="h-3/4 overflow-hidden">
            <img
              src={blogs[0].image}
              alt="Shoes"
              className="h-full w-full transition  duration-700 ease-in-out   hover:scale-125"
            />
          </figure>
          <div className="flex items-end justify-between gap-8 px-3 py-4 h-28">
            <div>
              <p className="card-title text-nowrap">{blogs[0].title}</p>
              <div className="flex justify-center gap-1 items-center">
                <div className="text-lg font-bold">{blogs[0].category[0]} </div>
                <p className=""> / person</p>
              </div>
            </div>

            <div className=" ">
              <button className="btn  btn-circle btn-outline  transition  duration-700 ease-in-out hover:rotate-90">
                <img src={h1} className="h-6 w-6 " />
              </button>
            </div>
          </div>
        </div>

        <div className="w-full  bg-base-100 border-2 col-span-2 row-span-1 overflow-hidden rounded-3xl">
          <figure className="h-1/2 overflow-hidden">
            <img
              src={blogs[1].image}
              alt="Shoes"
              className="h-full w-full transition  duration-700 ease-in-out   hover:scale-125"
            />
          </figure>
          <div className="flex items-end justify-between gap-8 px-3 py-4 h-28">
            <div>
              <p className="card-title text-nowrap">{blogs[1].title}</p>
              <div className="flex justify-center gap-1 items-center">
                <div className="text-lg font-bold">{blogs[1].category[0]} </div>
                <p className=""> / person</p>
              </div>
            </div>

            <div className=" ">
              <button className="btn  btn-circle btn-outline  transition  duration-700 ease-in-out hover:rotate-90">
                <img src={h1} className="h-6 w-6 " />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full  bg-base-100 border-2 col-span-2 row-span-1 overflow-hidden rounded-3xl">
          <figure className="h-1/2 overflow-hidden">
            <img
              src={blogs[2].image}
              alt="Shoes"
              className="h-full w-full transition  duration-700 ease-in-out   hover:scale-125"
            />
          </figure>
          <div className="flex items-end justify-between gap-8 px-3 py-4 h-28">
            <div>
              <p className="card-title text-nowrap">{blogs[2].title}</p>
              <div className="flex justify-center gap-1 items-center">
                <div className="text-lg font-bold">{blogs[2].category[0]} </div>
                <p className=""> / person</p>
              </div>
            </div>

            <div className=" ">
              <button className="btn  btn-circle btn-outline  transition  duration-700 ease-in-out hover:rotate-90">
                <img src={h1} className="h-6 w-6 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
