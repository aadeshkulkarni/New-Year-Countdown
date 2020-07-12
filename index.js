const days=document.getElementById("days");
const hours=document.getElementById("hours");
const mins=document.getElementById("mins");
const secs=document.getElementById("secs");
const countdown=document.getElementById("countdown");
const loading=document.getElementById("loading");


const year=document.getElementById("year");

const currentYear=new Date().getFullYear(); 
const NewYearTime=new Date(`January 01 ${currentYear+1} 00:00:00`);

// Set background year
year.innerText=currentYear+1;

// Update coundown
function updateCountdown(){
    const currentTime=new Date();
    const diff= NewYearTime-currentTime;
    console.log(diff);
    const d=Math.floor(diff/1000/60/60/24);
    const h=Math.floor(diff/1000/60/60)%24;
    const m=Math.floor(diff/1000/60)%60;
    const s=Math.floor(diff/1000)%60;

    days.innerHTML=d;
    hours.innerHTML=h<10?'0'+h:h;
    mins.innerHTML=m<10?'0'+m:m;
    secs.innerHTML=s<10?'0'+s:s;
}

// show spinner before countdown
setTimeout(()=>{
    loading.remove();
    countdown.style.display="flex";
},1000);
// Run every second
setInterval(updateCountdown,1000);

