import React from 'react';
import { BiDonateBlood } from 'react-icons/bi'
import { useLoaderData } from 'react-router';

const Donate = () => {
    const project = useLoaderData()
    const { name, title, description, donated, image } = project;
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16   bg-gray-100 mb-10  text-gray-700">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={image} alt="" className="w-full h-60 sm:h-96   bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md   bg-gray-200">
                        <div className="space-y-2">
                            <p className='text-2xl hover:underline uppercase text-lime-500'>{name}</p>
                            <p rel="noopener noreferrer" className="inline-block text-2xl font-semibold sm:text-3xl">{title}</p>
                            <p className="text-xs   text-gray-400"> {description} </p>
                        </div>
                        <div className="flex justify-between">
                            <BiDonateBlood className='w-12 h-12 text-lime-500'></BiDonateBlood>
                            
                            <p className='text-2xl px-3 flex items-center font-semibold text-lime-500 border border-lime-500 bg-white flex-col py-2'>${donated}<p className='text-xs border border-lime-500 py-1 px-4 uppercase'>Total collected donation </p></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-3/4 mx-auto flex flex-col gap-5 my-10'>
                <p className='text-center text-3xl text-gray-500 '>Select an amount which you want to donate now!</p>
                <div className='grid grid-cols-4 gap-4'>
                    <p className='text-xl text-lime-500 font-semibold bg-gray-50 p-5 hover:bg-lime-500 hover:text-white duration-300 border-2 border-lime-500 text-center'>$500</p>
                    <p className='text-xl text-lime-500 font-semibold bg-gray-50 p-5 hover:bg-lime-500 hover:text-white duration-300 border-2 border-lime-500 text-center'>$1000</p>
                    <p className='text-xl text-lime-500 font-semibold bg-gray-50 p-5 hover:bg-lime-500 hover:text-white duration-300 border-2 border-lime-500 text-center'>$1500</p>
                    <p className='text-xl text-lime-500 font-semibold bg-gray-50 p-5 hover:bg-lime-500 hover:text-white duration-300 border-2 border-lime-500 text-center'>$2000</p>
                </div>
            </div>
        </div>
    );
};

export default Donate;