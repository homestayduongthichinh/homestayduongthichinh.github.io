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

  /**
   * POST
   */
   $.ajax({
    type: "GET",// method
    url: `/shared/posts/inner_categories.html`, // route
    data: {
      "key":"value" // json format in key value pair
    },
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        $("#inner_categories").html(res);
     }
  });

  $.ajax({
    type: "GET",// method
    url: `/shared/posts/inner_recent.html`, // route
    data: {
      "key":"value" // json format in key value pair
    },
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        $("#inner_recent").html(res);
     }
  });

  $.ajax({
    type: "GET",// method
    url: `/shared/posts/inner_tags.html`, // route
    data: {
      "key":"value" // json format in key value pair
    },
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        $("#inner_tags").html(res);
     }
  });

  $.ajax({
    type: "GET",// method
    url: `/shared/posts/post_comments.html`, // route
    data: {
      "key":"value" // json format in key value pair
    },
    contentType: "application/json;charset=UTF-8",
    success: function (res) {
        $("#post_comments").html(res);
     }
  });
});
