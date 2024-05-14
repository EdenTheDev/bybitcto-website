document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.fullscreen-image');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            var videoOverlay = document.getElementById('videoOverlay');
            var videoPlayer = document.getElementById('videoPlayer');
            videoOverlay.style.display = 'flex'; // Show the video overlay
            videoPlayer.play();
        });
    });

    var videoOverlay = document.getElementById('videoOverlay');
    videoOverlay.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent click from propagating to other elements
        var videoPlayer = document.getElementById('videoPlayer');
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoOverlay.style.display = 'none'; // Hide the video overlay
    });
});
