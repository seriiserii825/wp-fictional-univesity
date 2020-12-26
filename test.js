export default class ExportSidebar {
	constructor() {
		this.searchInput = document.querySelector('.search-wrap input');
		this.searchBtnSubmit = document.querySelector('.search-wrap');
		this.searchOpenBtn = document.querySelector("#search-open .fa-search");
		this.searchHtml = document.querySelector(".search");
		this.searchList = document.querySelector('.search__list');
		this.events();
	}

	events() {
		this.searchOpenBtn.addEventListener("click", this.openSearch.bind(this));
		// this.searchOpenBtn.addEventListener("click", () => {
		// 	this.openSearch.bind(this);
		// 	this.searchInput.focus();
		// });
	}
	openSearch() {
		console.log(this);
		this.searchHtml.classList.add("active");
	}

	closeSearch() {
		this.searchHtml.classList.remove("active");
	}
}
