const all_items = [
        {
        'type': 'tshirt', 
        'gender': 'famale',
        'size': 'large',
        'colour': 'pink',
        'image': 'img/pink_t.png'
        },
		{
        'type': 'tshirt',
        'gender': 'male',
        'size': 'large',
        'colour': 'blue',
        'image': 'img/blue_t.png'
        },
        {
        'type': 'tshirt',
        'gender': 'male',
        'size': 'large',
        'colour': 'yellow',
        'image': 'img/yellow_t.png'
        },
        {
        'type': 'tshirt',
        'gender': 'female',
        'size': 'large',
        'colour': 'pink',
        'image': 'img/pink_t.png'
        },
        {
        'type': 'tshirt',
        'gender': 'male',
        'size': 'large',
        'colour': 'blue',
        'image': 'img/blue_t.png'
        },
        {
        'type': 'tshirt',
        'gender': 'male',
        'size': 'large',
        'colour': 'yellow',
        'image': 'img/yellow_t.png'
        },        
        {
        'type': 'pants',
        'gender': 'male',
        'size': 'small',
        'colour': 'blue',
        'image': 'img/blue_p.png'
        },
        {
        'type': 'pants',
        'gender': 'male',
        'size': 'large',
        'colour': 'yellow',
        'image': 'img/yellow_p.png'
        },
        {
        'type': 'pants',
        'gender': 'female',
        'size': 'small',
        'colour': 'pink',
        'image': 'img/pink_p.png'
        },
        {
        'type': 'pants',
        'gender': 'male',
        'size': 'small',
        'colour': 'blue',
        'image': 'img/blue_p.png'
        },
        {
        'type': 'pants',
        'gender': 'male',
        'size': 'large',
        'colour': 'yellow',
        'image': 'img/yellow_p.png'
        },
        {
        'type': 'pants',
        'gender': 'female',
        'size': 'small',
        'colour': 'pink',
        'image': 'img/pink_p.png'
        },
        {
        'type': 'skirt',
        'gender': 'male',
        'size': 'large',
        'colour': 'yellow',
        'image': 'img/yellow_s.png'
        },
        {
        'type': 'skirt',
        'gender': 'female',
        'size': 'small',
        'colour': 'blue',
        'image': 'img/blue_s.png'
        },
        {
        'type': 'skirt',
        'gender': 'male',
        'size': 'large',
        'colour': 'yellow',
        'image': 'img/yellow_s.png'
        },
        {
        'type': 'skirt',
        'gender': 'female',
        'size': 'small',
        'colour': 'blue',
        'image': 'img/blue_s.png'
        }
    ]

function createHTMLString(item) {
  return `
  <li class ="item">
    <img src="${item.image}" alt="${item.type}" class="item_thumbnail">
    <span class ="item_description">${item.gender},${item.size}</span>
  </li>
  `;
}


function displayItems(items) {
	const container = document.querySelector('.items');
	container.innerHTML = items.map(item => createHTMLString(item)).join('');
}



function displayList(buttonValue) {
	if(buttonValue === 'logo') {
		document.getElementById("logo").addEventListener("click", function(){
			displayItems(all_items);
			});
	}
	else{
		document.getElementById(buttonValue).addEventListener("click", function(){
			const result = all_items.filter((item) => item.type === buttonValue || item.colour === buttonValue);
			displayItems(result);
			});
	}
};