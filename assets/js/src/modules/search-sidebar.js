export default class ExportSidebar {
  constructor() {
    this.searchOpenBtn = document.querySelector("#search-open .fa-search");
    this.searchHtml = document.querySelector(".search");
    this.events();
  }

  events() {
    this.searchOpenBtn.addEventListener("click", this.openSearch.bind(this));
    document.addEventListener("click", (e) => {
      const target = e.target;
      if (!target.closest('.search.active') && !target.classList.contains('fa-search')) {
        this.closeSearch();
      }
    });
  }

  openSearch() {
    this.searchHtml.classList.add("active");
  }

  closeSearch() {
    this.searchHtml.classList.remove("active");
  }
}