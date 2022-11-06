(function () {
  const timeoutInterval = (i) => setTimeout(() => clearInterval(i), 2000);
  // innerHTML
  const innerHTML = (interval, text, cb) => {
    console.log(interval)
    if (cb()) {
      cb().innerHTML = text;
      clearInterval(interval);
    }
  };

  // nav
  fetch("/shared/nav.html")
    .then((response) => response.text())
    .then((text) => {
      const loop = setInterval(() => {
        innerHTML(loop, text, () => document.getElementById("nav"));
      }, 0);
      timeoutInterval(loop);
    });

  // footer
  fetch("/shared/footer.html")
    .then((response) => response.text())
    .then((text) => {
      const loop = setInterval(() => {
        innerHTML(loop, text, () => document.getElementById("footer"));
      }, 0);
      timeoutInterval(loop);
    });

  // categories
  fetch("/shared/posts/inner_categories.html")
    .then((response) => response.text())
    .then((text) => {
      const loop = setInterval(() => {
        innerHTML(loop, text, () => document.getElementById("inner_categories"));
      }, 0);
      timeoutInterval(loop);
    });

  // recent
  fetch("/shared/posts/inner_recent.html")
    .then((response) => response.text())
    .then((text) => {
      const loop = setInterval(() => {
        innerHTML(loop, text, () => document.getElementById("inner_recent"));
      }, 0);
      timeoutInterval(loop);
    });

  // tags
  fetch("/shared/posts/inner_tags.html")
    .then((response) => response.text())
    .then((text) => {
      const loop = setInterval(() => {
        innerHTML(loop, text, () => document.getElementById("inner_tags"));
      }, 0);
      timeoutInterval(loop);
    });

  // comments
  fetch("/shared/posts/post_comments.html")
    .then((response) => response.text())
    .then((text) => {
      const loop = setInterval(() => {
        innerHTML(loop, text, () => document.getElementById("post_comments"));
      }, 0);
      timeoutInterval(loop);
    });
})();
