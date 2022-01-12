function openNav(){
  const nav = document.getElementById('navBar');
  console.log('its working');
  if(nav.className === 'navBar') {
    nav.className += 'responsive';
  } else {
    nav.className = 'navBar'
  }
}

const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', openNav);