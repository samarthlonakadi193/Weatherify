const apiKey="6a4c033b8a8010e7b65d70402964760b";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const srchCity=document.querySelector(".search input");
const srchBtn=document.querySelector(".search button");
const wiCon=document.querySelector(".weather-icon");
const imgs=document.querySelector(".imgs");
const bcolor=document.querySelector("body");
imgs.style.animationPlayState='paused';
const colorMap = {
    sunny: '#87CEEB',
    drizzle: '#B0C4DE',
    rain: '#4682B4',
    mist: '#D3D3D3',
    cloudy: '#D8D8D8',
    snow:'#fffafa',
    haze:'#F0F0F0',
  };
async function weatherstatus(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector(".errormsg").style.display="block";
        document.querySelector(".weather").style.display="none";

    }else{var data= await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML=data.name+", "+data.sys.country;
        document.querySelector(".temp").innerHTML=Math.floor(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";
        document.querySelector("#status").innerHTML=data.weather[0].description;

        if(data.weather[0].main == "Clear"){
            bcolor.style.backgroundColor=colorMap["sunny"];
            wiCon.src="weather-app-img/clear.png";     
            imgs.src="weather-app-img/sunlight1.png" ;
            imgs.style.display="block";
            imgs.style.animationPlayState='running';  

        }else if(data.weather[0].main==="Clouds"){
            bcolor.style.backgroundColor=colorMap["cloudy"];

            wiCon.src="weather-app-img/clouds.png";
            imgs.src="weather-app-img/cloudy.png" ;
            imgs.style.display="block";
            imgs.style.animationPlayState='running';

        }else if(data.weather[0].main==="Drizzle"){
            bcolor.style.backgroundColor=colorMap["drizzle"];

            wiCon.src="./weather-app-img/drizzle.png";
            imgs.src="./weather-app-img/updateswalkingin.png" ;
            imgs.style.display="block";
            imgs.style.animationPlayState='running';

        }else if(data.weather[0].main==="Rain"){
            bcolor.style.backgroundColor=colorMap["rain"];

            wiCon.src="./weather-app-img/rain.png";
            imgs.src="./weather-app-img/updateswalkingin.png";
            imgs.style.display="block";
            imgs.style.animationPlayState='running';

        }else if(data.weather[0].main==="Snow"){
            bcolor.style.backgroundColor=colorMap["snow"];
            wiCon.src="./weather-app-img/snow.png";
            imgs.src="./weather-app-img/snow1.png";
            imgs.style.display="block";
            imgs.style.animationPlayState='running';

        }else if(data.weather[0].main==="Mist"){
            bcolor.style.backgroundColor=colorMap["mist"];
            wiCon.src="./weather-app-img/mist.png";
            imgs.src="./weather-app-img/cloudy.png";
            imgs.style.display="block";
            imgs.style.animationPlayState='running';
        }else if(data.weather[0].main==="Haze"){
            bcolor.style.backgroundColor=colorMap["haze"];
            wiCon.src="./weather-app-img/mist.png";
            imgs.src="./weather-app-img/windy.png";
            imgs.style.display="block";
            imgs.style.animationPlayState='running';
        }else{
            bcolor.style.backgroundColor=colorMap["haze"];
            wiCon.src="weather-app-img/mist.png";
            imgs.src="weather-app-img/windy.png";
            imgs.style.display="block";
            imgs.style.animationPlayState='running';
        }
       document.querySelector(".weather").style.display="block";
       document.querySelector(".errormsg").style.display="none";
        }
    
}
srchBtn.addEventListener("click",()=>{
    imgs.style.display="none"
    weatherstatus(srchCity.value);
})
