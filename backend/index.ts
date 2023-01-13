import express from "express";
const app=express()
import cors from "cors"

app.use(cors())
app.use(express.json())

var tasks=[
    {id:1,task:"do algoexpert",prority:2},
    {id:2,task:"sleep",prority:3},
    {id:3,task:"eat",prority:1}
]

app.get('/app/:a/:b',(req,res)=>{
    var a=+req.params.a
    var b=+req.params.b
    var c:number=a+b;
    // res.send({max:c});
    res.send('<h1>'+c+'</h1>');
})

app.get('/taskss',(req,res)=>{
    res.send(tasks)
})
app.post('/tasks',(req,res)=>{
    
    tasks.push({
        task:req.body.task,
        id:req.body.id,
        prority:req.body.prority,
    })
    res.send(tasks)
})
app.delete('/tasks',(req,res)=>{

})

var a=0;
var b=0;
app.post('')

app.listen(3001);


