import React from "react";
import img from "next/image";
import Footer from "@/components/Footer";

import Button from "@/components/about/Button";
import Slider from "@/components/about/Slider";
import Navbar from "@/components/Navbar";
import PageIndicator from "@/components/about/PageIndicator";
import TeamCard from "@/components/about/TeamCard";
import Footer from "@/components/Footer";

const About = () => {
  const sliderRef = React.useRef(null);
  const [sliderState, setsliderState] = React.useState(0);
  const sliderRef1 = React.useRef(null);
  const [sliderState1, setsliderState1] = React.useState(0);

  return (
    <>
      <Navbar />
      <div className="bg-gray_50 flex flex-col font-rubik sm:gap-10 md:gap-10 gap-[100px] items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[138px] items-center justify-between max-w-[1290px] mx-auto w-full">
            <div className="flex flex-1 flex-col gap-14 items-start justify-start w-full">
              <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                  <p className="leading-[60.00px] max-w-[626px] md:max-w-full text-black_900 tracking-[-0.50px]">
                    Welcome to Tencoba
                  </p>
                  <p
                    className="font-normal leading-[35.00px] max-w-[626px] md:max-w-full text-gray_500 tracking-[-0.50px]"
                    variant="body2"
                  >
                    At Tencoba, we are dedicated to simplifying the process of
                    annual financial planning while ensuring that you stay
                    focused on your larger financial goals. Our mission is to
                    empower individuals and families by providing a
                    user-friendly platform that streamlines the complexities of
                    financial planning.
                  </p>
                  <p
                    className="font-normal leading-[35.00px] max-w-[626px] md:max-w-full text-gray_500 tracking-[-0.50px]"
                    variant="body2"
                  >
                    We understand that planning your annual finances can be
                    overwhelming, with numerous expenses and financial goals to
                    consider. That's why we created Tencoba, a powerful tool
                    designed to make the process easy, intuitive, and effective.
                    With Tencoba, you can take control of your financial future
                    and confidently make informed decisions.
                  </p>
                  <p
                    className="font-normal leading-[35.00px] max-w-[626px] md:max-w-full text-gray_500 tracking-[-0.50px]"
                    variant="body2"
                  >
                    Our journey began with a vision to transform the way people
                    approach financial planning. We recognized the need for a
                    solution that combines simplicity and effectiveness to help
                    individuals achieve their long-term financial aspirations.
                    Leveraging the expertise of our team, which comprises
                    financial advisors and technology specialists, we developed
                    Tencoba to be your trusted companion on your financial
                    journey.
                  </p>
                  <p
                    className="font-normal leading-[35.00px] max-w-[626px] md:max-w-full text-gray_500 tracking-[-0.50px]"
                    variant="body2"
                  ></p>
                  <p
                    className="font-normal leading-[35.00px] max-w-[626px] md:max-w-full text-gray_500 tracking-[-0.50px]"
                    variant="body2"
                  ></p>
                </div>
                <Button className="border border-black_900 border-solid cursor-pointer font-semibold leading-[normal] min-w-[172px] sm:px-5 px-[25px] py-3 text-black_900 text-center text-lg tracking-[-0.50px]">
                  Meet our Team
                </Button>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start w-full">
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
                <div className="flex relative w-[230px]">
                  <div className="flex my-auto w-[81%]">
                    <div className="flex my-auto w-[76%]">
                      <div className="flex my-auto w-[68%]">
                        <img
                          src="/img_unsplashwnolnjo7ts8.png"
                          className="h-[50px] my-auto rounded-[50%] w-[50px]"
                          alt="unsplashwnolnjo"
                        />
                        <img
                          src="/img_unsplashrtvgs4vgkgm.png"
                          className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                          alt="unsplashrtvgs4v"
                        />
                      </div>
                      <img
                        src="/img_unsplashd1upkifd04a.png"
                        className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                        alt="unsplashd1upkif"
                      />
                    </div>
                    <img
                      src="/img_unsplashplsf6obtgms.png"
                      className="h-[50px] ml-[-5px] my-auto rounded-[50%] w-[50px] z-[1]"
                      alt="unsplashplsf6ob"
                    />
                  </div>
                  <p
                    className="bg-bluegray_900 flex font-semibold h-[50px] items-center justify-center ml-[-5px] my-auto rounded-[50%] text-center text-yellow_100 tracking-[-0.50px] w-[50px] z-[1]"
                    variant="body3"
                  >
                    3K+
                  </p>
                </div>
              </div>
            </div>
            <img
              src="/img_rectangle1492.png"
              className="h-[650px] sm:h-auto max-h-[650px] object-cover rounded-bl-[300px] rounded-tl-[300px] rounded-tr-[300px] sm:w-[] md:w-[]"
              alt="rectangle1492"
            />
          </div>
        </div>
        <div className="bg-black_900 flex flex-col items-start justify-start md:px-10 sm:px-5 px-[173px] py-[41px] w-full">
          <div className="flex flex-col gap-[46px] items-center justify-start max-w-[1094px] mx-auto w-full">
            <p
              className="font-normal text-center text-gray_53 tracking-[-0.50px] w-full"
              as="h6"
              variant="h6"
            >
              Various brands have used our products
            </p>
            <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
              <img
                src="/img_search.svg"
                className="h-12 w-[220px]"
                alt="search"
              />
              <img
                src="/img_companylogocompany109_gray_53.svg"
                className="h-12 w-[125px]"
                alt="companylogocomp"
              />
              <img
                src="/img_companylogocompany109.svg"
                className="h-12 w-[92px]"
                alt="companylogocomp_One"
              />
              <img
                src="/img_companylogocompany109_gray_53_48x141.svg"
                className="h-12 w-[141px]"
                alt="companylogocomp_Two"
              />
              <img
                src="/img_companylogocompany109_gray_53_48x134.svg"
                className="h-12 w-[134px]"
                alt="companylogocomp_Three"
              />
              <img
                src="/img_companylogocompany109_gray_53_48x132.svg"
                className="h-12 w-[132px]"
                alt="companylogocomp_Four"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[53px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <div className="flex flex-col gap-[13px] items-center justify-start w-full">
              <p
                className="font-bold font-raleway text-black_900 text-center tracking-[-0.50px] w-full"
                as="h2"
                variant="h2"
              >
                Meet Our Team
              </p>
              <p
                className="font-normal font-rubik text-center text-gray_500 tracking-[-0.50px] w-full"
                variant="body1"
              >
                We write various things related to furniture, from tips and what
                things I need to pay attention to when choosing furniture
              </p>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState}
                responsive={{
                  0: { items: 1 },
                  550: { items: 2 },
                  1050: { items: 3 },
                }}
                onSlideChanged={(e) => {
                  setsliderState(e?.item);
                }}
                ref={sliderRef}
                className="gap-5 w-full"
                items={[...Array(9)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <TeamCard
                      className="flex flex-col gap-2 items-start justify-start mx-2.5"
                      rectangle1487="/img_rectangle1487.png"
                      linkedin="/img_linkedin.svg"
                      facebook="/img_facebook.svg"
                      twitter="/img_twitter.svg"
                      makejhane="Make Jhane"
                      financemanager="Finance Manager"
                    />
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
            </div>
            <PageIndicator
              className="flex gap-[15px] h-[15px] items-start justify-start w-[75px]"
              count={3}
              activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]"
              activeIndex={sliderState}
              inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
              sliderRef={sliderRef}
              selectedWrapperCss="inline-block"
              unselectedWrapperCss="inline-block"
            />
          </div>
        </div>
        <div className="h-[535px] md:h-[892px] md:px-5 relative w-full">
          <div className="absolute bg-yellow_100 bottom-[0] h-[440px] inset-x-[0] mx-auto w-full"></div>
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between max-w-[1365px] my-auto right-[0] w-full">
            <div className="flex sm:flex-1 flex-col gap-[30px] items-start justify-start w-[525px] sm:w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start w-full">
                <p
                  className="font-normal font-rubik text-bluegray_900 tracking-[-0.50px] w-full"
                  as="h5"
                  variant="h5"
                >
                  Interior Modern
                </p>
                <p
                  className="font-bold font-raleway leading-[60.00px] max-w-[525px] md:max-w-full text-black_900 tracking-[-0.50px]"
                  as="h2"
                  variant="h2"
                >
                  Arrange your home in such a way with our modern interiors
                </p>
              </div>
              <Button
                className="common-pointer border-2 border-bluegray_900 border-solid cursor-pointer font-medium leading-[normal] min-w-[218px] py-[18px] text-bluegray_900 text-center text-xl tracking-[-0.50px]"
                // onClick={() => navigate("/shopdetaildescription")}
              >
                Shop Now
              </Button>
            </div>
            <img
              src="/img_insideweather.png"
              className="sm:flex-1 h-[535px] md:h-auto object-cover w-[535px] sm:w-full"
              alt="insideweather"
            />
          </div>
        </div>
        <div className="flex flex-col font-poppins items-start justify-start md:px-10 sm:px-5 px-[75px] w-full">
          <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1290px] mx-auto w-full">
            <p
              className="font-semibold text-black_900 text-center tracking-[0.12px] w-full"
              as="h2"
              variant="h2"
            >
              <span className="md:text-[38px] sm:text-4xl text-black_900 text-[40px] font-raleway font-bold">
                How happy are they with{" "}
              </span>
              <span className="md:text-[38px] sm:text-4xl text-black_900 text-[40px] font-raleway font-bold">
                our service
              </span>
            </p>
            <div className="flex flex-col gap-[30px] items-center justify-start w-full">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                activeIndex={sliderState1}
                responsive={{
                  0: { items: 1 },
                  550: { items: 1 },
                  1050: { items: 1 },
                }}
                onSlideChanged={(e) => {
                  setsliderState1(e?.item);
                }}
                ref={sliderRef1}
                className="w-full"
                items={[...Array(5)].map(() => (
                  <React.Fragment key={Math.random()}>
                    <div
                      className="sm:flex-col flex-row gap-[21px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mx-2.5"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <img
                            src="/img_eye.svg"
                            className="h-[50px] w-[50px]"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <p
                                className="font-semibold leading-[35.00px] max-w-[364px] md:max-w-full text-black_900 tracking-[0.12px]"
                                variant="body1"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </p>
                              <p
                                className="font-normal leading-[35.00px] max-w-[364px] md:max-w-full text-black_900_87 tracking-[0.12px]"
                                variant="body3"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </p>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <img
                                src="/img_unsplashwnolnjo7ts8_56x56.png"
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <p
                                  className="font-semibold text-black_900 tracking-[0.12px] w-full"
                                  variant="body1"
                                >
                                  Dagruel Manulo
                                </p>
                                <p
                                  className="font-normal text-black_900_7f1 tracking-[0.12px] w-full"
                                  variant="body3"
                                >
                                  Sydney, Australia
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <img
                            src="/img_eye.svg"
                            className="h-[50px] w-[50px]"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <p
                                className="font-semibold leading-[35.00px] max-w-[364px] md:max-w-full text-black_900 tracking-[0.12px]"
                                variant="body1"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </p>
                              <p
                                className="font-normal leading-[35.00px] max-w-[364px] md:max-w-full text-black_900_87 tracking-[0.12px]"
                                variant="body3"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </p>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <img
                                src="/img_unsplashwnolnjo7ts8_1.png"
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <p
                                  className="font-semibold text-black_900 tracking-[0.12px] w-full"
                                  variant="body1"
                                >
                                  Zambi Owel
                                </p>
                                <p
                                  className="font-normal text-black_900_7f1 tracking-[0.12px] w-full"
                                  variant="body3"
                                >
                                  Sydney, Australia
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start sm:px-5 px-[26px] py-[30px] w-full">
                        <div className="flex flex-col gap-5 items-start justify-start w-full">
                          <img
                            src="images/img_eye.svg"
                            className="h-[50px] w-[50px]"
                            alt="eye"
                          />
                          <div className="flex flex-col gap-5 items-start justify-start w-full">
                            <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                              <p
                                className="font-semibold leading-[35.00px] max-w-[364px] md:max-w-full text-black_900 tracking-[0.12px]"
                                variant="body1"
                              >
                                <>
                                  For the material and the chair as we expected
                                  it&#39;s good
                                </>
                              </p>
                              <p
                                className="font-normal leading-[35.00px] max-w-[364px] md:max-w-full text-black_900_87 tracking-[0.12px]"
                                variant="body3"
                              >
                                <>
                                  Lorem Ipsum is simply dummy text of the
                                  printing and typesetting industry. Lorem Ipsum
                                  has been the industry&#39;s standard dummy
                                  text ever.
                                </>
                              </p>
                            </div>
                            <div className="flex flex-row gap-[19px] items-center justify-start w-full">
                              <img
                                src="images/img_unsplashwnolnjo7ts8_2.png"
                                className="h-14 md:h-auto rounded-[50%] w-14"
                                alt="unsplashwnolnjo"
                              />
                              <div className="flex flex-1 flex-col gap-[3px] items-start justify-start w-full">
                                <p
                                  className="font-semibold text-black_900 tracking-[0.12px] w-full"
                                  variant="body1"
                                >
                                  Mario
                                </p>
                                <p
                                  className="font-normal text-black_900_7f1 tracking-[0.12px] w-full"
                                  variant="body3"
                                >
                                  Sydney, Australia
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
                renderDotsItem={({ isActive }) => {
                  if (isActive) {
                    return (
                      <div className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]" />
                    );
                  }
                  return (
                    <div
                      className="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                      role="button"
                      tabIndex={0}
                    />
                  );
                }}
              />
              <PageIndicator
                className="flex gap-2.5 h-[15px] items-center justify-center max-w-[1290px] w-full"
                count={5}
                activeCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-bluegray_900 w-[15px]"
                activeIndex={sliderState1}
                inactiveCss="inline-block cursor-pointer rounded-[50%] h-[15px] bg-gray_200 w-[15px]"
                sliderRef={sliderRef1}
                selectedWrapperCss="inline-block"
                unselectedWrapperCss="inline-block"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
