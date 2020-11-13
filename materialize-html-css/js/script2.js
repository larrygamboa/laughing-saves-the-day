$(document).ready(function () {
  function displayMeme() {
    var getMemeInput = localStorage.getItem("memeInput");
    console.log(getMemeInput);

    if (getMemeInput === null) {
      var queryURL = "https://meme-api.herokuapp.com/gimme/dankmemes/12";

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        for (i = 0; i < 12; i++) {
          var currentMeme = response.memes[i].url;
          console.log(currentMeme);
          
          

          $("#img" + i).html("<img src=" + currentMeme + ">");
        }
      });
    } else {
      var queryURL =
        "https://meme-api.herokuapp.com/gimme/" + getMemeInput + "/12";
      console.log(queryURL);

      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        for (i = 0; i < 12; i++) {
          var currentMeme = response.memes[i].url;
          console.log(currentMeme);

          $("#img" + i).html("<img src=" + currentMeme + ">");
        }
      });
    }
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
        $("#nextJoke").html(
          '<button id="nextBtn" class="btn-large waves-effect waves-light teal lighten-1">Next Joke</button>'
        );
        $("#nextBtn").on("click", function (event) {
          displayMeme();
          $("#setup").html("");
          $("#nextJoke").html(
            '<button id="jokeButton" class="btn-large waves-effect waves-light teal lighten-1">Punchline</button>'
          );
          displayJoke();
        });
      });
    });
  }

  displayMeme();
  displayJoke();
  $("#meme-Search").on("click", function (event) {
    event.preventDefault();
    var memeinuput = $("#meme-input").val();
    memeinuput = memeinuput.replace(/\s/g, "");
    localStorage.setItem("memeInput", memeinuput);
    console.log($("#meme-input").val());
    function displayMeme2() {
      var queryURL = `https://meme-api.herokuapp.com/gimme/${memeinuput}/12`;
      console.log(queryURL);
      console.log(memeinuput);
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        for (i = 0; i < 12; i++) {
          var currentMeme = response.memes[i].url;
          console.log(currentMeme);

          $("#img" + i).html("<img src=" + currentMeme + ">");
        }
      });
    }
    displayMeme2();
  });

  $("#impactpg").on("click", function () {
    window.location.href = "index2.html";
    console.log("test Test");
  });
});

$(document).ready(function () {
  $(window).resize(function () {
    if ($(window).width() < 769) {
      $("#mediaAdjust").removeClass("row");
    }
    else {
      $("#mediaAdjust").addClass("row");
    }
  });
  resize();
});
