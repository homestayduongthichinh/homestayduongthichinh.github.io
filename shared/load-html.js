(function () {
  // nav
  fetch("/shared/nav.html")
      .then((response) => response.text())
      .then((text) => {
          const nav = document.getElementById("nav");
          if (nav) {
              nav.innerHTML = text;
          }
      });

  // footer
  fetch("/shared/footer.html")
      .then((response) => response.text())
      .then((text) => {
          const nav = document.getElementById("footer");
          if (nav) {
              nav.innerHTML = text;
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
          const nav = document.getElementById("inner_recent");
          if (nav) {
              nav.innerHTML = text;
          }
      });

  // tags
  fetch("/shared/posts/inner_tags.html")
      .then((response) => response.text())
      .then((text) => {
          const nav = document.getElementById("inner_tags");
          if (nav) {
              nav.innerHTML = text;
          }
      });

  // comments
  fetch("/shared/posts/post_comments.html")
      .then((response) => response.text())
      .then((text) => {
          const nav = document.getElementById("post_comments");
          if (nav) {
              nav.innerHTML = text;
          }
      });
})();
