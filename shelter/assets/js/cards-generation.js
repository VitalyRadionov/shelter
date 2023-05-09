let url = './../../assets/data/pets.json';
let response = await fetch(url);
let pets = await response.json();

export default [
	...pets.map(pet => {
		return `<div class="card" data-name="${pet.name}">
 						<img src="${pet.img.page}" alt="${pet.name}.png" data-name="${pet.name}">
 						<p class="card-title" data-name="${pet.name}">${pet.name}</p>
 						<button class="card-button" data-name="${pet.name}">Learn more</button>
 					</div>`;
	})
];