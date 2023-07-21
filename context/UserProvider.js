const { createContext, useContext, useState } = require("react");

const UserProvider = createContext()

export const useUserContext = () => useContext(UserProvider)

const UserProviderContext = ({children}) =>{
    const [userObject, setUserObject] = useState([])
    const [loading, setLoading] = useState(false)
    const[successMsg, setSuccessMessage] =useState("")
    const[paymentSuccess, setPaymentSuccess] = useState(false)
    const [submissionType, setSubmissionType] = useState("");
    const[reqData, setRegData] = useState([])
    return(
        <UserProvider.Provider
        value={{
        userObject,
        setUserObject,
        successMsg, setSuccessMessage,
        setRegData,
        paymentSuccess, setPaymentSuccess,
        reqData,
        loading,
        setLoading,
        submissionType,
         setSubmissionType
        }
        }
        >
            {children}
        </UserProvider.Provider>
    )
}
export default UserProviderContext;