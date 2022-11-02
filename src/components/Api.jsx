import axios from "axios"
import React,{useState,useEffect} from "react"
import {Card,CardContent} from "@mui/material"
export const Api=()=>{
    const [data,setData]=useState([])
    const getData=async()=>{
        const result=await axios.get("https://jsonplaceholder.typicode.com/users")
        setData([result.data])
        console.log(result.data);
    }
    useEffect(()=>{
        getData()
    },[])
    return(
        <div>
            <h1>Api datafetch</h1>
        
         
                    {data.map((item)=>{
                        return(
                            
                            <React.Fragment>
                            <Card sx={{bgcolor:"pink" ,textAlign:"center"}}>
                                    <CardContent>
                                <h1>{item.name}</h1>
                                <h4>{item.username}</h4>
                                <h3>{item.compony}</h3>
                                <h3>{item.phone}</h3>
                                <h4>{item.id}</h4>
                                <h3>{item.email}</h3>
                                </CardContent>
                                </Card>
                                </React.Fragment>
                                
                      
                )
            })
          }

        </div>
    )
}