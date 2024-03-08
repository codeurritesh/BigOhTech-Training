import React, { useEffect, useState } from 'react'
import NavBar from '../components/shared/NavBar/NavBar'
import DisplayArea from '../components/shared/DisplayArea/DisplayArea'
import Footer from '../components/shared/Footer/Footer'
import { apiManagement } from '../services/ApiManagement'
import { Response } from '../dataTypes/Response'
import { MyContext } from '../context/MyContext'


const Home = () => {

    const [allUsers,setAllUsers] = useState<Response[] | undefined>(undefined)

const fetchData = async()=>{
    const allUserNames:string[]=["codeurritesh","sabeelhps","monukumar98","altruistcoder","adityaraj9110",""];
    allUserNames.forEach(async(userName)=>{
        if(userName==="")
        return
        const gitData:Response =await apiManagement.getUserData(userName);
        console.log(gitData)
        setAllUsers((oldUsers)=>{
            if(oldUsers)
            return [...oldUsers,gitData]
        return [gitData];
        });
    })
}

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <MyContext.Provider value={{allUsers:allUsers}}>
    <NavBar/>
    <DisplayArea/>
    <Footer/>
  </MyContext.Provider>
  )
}

export default Home