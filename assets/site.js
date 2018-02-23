//var request = new XMLHttpRequest();
//request.open('POST', '/my/url', true);
//request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//request.send(data);

//var xhr = new XMLHttpRequest();
//xhr.open("GET", "/bar/foo.txt", true);
//xhr.onload = function (e) {
  //if (xhr.readyState === 4) {
    //if (xhr.status === 200) {
      //console.log(xhr.responseText);
    //} else {
      //console.error(xhr.statusText); //}
  //}
//};
//xhr.onerror = function (e) {
  //console.error(xhr.statusText);
//};
//xhr.send(null);
function setupPlayer() {
  Array.prototype.forEach.call(document.querySelectorAll('.video-thumbs a:first-child'), function(el) {

    setVideo(el)
  })
}

function setVideo(el) {
  var video = el.dataset.video
  var wrapper = el.parentElement.previousElementSibling
  if ( wrapper.childElementCount == 1) {
    video += "?autoplay=1"
  }
  wrapper.innerHTML = '<iframe src="https://player.vimeo.com/video/'+video+'" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'

  Array.prototype.forEach.call(el.parentElement.querySelectorAll('.active'), function(a) {
    a.classList.remove('active')
  })

  el.classList.add('active')
}

document.addEventListener("DOMContentLoaded", function() {
  setupPlayer();
  var path = window.location.pathname
  var hereLinks = document.querySelectorAll('a[href$="'+path+'"]')

  Array.prototype.forEach.call(hereLinks, function(link) {
    link.classList.add('active')
  })
});

document.addEventListener("click", function(event) {
  console.log(event.target.hash)

  if (event.target.dataset.video) {
    event.preventDefault()
    setVideo(event.target)
  }

  if (event.target.hash == '#contact') {
    event.preventDefault()
    var input = document.querySelector('form input[type="text"]')
    input.focus()
  }
})
