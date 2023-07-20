import DashboardLayout from '@/components/layouts/DashboardLayout'
import { useUserContext } from '@/context/UserProvider'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Spinner from '@/components/reusables/Spinner'
const AdminPage = () => {
  const{loading, setLoading} = useUserContext()
  const [allUsers, setAllUsers] = useState([])
  const fetchAllUsers = async() =>{
    setLoading(true)
    try {
      const {data} = await axios.get("https://survey-net-backend.onrender.com/api/users/all")
      
      setAllUsers(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)

    }
  } 
  useEffect(() => {
    fetchAllUsers()
  },[])
  return (
    <DashboardLayout >
      {loading && (<Spinner />)}
      <div className='py-4 px-4  '>
        Showing Lists of all submitted Request
        <div className='grid gap-2 md:grid-cols-2'>
          {allUsers?.map((user) =>{
           return(
            <div
            className='py-3 border bg-[#F2FAFF] my-2 shadow-md px-2'
            key={user._id}>
            <div className='flex items-center gap-2'>
              <h3>Email:</h3>
            <h3 className='font-semibold'>{user.email}</h3>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='font-semibold'>Firstname:</h3>
              <p>{user.firstname}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='font-semibold'>Lastname:</h3>
              <p>{user.lastname}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='font-semibold'>Payment Status:</h3>
              <p className='text-red-500 italic'>{user.payment_status}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='font-semibold'>Verification Type:</h3>
              <p className='text-green-500 font-bold italic'>{user.verification_type === "cof_method" ? "Certificate of Occupancy" : "Surveyor Method"}</p>
            </div>
            <div className='flex items-center gap-2'>
              <h3 className='font-semibold'>Verification Status:</h3>
              <p className=' font-bold italic'>{user.status === true ? <span className='text-green-500'>Verified</span>  : <span className='text-red-500'>Not Verified</span>}</p>
            </div>
            <div>
              <h3>Document:</h3>
              <Image
                width={500}
                height={500}
                objectFit="cover"
                src={"http://res.cloudinary.com/dpw9sm15p/image/upload/v1689847062/ids/fu5kq17kdvpbloaqlxvb.jpg"}
                alt=""
              />
            </div>
            <div className='w-full'>
             <button className='py-3 rounded-md text-white px-2 w-full bg-green-500'> Verify Document</button>
            </div>
           <div>
           


           </div>

           </div>
           )
          })}
        </div>
      </div>
    </DashboardLayout>
  )
}

export default AdminPage