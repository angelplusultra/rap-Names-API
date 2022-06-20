const { response } = require("express")
const express = require ('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheeya Bin Abraham-Jospeh',
        'birthLocation': 'London,England'
    },
    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago,Illinois'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
    }
}
app.get('/', (request,response)=>{
    response.sendFile(__dirname + '/index.html')
})


app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])


    }else{
        response.json(rapppers['dylan'])
    }

    console.log(request.params.rapperName)
   // response.json(rappers)
})

app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}! You better go catch it bub hehuhehuhehuhehuhehuhe`)
})