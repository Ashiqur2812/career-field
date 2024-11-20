import React from 'react';
import Header from '../components/Header';
import Slider from './Slider';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <header >
                <Header></Header>
            </header>
            <main >
                <Slider></Slider>
                <div className='w-11/12 mx-auto'>
                    <Services></Services>
                </div>
            </main>
        </div>
    );
};

export default Home;