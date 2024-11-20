import React from 'react';
import Header from '../components/Header';
import Slider from './Slider';
import Services from './Services';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className='h-16'>
                <Header></Header>
            </div>
            <main >
                <Slider></Slider>
                <div className='w-11/12 mx-auto'>
                    <Services></Services>
                </div>
                <Footer></Footer>
            </main>
        </div>
    );
};

export default Home;