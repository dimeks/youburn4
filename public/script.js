var convertBtn = document.querySelector('#convert-button-mp4');
var URLinput = document.querySelector('#URL-input');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL(URLinput.value);
});
function sendURL(URL) {
    window.location.href = `http://youburn-dl.com/download?URL=${URL}`;
}

function mostra(){
    var endereco = document.getElementById("URL-input");
    var video = endereco.value.split(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1];
    youtube.setAttribute('src', "http://www.youtube.com/embed/" + video);

    if(!video) {
    linkerro.style.display = 'block';
    return }
    else {
    linkerro.style.display = 'none';
    baixar.style.display = 'block';
}};
var URLinput = document.querySelector('#URL-input');
var convertBtn = document.querySelector('#convert-button-mp3');
convertBtn.addEventListener('click', () => {
    console.log(`URL: ${URLinput.value}`);
    sendURL2(URLinput.value);
});
function sendURL2(URL) {
    window.location.href = `http://youburn-dl.com/download2?URL=${URL}`;
}
