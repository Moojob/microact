function countdown(dateEnd) {
  var timer, days, hours, minutes, seconds;

  dateEnd = new Date(dateEnd).getTime();

  if (isNaN(dateEnd)) {
    return;
  }

  timer = setInterval(calculate, 1000);

  function calculate() {
    var currentDate = new Date().getTime();
    var timeLeft = dateEnd - currentDate;

    days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;


  }
}


window.onload = function() {
    var preloader = document.getElementsByClassName('preloader')[0];
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 2000);
};
