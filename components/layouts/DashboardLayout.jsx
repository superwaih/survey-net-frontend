import React from 'react'

const DashboardLayout = ({children}) => {
  return (

    <div className='flex relative bg-[#FDFDFD]  mx-auto  h-screen'>
    <div className='flex-4'>
      {/* Sidebar */}
      <div className='bg-[#074DA2] hidden md:inline-block max-w-md w-[300px] py-8  h-screen rounded-r-[40px]'>
            <div className='flex items-center w-full py-2 px-4 font-bold italic'>
            <h3 className='text-xl text-center'>Effulgence Homes</h3>
            </div>
            sidebar
        </div>
  </div>

    <div className='flex flex-1 overflow-y-auto scrollbar-hide w-full  flex-col bg-generalbg'>
    <div className='bg-blue-300 flex w-full text-xl  py-8 px-4 shadow-md'>
            Welcome to admin page
            {/* <button>List new property</button> */}
            </div>
  <div className='bg-[#F7FAFD]'>
       
    {children}
  </div>
  

    </div>
    
   <div>
   </div>
</div>
  
  )
}

export default DashboardLayout