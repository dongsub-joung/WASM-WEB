window.onload = function() {
    const kindWrap =  document.querySelector('.kind_wrap');
    const slider = kindWrap.querySelector('.slider');
    const slideLis = slider.querySelectorAll('li')
    const moveButton = kindWrap.querySelector('.arrow');
  
    const liWidth = slideLis[0].clientWidth;
    const sliderWidth = liWidth * slideLis.length;
    slider.style.width = `${sliderWidth}px` ;
  
    let currentIdx = 0; 
    let translate = 0; 
    moveButton.addEventListener('click', moveSlide);
  
    function moveSlide(event) {
      event.preventDefault();
      if (event.target.className === 'next') {
        if (currentIdx !== slideLis.length -1) {
          translate -= liWidth;
          slider.style.transform = `translateX(${translate}px)`;
          currentIdx += 1;
        }
      } else if (event.target.className === 'prev') {
          if (currentIdx !== 0) {
            translate += liWidth;
            slider.style.transform = `translateX(${translate}px)`;
            currentIdx -= 1;
          }
        }
    }
  
  }