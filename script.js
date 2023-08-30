const { setDefaultHighWaterMark } = require("tar/lib/read-entry");

const time=()=>{
    const currentTime=new Date()
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    var currenttime="";
    if(hours>12){
        currenttime = `${hours-12}:${minutes}:${seconds} pm`;
    }else{
        currenttime = `${hours}:${minutes}:${seconds} am`;
    }
    var Text=document.getElementsByClassName("Time")[0]
    if(Text.textContent=="Time"){
        Text.textContent=currenttime
        Text.style.backgroundColor="lightgreen"
        Text.style.borderRadius="1px"
    }
    else
    {
        Text.textContent="Time"
        Text.style.backgroundColor="tomato"
        Text.style.borderRadius="100%"
    }
}

 const hover=()=>{
    document.getElementsByClassName("Time")[0].style.backgroundColor="orange"
    document.getElementsByClassName("Time")[0].style.borderRadius="20px"
 }

 const reset=()=>{
    const currentTime=new Date()
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    var currenttime="";
    if(hours>12){
        currenttime = `${hours-12}:${minutes}:${seconds} pm`;
    }else{
        currenttime = `${hours-12}:${minutes}:${seconds} am`;
    }
    var Text=document.getElementsByClassName("Time")[0]
    if(Text.textContent!="Time"){
        Text.textContent=currenttime
        Text.style.backgroundColor="lightgreen"
        Text.style.borderRadius="1px"
    }
    else
    {
        Text.textContent="Time"
        Text.style.backgroundColor="tomato"
        Text.style.borderRadius="100%"
    }
}


const formsubmit= document.getElementsByClassName("dateform")[0]
formsubmit.addEventListener("submit", (event)=>{
    event.preventDefault();
    console.log(formsubmit)
   const Output= document.getElementById("ageoutput")
   Output.textContent="text"
})