let digitalClock = () => {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amorpm = hours >= 12 ? 'pm' : 'am';

    




    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;

    setTimeout(digitalClock, 500);

} 

digitalClock();

window.onload = function() {
    clock();  
      function clock() {
      var now = new Date();
      var TwentyFourHour = now.getHours();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();
      var mid = 'pm';
      if (min < 10) {
        min = "0" + min;
      }
      if (hour > 12) {
        hour = hour - 12;
      }    
      if(hour==0){ 
        hour=12;
      }
      if(TwentyFourHour < 12) {
         mid = 'am';
      }     
    document.getElementById('currentTime').innerHTML =     hour+':'+min+':'+sec +' '+mid ;
      setTimeout(clock, 1000);
      }
  }
  