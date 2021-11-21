const markdown_file = (() => {
  const url = location.href;
  if (url.includes('html')) {
    return location.origin + '/docs/main.md';
  }
  return url + '/docs/main.md';
})();

const main = () => {
  fetch(markdown_file)
    .then(res => {
      return res.text();
    }).then(data => {
      markdown.innerHTML = marked.parse(data);
    });
}

main();