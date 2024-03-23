const HeroEnd = () => {
  return (
    <div>
      <div className="py-10 mb-10 px-3 relative ">
        <img
          className="w-full lg:h-96 h-72 rounded-xl  "
          src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/ibfb3b64b22e27bc9/version/1490270886/natural-pools.jpg"
        />
        <div className="flex flex-col gap-10 items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <p className="font-cina-geo text-2xl lg:text-6xl text-center text-white font-bold ">
            Discovery the natural with us now{" "}
          </p>
          <button className="btn w-48 rounded-3xl border-black">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroEnd;
