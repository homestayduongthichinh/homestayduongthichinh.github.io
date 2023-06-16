(async function () {
  // innerHTML
  const innerHTML = (text, id) => {
    const el = document.getElementById(id);
    if (el && !el.hasChildNodes()) {
      el.innerHTML = text;
    }
  };

  // nav
  await fetch("/shared/nav.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "nav"));

  // footer
  await fetch("/shared/footer.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "footer"));

  // categories
  await fetch("/shared/posts/inner_categories.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "inner_categories"));

  // recent
  await fetch("/shared/posts/inner_recent.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "inner_recent"));

  // tags
  await fetch("/shared/posts/inner_tags.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "inner_tags"));

  // comments
  await fetch("/shared/posts/post_comments.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "post_comments"));
})();

/**
 * Download image
 */

// var canvas = document.getElementsByClassName('MyME0d m5SR9c-KeEW5b-UzWXSb')[0]
// canvas.toBlob(function(blob) {
//   var newImg = document.createElement('img'),
//       url = URL.createObjectURL(blob);
// console.log(url)
// });