class Search {
	// 1. Describe
	constructor() {
		this.openBtn = document.querySelector('.search-trigger');
		this.closeBtn = document.querySelector('.search-overlay__close');
		this.searchOverlay = document.querySelector('.search-overlay');
		this.events();
	}


	// 2. Events
	events() {
		this.openBtn.addEventListener('click', () => {
			this.searchOverlay.classList.add('search-overlay--active');
		});
		this.closeBtn.addEventListener('click', () => {
			this.searchOverlay.classList.remove('search-overlay--active');
		});
	}
}
export default Search;
