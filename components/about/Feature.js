import Image from "next/image";
import Link from "next/link";
import Feature from "@/about/Feature";

const Feature = () => {
  return (
    <section id="feature">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* text pane - left-side */}
        <div className="flex flex-col mb-32 ml-12 space-y-6 md:w-1/2">
        <div className="flex flex-col gap-[7px] items-start justify-start w-auto">
                  <div className="flex flex-row font-raleway gap-2.5 items-center justify-start w-auto">
                    <p
                      className="font-bold text-black_900 tracking-[0.12px] w-auto"
                      variant="body1"
                    >
                      Ratings
                    </p>
                    <div className="flex flex-row gap-[5px] items-center justify-start w-auto">
                      <img
                        src="/img_star.svg"
                        width={30}
                        height={30}
                        // className="h-[30px] w-[30px]"
                        alt="star"
                      />
                      <p
                        className="font-bold text-black_900 tracking-[0.12px] w-auto"
                        variant="body1"
                      >
                        5.0
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-black_900_7f tracking-[-0.50px] w-auto"
                    variant="body4"
                  >
                    Trusted by many people from all over the world
                  </p>
                </div>
        </div>
        {/* image - right-side */}
        <div className="md:w-1/2">
          
        </div>
      </div>
    </section>
  );
};

export default Feature;
