export default class ExportSidebar {
  constructor() {
    this.searchOpenBtn = document.querySelector("#search-open .fa-search");
    this.searchHtml = document.querySelector(".search");
    this.events();
  }

  events() {
    this.searchOpenBtn.addEventListener("click", this.openSearch.bind(this));
    document.addEventListener("click", (e) => {
      const isClickInside = this.searchHtml.contains(e.target);
      if (!isClickInside) {
        console.log("close bind");
        this.closeSearch.bind(this);
      }
    });
  }

  openSearch() {
    this.searchHtml.classList.add("active");
  }

  closeSearch() {
    console.log("close search");
    this.searchHtml.classList.remove("active");
  }
}
