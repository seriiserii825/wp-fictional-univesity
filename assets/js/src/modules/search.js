class Search {
	// 1. Describe
	constructor() {
		this.openBtn = document.querySelector('.search-trigger');
		this.closeBtn = document.querySelector('.search-overlay__close');
		this.searchOverlay = document.querySelector('.search-overlay');
		this.searchField = document.querySelector('#search-term');
		this.resaultsDiv = document.querySelector('#search-overlay__results');
		this.events();
		this.overlayIsVisible = false;
		this.typingTimer = null;
		this.isSpinnerVisible = false;
		this.previeousValue = null;
	}

	// 2. Events
	events() {
		this.openBtn.addEventListener('click', this.openOverlay.bind(this));
		this.closeBtn.addEventListener('click', this.closeOverlay.bind(this));
		document.addEventListener('keydown', this.keyPressDispatcher.bind(this));
		this.searchField.addEventListener('keyup', this.typingLogic.bind(this));
	}

	// checkFocus(){
	// 	document.querySelectorAll('input, textarea');
	// }

	typingLogic() {
		if (this.searchField.value !== this.previeousValue) {
			clearTimeout(this.typingTimer);
			if (this.searchField.value) {
				if (!this.isSpinnerVisible) {
					this.resaultsDiv.innerHTML = '<div class="spinner-loader"></div>';
					this.isSpinnerVisible = true;
				}
				this.typingTimer = setTimeout(this.getResults.bind(this), 2000);
			} else {
				this.resaultsDiv.innerHTML = '';
			}
		}
		this.previeousValue = this.searchField.value;
	}

	getResults() {
		this.resaultsDiv.innerHTML = 'Results here';
		this.isSpinnerVisible = false;
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
