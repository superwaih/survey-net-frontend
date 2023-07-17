const { createContext, useContext, useState } = require("react");

const UserProvider = createContext()

export const useUserContext = () => useContext(UserProvider)

const UserProviderContext = ({children}) =>{
    const [userObject, setUserObject] = useState([])
    const [loading, setLoading] = useState(false)
    const [submissionType, setSubmissionType] = useState("");
    return(
        <UserProvider.Provider
        value={{
        userObject,
        setUserObject,
        loading,
        setLoading,
        submissionType, setSubmissionType
        }
        }
        >
            {children}
        </UserProvider.Provider>
    )
}
export default UserProviderContext;