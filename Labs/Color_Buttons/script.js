// Use querySelector to store the div in a variable.
let buttons = document.querySelectorAll('.btn');
let responseBox = document.getElementById('responseBox');

// Use addEventListener to respond to a click event.
buttons.forEach(function (value)
{
	value.addEventListener('click', ()=>
	{
		responseBox.style.backgroundColor = value.id;
		responseBox.innerHTML = '<h1>' + value.id + '</h1>';
	});
});
