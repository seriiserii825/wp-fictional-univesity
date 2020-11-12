export default function filterReferenze() {

	const filterButtons = document.querySelectorAll('.filter__button');
	const referenzeItems = document.querySelectorAll('.post-type-archive-referenze .referenze__item');
	if (filterButtons) {
		function hideReferenze() {
			referenzeItems.forEach(item => {
				item.style.display = 'none';
			});
		}

		function showReferenze(className) {
			referenzeItems.forEach(item => {
				if (item.classList.contains(className)) {
					item.style.display = 'block';
				}
			});
		}

		hideReferenze();
		showReferenze('referenze__item');
		filterButtons.forEach((item) => {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				const target = e.target;
				filterButtons.forEach(elem => {
					elem.classList.remove('active');
				});
				target.classList.add('active');
				const className = target.classList[1];
				referenzeItems.forEach(item => {
					item.classList.forEach(elem => {
						if (className === elem) {
							hideReferenze();
							showReferenze(elem);
						}
					});
				});
			});
		})
	}
}