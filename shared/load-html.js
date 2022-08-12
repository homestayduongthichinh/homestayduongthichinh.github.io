$(document).ready(function() {
  // Nav
  //$("#nav").load("/shared/nav.html");
  // Footer  
  //$("#footer").load("/shared/footer.html");
  
  $.ajax({
    type: "GET",// method
    url: `/shared/nav.html`, // route
    data: {
      "key":"value" // json format in key value pair
    },
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        $("#nav").html(res);
     }
  });
  
  $.ajax({
    type: "GET",// method
    url: `/shared/footer.html`, // route
    data: {
      "key":"value" // json format in key value pair
    },
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        $("#footer").html(res);
     }
  });
});
