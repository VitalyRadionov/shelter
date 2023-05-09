let url = './../../assets/data/pets.json';
let response = await fetch(url);
let pets = await response.json();

export default (n = 'Jennifer') => {
	const p = pets.find((e) => e.name === n);
	// console.log(p);
	return `<img src="${p.img.page}" alt="${p.name}.png">
					<div class="modal-window__content">
						<div class="content-header">
							<h3 class="modal-window__content-heading">${p.name}</h3>
							<h4 class="modal-window__content-subheading">${p.type} - ${p.breed}</h4>
						</div>
						<p class="content__descripption">
							${p.description}
						</p>
						<ul class="content__list">
							<li><span><b>Age: </b>${p.age}</span></li>
							<li><span><b>Inoculations: </b>${p.inoculations.join(', ')}</span></li>
							<li><span><b>Diseases: </b>${p.diseases.join(', ')}</span></li>
							<li><span><b>Parasites: </b>${p.parasites.join(', ')}</span></li>
						</ul>
					</div>`;
};