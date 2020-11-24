var r_text = new Array();
r_text[0] = "AIzaSyAQAdnbLRHQNAEFEksiREQw67lN8whcBME";
r_text[1] = "AIzaSyCs-VOBQRInFi05zxbP6GcY7Bv2P-EOp2Y";
r_text[2] = "AIzaSyDLxfBuXsMD5OgP8aY2XCioo3I-bGl5isU";
r_text[3] = "AIzaSyBaqHRGwqr23XH1Sq1YwI_kjyeYU7GAFuw";
r_text[4] = "AIzaSyCN674CdQp_4xoUs1GScl8PwSEcuSqiiuo";
r_text[5] = "AIzaSyCy3bpuMIhM2l9gXAlk-BR1FphQxDMrQw8";



function getVideo() {
  var nn = Math.floor(5 * Math.random());
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: r_text[nn],
        q: $('#URL-input').val(),
        part: 'snippet',
        maxResults: '10',
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
  });
}

function embedVideo(data) {
  $('#iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId + "?controls=1&showinfo=0&modestbranding=1" )
  $('#title').text(data.items[0].snippet.title)
  $('#iframe1').attr('src', 'https://www.youtube.com/embed/' + data.items[1].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title1').text(data.items[1].snippet.title)
  $('#iframe2').attr('src', 'https://www.youtube.com/embed/' + data.items[2].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title2').text(data.items[2].snippet.title)
  $('#iframe3').attr('src', 'https://www.youtube.com/embed/' + data.items[3].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title3').text(data.items[3].snippet.title)
  $('#iframe4').attr('src', 'https://www.youtube.com/embed/' + data.items[4].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title4').text(data.items[4].snippet.title)
  $('#iframe5').attr('src', 'https://www.youtube.com/embed/' + data.items[5].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title5').text(data.items[5].snippet.title)
  $('#iframe6').attr('src', 'https://www.youtube.com/embed/' + data.items[6].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title6').text(data.items[6].snippet.title)
  $('#iframe7').attr('src', 'https://www.youtube.com/embed/' + data.items[7].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title7').text(data.items[7].snippet.title)
  $('#iframe8').attr('src', 'https://www.youtube.com/embed/' + data.items[8].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title8').text(data.items[8].snippet.title)
  $('#iframe9').attr('src', 'https://www.youtube.com/embed/' + data.items[9].id.videoId + "?controls=1&showinfo=0&modestbranding=1")
  $('#title9').text(data.items[9].snippet.title)
}


