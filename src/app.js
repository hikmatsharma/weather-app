const path= require('path')
const express = require('express')
const  hbs = require('hbs')
const geocode = require('./util/geocode')
const forecast = require('./util/farecast')
const app = express()
const port = process.env.PORT || 3000
const pd = path.join(__dirname,'../public')
const  viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')



app.set('view engine','hbs')
app.set('views', viewsPath)

hbs.registerPartials(partialsPath)


app.use(express.static(pd))

app.get('',(req, res)=>{
    res.render('index',{
        name : 'Hikmat',
        title : 'Weather'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title: 'About Me',
        name : 'About me'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title: 'Help',
        errorMessage : 'Help msg here!!'
    })
})
app.get('/wather',(req, res)=>{
    if(!req.query.address){
     return res.send({
         error: 'provide an addressn!!'
     })
    }
    geocode(req.query.address,(error,{latitude, longitude, location}={})=>{
        if(error){
            return res.send({error})
        }
        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return res.send({error})
            }
            res.send({
                forecast: forecastData, location,
                address: req.query.address
            })
        })
    })
})
app.get('*',(req,res)=>{
    res.render('404',{
        title : '404',
        errorMessage : 'Page Not Found!!'
    })
})
app.listen(port, ()=>{
    console.log('server started on port '+ port)
})