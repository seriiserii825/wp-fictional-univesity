export default class ExportSidebar {
	constructor() {
		this.searchInput = document.querySelector('.search-wrap input');
		this.searchOpenBtn = document.querySelector("#search-open .fa-search");
		this.searchHtml = document.querySelector(".search");
		this.searchList = document.querySelector('.search__list');
		this.events();
		this.typingTimer = null;
		this.previousValue = null;
		this.isSpinnerVisible = false;
	}

	events() {
		this.searchOpenBtn.addEventListener("click", () => {
			this.openSearch();
		});
		document.addEventListener("click", (e) => {
			const target = e.target;
			if (!target.closest('.search.active') && !target.classList.contains('fa-search')) {
				this.closeSearch();
			}
		});
		document.addEventListener("keyup", (e) => {
			if(e.key === 'Escape' && this.searchHtml.classList.contains('active')){
				this.closeSearch();
			}
		});
		// this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));
		this.searchInput.addEventListener('keyup', (e) => {
			this.typingLogic(e);
		});
	}

	typingLogic(e) {
		const target = e.target;
		const targetValue = target.value;
		if (targetValue.length > 1) {
			this.searchList.classList.add('active');
			clearTimeout(this.typingTimer);
			if (targetValue !== this.previousValue) {
				if (!this.isSpinnerVisible) {
					this.searchList.innerHTML = '<div class="spinner__loader"></div>';
					this.isSpinnerVisible = true;
				}
				this.typingTimer = setTimeout(this.getResults.bind(this), 300);
			} else {
				this.previousValue = this.searchInput.value;
			}
		} else {
			this.searchList.classList.remove('active');
		}
	}

	getResults() {
		const siteUrl = window.location.origin;
		fetch(siteUrl + '/wp-json/university/v1/search?term=' + this.searchInput.value)
			.then(response => response.json())
			.then(json => {
				this.searchList.innerHTML = '';
				this.isSpinnerVisible = false;
				this.showPosts(json);
			});
	}

	showPosts(data) {
		let html = '';
		data.forEach(item => {
			html += `
				<li class="search__list-item">
					<h3 class="search__list-title">
						<a href="${item.permalink}" class="search__list-link">${item.title}</a>
					</h3>
				</li>
			`;
		});
		this.searchList.insertAdjacentHTML('afterbegin', html);
	}

	openSearch() {
		this.searchHtml.classList.add("active");
		setTimeout(() => {
			this.searchInput.focus();
		},300);
	}

	closeSearch() {
		this.searchHtml.classList.remove("active");
	}
}
