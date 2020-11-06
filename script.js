$(document).ready(function () {
  function displayMeme1() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img1").append("<img src=" + currentMeme + ">");
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
    console.log(response.punchline);
  });
    });
  }


  displayMeme1();
  displayJoke();
});
