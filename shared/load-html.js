(function () {
  // innerHTML
  const innerHTML = (text, id) => {
    const el = document.getElementById(id);
    if (el) {
      el.innerHTML = text;
    }
  };

  // nav
  fetch("/shared/nav.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "nav"));

  // footer
  fetch("/shared/footer.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "footer"));

  // categories
  fetch("/shared/posts/inner_categories.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "inner_categories"));

  // recent
  fetch("/shared/posts/inner_recent.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "inner_recent"));

  // tags
  fetch("/shared/posts/inner_tags.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "inner_tags"));

  // comments
  fetch("/shared/posts/post_comments.html")
    .then((response) => response.text())
    .then((text) => innerHTML(text, "post_comments"));
})();
