console.log("javascript is running");

//this is not an ideal way of getting the songs lists but as we are working on client side therefore we are using this way. - to learn
async function getSongs() {
  let a = await fetch("http://127.0.0.1:3000/Spotify/songs/");
  let response = await a.text();
  console.log(response);
  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  let songs = [];
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href);
    }
  }
  return songs;
}


async function main() {
  document.querySelector(".playBar").addEventListener("click", async () => {
    let songs = await getSongs();
    console.log(songs);
    
  let songUL = document.querySelector(".songsList").getElementsByTagName("ul")[0];
  for(const song of songs){
    songUL.innerHTML = songUL.innerHTML + song;
  }
  let audio = new Audio(songs[0]); // ✅ use actual song URL
  audio.play();
});
}

//audio was not playing using this: therefore we use queryselector for it
//   //get the list of songs
//   let songs = await getSongs();
//   console.log(songs);
//   var audio = new Audio(songs[0]);
//   audio.play();
// }

main();
   