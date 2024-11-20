import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                {/* Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-bold text-purple-400">About CareerField</h2>
                        <p className="mt-2 text-sm">
                            CareerField is your go-to platform for personalized career guidance. We help you discover the right path
                            and provide the tools you need for success.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h2 className="text-lg font-bold text-purple-400">Quick Links</h2>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a href="/" className="hover:text-white transition">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-white transition">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="/profile" className="hover:text-white transition">
                                    My Profile
                                </a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-white transition">
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Socials */}
                    <div>
                        <h2 className="text-lg font-bold text-purple-400">Get in Touch</h2>
                        <p className="mt-2 text-sm">Email: support@careerfield.com</p>
                        <p className="text-sm">Phone: +123-456-7890</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 mt-8"></div>

                {/* Copyright */}
                <div className="text-center text-sm mt-4">
                    &copy; {new Date().getFullYear()} CareerField. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
