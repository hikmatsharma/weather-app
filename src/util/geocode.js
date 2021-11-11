const request = require('request')
const geocode = (address, callback) =>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiaGlrbWF0c2hhcm1hIiwiYSI6ImNrdjNhcnZxODhkc2EzMnE2cW5waG54bXQifQ.ioaHLa8mhVsL2irTG_81Tg'
    request({url, json:true}, (err, {body})=>{
    if(err){
        callback(' unable to connect location')
    }else if(body.features.length===0){
        callback('unable to find ',undefined)
    }else{
        callback(undefined, {
            latitude: body.features[0].center[0],
            longitude: body.features[0].center[1],
            location: body.features[0].place_name
        })
    }
    
    
    })
    }
   
    module.exports = geocode