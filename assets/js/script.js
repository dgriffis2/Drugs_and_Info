// setting variables to undefined to solve scope issues
var key = "WDvEG6qAQqMGjtjdhq5qhkDjQA6x4UeG9uuzPauc";
var brandName;
var genericName;
var reactions;
var drugAbuse;
var precautions;
var route;
var headline;
var snippet;
var nytLink;
var headline1;
var snippet1;
var nytLink1;
var headline2;
var snippet2;
var nytLink2;
var headline3;
var snippet3;
var nytLink3;
var nytLink4;
var nytLink5;
var nytLink6;

// saves value to local storeage to be used in ajax call on search page and links to search page
$("#search-form").on("submit", function (e) {
    e.preventDefault();
    var drug = $("#userSearch").val().trim()
    localStorage.clear();
    localStorage.setItem("search", drug);
    window.location.href = "search.html";
})


//definition of api url
var homeurl = "https://api.nytimes.com/svc/topstories/v2/health.json";
homeurl += '?' + $.param({
    'api-key': "74cc9f75faa54dd68a9249b2d0fe62e1",
    'sort': "newest"
});
$.ajax({
    url: homeurl,
    method: 'GET',
}).then(function (e) {
    console.log(e);
    $(".cardContent").show();
    $(".loadingCard").hide();

    //function that generates random number between invtervals
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    //storing 3 different random numbers into variables
    var randomNumber1 = randomIntFromInterval(0, 4)
    var randomNumber2 = randomIntFromInterval(5, 9)
    var randomNumber3 = randomIntFromInterval(10, 14)

    //storing headline snippet and link into variables
    var headline1 = e.results[randomNumber1].title;
    var snippet1 = e.results[randomNumber1].abstract;
    nytLink1 = e.results[randomNumber1].url;
    //displaying headline and snippet into cards
    $("#header-1").html(headline1);
    $("#para-1").html(snippet1)
    //storing headline snippet and link into variables
    var headline2 = e.results[randomNumber2].title;
    var snippet2 = e.results[randomNumber2].abstract;
    nytLink2 = e.results[randomNumber2].url;
    //displaying headline and snippet into cards
    $("#header-2").html(headline2);
    $("#para-2").html(snippet2)
    //storing headline snippet and link into variables
    var headline3 = e.results[randomNumber3].title;
    var snippet3 = e.results[randomNumber3].abstract;
    nytLink3 = e.results[randomNumber3].url;
    //displaying headline and snippet into cards
    $("#header-3").html(headline3);
    $("#para-3").html(snippet3)

    //if the card is clicked it will follow the link to the article

})
$("#card-1").on("click", function (e) {
    window.open(nytLink1, "_blank");
})

$("#card-2").on("click", function (r) {
    window.open(nytLink2, "_blank");
})

$("#card-3").on("click", function (t) {
    window.open(nytLink3, "_blank");
})

//definition of api url
var healthurl = "https://api.nytimes.com/svc/topstories/v2/health.json";
healthurl += '?' + $.param({
    'api-key': "29682e6e1b2e47189cfaa9a29501b31a",
    'sort': "newest"
});
$.ajax({
    url: healthurl,
    method: 'GET',
}).then(function (e) {
    console.log(e.results);
    $(".cardContent").show();
    $(".loadingCard").hide();

    //function that generates random number between invtervals
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    //storing 3 different random numbers into variables
    var healthNumber1 = randomIntFromInterval(15, 19)
    var healthNumber2 = randomIntFromInterval(20, 24)
    var healthNumber3 = randomIntFromInterval(25, 29)

    //storing headline snippet and link into variables
    var headline4 = e.results[healthNumber1].title;
    var snippet4 = e.results[healthNumber1].abstract;
    nytLink4 = e.results[healthNumber1].url;
    console.log(nytLink4)
    //displaying headline and snippet into cards
    $("#header-4").html(headline4);
    $("#para-4").html(snippet4)
    //storing headline snippet and link into variables
    var headline5 = e.results[healthNumber2].title;
    var snippet5 = e.results[healthNumber2].abstract;
    nytLink5 = e.results[healthNumber2].url;
    console.log(headline5)
    //displaying headline and snippet into cards
    $("#header-5").html(headline5);
    $("#para-5").html(snippet5)
    //storing headline snippet and link into variables
    var headline6 = e.results[healthNumber3].title;
    var snippet6 = e.results[healthNumber3].abstract;
    nytLink6 = e.results[healthNumber3].url;
    //displaying headline and snippet into cards
    $("#header-6").html(headline6);
    $("#para-6").html(snippet6)

    //if the card is clicked it will follow the link to the article


})
$("#card-5").on("click", function (t) {
    window.open(nytLink5, "_blank");
})
$("#card-6").on("click", function (t) {
    window.open(nytLink6, "_blank");
})
$("#card-4").on("click", function (t) {
    window.open(nytLink4, "_blank");
})

// on click for drug and info text in nav bar to return to home page
$("#nav-left").on("click", function () {
    document.location.href = "index.html"
})