import { LayoutDashboardIcon, ListCollapseIcon, ListIcon, PlusSquareIcon } from 'lucide-react'
import React from 'react'

import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'
const AdminSidebar = () => {
    const user ={
       firstName : "admin",
       lastName : "User",
       imageUrl : assets.profile,
    }

    const adminNavlinks = [
        {
            name : "Dashboard",
            path : "/admin",
            icon : LayoutDashboardIcon        
        },
        {
            name : "Add shows",
            path : "/admin/add-shows",
            icon :PlusSquareIcon
        },
        {
            name : "List shows",
            path : "/admin/list-shows",
            icon : ListIcon
        },
        {
            name : "List Bookings",
            path : "/admin/list-bookings",
            icon : ListCollapseIcon
        },
    ]

  return (
    <div
    className='h-[calc(100vh-54px)] md:flex flex-col items-center pt-8 max-w-13 md:max-w-60 w-full border-r border-gray-300/20 text-sm'
    >
        <img src={user.imageUrl} alt=""
        className='h-9 md:h-14 w-9 md:w-14 rounded-full mx-auto '
        />

        <p className='mt-2 text-base max:md:hidden'>{user.firstName}{user.lastName}</p>

        <div className='w-full'>
            {adminNavlinks.map((link , index) =>(
                <NavLink key={index} to={link.path} end  className={({isActive}) => `relative flex items-center 
                max-md:justify-center gap-2 w-full py-2.5 min-md:pl-10 first:mt-6 text-gray-400 
                ${isActive && 'bg-red-400/15 text-bg-red-400 group'}`}>
                    {({isActive}) =>(
                        <>
                        <link.icon className='w-5 h-5'></link.icon>
                        <p className='max-md:hidden'>{link.name}</p>

                        <span className={`w-1.5 h-10 rounded-1 right-0 absolute ${isActive && 'bg-red-400'}`}></span>
                        </>
                    )}
                </NavLink>
            ))}
        </div>

    </div>
  )
}

export default AdminSidebar
