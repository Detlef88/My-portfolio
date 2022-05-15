$(document).ready(function(){
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
  });
  $(window).on('scroll load',function(){
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }
  });
  $('a[href*="#"]').on('click',function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop : $($(this).attr('href')).offset().top,
    }, 500, 'linear');
  });
  var colors = ["#4933FF", "#F833FF", "#FF3357", "#FFBD33", "#92FF33", "#33CCFF", "#33FF83"];
  var accentColor = localStorage.getItem("style") ? localStorage.getItem("style") : 0;
  $(".color").click(function() {
    if (accentColor < colors.length) {
    $(":root").css("--accent", colors[accentColor]);
      localStorage.setItem('style', colors[accentColor]);
        accentColor++;
         if (accentColor == 7) {
            accentColor = 0;
          }
          $(":root").css("--next-accent", colors[accentColor]);
    }
  });
});

const themeBtn = document.querySelector('.theme');

function getCurrentTheme(){
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  localStorage.getItem('mode') ? theme = localStorage.getItem('mode') : null;
  return theme;
}

function loadTheme(theme){
  const root = document.querySelector(':root');
  if(theme === "light"){
    themeBtn.innerHTML = `<i class="fas fa-sun"></i>`;
  } else {
    themeBtn.innerHTML = `<i class="fas fa-moon"></i>`;
  }
  root.setAttribute('color-scheme', `${theme}`);
}

themeBtn.addEventListener('click', () => {
  let theme = getCurrentTheme();
  let audio;
  if(theme === 'dark'){
    audio = document.querySelector('.theme-audio--light-on');
    theme = 'light';
  } else {
    audio = document.querySelector('.theme-audio--light-off');
    theme = 'dark';
  }
  audio.currentTime = 0;
  audio.play();
  localStorage.setItem('mode', `${theme}`);
  loadTheme(theme);
})

window.addEventListener('DOMContentLoaded', () => {
  loadTheme(getCurrentTheme());
})
