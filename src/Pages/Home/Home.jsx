import React from 'react';
import { SiPolymerproject, SiGoogleearth } from 'react-icons/si'
import { FaChild } from 'react-icons/fa'
import './Home.css'
import image from '../../Assets/images/medium-shot-smiley-kids-posing-together.jpg'
const Home = () => {
    return (
        <div>
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
            <div className='grid grid-cols-3 relative'>
                <div className='icon text-center flex flex-col gap-1 relative top-[-60px]  p-5 hover:bg-lime-500 duration-300 cursor-pointer hover:scale-105'>
                    <div className='bg-white  mx-auto rounded-full p-1 border-2 border-lime-500 w-20 h-20 flex justify-center items-center '>
                        <SiPolymerproject className='w-16 h-16 text-lime-500 border-2 border-lime-500 bg-white rounded-full p-1'></SiPolymerproject>
                    </div>
                    <h1 className='text-xl font-bold text-gray-500 uppercase'>Our Mission</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio doloribus tempora voluptates officia molestiae dolores atque, consequuntur incidunt nam laboriosam nihil dolor magni, non voluptatem sint, rem veritatis. Laudantium, sequi voluptatem. Quisquam aperiam fugiat et molestiae iure. Aliquid corrupti vero assumenda ut. Id sed quia labore placeat nemo culpa dicta.</p>
                </div>
                <div className='icon text-center flex flex-col gap-1 relative top-[-60px] p-5 hover:bg-lime-500 duration-300 cursor-pointer hover:scale-105'>
                    <div className='bg-white  mx-auto rounded-full p-1 border-2 border-lime-500 w-20 h-20 flex justify-center items-center '>
                        <FaChild className='w-16 h-16 text-lime-500 border-2 border-lime-500 bg-white rounded-full p-1'></FaChild>
                    </div>
                    <h1 className='text-xl font-bold text-gray-500 uppercase'>Help children</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio doloribus tempora voluptates officia molestiae dolores atque, consequuntur incidunt nam laboriosam nihil dolor magni, non voluptatem sint, rem veritatis. Laudantium, sequi voluptatem. Quisquam aperiam fugiat et molestiae iure. Aliquid corrupti vero assumenda ut. Id sed quia labore placeat nemo culpa dicta.</p>
                </div>
                <div className='icon text-center flex flex-col gap-1 relative top-[-60px]  p-5 hover:bg-lime-500 duration-300 cursor-pointer hover:scale-105'>
                    <div className='bg-white  mx-auto rounded-full p-1 border-2 border-lime-500 w-20 h-20 flex justify-center items-center '>
                        <SiGoogleearth className='w-16 h-16 text-lime-500 border-2 border-lime-500 bg-white rounded-full p-1'></SiGoogleearth>
                    </div>
                    <h1 className='text-xl font-bold text-gray-500 uppercase'>Save the earth</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio doloribus tempora voluptates officia molestiae dolores atque, consequuntur incidunt nam laboriosam nihil dolor magni, non voluptatem sint, rem veritatis. Laudantium, sequi voluptatem. Quisquam aperiam fugiat et molestiae iure. Aliquid corrupti vero assumenda ut. Id sed quia labore placeat nemo culpa dicta.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;