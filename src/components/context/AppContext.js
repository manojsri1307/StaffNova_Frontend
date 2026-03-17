import React, { createContext, useState } from "react";

export const Context = createContext()

const AppContext = ({children}) => {

    const [updateEmp, setUpdateEmp] = useState({})
    console.log("updateEmpppppp", updateEmp)


    return <Context.Provider value={{setUpdateEmp: setUpdateEmp, updateEmp: updateEmp}}>
        {children}
    </Context.Provider>
}

export default AppContext