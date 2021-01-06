const fs = require('fs');

fs.readFile('./sources/jobs/index.md', 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const content = data
    // exclude begin and end ---
    .replace(/---/g, '')
    .split(' - ')
    // exclude
    // key: jobs
    // list:
    .filter((_, i) => i > 0)
    .map(line => line.trim())
    .filter(Boolean)
    .map(obj => {
      const mapObj = {};
      obj.split('\n').map(line => {
        const [key, value] = line.split(': ').map(t => t.trim());
        mapObj[key] = value.split("'").filter(Boolean).join("'"); // trim single quote ' in value;
      });

      return mapObj;
    });

  fs.writeFile(
    'sources/jobs/index.json',
    JSON.stringify(content),
    function (err) {
      if (err) return console.log(err);
    }
  );
});
