import React from 'react';
import Link from 'next/link';
import { AiOutlineLineChart, AiFillStar } from 'react-icons/ai';
import LinkItem from './LinkItem';
import MenuItem from './MenuItem';
import DarkMode from './DarkMode';

function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto h-20">
      <Link href="/" className='flex items-center gap-1 text-xl font-bold py-1 px-2 hover:text-blue-500 transition-colors duration-300'>
        NextScene
      </Link>

      <div className="flex items-center gap-5">
        <div className='flex gap-6'>
          <MenuItem title="Em alta" address="/" Icon={AiOutlineLineChart} />
          <LinkItem title="Bem avaliados" param='top_rated' Icon={AiFillStar} />
        </div>
        <DarkMode />
      </div>
    </div>
  );
}

export default Header;
