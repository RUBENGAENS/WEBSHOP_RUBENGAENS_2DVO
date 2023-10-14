const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



// FOTOS HOME
function changeImage1 (x,imgage) 
{
if (x == 1)
{
imgage.src = 'assets/surfing_mockup.png';
}
if (x == 2)
{
imgage.src = 'assets/surfing_foto.png';
}
}

function changeImage2 (x,imgage) 
{
if (x == 1)
{
imgage.src = 'assets/cassette_mockup.png';
}
if (x == 2)
{
imgage.src = 'assets/cassette_foto.png';
}
}

function changeImage3 (x,imgage) 
{
if (x == 1)
{
imgage.src = 'assets/cloud_mockup.png';
}
if (x == 2)
{
imgage.src = 'assets/cloud_foto.png';
}
}

