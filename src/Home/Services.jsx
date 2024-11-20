import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Services() {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div>
            {/* <h2 className='text-center mb-4 text-3xl font-semibold'>All Services ({services.length})</h2>
            <div className='flex flex-col *:w-96 gap-4'>
            {
                services.map(service=><button className='btn ' key={service.service_id}>{service.serviceName}</button>)
            }
           </div> */}
            <div className="py-10">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => (
                        <NavLink to={`/service/${service.services_id}`} key={idx} className="p-4 border rounded-lg shadow hover:shadow-lg transition hover:scale-105">
                            <img src={service.image} alt='' className="w-full h-48 object-cover mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{service.serviceName}</h3>
                            <p className="text-gray-600">{service.description}</p>
                            <p className="font-bold mt-2">{service.pricing}</p>
                            <button className="btn btn-link mt-4 text-primary">
                                <a href={service.learnMore}>Learn More</a>
                            </button>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;