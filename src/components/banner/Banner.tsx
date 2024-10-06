import ParallexWrapper from "../parallex/ParallexWrapper";

const Banner = () => {
    return (
        <ParallexWrapper>
                <div className="relative z-10 text-white px-4 max-w-2xl">
                    <h1 className="text-5xl font-extrabold mb-4">Creating memories that last a lifetime</h1>
                    <h2 className="text-3xl font-bold mb-4">Jane Doe</h2>
                    <p className="text-xl font-light mb-8">Editorial Photography & Video Production</p>
                    <p className="text-lg mb-8">
                        We believe that photography is not just a profession, but a form of art that requires
                        dedication, skill, and creativity. Our passion for photography is reflected in our work, and we
                        strive to deliver exceptional results.
                    </p>

                    {/* CTA button */}
                    <a
                        href="#portfolio"
                        className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        View Portfolio
                    </a>
                </div>
            </ParallexWrapper>
    );
};

export default Banner;
