import React from 'react';
import './Home.css'
import image from '../../Assets/images/medium-shot-smiley-kids-posing-together.jpg'
const Home = () => {
    return (
        <div className='relative img' >
            <img src={image} alt="" className='w-full' />
            <div className=' left-48 right-48 text-gray-100  text-center absolute top-1/2 uppercase'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-5xl font-extrabold'>Are You Ready to help?</h1>
                    <p className='text-2xl font-light  text-gray-100 uppercase'>Your donations enable Self Help Africa to help families across rural Africa to escape from <span className='text-4xl font-semibold text-gray-300'>hunger and poverty</span>.</p>
                </div>
                <button className='text-2xl py-4 px-9 bg-lime-600 mt-10 text-gray-100 rounded-3xl'>Donate Now!</button>
            </div>
        </div>
    );
};

export default Home;