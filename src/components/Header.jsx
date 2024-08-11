import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiEllipsisVertical, HiMiniBars3BottomRight } from 'react-icons/hi2';

const Header = () => {
    const [categories, setCategories] = useState([]);
    const [showCategories, setShowCategories] = useState(false);

    return (
        <nav>
            <div className=' relative flex items-center justify-between mb-2'>
                <Link className='flex items-center justify-between gap-2' to="/">
                    <img src="/logo.svg" className='w-8 ' alt="Logo" />
                    <h1 className='text-white text-5xl tracking-tight cursor-pointer font-bold'> GIF-NINJA</h1>
                </Link>
                <div className='font-bold text-md flex gap-2 items-center'>
                {/* {categories} */}
                <Link className=' px-4 py-1 hover:gradient border-b-4 hidden lg:block '>
                    Reactions
                </Link>
                <button onClick={() => setShowCategories(!showCategories)}>
                    <HiEllipsisVertical
                        size={35}
                        className={`py-0.5 hover:gradient
                        ${showCategories ? "gradient" : ""} border-b-4 lg:block`}
                    />
                </button>

                <div className=' h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded'>
                    <Link to="/favourites"> Favourties GIFs</Link>
                </div>

                <button>
                    <HiMiniBars3BottomRight
                        size={30}
                        className='text-sky-400 block lg:hidden' />
                </button>
                </div>


                {showCategories &&(
                    <div className='absolute right-0 top-14 px-10 pt-6 pb-9 w-full  gradient z-20'>
                        <span>Categories</span>
                        <hr />
                        <div>
                            <Link className='font-bold'>Reactions</Link>
                        </div>
                    </div>
                )}
            </div>
            {/* {serach} */}
        </nav>
    );
}

export default Header;
