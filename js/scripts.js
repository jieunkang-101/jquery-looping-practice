$(document).ready(function() {
  // var elementArray = [];
   $(document).click(function(event) {
    //  console.log("element clicked!", this);
    var header = "h1";
    var paragraph = "p";
    var image = "img";
    //event.stopPropagation();
    var elements = ["h1", "p", "img"];
    // var domElement = event.target.nodeName;
    // elementArray.push(domElement);
    
    // console.log("get", domElement.nodeName);
    // console.log("event.target.nodeName", event.target.nodeName);

   elements.forEach(function(element) {
     console.log('This is a ' + element + ".")
   });
   });
});
