import React from "react"
import {Link} from "react-router-dom"
import {Grid} from "@mui/material"
 export const Nav=()=>{
    return(
      <React.Fragment>
        <h1>Nav Item</h1>
        <Grid container spacing={1}>
          <Grid item xs={1}>
         <Link to="/counter">Counter</Link>
        </Grid>
          <Grid item xs={1}>
         <Link to="/api">Api</Link>
        </Grid>
        <Grid item xs={1}>
        <Link to="/todo">Todolist</Link>
        </Grid>
        <Grid item xs={1}>
        <Link to="/login">Loginpage</Link>
        </Grid>
        </Grid>
        <Grid item xs={1}>
        <Link to="/salmantask">Task</Link>
        </Grid>
      </React.Fragment>
    )

 }