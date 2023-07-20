import React from 'react'

const DashboardLayout = ({children}) => {
  return (
    <div className='flex w-full min-h-screen'>
        <div className='hidden md:flex flex-col max-w-[400px] bg-[#F2FAFF]  w-full py-4 '>
            <div className='flex items-center w-full py-2 px-4 font-bold italic'>
            <h3 className='text-xl text-center'>Effulgence Homes</h3>
            </div>
            sidebar
        </div>
        <div className='w-full'>
            <div className='bg-blue-300 flex w-full text-xl  py-8 px-4 shadow-md'>
            Welcome to admin page
            {/* <button>List new property</button> */}
            </div>
            {children}

        </div>
    </div>
  )
}

export default DashboardLayout