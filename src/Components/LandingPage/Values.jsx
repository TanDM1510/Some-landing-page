import h1 from "../../assets/people.png";
import h2 from "../../assets/provision.png";
import h3 from "../../assets/clock.png";
import h4 from "../../assets/verified.png";
import h5 from "../../assets/save-money.png";

const Values = () => {
  const datas = [
    {
      image: h1,
      name: "Expert Guidance",
      description:
        "Our tours are led by experienced guides who possess in-depth knowledge about the destinations.",
    },
    {
      image: h2,
      name: "Customized Itineraries",
      description:
        "We offer customizable itineraries tailored to suit your preferences.",
    },
    {
      image: h3,
      name: "Time Efficiency",
      description: "With our pre-planned itineraries and organized schedules.",
    },
    {
      image: h4,
      name: "Safety and Security",
      description:
        "Your safety is our priority. We ensure that all tours adhere to high safety standards and include emergency protocols.",
    },
    {
      image: h5,
      name: "Cost Savings",
      description:
        "Through our established networks and partnerships, we secure competitive rates for accommodations, transportation.",
    },
  ];
  return (
    <div className="py-16 px-3 w-full grid place-items-center gap-5">
      <p className="font-cina-geo  text-2xl lg:text-4xl font-bold ">
        Top value for you
      </p>
      <p className=" font-cina-geo  text-sm lg:text-base font-thin text-gray-400 ">
        Will make you comfortable
      </p>
      <div className="flex flex-row  justify-center h-96 w-full overflow-x-auto  gap-16 mt-10 ">
        {datas.map((data) => {
          return (
            <div
              key={data.name}
              className="w-40 flex flex-col items-center  h-full "
            >
              <button className="btn btn-circle overflow-hidden ">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg> */}
                <img src={data.image} className="h-9 w-9" />
              </button>
              <p className="text-nowrap text-base mt-5 font-bold">
                {data.name}
              </p>
              <p className="text-wrap text-center text-sx mt-5 font-light text-gray-400">
                {data.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Values;
