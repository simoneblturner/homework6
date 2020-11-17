var video;
var volume;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	volume = document.querySelector("#volume");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	volume.innerHTML = "100%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Video");
	video.playbackRate *= 0.9;
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log(video.playbackRate);
	video.playbackRate /= 0.9;
	console.log(video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	if ((video.duration - video.currentTime) > 5) {
		video.currentTime += 5 
	}
	else {
		video.currentTime = video.currentTime
	}
	console.log(video.currentTime) 
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log(video.muted)
	if (video.muted == false) {
		this.innerHTML = "Unmute"
		video.muted = true 
		}
	else {
		this.innerHTML = "Mute"
		video.muted = false
		}
	console.log(video.muted)
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log("Volume Slider");
	video.volume = this.value / 100
	console.log(this.value)
	volume.innerHTML = this.value + "%"
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

