import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsCard = ({ project }) => {
    const { name, image, title } = project
    return (
        <div>
            <article className="flex flex-col bg-gray-100">
                <a rel="noopener noreferrer" href="# " aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full h-80 bg-gray-500" src={image} />
                </a>
                <div className="flex flex-col flex-1 p-6">
                    <a rel="noopener noreferrer" href="# " className=" text-lime-500 tracking-wider uppercase hover:underline  :text-violet-400 text-xl ">{name}</a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
                    <div className="flex flex-wrap justify-between pt-3 space-x-2  ">
                        <span className='text-xs text-gray-500'>last donate: June 1, 2020</span>
                        <Link to={`/donate/${project._id}`}><button className='text-white bg-lime-500 px-4 py-1 rounded-xl text-semibold text-xl hover:bg-lime-600 duration-200'>Donate</button></Link>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default ProjectsCard;