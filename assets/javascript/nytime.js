// url to pull
$("button").on("click", function() {
  var query = $("#search-input")
    .val()
    .trim();
    var numberOfRecords = $("#records-input").val();
    // var startYear = $("#start")
  var queryURL =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
    query +
    "&api-key=5sEHiSExFTS2zDvoQr0tVJ6iWVyoKHid";

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(data) {

    var results = data.response.docs;

    // for loop

    for (var i = 0; i < numberOfRecords - 1; i++) {

     //on the page
    //title
    var title = results[i].headline.main;
  //author
  var author = results[i].byline.original;
  
    }
 
});

});
