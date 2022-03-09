const posts = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const eleCards = document.querySelector(".cards");

/*const container = document.createElement(("div"));
container.classList.add("container");
eleCards.append(container);*/

/*for (i = 0; i < posts.length; i++){
    const container = document.createElement(("div"));
    container.classList.add("container");

	container.innerHTML = `<i class="${posts[i].family} ${posts[i].prefix}${posts[i].name} box" style="color: ${posts[i].color}"></i>
                          <span>${posts[i].name}</span>
	`;
	
	eleCards.append(container);
	console.log(container)
}*/

function insertArray(postsArray, createCards){
	createCards.innerHTML = "";

	postsArray.forEach(element => {
		const container = document.createElement(("div"));
    container.classList.add("container");

	container.innerHTML = `<i class="${element.family} ${element.prefix}${element.name} box" style="color: ${element.color}"></i>
                          <span>${element.name}</span>
	`;
	
	eleCards.append(container);
	console.log(container);
		
	});
}

insertArray(posts, eleCards);

const options = document.getElementById("select-option");

options.addEventListener("change", function(){
	
})







/*container.innerHTML = `<i class="${posts[0].family} ${posts[0].prefix}${posts[0].name} box" style="color: ${posts[0].color}"></i>
                       <span>${posts[0].name}</span>
                       <i class="fas fa-crow box"></i>
					   <i class="fas fa-dog box"></i>
                       <i class="fas fa-dove box"></i>
                       <i class="fas fa-dragon box"></i>
                       <i class="fas fa-horse box"></i>
                       <i class="fas fa-hippo box"></i>
                       <i class="fas fa-fish box"></i>
                       <i class="fas fa-carrot box"></i>
                       <i class="fas fa-apple-alt box"></i>
                       <i class="fas fa-lemon box"></i>
                       <i class="fas fa-pepper-hot box"></i>
                       <i class="fas fa-user-astronaut box"></i>
                       <i class="fas fa-user-graduate box"></i>
                       <i class="fas fa-user-ninja box"></i>
                       <i class="fas fa-user-secret box"></i>
`;*/