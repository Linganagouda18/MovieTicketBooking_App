import React from 'react'
import AdminSidebar from '../../components/admin/AdminSidebar'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../../components/admin/AdminNavbar'
const Layout = () => {
  return (
    <>
      <AdminNavbar />

      <div className='flex'>
        <AdminSidebar />
        <div className='flex1 px-4 py-10 md:px-10 h-[calc(100vh-64px)] overflow-y-auto'>
            <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout
