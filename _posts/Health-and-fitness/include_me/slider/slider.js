// Slider



const slider = function () {
    const images = [
        {
          image:"https://people.com/thmb/CSmujKxnCksY0O26iFnD4woUfQo=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(216x0:218x2):format(webp)/6-435-9-b5b3f47607fd4479ac9b1e6db0bfb760.jpg",
          characterName:"Tarzan",        
          person:"MILES O'KEEFE",
          description: "The handsome actor only played Tarzan once. He starred opposite Bo Derek in the 1981 film Tarzan, the Ape Man, which was directed by his costar's then-husband John Derek.",
          year:"1981",
          link:"https://people.com/celebrity/actors-whove-played-tarzan-throughout-the-years/"
        },
        {
            image:"https://blankbooks.co.za/77232-large_default/die-arend-van-die-oerwoud-tanya-die-vegter-28.jpg",
            characterName:"Die Arend & Tanya",
            person:"Republican Press",
            year:"1970s",
            link:"https://blankbooks.co.za/woodstock/47940-die-arend-van-die-oerwoud-tanya-die-vegter-28.html"
    
        }
    ];
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots');
  
    let curSlide = 0;
    const maxSlide = slides.length;
  
    // Functions
    const createDots = function () {
      slides.forEach(function (_, i) {
        dotContainer.insertAdjacentHTML(
          'beforeend',
          `<button class="dots__dot" data-slide="${i}"></button>`
        );
      });
    };
  
    const activateDot = function (slide) {
      document
        .querySelectorAll('.dots__dot')
        .forEach(dot => dot.classList.remove('dots__dot--active'));
  
      document
        .querySelector(`.dots__dot[data-slide="${slide}"]`)
        .classList.add('dots__dot--active');
    };

  
  
    const goToSlide = function (slide) {
      slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
      );
    };
  
    // Next slide
    const nextSlide = function () {
      if (curSlide === maxSlide - 1) {
        curSlide = 0;
      } else {
        curSlide++;
      }
  
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const prevSlide = function () {
      if (curSlide === 0) {
        curSlide = maxSlide - 1;
      } else {
        curSlide--;
      }
      goToSlide(curSlide);
      activateDot(curSlide);
    };
  
    const init = function () {
      console.log("*** JS running ***");
      goToSlide(0);
      createDots();
  
      activateDot(0);
    };
    init();
  
    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);
  
    document.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') prevSlide();
      e.key === 'ArrowRight' && nextSlide();
    });
  
    dotContainer.addEventListener('click', function (e) {
      if (e.target.classList.contains('dots__dot')) {
        const { slide } = e.target.dataset;
        goToSlide(slide);
        activateDot(slide);
      }
    });
  };
  slider();