var URLinput = document.querySelector('#URL-input');
var convertBtn3 = document.querySelector('#convert-button-mp5');
convertBtn3.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL3(URLinput.value);
});
function sendURL3(URL) {
    window.location.href = `http://localhost:3000/download3?URL=${URL}`;
}

