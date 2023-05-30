import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonial">
      <div className="max-w-6xl px-5 max-auto mt-32 text-center ml-12">
        <h2 className="text-4xl font-bold text-center">
          What's Different about Us?
        </h2>
        <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
          <div className="flex flex-col items-center space-y-6 rounded-lg bg-gray-800 md:w-1/3">
            <Image
              src="/one.jpeg"
              alt="Gabriel Dee"
              width={64}
              height={64}
              className="w-16 -mt-10 rounded-full"
            />
            <h5 className="text-lg font-bold">Gabriel Dee</h5>
            <p className="text-sm text-darkGrayishBlue mx-5 py-8">
              Tencoba provides members with all the basic financing tools that
              are tailor-made to meet the goals of the group in terms of
              finances.
            </p>
          </div>

          <div className="hidden flex-col items-center space-y-6 rounded-lg bg-gray-800 md:flex md:w-1/3">
            <Image
              src="/two.jpeg"
              alt="Johnson Jr."
              width={64}
              height={64}
              className="w-16 -mt-10 rounded-full"
            />
            <h5 className="text-lg font-bold">Johnson Jr.</h5>
            <p className="text-sm text-darkGrayishBlue mx-5 py-8">
              Tencoba provides members with all the basic financing tools that
              are tailor-made to meet the goals of the group in terms of
              finances.
            </p>
          </div>

          <div className="hidden flex-col items-center space-y-6 rounded-lg bg-gray-800 md:flex md:w-1/3">
            <Image
              src="/three.jpeg"
              alt="Gwakisa Deke"
              width={64}
              height={64}
              className="w-16 -mt-10 rounded-full"
            />
            <h5 className="text-lg font-bold">Gwakisa Deke</h5>
            <p className="text-sm text-darkGrayishBlue mx-5 py-8">
              Tencoba provides members with all the basic financing tools that
              are tailor-made to meet the goals of the group in terms of
              finances.
            </p>
          </div>
        </div>
        <div className="flex justify-center py-16">
          <a
            href="#"
            className="hidden md:block py-2 px-4 text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
