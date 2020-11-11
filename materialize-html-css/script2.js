$(document).ready(function () {
  function displayMeme() {
    var queryURL = "https://meme-api.herokuapp.com/gimme/dankmemes/7";
    console.log(queryURL)

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      for(i=0; i<7; i++){
      var currentMeme = response.memes[i].url
      console.log(currentMeme);

      $("#img"+i).append("<img src=" + currentMeme + ">");}
    });
  }
  
  function displayJoke() {
    var jokeURL = "https://official-joke-api.appspot.com/random_joke";

    $.ajax({
      url: jokeURL,
      method: "GET",
    }).then(function (response) {
      // var joke = response
      console.log(response);

      $("#setup").append(response.setup);

      console.log(response.punchline);

        $("#jokeButton").on("click", function (event) {
          
    var joke = "whatever";
    console.log(joke);
    event.preventDefault();
    $("#setup").html(response.punchline);
    $("#nextJoke").html('<button id="nextBtn" class="btn-large waves-effect waves-light teal lighten-1">Next Joke</button>')
    $("#nextBtn").on("click", function (event){
      $("img").html("")
      displayMeme();
      $("#setup").html("")
      $("#nextJoke").html('<button id="jokeButton" class="btn-large waves-effect waves-light teal lighten-1">Punchline</button>')
      displayJoke()
    })
  
      
  });
      
    });
  }
  


  displayMeme();
  displayJoke();


$("#impactpg").on("click", function (){
  
  window.location.href="index2.html"
  console.log("test Test")

})
});

