console.log("cccccc")
fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})
const weatherForm= document.querySelector('form')
const search = document.querySelector('input')
weatherForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const location = search.value
    fetch('http://localhost:3000/wather?address=' + location).then((response)=>{
        response.json().then((data)=>{
           if(data.error){
               console.log(data.error)
           }else{
               document.querySelector('.location').innerHTML= data.location
               document.querySelector('.curr').innerHTML= data.forecast.curr 
               document.querySelector('.min').innerHTML= data.forecast.mnm
               document.querySelector('.max').innerHTML= data.forecast.mxm
           }
        })
    })
})