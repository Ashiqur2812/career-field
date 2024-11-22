import React, { useContext } from 'react';
import banner from '../assets/career.jpg';
import { BsGithub } from 'react-icons/bs';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import banner4 from "../assets/banner4.jpg";
import { AuthContext } from '../provider/AuthProvider';

const Slider = () => {
    const { githubAuth } = useContext(AuthContext);

    const slideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };

    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen p-8">

                <div className="lg:w-1/2 w-full flex justify-center items-center">
                    <img
                        src={banner}
                        className="rounded-lg shadow-lg w-[20rem] lg:w-[25rem] object-cover"
                        alt=""
                    />
                </div>

                <div className="lg:w-1/2 w-full mt-8 lg:mt-0 lg:pl-12 text-center lg:text-left">
                    <h1 className="text-4xl font-bold text-gray-800">
                        Welcome to <span className="text-base-200">CareerField</span>
                    </h1>
                    <p className="mt-4 text-base-content">
                        Unlock your potential with expert career guidance tailored to your
                        aspirations. Discover the right path and take the next step toward a
                        brighter future!
                    </p>
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Sign in to Get Started:
                        </h3>
                        <div className=" lg:space-x-4">
                            {/* <button className="btn bg-[#E7E7E7] w-full lg:w-auto mb-4 lg:mb-0 text-base e">
                                <FcGoogle />Login with Google
                            </button> */}
                            <button onClick={githubAuth} className="btn bg-[#E7E7E7] w-full lg:w-auto mb-4 lg:mb-0 text-base ">
                                <BsGithub /> Login with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gradient-to-r from-gray-800 via-teal-500 to-blue-900 min-h-screen flex items-center justify-center">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 4000 }}
                    loop
                    className="w-full max-w-7xl"
                >
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Empower Your Career</h1>
                                <p className="text-lg">
                                    Unlock the best opportunities with expert career advice and personalized guidance.
                                </p>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner1}
                                    alt="Career Guidance"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Expert Resume Building</h1>
                                <p className="text-lg">
                                    Get professional tips to make your resume stand out and land your dream job.
                                </p>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner2}
                                    alt="Resume Building"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Ace Your Interviews</h1>
                                <p className="text-lg">
                                    Practice with experts and prepare to impress in your next interview.
                                </p>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner3}
                                    alt="Interview Prep"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
                            <motion.div
                                className="p-8 text-center lg:text-left text-white space-y-6"
                                variants={slideVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <h1 className="text-4xl lg:text-6xl font-bold">Ace Your Interviews</h1>
                                <p className="text-lg">
                                    Practice with experts and prepare to impress in your next interview.
                                </p>
                            </motion.div>
                            <div className="overflow-hidden">
                                <motion.img
                                    src={banner4}
                                    alt="Interview Prep"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;