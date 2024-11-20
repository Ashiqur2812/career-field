import React from 'react';
import banner from '../assets/career.jpg'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const Slider = () => {
    return (
        <div>
            {/* <div className="carousel w-full mb-8 mt-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner} className="w-[50rem] object-cover " />
                    <div className="absolute bottom-5 left-5 text-white bg-opacity-50 bg-gray-800 p-4 rounded">
                        <h2 className="text-2xl font-bold">Plan Your Future with Us</h2>
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col lg:flex-row items-center justify-center bg-gray-100 min-h-screen p-8">
             
                <div className="lg:w-1/2 w-full flex justify-center items-center">
                    <img
                        src={banner}
                        className="rounded-lg shadow-lg w-[20rem] lg:w-[25rem] object-cover"
                        alt=""
                    />
                </div>

                <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome to <span className="text-blue-500">CareerField</span>
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Unlock your potential with expert career guidance tailored to your
                        aspirations. Discover the right path and take the next step toward a
                        brighter future!
                    </p>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Sign in to Get Started:
                        </h3>
                        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-4">
                            <button className="btn bg-[#E7E7E7] w-full lg:w-auto mb-4 lg:mb-0 text-base e">
                                <FcGoogle/>Login with Google
                            </button>
                            <button className="btn bg-[#E7E7E7] w-full lg:w-auto mb-4 lg:mb-0 text-base ">
                                <BsGithub/> Login with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;