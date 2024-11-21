import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#432E54] text-white py-2 overflow-hidden">
            <div className="container mx-auto text-center space-y-4">
                {/* Social Media Links */}
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://www.linkedin.com/in/the-nimrasaeed/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF7A8A] transform hover:scale-110 transition-transform duration-300"
                    >
                        <i className="fab fa-linkedin text-2xl"></i> {/* LinkedIn */}
                    </a>
                    <a
                        href="https://github.com/nimrasaeed54"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF7A8A] transform hover:scale-110 transition-transform duration-300"
                    >
                        <i className="fab fa-github text-2xl"></i> {/* GitHub */}
                    </a>
                    <a
                        href="mailto:nimraasaeed54@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF7A8A] transform hover:scale-110 transition-all duration-300"
                    >
                        <i className="fas fa-envelope text-2xl"></i> {/* Email Icon */}
                    </a>

                </div>
                <p className="text-sm text-[#F3f3f3]">
                    © {new Date().getFullYear()} Nimra Saeed. All rights reserved.
                </p>
                <a
                    href="#top"
                    className="block text-white hover:text-[#FF7A8A] font-semibold transform hover:scale-110 transition-transform duration-300"
                    style={{ display: "inline-block", margin: "0 auto" }}
                >
                    Back to Top
                </a>
            </div>
        </footer>
    );
};

export default Footer;
