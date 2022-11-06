import React from 'react';
import { useLoaderData } from 'react-router';
import ProjectsCard from './ProjectsCard';
const Projects = () => {
    const projects = useLoaderData()
    return (
        <div>
            <h1 className='text-3xl font-semibold border-l-2 w-28 mx-auto px-3 py-2 border-b-2 border-lime-500 border-t-2 uppercase text-lime-500 text-center'>Projects</h1>
            <p className='text-gray-600 bg-gray-100 p-10 w-3/4 mx-auto my-5 text-center bg-opacity-70 text-lg shadow-2xl shadow-gray-200'>Right now our 6 projects are running successfully in the middle of the desert area! you can choose of the projects where you want to donate your fund!</p>
            <div className='grid grid-cols-3 gap-5 my-5'>
                {
                    projects.map(project => <ProjectsCard key={project.name} project={project}></ProjectsCard>)
                }
            </div>
            <div>
                <section className="my-8 bg-gray-100  text-gray-100">
                    <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16  text-lime-500">
                            <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                            <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                        </svg>
                        <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl  text-gray-500">"Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis."</p>
                        <div className="flex justify-center space-x-3">
                            <img src="https://source.unsplash.com/80x80/?portrait?1" alt="" className="w-20 h-20 bg-center bg-cover rounded-md  bg-gray-500  bg-gray-700" />
                            <div>
                                <p className="leading-tight">Leroy Jenkins</p>
                                <p className="text-sm leading-tight  text-gray-300">Founder, Company</p>
                                <a className="flex items-center py-2 space-x-1 text-sm  text-violet-400" href="/">
                                    <span>Read full story</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Projects;