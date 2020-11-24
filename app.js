const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const fs = require('fs');
const path = require('path');
const app = express();
const fbdl = require("fbdl-core");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
const readline = require('readline');
const { format } = require('path');
ffmpeg.setFfmpegPath(ffmpegPath);
app.use(cors());
app.listen(3000, () => {
    console.log('Server Works !!! At port 3000');
});
app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/ptbr.html');
app.use(express.static(__dirname + '/public')); 
});

const filepath = path.resolve(__dirname, 'info.json');

app.get("/download2", (req,res) =>{
var URL = req.query.URL;
var id = ytdl.getURLVideoID(URL)
 ytdl.getInfo(id).then(info => {
  res.header('Content-Disposition', `attachment; filename=${info.videoDetails.title}.mp3`); 
  console.log('title:', info.videoDetails.title);
  console.log('rating:', info.player_response.videoDetails.averageRating);
  console.log('uploaded by:', info.videoDetails.author.name);
  const json = JSON.stringify(info, null, 2)
    // eslint-disable-next-line max-len
    .replace(/(ip(?:=|%3D|\/))((?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|[0-9a-f]{1,4}(?:(?::|%3A)[0-9a-f]{1,4}){7})/ig, '$10.0.0.0');
    const COOKIE = 'SID=3weIEw_SL_A9J02in3HwVwx9AJG-mtiQsr6rAPhPeYfKxZAf1uFLdq-1klZTjxc-PUIImg.; HSID=ALxPM4wPJQ6fvosH5; SSID=AysiLuEE2Rwlk7M9P;';

    var stream = ytdl(URL, {
      requestOptions: {
        headers: {
          cookie: COOKIE,
        }
    }
})
      var outstream = res.header('Content-Disposition', `attachment; filename=+ ${info.videoDetails.title}.mp3`);
      ffmpeg(stream).audioBitrate(192).format('mp3').pipe(outstream, { end: true}).on('end', () => { 
})
});
});

app.get("/download", (req,res) => {
  var URL = req.query.URL;
  const COOKIE = 'SID=3weIEw_SL_A9J02in3HwVwx9AJG-mtiQsr6rAPhPeYfKxZAf1uFLdq-1klZTjxc-PUIImg.; HSID=ALxPM4wPJQ6fvosH5; SSID=AysiLuEE2Rwlk7M9P;';
  ytdl(URL, {
    requestOptions: {
      headers: {
        cookie: COOKIE,
      }
  }
}).pipe(res);
  ytdl.getInfo(URL).then(info => {
        console.log('title:', info.videoDetails.title);
        console.log('rating:', info.player_response.videoDetails.averageRating);
        console.log('uploaded by:', info.videoDetails.author.name);
        const json = JSON.stringify(info, null, 2)
        res.header("Content-Disposition", "attachment;filename=" + encodeURI(info.videoDetails.title) + '.mp4');

  });
  });

  app.get("/download3", (req,res) => {
    var URL = req.query.URL;
    fbdl.download(URL)
        .then(video => {
          res.header("Content-Disposition", "attachment;filename=" + encodeURI(URL) + '.mp4');
            video.pipe(res);
        });
});










 