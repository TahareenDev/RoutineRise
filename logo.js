window.addEventListener('load', () => {
  const splashScreen = document.querySelector('.splash-screen');
  const mainContent = document.querySelector('.main-content');

  // After 2 seconds, hide splash screen and show main content
  setTimeout(() => {
    splashScreen.style.display = 'none';
    mainContent.style.display = 'flex';
  }, 2000); // 2 seconds delay

  // After 6 seconds, redirect to main page
  setTimeout(() => {
    window.location.href = 'mainpage.html'; // Replace with your actual main page URL
  }, 6000); // 6 seconds delay
});
