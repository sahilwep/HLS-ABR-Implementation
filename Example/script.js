// Video player: 
document.addEventListener('DOMContentLoaded', function() {
    var player = videojs('my-video');
    player.ready(function() {
      player.play();
    });
  });
