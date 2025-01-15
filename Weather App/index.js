// https://www.flaticon.com/free-icons/weather


let input=document.querySelector("input")
let btn=document.querySelector("button")
let citytext=document.querySelector("#cityid")
let degreevalue=document.querySelector("#degree")
let cloudname=document.querySelector("#desc")
let currentdate=document.querySelector("#date")
let img=document.querySelector("#img")
let box=document.querySelector(".LOWERLAYER")


let dt=new Date()


let speed=document.querySelector("#speed")
let hum=document.querySelector("#hum")
let tem=document.querySelector("#tem")
let sunrise=document.querySelector("#Sunrise")
let sunset=document.querySelector("#sunset")



const apikey = '2b333c389dd8bbb97a1f70f4cb8ad471';  


btn.addEventListener("click",()=>{
  
  let city=input.value
  

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    
    degreevalue.textContent=Math.round(data.main.temp)+"°C"
    citytext.textContent=`${data.name}-${data.sys.country} `
    cloudname.textContent=data.weather[0]["description"] 
    currentdate.textContent=dt.toDateString()
    
    speed.textContent=data.wind.speed
    hum.textContent=data.main.humidity+"%"
    tem.textContent=Math.round(data.main.temp)+"°C"
    sunrise.textContent=data.sys.sunrise.toString().slice(2, 6)
    sunset.textContent=data.sys.sunset.toString().slice(2, 6)
   

    if(data.weather[0]["main"]=="Clouds"){
       img.src="cloudy.png"
    }
    
    if(data.weather[0]["main"]=="Clear"){
      img.src="sunny.png"
   }
   if(data.weather[0]["main"]=="Rain"){
    img.src="storm.png"
 }
 if(data.weather[0]["main"]=="Drizzle"){
  img.src="cloudy(1).png"
}
if(data.weather[0]["main"]=="Mist"){
  img.src="haze.png"
}

box.style="display:Flex"

  })
  .catch((error) => {
    console.error('Error fetching weather data:', error);
  })
})







 
  


