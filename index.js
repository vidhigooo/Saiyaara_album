var currentAudio = null;   // track current audio
var currentKey = null;     // track current song

var buttons = document.querySelectorAll(".song");

// Attach event listeners
buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    var buttonHTML = this.innerHTML.trim();
    toggleSound(buttonHTML);
  });
});

function toggleSound(key) {
  // If same song is already playing → stop it
  if (currentKey === key && currentAudio) {
    stopCurrent();
    return;
  }

  // Stop previous audio (if another is playing)
  stopCurrent();

  // Start new audio
  switch (key) {
    case "saiyaaraa":
      currentAudio = new Audio("sounds/saiyaaraa_1.mp3");
      break;

    case "barbaad":
      currentAudio = new Audio("sounds/barbaad_1.mp3");
      break;

    case "tum ho toh":
      currentAudio = new Audio("sounds/tum_ho_toh_1.mp3");
      break;

    default:
      console.log("No match for: " + key);
      return;
  }

  currentKey = key;
  currentAudio.play();
}

function stopCurrent() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
    currentKey = null;
  }
}
