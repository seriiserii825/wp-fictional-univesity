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
		this.url_path = window.location.origin;
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
		<div class="row">
			<div class="one-third">
				<h2 class="search-overlay__section-title">General Information</h2>
				${data.generalInfo.length ? '<ul class="link-list min-list">' : '<p>Nothing not founded</p>'}
					${data.generalInfo.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`).join('')}
				${data.generalInfo.length ? '</ul>' : ''}
			</div>
			<div class="one-third">
				<h2 class="search-overlay__section-title">Programs</h2>
				${data.programs.length ? '<ul class="link-list min-list">' : `<p>Nothing not founded <a href="${this.url_path}/programs">View all programms</a> </p>`}
					${data.programs.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`)}
				${data.programs.length ? '</ul>' : ''}
				<h2 class="search-overlay__section-title">Professors</h2>
				${data.professors.length ? '<ul class="link-list min-list">' : `<p>Nothing not founded <a href="${this.url_path}/professors">View all programms</a> </p>`}
					${data.professors.map(item => `
						<li>
							<a href="${item.permalink}">
								<h3>${item.title}</h3>
								<img width="200" height="150" src="${item.image}" alt="">
							</a>
						</li>
					`)}
				${data.programs.length ? '</ul>' : ''}
			</div>
			<div class="one-third">
				<h2 class="search-overlay__section-title">Events</h2>
				${data.events.length ? '<ul class="link-list min-list">' : `<p>Nothing not founded <a href="${this.url_path}/programs">View all events</a> </p>`}
					${data.events.map(item => `<li><a href="${item.permalink}">${item.title}</a></li>`)}
				${data.events.length ? '</ul>' : ''}
			</div>
		</div>
		`;
	}

	getResults() {
		fetch(this.url_path + '/wp-json/university/v1/search?term=' + this.searchField.value)
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
