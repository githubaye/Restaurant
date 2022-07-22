import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'


const app = express()

//Middleware// these are the things express is going to use

app.use(cors()) 
app.use(express.json())  // bodyparser -.> old method// 


app.use("/api/v1/restaurants",restaurants)
app.use('*',(req,res)=> res.status(404).json({error:"Status not bound"}))

export default app   
