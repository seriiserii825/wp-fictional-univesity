class Search {
	// 1. Describe
	constructor() {
		this.openBtn = document.querySelector('.search-trigger');
		this.closeBtn = document.querySelector('.search-overlay__close');
		this.searchOverlay = document.querySelector('.search-overlay');
		this.events();
		this.overlayIsVisible = false;
	}

	// 2. Events
	events() {
		this.openBtn.addEventListener('click', this.openOverlay.bind(this));
		this.closeBtn.addEventListener('click', this.closeOverlay.bind(this));
		document.addEventListener('keydown', this.keyPressDispatcher.bind(this));
	}

	keyPressDispatcher(event) {
		if (event.key === 'Enter' && !this.overlayIsVisible) {
			this.openOverlay();
		} else if (event.key === 'Escape' && this.overlayIsVisible) {
			this.closeOverlay();
		}
	}

	// 3.Methods
	openOverlay() {
		document.body.classList.add('body-no-scroll');
		this.searchOverlay.classList.add('search-overlay--active');
		this.overlayIsVisible = true;
	}

	closeOverlay() {
		document.body.classList.remove('body-no-scroll');
		this.searchOverlay.classList.remove('search-overlay--active');
		this.overlayIsVisible = false;
	}
}
export default Search;
