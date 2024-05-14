import Link from 'next/link'
import React from 'react'

interface MenuItemProps {
    title: string;
    address: string;
    Icon: React.ComponentType<{className?: string}>;
  }

  const MenuItem: React.FC<MenuItemProps> = ({ title, address, Icon }) => {
  return (
    <Link href={address}>
        <div className='hover:text-blue-500 transition-colors duration-300 cursor-pointer hover:font-semibold'>
          <Icon className='text-2xl sm:hidden'/>
          <p className='uppercase hidden sm:inline text-sm'>{title}</p>
      </div>
  </Link>
  )
}

export default MenuItem;