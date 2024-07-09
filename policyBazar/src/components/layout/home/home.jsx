import React from "react";
import { Carousel } from "@material-tailwind/react";
import "../CSS/layout.css";
import Our_services from "../our services/services";

const Home = () => {
  return (
    <>
    <div>
      <div className="">
        <Carousel className="rounded-xl custom-carousel" loop autoplay autoplayTimeout={9000}>
        <div className="relative h-[900px] w-full md:w-[1600px]  mx-auto">
            <img
              src="https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/02/full/1662127381-276.jpg?im=FeatureCrop,size=(826,465)"
              alt="Kathmandu Valley"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 text-white px-4 md:px-0">
              <h1 className="text-2xl md:text-4xl font-bold">Life Insurance</h1>
              <p className="mt-2 text-base md:text-2xl">
                Life insurance provides financial protection for your loved ones
                in the event of your death.<br></br> It ensures that they are
                financially supported, covering expenses such as mortgages,
                <br></br> education, and daily living costs. Explore the peace
                of mind that{" "}
                <span className="text-green-500">Policy Bazaar</span> can offer
                today.
              </p>
            </div>
          </div>
          <div className="relative h-[900px] w-full md:w-[1600px]  mx-auto">
            <img
              src="https://www.windshieldexperts.com/blog1/wp-content/uploads/2016/05/insurance-1.jpg"
              alt="Everest Base Camp"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 text-white px-4 md:px-0">
              <h1 className="text-2xl md:text-4xl font-bold">
                Vechile Insurance
              </h1>
              <p className="mt-2 text-base md:text-2xl">
                "Get reliable vehicle insurance with{" "}
                <span className="text-green-500">Policy Bazaar</span>.<br></br>{" "}
                Safeguard your car, bike, or other vehicles against accidents,
                <br></br> theft, and more. Drive assured, choose Policy Bazaar
                today."
              </p>
            </div>
          </div>
       
          <div className="relative h-[900px] w-full md:w-[1600px] mx-auto">
            <img
              src="https://media.istockphoto.com/id/1409298940/photo/the-concept-of-contracting-a-home-insurance-agreement.webp?b=1&s=170667a&w=0&k=20&c=6n5mvlQa07oSRkSkjQSN-8iVx8eo1WgZhoDTSnN-MbM="
              alt="Pokhara"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-10 text-white px-4 md:px-0">
              <h1 className="text-2xl md:text-4xl font-bold">
                Property Insurance
              </h1>
              <p className="mt-2 text-base md:text-2xl">
                Property insurance protects your real estate and belongings
                against unforeseen risks such as fire, theft, and natural<br></br>
                disasters. Whether it's your home or commercial property,
                property insurance ensures financial security by covering repair<br></br>
                or replacement costs. Safeguard your investments and enjoy peace
                of mind with comprehensive property insurance today.
              </p>  
            </div>
          </div>
        </Carousel>
      </div><Our_services/>
      </div>
    </>
  );
};

export default Home;
