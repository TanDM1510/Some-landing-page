const Hero = () => {
  const bestTour = [
    {
      id: 1,
      title: "Sailing in Denmark",
      image:
        "https://www.interrail.eu/content/dam/blogazine/montenegro-durmitor-national-park-lake-boats-mountains.adaptive.767.1628164860179.gif",
      description:
        "Embark on an unforgettable journey through breathtaking mountain landscapes. Our expert guides will lead you on a trekking adventure.",
    },
    {
      id: 2,
      title: "City Explorer",
      image:
        "https://www.thenaturaladventure.com/wp-content/uploads/2020/05/europe-2.jpg",
      description:
        "Discover the vibrant heart of the city with our City Explorer tour. Visit iconic landmarks, delve into the rich history and culture, and experience the buzzing atmosphere of urban life.",
    },
    {
      id: 3,
      title: "Hiking in Everest",
      image:
        "https://cdn.tripspoint.com/uploads/photos/5008/motorcycle-tour-europe-best-of-the-alps_1SRKC.jpeg",
      description:
        "Escape to paradise with our Beach Getaway tour. Bask in the sun on pristine sandy shores, swim in crystal-clear waters, and unwind in luxurious beachfront accommodations.",
    },
  ];

  return (
    <div className="w-full h-72 lg:h-[500px] px-4 ">
      {" "}
      <div className="carousel w-full rounded-xl h-full ">
        {bestTour.map((tour) => {
          return (
            <div
              id={tour.id}
              className="carousel-item relative h-full w-full overflow-visible"
              key={tour.title}
            >
              <img src={tour.image} className="w-full h-full " />
              <p className="absolute top-11 left-5 text-3xl font-bold text-white lg:text-6xl lg:top-20 ">
                {tour.title}
              </p>
              <p className="absolute top-24 left-5 text-sm font-thin text-white lg:text-2xl lg:top-48 w-2/3 text-wrap">
                {tour.description}
              </p>
              <button className="btn absolute hidden lg:flex lg:top-80 lg:left-5 w-40 rounded-3xl">
                Book now
              </button>
              <div className="absolute flex justify-start gap-3 transform -translate-y-1/2 left-5 right-5 bottom-3">
                <a
                  href={`#${tour.id - 1}`}
                  className="btn btn-circle bg-inherit "
                >
                  ❮
                </a>
                <a
                  href={`#${tour.id + 1}`}
                  className="btn btn-circle bg-inherit"
                >
                  ❯
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
