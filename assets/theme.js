document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector(".hero-video");
  if (video) {
    video.addEventListener("ended", function() {
      video.pause();
    });
  }
});
