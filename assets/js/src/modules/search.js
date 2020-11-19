class Search {
	// 1. Describe
	constructor() {
		this.addSearchHtml();
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
				this.typingTimer = setTimeout(this.getResults.bind(this), 600);
			} else {
				this.resaultsDiv.innerHTML = '';
			}
		}
		this.previeousValue = this.searchField.value;
	}

	showPosts(data) {
		this.resaultsDiv.innerHTML = `
			<h2 class="search-overlay__section-title">General information</h2>
			<ul class="link-list min-list">
		`;
		data.forEach(item => {
			this.resaultsDiv.innerHTML += `
				<li>
					<a href="${item.link}">
						<h3>${item.title.rendered} ${item.type === 'post' ? `-<em>${item.authorName}</em>` : ''}</h3>
					</a>
				</li>
		`;
		});
		this.resaultsDiv.innerHTML += `
			<ul>
		`;
	}

	getResults() {
		fetch('http://wp-fictional-univesity.host1670806.hostland.pro/wp-json/wp/v2/posts?search=' + this.searchField.value)
			.then(response => response.json())
			.then(json => this.showPosts(json));
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
		setTimeout(() => {
			this.searchField.focus();
		}, 320);
		this.overlayIsVisible = true;
	}

	closeOverlay() {
		this.searchField.value = '';
		document.body.classList.remove('body-no-scroll');
		this.searchOverlay.classList.remove('search-overlay--active');
		this.overlayIsVisible = false;
	}

	addSearchHtml() {
		const div = document.createElement('div');
		div.classList.add('search-overlay');
		div.innerHTML = `
				<div class="search-overlay__top">
					<div class="container">
						<i class="fa fa-search search-overlay__icon"></i>
						<input type="text" class="search-term" placeholder="What you are looking for?" id="search-term">
						<i class="fa fa-window-close search-overlay__close"></i>
					</div>
				</div>
				<div class="container">
					<div id="search-overlay__results"></div>
				</div>
		`;
		document.body.append(div);
	}
}
export default Search;
