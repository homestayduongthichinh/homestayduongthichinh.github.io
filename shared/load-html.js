(function () {
  // nav
  fetch("/shared/nav.html")
    .then((response) => response.text())
    .then((text) => {
      const el = document.getElementById("nav");
      if (el) {
        el.innerHTML = text;
      }
    });

  // footer
  fetch("/shared/footer.html")
    .then((response) => response.text())
    .then((text) => {
      const el = document.getElementById("footer");
      if (el) {
        el.innerHTML = text;
      }
    });

  // categories
  fetch("/shared/posts/inner_categories.html")
    .then((response) => response.text())
    .then((text) => {
      const nav = document.getElementById("inner_categories");
      if (nav) {
        nav.innerHTML = text;
      }
    });

  // recent
  fetch("/shared/posts/inner_recent.html")
    .then((response) => response.text())
    .then((text) => {
      const el = document.getElementById("inner_recent");
      if (el) {
        el.innerHTML = text;
      }
    });

  // tags
  fetch("/shared/posts/inner_tags.html")
    .then((response) => response.text())
    .then((text) => {
      const el = document.getElementById("inner_tags");
      if (el) {
        el.innerHTML = text;
      }
    });

  // comments
  fetch("/shared/posts/post_comments.html")
    .then((response) => response.text())
    .then((text) => {
      const el = document.getElementById("post_comments");
      if (el) {
        el.innerHTML = text;
      }
    });
})();
