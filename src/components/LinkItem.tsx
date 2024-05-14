import Link from 'next/link';
import React from 'react';

interface LinkItemProps {
  title: string;
  param: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const LinkItem: React.FC<LinkItemProps> = ({ title, param, Icon }) => {
  return (
    <Link href={`/?genre=${param}`} passHref>
      <div className='hover:text-blue-500 transition-colors duration-300 cursor-pointer hover:font-semibold'>
        <Icon className='text-2xl sm:hidden' />
        <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      </div>
    </Link>
  );
};

export default LinkItem;
