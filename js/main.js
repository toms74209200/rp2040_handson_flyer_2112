const markdown_file = location.protocol + '//' + location.hostname + ':' + location.port + '/docs/main.md';

const main = () => {
  fetch(markdown_file)
    .then(res => {
      return res.text();
    }).then(data => {
      markdown.innerHTML = marked.parse(data);
    });
}

main();