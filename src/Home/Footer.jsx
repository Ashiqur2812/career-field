import React from "react";
import { Link } from "react-router-dom";
import facebook from '../assets/fb.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import moment from "moment";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h2 className="text-lg font-bold text-purple-400">About CareerField</h2>
                        <p className="mt-2 text-sm">
                            CareerField is your go-to platform for personalized career guidance. We help you discover the right path
                            and provide the tools you need for success.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-purple-400">Quick Links</h2>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <Link to="/" className="hover:text-white transition">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="hover:text-white transition">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="hover:text-white transition">
                                    My Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="hover:text-white transition">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-purple-400">Get in Touch</h2>
                        <p className="mt-2 text-sm">Email: support@careerfield.com</p>
                        <p className="text-sm">Phone: +123-456-7890</p>
                        <div className="flex space-x-4 mt-4">
                            <img src={facebook} alt="" />
                            <img src={instagram} alt="" />
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-8"></div>
                <div className="text-center text-sm mt-4">
                    &copy; {moment().format("dddd, MMMM Do YYYY")} CareerField. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
