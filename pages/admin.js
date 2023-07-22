import DashboardLayout from '@/components/layouts/DashboardLayout'
import { useUserContext } from '@/context/UserProvider'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Spinner from '@/components/reusables/Spinner'
import { toast } from 'react-toastify'
const AdminPage = () => {
  const{loading, setLoading} = useUserContext()
  const [allUsers, setAllUsers] = useState([])
  const[updateUsers, setUpdateUsers] = useState(false)
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
  const handleSuccessfulStatus = async(email) =>{
    setLoading(true)
    try {
      const {data} = await axios.put(`https://survey-net-backend.onrender.com/api/users/updatestatus/${email}`,
      {
        verified_status: true
      }
     
      )
      if(data.msg === "done"){
        toast.success(
          "User information is update",
          {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setLoading(false)
        setUpdateUsers(!updateUsers)

      }
    } catch (error) {
      setLoading(false)
      toast.error(
        "An error occured",
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      
    }

  }
  const handleDeclineStatus = async(email) =>{
    setLoading(true)
    
    try {
      const {data} = await axios.put(`https://survey-net-backend.onrender.com/api/users/updatestatus/${email}`,
      {
        verified_status: false
      }
     
      )
      if(data.msg === "done"){
        toast.success(
          "User request denied",
          {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        setLoading(false)
        setUpdateUsers(!updateUsers)
      }
    } catch (error) {
      setLoading(false)
      toast.error(
        "An error occured",
        {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        }
      );
      
    }

  }
  useEffect(() => {
    fetchAllUsers()
  },[updateUsers])
 
  return (
    <DashboardLayout >
      {loading && (<Spinner />)}
      <div className='py-4 px-4  '>
        Showing Lists of all submitted Request
        <div className='grid gap-2 md:grid-cols-2 lg:grid-cols-3 overflow-y-scroll'>
          {allUsers?.map((user) =>{
           return(
            <div
            className='py-3 border max-w-md space-y-2 rounded-md border-[#306BB1] text-black bg-white my-2 shadow-md px-2'
            key={user._id}>
            <div className='flex justify-between flex-col'>
              <h3 className='text-[#4C5561]'>Email:</h3>
            <h3 className='font-semibold text-[#283341] text-xl'>{user.email}</h3>
            </div>
            <div className='flex justify-between flex-col'>
              <h3 className='text-[#4C5561]'>Firstname:</h3>
              <p className='font-semibold text-[#283341] text-xl'>{user.firstname}</p>
            </div>
            <div className='flex justify-between flex-col'>
              <h3 className='text-[#4C5561]'>Lastname:</h3>
              <p className='font-semibold text-[#283341] text-xl'>{user.lastname}</p>
            </div>
            <div className='flex justify-between flex-col'>
              <h3 className='text-[#4C5561]'>Payment Status:</h3>
              <p className='font-semibold text-xl'>{user.payment_status === "pending" ? <span className='text-orange-500'>Pending</span> : <span className='text-green-600'>{user.payment_status}</span>}</p>
            </div>
            <div className='flex justify-between flex-col'>
              <h3 className='text-[#4C5561]'>Verification Type:</h3>
              <p className=' font-bold text-[#4C5561] text-xl'>{user.verification_type === "cof_method" ? "Certificate of Occupancy" : "Surveyor Method"}</p>
            </div>
            <div className='flex justify-between flex-col'>
              <h3 className='text-[#4C5561]'>Verification Status:</h3>
              <p className=' font-bold text-[#4C5561] text-xl'>{user.verified_status === true ? <span className='text-green-500'>Verified</span>  : <span className='text-red-500'>Not Verified</span>}</p>
            </div>
            <div>
              <h3>Document:</h3>
              <Image
                width={500}
                height={400}
                objectFit="cover"
                src={user.document[0]}
                alt=""
              />
            </div>

            <div className='w-full flex flex-col md:flex-row gap-2'>
              {user.verified_status === false && (<button onClick={() => handleSuccessfulStatus(user.email)} className='py-3 rounded-md text-white px-2 w-full bg-green-500'> Approve Document</button>)}
             <button onClick={() => handleDeclineStatus(user.email)} className='py-3 rounded-md text-white px-2 w-full bg-red-500'> Reject  Verification</button>


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