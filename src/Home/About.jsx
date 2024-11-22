import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from './Footer';

const About = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);


    return (
        <div>
            <Header></Header>
            <div className="bg-gray-100 py-12 px-6 lg:px-24 mt-20">
                <section className="text-center mb-12">
                    <h1 className="text-4xl lg:text-6xl font-bold text-indigo-700 mb-4">
                        Empowering Futures. Connecting Careers.
                    </h1>
                    <p className="text-lg lg:text-xl text-gray-600">
                        CareerField guides you to make informed decisions and achieve your professional goals.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">Your Career Journey</h2>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-around">
                        {services.map((item, idx) => (
                            <div key={idx} className="bg-white shadow-lg rounded-lg p-6 mb-6 lg:mb-0 lg:w-1/4 text-center transform transition-transform hover:scale-105">
                                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{item.serviceName}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="flex flex-col lg:flex-row justify-center items-center mb-12 gap-8">
                    <div className="bg-white shadow-md rounded-lg p-8 text-center w-full lg:w-1/3">
                        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Our Mission</h2>
                        <p className="text-gray-600">
                            To provide personalized, accessible career counseling for everyone, helping individuals achieve their fullest potential.
                        </p>
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-8 text-center w-full lg:w-1/3">
                        <h2 className="text-3xl font-semibold text-indigo-700 mb-4">Our Vision</h2>
                        <p className="text-gray-600">
                            A world where everyone has the guidance and confidence to pursue their dream career.
                        </p>
                    </div>
                </section>
                <section className="text-center mb-12">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Users Say</h2>
                    <div className="carousel w-full">
                        <div className="carousel-item relative w-full flex flex-col items-center">
                            <p className="text-gray-600 italic mb-4">
                                "CareerField helped me understand my potential and land my dream job!"
                            </p>
                            <span className="font-bold text-indigo-700">— Jane Doe</span>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;