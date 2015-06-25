var movies = document.getElementsByClassName("movie");
var playButton = document.getElementById("playButton");
var noo = document.getElementById("noo");
var paused = false;


playButton.addEventListener("click", function() {
	if (paused == true) {
		noo.pause();
		noo.currentTime = 0;
		playButton.innerHTML = '<span class="glyphicon glyphicon-pause" aria-hidden="true"></span>';
		movies[0].removeAttribute("hidden");
		if (paused == true) {
			movies[0].className = "movie movie-rotate";
			movies[3].className = "movie movie-rotate";
			movies[5].className = "movie movie-rotate";
			movies[7].className = "movie movie-rotate";
		}
		movies[0].play();
		pause = false;
	} else {
		playButton.innerHTML = '<img src="img/yuno.png"> Y u stop ?';
		noo.play();
		paused = true;
	}
});

movies[0].onended = function() {
	movies[0].setAttribute("hidden", "");
	movies[2].removeAttribute("hidden");	
	movies[2].play();
};

movies[1].onended = function() {
	movies[1].setAttribute("hidden", "");
	movies[4].removeAttribute("hidden");	
	movies[4].play();
};

movies[2].onended = function() {
	movies[2].setAttribute("hidden", "");
	movies[6].removeAttribute("hidden");	
	movies[6].play();
};

movies[3].onended = function() {
	movies[3].setAttribute("hidden", "");
	movies[1].removeAttribute("hidden");	
	movies[1].play();
};

movies[4].onended = function() {
	movies[4].setAttribute("hidden", "");
	movies[5].removeAttribute("hidden");	
	movies[5].play();
};

movies[5].onended = function() {
	movies[5].setAttribute("hidden", "");
	movies[7].removeAttribute("hidden");	
	movies[7].play();
};

movies[6].onended = function() {
	movies[6].setAttribute("hidden", "");
	movies[3].removeAttribute("hidden");	
	movies[3].play();
};

movies[7].onended = function() {
	movies[7].setAttribute("hidden", "");
	playButton.innerHTML = "Again ?";
};



function moviesloading() {
	for (var i=0; i < 8; i++) { 
		movies[i].addEventListener("canplaythrough", readytoplay());
	}
}

var moviesloaded=0;

function readytoplay() {
	moviesloaded++;
	if (moviesloaded == 7) {
		playButton.innerHTML = '<span class="glyphicon glyphicon-play" aria-hidden="true"></span>';
	}
}

moviesloading();
