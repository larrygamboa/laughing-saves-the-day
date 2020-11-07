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
  function displayMeme2() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img2").append("<img src=" + currentMeme + ">");
    });
  }
  function displayMeme3() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img3").append("<img src=" + currentMeme + ">");
    });
  }
  function displayMeme4() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img4").append("<img src=" + currentMeme + ">");
    });
  }
  function displayMeme5() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img5").append("<img src=" + currentMeme + ">");
    });
  }
  function displayMeme6() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img6").append("<img src=" + currentMeme + ">");
    });
  }
  function displayMeme7() {
    var queryURL = "https://meme-api.herokuapp.com/gimme";

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      var currentMeme = response.url;
      console.log(response);

      $("#img7").append("<img src=" + currentMeme + ">");
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
  displayMeme2();
  displayMeme3();
  displayMeme4();
  displayMeme5();
  displayMeme6();
  displayMeme7();
  displayJoke();
});
