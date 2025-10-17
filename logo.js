window.addEventListener('load', () => {
  const splashScreen = document.querySelector('.splash-screen');
  const mainContent = document.querySelector('.main-content');

  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainContent.style.display = 'flex';
  }, 2000); // 2 seconds delay

  setTimeout(() => {
    window.location.href = 'mainpage.html'; 
  }, 6000); 
});
