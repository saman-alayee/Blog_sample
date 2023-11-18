import { BiSearchAlt } from 'react-icons/bi';

const HeroSearchBar = () => {
    return (
        <div className='md:text-xl text-sm font-semibold p-4 flex rounded-lg'>
            <input type="text" placeholder='search' className='text-black dark:text-white outline-none p-3 rounded-s-lg' />
            <div className='bg-gradient-to-tr from-blue-400 to-violet-500 dark:from-blue-800 dark:to-violet-800 hover:to-violet-600 dark:hover:to-violet-900 p-2 flex justify-center items-center rounded-e-lg cursor-pointer transition-all duration-300'>
                <button className='md:text-2xl text-xl'><BiSearchAlt /></button>
            </div>
        </div>
    );
};

export default HeroSearchBar;