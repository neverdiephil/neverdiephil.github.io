function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  

  var run = () => {
    document.querySelector('#photos').style.opacity = 0;
    var allImages = "";
  
    for (var i = 0; i < 25; i++) {
      var width = getRandomSize(200, 400);
      var height =  getRandomSize(200, 400);
      allImages += '<li><img src="https://placekitten.com/'+width+'/'+height+'" alt="pretty kitty"></li>';
    }
    document.querySelector('#photos').append(allImages);
    document.querySelector('#photos').style.opacity = 1;
  }
  run;
