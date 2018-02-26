// Load Content
document.addEventListener("DOMContentLoaded", function() {
  setupPlayer();
  var path = window.location.pathname
  var hereLinks = document.querySelectorAll('a[href$="'+path+'"]')

  Array.prototype.forEach.call(hereLinks, function(link) {
    link.classList.add('active')
  })

  //document.querySelector('#contact').addEventListener("submit", submitContact)
  if ( window.location.hash == "#contact" ) {
    window.setTimeout(function(){
      document.querySelector('#contact input').focus()
    }, 300);
  }
});

document.addEventListener("click", function(event) {

  if (event.target.dataset.video) {
    event.preventDefault()
    setVideo(event.target)
  }

  if (event.target.hash == '#contact') {
    var input = document.querySelector('#contact input[type="text"]')
    if (input) {
      window.setTimeout(function(){ input.focus() }, 300);
    }
  }

})

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


//function submitContact(event) {
  //event.preventDefault();

  //var name = document.querySelector('#name').value
  //var email = document.querySelector('#email').value
  //var message = document.querySelector('#message').value
  //var gotcha = document.querySelector('#gotcha').value

  //var request = new XMLHttpRequest()
  //request.open('POST', 'https://formspree.io/marcusross@cloverbloomproductions.com', true)
  //request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')

  //request.onload = function (e) {
    //if (request.readyState === 4) {
      //if (request.status === 200) {
        //console.log(request.responseText)
      //} else {
        //console.error(request.statusText)
      //}
    //}
  //}

  //request.onerror = function (e) {
    //console.error(request.statusText)
  //}

  //var data = {
    //name: name,
    //_replyto: email,
    //_format: 'plain',
    //_gotcha: gotcha,
    //email: email,
    //comments: message,
    //_subject:'My Form Submission',
  //}

  //request.send(data);
//}

