import React from 'react';
import Header from '../components/Header';
import { useLoaderData, useParams } from 'react-router-dom';
import Footer from '../Home/Footer';

const ServiceDetails = () => {

    const all = useLoaderData();
    console.log(all);
    const { services_id } = useParams();
    console.log(services_id);
    const data = all.find(service => service.services_id === services_id);
    console.log(data);
    // if (!data) {
    //     return (
    //         <div className="text-center py-20">
    //             <h1 className="text-2xl font-bold text-red-500">Service not found!</h1>
    //             <p>Please check the URL or try again later.</p>
    //         </div>
    //     );
    // }


    return (
        <div>
            <Header></Header>
            <main className='mt-32'>
                {/* <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8 rounded-lg shadow-lg">
                    <img src={data.image} alt="" />
                    <h1 className="text-4xl font-bold">
                        {data.serviceName}
                    </h1>
                    <p className="mt-4 text-lg">{data.description}</p>
                </div>
                <h2 className="text-3xl mt-20 text-black"></h2> */}
                {/* <div class="bg-gray-100 p-4">
                    
                    <div class="relative bg-white shadow-lg rounded-lg p-6">
                        <img src="" alt="" class="rounded-lg w-full h-60 object-cover" />
                        <div class="absolute top-6 left-6 bg-indigo-600 text-white px-3 py-1 rounded">
                            Online / Offline
                        </div>
                        <h1 class="text-3xl font-bold mt-4 text-gray-800">Career Counseling Session</h1>
                        <p class="text-gray-600 mt-2">Empowering you to achieve your professional goals.</p>
                    </div>


                    <div class="grid md:grid-cols-2 gap-6 mt-8">

                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <h2 class="text-2xl font-semibold text-indigo-600">Service Details</h2>
                            <ul class="mt-4 space-y-2">
                                <li><strong>Category:</strong> Online</li>
                                <li><strong>Pricing:</strong> $50</li>
                                <li><strong>Duration:</strong> Dec 5, 2024, 5:00 PM - 6:00 PM</li>
                                <li><strong>Counselor:</strong> Jane Doe</li>
                                <li><strong>Rating:</strong> ⭐⭐⭐⭐ (4.5/5)</li>
                            </ul>
                        </div>
                      
                        <div class="bg-white shadow-lg rounded-lg p-6">
                            <h2 class="text-2xl font-semibold text-indigo-600">About the Service</h2>
                            <p class="mt-4 text-gray-700">
                                This session is designed to provide personalized guidance to help you navigate your career choices effectively. Whether you are just starting out or considering a career switch, this service is tailored to meet your unique needs.
                            </p>
                        </div>
                    </div>

                   
                    <div class="bg-white shadow-lg rounded-lg p-6 mt-8">
                        <h2 class="text-2xl font-semibold text-indigo-600">Feedback & Comments</h2>
                        <form class="mt-4">
                            <textarea
                                class="w-full h-24 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                                placeholder="Write your feedback here..."
                            ></textarea>
                            <button
                                type="submit"
                                class="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
                            >
                                Submit Feedback
                            </button>
                        </form>
                        <div class="mt-6 space-y-4">
                            <div class="p-4 bg-gray-50 border rounded-lg">
                                <strong>User 1:</strong> This service was incredibly helpful! Highly recommended.
                            </div>
                            <div class="p-4 bg-gray-50 border rounded-lg">
                                <strong>User 2:</strong> Great insights into career development.
                            </div>
                        </div>
                    </div>

                   
                    <div class="mt-8 text-center">
                        <button
                            class="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700"
                        >
                            Book Now
                        </button>
                    </div>
                </div> */}

                <div class="bg-gray-50 min-h-screen flex flex-col items-center">
                
                    <section class="relative w-full bg-white shadow-md">
                        <div class="grid md:grid-cols-2 items-center pb-24">
                          
                            <div class="w-[33rem] ml-24 bg-cover bg-center ">
                                <img src={data.image} alt="" />
                            </div>
                         
                            <div class="p-8">
                                <h1 class="text-4xl font-bold text-indigo-600 mb-4">{data.serviceName}</h1>
                                <p class="text-gray-700 mb-6">
                                    {data.description}
                                </p>
                                <ul class="space-y-2 text-gray-600">
                                    <li>Category: {data.category}</li>
                                    <li>Pricing: {data.pricing}</li>
                                    <li>Duration: {data.pricing}</li>
                                    <li>Counselor: {data.counselor}</li>
                                </ul>
                                <button class="mt-6 px-6 py-3 bg-indigo-600 text-white rounded shadow-md hover:bg-indigo-700">
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Key Features Section --> */}
                    <section class="mt-12 w-11/12 max-w-6xl">
                        <h2 class="text-3xl font-bold text-gray-800 text-center mb-6">Why Choose This Service?</h2>
                        <div class="grid md:grid-cols-3 gap-8">
                            <div class="p-6 bg-white shadow-md rounded-lg">
                                <h3 class="text-lg font-bold text-indigo-600 mb-3">Affordable Pricing</h3>
                                <p class="text-gray-600">Get top-notch career advice at an accessible price point.</p>
                            </div>
                            <div class="p-6 bg-white shadow-md rounded-lg">
                                <h3 class="text-lg font-bold text-indigo-600 mb-3">Expert Guidance</h3>
                                <p class="text-gray-600">Work with experienced counselors who understand your needs.</p>
                            </div>
                            <div class="p-6 bg-white shadow-md rounded-lg">
                                <h3 class="text-lg font-bold text-indigo-600 mb-3">Flexible Scheduling</h3>
                                <p class="text-gray-600">Choose session times that work best for your busy schedule.</p>
                            </div>
                        </div>
                    </section>

                    {/* <!-- User Reviews Section --> */}
                    <section class="mt-12 w-11/12 max-w-6xl bg-white shadow-lg rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
                        <div class="">
                            {/* <!-- Swiper Slide 1 --> */}
                            <div class=" bg-gray-50 p-6 rounded-lg shadow">
                                <p class="text-gray-700 italic">"This session helped me gain clarity in my career direction. Highly recommended!"</p>
                                <p class="mt-4 text-sm font-semibold text-indigo-600">- {data.counselor}</p>
                            </div>
                        </div>
                    </section>

                    {/* <!-- Feedback Section --> */}
                    <section class="mt-12 w-11/12 max-w-4xl bg-white shadow-lg rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">Leave a Feedback</h2>
                        <form>
                            <textarea
                                class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600"
                                placeholder="Write your feedback..."
                            ></textarea>
                            <button
                                type="submit"
                                class="mt-4 bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
                            >
                                Submit
                            </button>
                        </form>
                    </section>

                    {/* <!-- Sticky Footer CTA --> */}
                    {/* <footer class="fixed bottom-4 right-4">
                        <button class="bg-green-600 text-white px-8 py-3 rounded-lg shadow hover:bg-green-700">
                            Book Now
                        </button>
                    </footer> */}
                    <div className='mt-32'>
                        <Footer></Footer>
                    </div>
                    
                </div>
            </main>
        </div>
    );
};

export default ServiceDetails;