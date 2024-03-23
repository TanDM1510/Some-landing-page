import h1 from "../../assets/plus.png";
const Tours = () => {
  const data = [
    {
      rate: 5,
      title: "Sunset Cruise",
      image:
        "https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3NrOTc5MS1pbWFnZS1rd3Z1amE5Ni5qcGc.jpg",
      description:
        "Experience the magic of a sunset cruise along the picturesque coastline. Set sail on a luxurious yacht and watch the sun dip below the horizon while enjoying refreshing drinks and delicious hors d'oeuvres.",
      value: "$150 ",
    },
    {
      rate: 5,
      title: "Wildlife Safari",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/f8/23/b8/expect-in-africa-safari.jpg?w=1200&h=-1&s=1",
      description:
        "Embark on an exhilarating wildlife safari through the untamed wilderness. Encounter majestic animals in their natural habitat, guided by expert trackers and conservationists.",
      value: "$250 ",
    },
    {
      rate: 5,
      title: "Cultural Tour",
      image:
        "https://www.hachettebookgroup.com/wp-content/uploads/2020/02/Matsuri.png?w=1024",
      description:
        "Immerse yourself in the rich tapestry of local culture with our Cultural Tour. Visit ancient landmarks, engage with local communities, and savor traditional cuisine for an authentic cultural experience.",
      value: "$100 ",
    },
    {
      rate: 5,
      title: "Jeep Tour",
      image:
        "https://img1.wsimg.com/isteam/ip/58551f22-6ec4-40c7-af41-fc3a75adf505/Sunset%20Jeep%20Tour%20%20Profile.jpg",
      description:
        "Immerse yourself in the rich tapestry of local culture with our Cultural Tour. Visit ancient landmarks, engage with local communities, and savor traditional cuisine for an authentic cultural experience.",
      value: "$100 ",
    },
  ];

  return (
    <div className="px-3 pb-6  w-full h-screen">
      <p className="font-cina-geo text-start  text-2xl lg:text-4xl font-bold">
        Choose your tour
      </p>
      <div className=" flex flex-row items-center justify-center gap-3 mt-16 overflow-x-auto w-full">
        {data.map((t) => {
          return (
            <div className="card w-96  bg-base-100 border-2 " key={t.title}>
              <figure className="h-72">
                <img
                  src={t.image}
                  alt="Shoes"
                  className="h-72 transition  duration-700 ease-in-out   hover:scale-125"
                />
              </figure>
              <div className="flex items-end justify-between gap-8 px-3 py-4 h-28">
                <div>
                  <p className="card-title text-nowrap">{t.title}</p>
                  <div className="flex justify-center gap-1 items-center">
                    <div className="text-lg font-bold">{t.value} </div>
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
          );
        })}
      </div>
      <div className="flex items-center justify-center mt-20">
        <button className="btn w-44 rounded-2xl font-bold border-black">
          See all
        </button>
      </div>
    </div>
  );
};

export default Tours;
