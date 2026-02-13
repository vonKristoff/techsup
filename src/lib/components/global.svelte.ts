function store() {
	let sidebar = $state(false);
	let dropdown = $state(false);
	let ambience = $state();
	let skew = $state(0);
	let modal = $state<HTMLDialogElement>();
	return {
		setAmbience(value: 'dark' | 'light') {
			ambience = value === 'light' ? 'lighten' : 'darken';
		},
		setRotation(pct: number) {
			skew = -60 + Math.round(120 * pct);
		},
		toggleSidebar() {
			sidebar = !sidebar;
		},
		toggleDropdown() {
			dropdown = !dropdown;
		},
		setModal(el: HTMLDialogElement) {
			modal = el;
		},
		get sidebar() {
			return sidebar;
		},
		get dropdown() {
			return dropdown;
		},
		get ambience() {
			return ambience;
		},
		get skew() {
			return `${skew}deg`;
		},
		get modal() {
			return modal;
		}
	};
}
export default store();
