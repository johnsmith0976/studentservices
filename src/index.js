import "./styles.css";

/* let aboutbtn = document.querySelector("#aboutbtn");
let contactbtn = document.querySelector("#contactbtn"); */
let closebtns = document.querySelectorAll(".closebutton");
let footer = document.querySelector("#updated");

// buttons that display the About and Contact sections
/* aboutbtn.addEventListener("click", aboutPopUp);
function aboutPopUp() {
  document.querySelector(".aboutteam").style.display = "block";
} */
/* contactbtn.addEventListener("click", contactPopUp);
function contactPopUp() {
  document.querySelector(".contactdiv").style.display = "block";
} */

// buttons that allow for closing the pop-up
closebtns.forEach((closebtn) => {
  closebtn.addEventListener("click", function (e) {
    e.currentTarget.parentNode.parentNode.style.display = "none";
  });
});
// IIFE that updates the footer
(function () {
  const date = new Date(document.lastModified);
  let Datei = {
    time: `${date}`
  };
  let splice = Datei.time.slice(4, 15);
  footer.innerHTML += splice;
})();

fetch(
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCzuNibsTBO5xdZh7RMk8Aow&maxResults=5&order=date&key=AIzaSyB3DqpfoF0C7dyFfux9zEZbibLVbMGDrjg"
)
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    let videos = data.items;

    let container = document.querySelector("#videocontainer");
    videos.forEach((video) => {
      let Url = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      container.innerHTML += `<a href="${Url}" target="_blank" class="link"
      ><img src="${video.snippet.thumbnails.high.url}" class="thumbnail"
    /></a>`;
    });
  })
  .catch(console.log("error"));
