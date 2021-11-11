const request = require('request')
const forecast = (longitude,latitude, callback) =>{
    const url = 'https://api.openweathermap.org/data/2.5/find?lat='+latitude+'&lon='+longitude + '&cnt=1&units=metric&appid=b1b1a2d41c4647b8fcb40573a5b9e422'
    request({url, json:true}, (err, {body})=>{
        if(err){
            callback(' unable to connect to the service', undefined)
            }else if(body.cod == 404){
                callback('unable to find ttt ',undefined)
            }
            else {
                const curr=  body.list[0].main.temp
                const mnm = body.list[0].main.temp_min
                const mxm = body.list[0].main.temp_max
                //  callback(undefined, 'it is currently ' + body.list[0].main.temp + 'min : '  + body.list[0].main.temp_min + 'max : ' + body.list[0].main.temp_max)
            callback(undefined, {curr, mnm, mxm } )
            }
            })
        }



    module.exports = forecast