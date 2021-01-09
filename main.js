// var inc = 1000;
// clock();
//  function clock(){
//      const date = new Date();
//      console.log(date);
//      const hours = ((date.getHours() + 11)%12 +1);
//      const minutes = date.getMinutes();
//      const seconds = date.getSeconds();
//      const hour = hours*30;
//      const minute = minutes*6;
//      const second = seconds*6;
//      const h = (hours <10)?"0" +hours:hours;
//      const m = (minutes <10 )?"0 "+ minutes:minutes;
//      document.querySelector(".hours").innerHTML = h;
//      document.querySelector('.mins').innerHTML = m;
//      
//      document.querySelector('.hour').style.transform =`rotate(${hour}deg)`
//      document.querySelector('.minute').style.tranform = `rotate(${minute}deg)`
//      document.querySelector('.second').style.tranform = `rotate(${second}deg)`
//      document.getElementById("demo").innerHTML = d.toDateString();
//      id ="todat-date"

//  }
//  setInterval(clock,inc);
var inc = 1000;
clock();
function clock() {
  const date = new Date();
  const hours = ((date.getHours() + 11) % 12 + 1);
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const h = (hours < 10) ? "0" + hours : hours;
  const m = (minutes < 10) ? "0" + minutes : minutes;
  document.querySelector('.hours').innerHTML = h;
  document.querySelector('.mins').innerHTML = m;
  document.querySelector('.today-date').innerHTML = date.toDateString();   document.querySelector('.todays-date').innerHTML = date.toDateString();
  document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
  document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
  document.querySelector('.second').style.transform = `rotate(${second}deg)`
}

setInterval(clock, inc);
