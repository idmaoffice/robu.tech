

function numbersCount(nameOfClass) {
    let number = document.querySelector(`.${nameOfClass}`),
      numberTop = number.getBoundingClientRect().top,
      start = +number.innerHTML, end = +number.dataset.max;

  window.addEventListener('scroll', function onScroll() {
      if(window.pageYOffset > numberTop - window.innerHeight) {
          this.removeEventListener('scroll', onScroll);
          if (end < 100) {
            let interval = setInterval(function() {
                number.innerHTML = ++start;
                if(start == end) {
                    clearInterval(interval);
                }
            }, 100);
          } else {
            let interval = setInterval(function() {
                number.innerHTML = ++start;
                if(start == end) {
                    clearInterval(interval);
                }
            }, 0.002);
          }
      }
  });
}


numbersCount('number');
numbersCount('number2');
numbersCount('number3')


const rotateBlock = (rotateId) => {
    var rect = document.getElementById(`${rotateId}`);
    var a = 1, b = 0, c = 0, d = 1, tx = 10, ty = 10, angle = 0, currentAngle;

    function getAngleToRAD(){
      if(angle === 360){
        angle = 0;
      }

      return angle++ * Math.PI / 180;
    }
    

    function update(){
      currentAngle = getAngleToRAD();

      rect.style.transform = 'matrix(' + Math.cos(currentAngle) + ',' + Math.sin(currentAngle) + ',' + -Math.sin(currentAngle) + ',' + Math.cos(currentAngle) + ',' + tx + ',' + tx + ')'
      window.requestAnimationFrame(update);
    }

    update();
}

const rotateBlockBack = (rotateId) => {
    var rect = document.getElementById(`${rotateId}`);
    var a = 1, b = 0, c = 0, d = 1, tx = 10, ty = 10, angle = 0, currentAngle;

    function getAngleToRAD(){
      if(angle === 360){
        angle = 0;
      }

      return angle-- * Math.PI / 180;
    }
    

    function update(){
      currentAngle = getAngleToRAD();

      rect.style.transform = 'matrix(' + Math.cos(currentAngle) + ',' + Math.sin(currentAngle) + ',' + -Math.sin(currentAngle) + ',' + Math.cos(currentAngle) + ',' + tx + ',' + tx + ')'
      window.requestAnimationFrame(update);
    }

    update();
}

rotateBlock('rotateBg2')
rotateBlockBack('rotateBg3')
rotateBlock('rotateBg4')
rotateBlockBack('rotateBg5')


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}




