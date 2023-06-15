import React from "react";

// import Image from "next/image";
import Button from "components/Button";


const TeamCard = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[30px] items-center justify-start w-full">
          <div className="h-[450px] relative w-full">
            <img
              src={props?.rectangle1487}
              className="md:h-[450px] h-full m-auto object-cover w-full"
              alt="rectangle1487"
            />
            <div className="absolute bottom-[5%] flex flex-row gap-[25px] inset-x-[0] items-center justify-center mx-auto w-auto">
              {!!props?.linkedin ? (
                <Button className="bg-yellow_100 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <img src={props?.linkedin} className="h-6" alt="linkedin" />
                </Button>
              ) : null}
              {!!props?.facebook ? (
                <Button className="bg-gray_53 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <img src={props?.facebook} className="h-6" alt="facebook" />
                </Button>
              ) : null}
              {!!props?.twitter ? (
                <Button className="bg-gray_53 flex h-[50px] items-center justify-center p-[13px] rounded-[50%] w-[50px]">
                  <img src={props?.twitter} className="h-6" alt="twitter" />
                </Button>
              ) : null}
            </div>
          </div>
          <div className="flex flex-col gap-2.5 items-center justify-start w-full">
            <p
              className=" text-black_900 text-center tracking-[-0.50px] w-full"
            >
              {props?.makejhane}
            </p>
            <p
              className="font-normal font-rubik text-center text-gray_500 tracking-[-0.50px] w-full"
            >
              {props?.financemanager}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

TeamCard.defaultProps = {
  rectangle1487: "images/img_rectangle1487.png",
  makejhane: "Make Jhane",
  financemanager: "Finance Manager",
};

export default TeamCard;
