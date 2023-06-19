import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
        {/* text pane - left-side */}
        <div className="flex flex-col mb-32 ml-12 space-y-6 md:w-1/2">
          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Welcome to Tencoba!
          </h1>
          <p className="max-w-md text-center md:text-left text-darkGrayishBlue">
            At Tencoba, we are dedicated to simplifying the process of
                    annual financial planning while ensuring that you stay
                    focused on your larger financial goals. Our mission is to
                    empower individuals and families by providing a
                    user-friendly platform that streamlines the complexities of
                    financial planning.
          </p>
          <p className="max-w-md text-center md:text-left text-darkGrayishBlue">
             We understand that planning your annual finances can be
                    overwhelming, with numerous expenses and financial goals to
                    consider. That's why we created Tencoba, a powerful tool
                    designed to make the process easy, intuitive, and effective.
                    With Tencoba, you can take control of your financial future
                    and confidently make informed decisions.
          </p>
          <p className="max-w-md text-center md:text-left text-darkGrayishBlue">
            Our journey began with a vision to transform the way people
                    approach financial planning. We recognized the need for a
                    solution that combines simplicity and effectiveness to help
                    individuals achieve their long-term financial aspirations.
                    Leveraging the expertise of our team, which comprises
                    financial advisors and technology specialists, we developed
                    Tencoba to be your trusted companion on your financial
                    journey.
          </p>
          <div className="flex justify-start">
            <Link
              href="/Register"
              className="hidden md:block py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* image - right-side */}
        <div className="md:w-1/2">
          <div className="flex justify-center">
            <Image src="/about.png" alt="right side" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
