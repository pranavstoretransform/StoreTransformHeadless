const https = require('https');

const slug = process.argv[2] || 'contact-us';
const url = `https://storetransform.com/wp-json/wp/v2/pages?slug=${slug}&_embed`;

console.log(`Fetching URL: ${url}`);

https.get(url, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      const pages = JSON.parse(data);
      if (pages.length === 0) {
        console.log('Page not found.');
        return;
      }
      const page = pages[0];
      console.log(`Page ID: ${page.id}`);
      console.log(`Title: ${page.title.rendered}`);
      console.log('Content Rendered (first 500 chars):', page.content.rendered.substring(0, 500));
      
      const acf = page.acf;
      if (acf) {
        console.log('ACF Data Keys:', Object.keys(acf));
        console.log(JSON.stringify(acf, null, 2));
      } else {
        console.log('No ACF data found.');
      }
    } catch (e) {
      console.error('Error parsing JSON:', e.message);
    }
  });

}).on('error', (err) => {
  console.error('Error fetching data:', err.message);
});