

// function googleSearch(result){
//   google.load("search", "1");
//   // var result = json_data.name;
//   var ImageSearch;
//   ImageSearch = new google.search.ImageSearch();
//   ImageSearch.setSearchCompleteCallback(this, searchComplete, null);  //searchComplete function not implemented yet...
//   ImageSearch.execute(result)
//   google.search.Search.getBranding('branding');
// };

function googleSearch(result) {
  var cx = '015850835916786692247:pcronzduky0'; // Insert your own Custom Search engine ID here
  var gcse = document.createElement('script');
  gcse.type = 'text/javascript';
  gcse.async = true;
  gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(gcse, s);
};
// <script>
//   (function() {
//     var cx = '015850835916786692247:pcronzduky0';
//     var gcse = document.createElement('script');
//     gcse.type = 'text/javascript';
//     gcse.async = true;
//     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
//     var s = document.getElementsByTagName('script')[0];
//     s.parentNode.insertBefore(gcse, s);
//   })();
// </script>
// <gcse:search></gcse:search>




function search(){
  var category = document.getElementById("category").value;
  if (category == "people"){
    var num = Math.floor((Math.random() * 87) + 1);
    var data = category + "/" + num + "/";
  }else if (category == "planets") {
    var num = Math.floor((Math.random() * 61) + 1);
    var data = category + "/" + num + "/";
  }else if (category == "starships"){
    var num = Math.floor((Math.random() * 37) + 1);
    var data = category + "/" + num + "/";
  }else{
    //None is selected
    console.log("None was selected");
  }
  // var data = 'people/1/'
  // console.log(data)

  $.ajax({
        url:("http://swapi.co/api/"),
        dataType:'json',
        type: 'GET',
        data: data,
        success:function(response){

          $.getJSON('http://swapi.co/api/' + data, function(json_data){
          console.log(json_data);
          var result = json_data.name;
          alert("You got " + result + "!!");
          googleSearch(result);


          });
        }
      });
  };
