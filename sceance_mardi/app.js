const express =require("express")
const PORT = 3000
const app = express()
app.use("/somme4",express.json())
//we can put it in the other middlewar it s much better
app.get("/somme",(req,res)=>{
  let nbr1 = req.header("nbr1")
  let nbr2 = req.header("nbr2")
  if(!nbr1 || !nbr2)
    return res.status(400).send("nbr1 and nbr2 are required")
  res.status(200).send((parseInt(nbr1)+parseInt(nbr2)).toString())
  
})
//query params
app.get("/somme2",(req,res)=>{
  let{nbr1,nbr2}= req.query
  /* let nbr1= req.query.nbr1

  */
  if(!nbr1 || !nbr2)
    return res.status(400).send("nbr1 and nbr2 are required")
  res.status(200).send((parseInt(nbr1)+parseInt(nbr2)).toString())
})

//params
app.get("/somme3/:nbr1/:nbr2",(req,res)=>{
  let{nbr1,nbr2}= req.params
  if(!nbr1 || !nbr2)
    return res.status(400).send("nbr1 and nbr2 are required")
  res.status(200).send((parseInt(nbr1)+parseInt(nbr2)).toString())
})


//body
app.get("/somme4",(req,res)=>{
  let{nbr1,nbr2}= req.body
  if(!nbr1 || !nbr2)
    return res.status(400).send("nbr1 and nbr2 are required")
  res.status(200).send((parseInt(nbr1)+parseInt(nbr2)).toString())
})
app.listen(PORT,()=>console.log("server start at:",PORT))