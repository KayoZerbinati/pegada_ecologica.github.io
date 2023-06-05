window.addEventListener('DOMContentLoaded', function() {
  var startButton = document.getElementById('startButton');

  startButton.addEventListener('click', function() {
    if (window.innerWidth <= 600) {
      // Redirecionar para a página mobile/index.html
      window.location.href = 'mobile/index.html';
    } else {
      // Redirecionar para a página tech_hub/index.html
      window.location.href = 'tech_hub/index.html';
    }
  });
});
