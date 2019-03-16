const ACTIVE_CLASS = "carousel-container--movie__active";
const MOVIE_CLASS = "carousel-container--movie";
const LEFT_CLASS = "carousel--icon__left";
const RIGHT_CLASS = "carousel--icon__right";

function changeMovie(el, event) {
	const movies = Array.from(document.getElementsByClassName(MOVIE_CLASS));
	
	if (event.target.classList.contains(RIGHT_CLASS)) {
		moveRight(el, movies);
	}

	if (event.target.classList.contains(LEFT_CLASS)) {
		moveLeft(el, movies);
	}
}

function moveRight(el, movies) {
	movies.find((movie, index) => {
	if (index === movies.length - 1) {
		addRemoveClass(movies[0], movie);
		return movie;
	}
	if (movie === el) {
		addRemoveClass(movies[index + 1], movie);
		return movie;
		}
	});
}

function moveLeft(el, movies) {
	movies.find((movie, index) => {
		if (movie === el && index !== 0) {
			addRemoveClass(movies[index - 1], movie);
			return movie;
		}
		if (movie === el && index === 0) {
			addRemoveClass(movies[movies.length - 1], movie);
			return movie;
		}
	});
}

function addRemoveClass(currMovie, prevMovie) {
	currMovie.classList.add(ACTIVE_CLASS);
	prevMovie.classList.remove(ACTIVE_CLASS);
}