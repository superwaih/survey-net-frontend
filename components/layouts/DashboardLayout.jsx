import React from 'react'

const DashboardLayout = () => {
  return (
    <div className='flex w-full min-h-screen'>
        <div className='max-w-[400px] w-full py-4 bg-yellow-600'>
            <div>
                company logo
            </div>
            sidebar
        </div>
        <div className='w-full'>
            <div className='bg-blue-300 py-8 shadow-md'>
            maind
            <button>List new property</button>
            </div>

        </div>
    </div>
  )
}

export default DashboardLayout