import React from 'react'

const DashboardLayout = () => {
  return (
    <div className='flex w-full min-h-screen'>
        <div className='max-w-[400px] bg-[#F2FAFF]  w-full py-4 '>
            <div>
                company logo
            </div>
            sidebar
        </div>
        <div className='w-full'>
            <div className='bg-blue-300 flex w-full  py-8 shadow-md'>
            Welcome to admin page
            <button>List new property</button>
            </div>

        </div>
    </div>
  )
}

export default DashboardLayout