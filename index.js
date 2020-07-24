const axios = require('axios');
const cheerio = require('cheerio');

	process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
    const url = 'https://localhost/contribution/2020/20K/plp/cj//index.html';

    axios(url)
      .then(response => {
		const html = response.data;
		const $ = cheerio.load(html);
		const components = $('.fs-fluidcomponent');
		const idComponents = []
		components.each(function () {
			const id = $(this).attr('id');
			idComponents.push(id);
		});
		console.log(idComponents)
      })
	  .catch(console.error);

/**
 * 1/ add mobile version with new axios request using mobile user agent
 * 2/ compare desktop and mobile
 * 3/ indent correctly
 */
