const HeroSection = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);

        if (element) {
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const additionalOffset = 32; // Add extra padding from the navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition +
                window.scrollY -
                navbarHeight -
                additionalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-center tracking-wide">
                Hi, I'm Aayush More.
                <br />
                Your personal
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    Finance Tutor
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Personalized financial coaching and investment strategies
                tailored for your success. Take control of your finances today.
            </p>
            <div className="flex justify-center my-10">
                <button
                    onClick={() => scrollToSection("bookingform")}
                    className="relative py-3 px-4 mx-3 rounded-md text-white border-4 border-transparent duration-300 group hover:scale-105"
                >
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 rounded-md opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                    <span className="absolute inset-0 border-2 border-transparent rounded-md group-hover:border-orange-500 group-hover:border-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-800 transition-all duration-300"></span>
                    <span className="relative z-10">Book a free call</span>
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
