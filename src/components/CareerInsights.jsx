import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { AuthContext } from '../provider/AuthProvider';
import Header from './Header';
import Footer from '../Home/Footer';

const CareerInsights = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Header></Header>
            <div className="bg-gray-100 min-h-screen p-6 md:p-12 space-y-12 mt-20">
                <section className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-bold text-indigo-700 mb-4"
                    >
                        Welcome, {user?.displayName}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-gray-600 text-lg"
                    >
                        "Your future is created by what you do today!"
                    </motion.p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Recommended Career Paths</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="relative group perspective">
                                <div className="relative preserve-3d group-hover:rotate-y-180 duration-700 w-full h-64">
                                    <div className="absolute backface-hidden bg-white p-6 rounded-lg shadow-lg">
                                        <h3 className="text-xl font-semibold text-center">Career {index + 1}</h3>
                                        <p className="text-gray-600 mt-4 text-center">Explore this exciting career path!</p>
                                    </div>
                                    <div className="absolute backface-hidden bg-indigo-600 text-white p-6 rounded-lg shadow-lg rotate-y-180">
                                        <p>Additional details and insights about this career!</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-center">Your Progress</h2>
                    <div className="space-y-6">
                        {['Profile Setup', 'Skills Added', 'First Application'].map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                                className="flex items-center space-x-4"
                            >
                                <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                                    {index + 1}
                                </div>
                                <div className="flex-1 bg-white shadow-md p-4 rounded-lg">
                                    <h4 className="font-semibold">{step}</h4>
                                    <p className="text-gray-500">You have completed this step successfully!</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default CareerInsights;
