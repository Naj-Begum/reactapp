import React,{useState} from "react"
import {Grid,TextField,Button,Card,CardContent} from "@mui/material"
export const Todo=()=>{
    const [data,setData]=useState([])
    const [name,setName]=useState("")
    const [mobile,setMobile]=useState("")
    const [city,setCity]=useState("")

const handleAdd=()=>{
    
    const user = { name, mobile, city };
    setData([user,...data]);

    setName("")
    setCity("")
    setMobile("")
}
// const handleDelete=(index)=>{
//     const filtered=data.filter((elem,i)=>i !==index)
//     setData(filtered)
// }
// const handleEdit=()=>{

// }
    return(
        <div>
            <h1>Todolist</h1>
            <Grid container spacing={2}>
            <Grid item xs={6}>
            <TextField variant="outlined" fullWidth label="Add name"
            onChange={(e)=>setName(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
            <TextField variant="outlined" fullWidth label=" Enter MobileNo"
            onChange={(e)=>setMobile(e.target.value)}/>
            </Grid>
            <Grid item xs={2}>
            <TextField variant="outlined" fullWidth label="Enter City"
            onChange={(e)=>setCity(e.target.value)}/>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
            <Button variant="contained" fullWidth
            onClick={handleAdd}>Add</Button>
            </Grid>
            <Grid item xs={4}></Grid>
                         {/* { data.length > 0 && data.map((item,index)=>{
                            return(
                                
                                    <Grid item xs={3}>
                <Card sx={{bgcolor:"#B3FFAE",textAlign:"center"}}>
                    <CardContent>
                        <h1>{item.name}</h1>
                        <h1>{item.mobile}</h1>
                        <h1>{item.city}</h1>
                        <Button onClick={()=>handleDelete(index)}>Delete</Button>
                        <Button onClick={()=>handleEdit(item,index)}>Edit</Button>
                    </CardContent>
                </Card>

                        </Grid>
                
                            )
                        })} */}
            </Grid> 

        </div>
    )
}