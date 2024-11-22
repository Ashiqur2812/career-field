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
    
    return (
        <div>
            <Header></Header>
            <main className='mt-32'>
                <div class="bg-gray-50 min-h-screen flex flex-col items-center">
                    <section class="relative w-full bg-white shadow-md">
                        <div class="grid md:grid-cols-2 items-center pb-24">
                            <div class="md:w-[33rem] md:ml-24 bg-cover bg-center ">
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
                    <section class="mt-12 w-11/12 max-w-6xl bg-white shadow-lg rounded-lg p-8">
                        <h2 class="text-3xl font-bold text-gray-800 mb-6">What Our Users Say</h2>
                        <div class="">
                            <div class=" bg-gray-50 p-6 rounded-lg shadow">
                                <p class="text-gray-700 italic">"This session helped me gain clarity in my career direction. Highly recommended!"</p>
                                <p class="mt-4 text-sm font-semibold text-indigo-600">- {data.counselor}</p>
                            </div>
                        </div>
                    </section>
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
                    <div className='mt-32'>
                        <Footer></Footer>
                    </div>
                    
                </div>
            </main>
        </div>
    );
};

export default ServiceDetails;