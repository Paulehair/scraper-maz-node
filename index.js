const axios = require('axios')
const cheerio = require('cheerio')

	process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
    const url = 'https://localhost/contribution/2020/Eyewear/03-us-optical-launch//index.html'

    axios(url)
      .then(response => {
		const html = response.data
		const $ = cheerio.load(html)
	
		const getChildId = (node, tabSize) => {
			console.log(tabSize);
			const tab = '	'.repeat(tabSize);
			console.log(`#${node.attr('id')}`)
			const children = node.children('.fs-fluidcomponent')
			console.log(children.length);
			children.each(function (i, el) {
				tabSize += 1
				getChildId($(el), tabSize)
			})
			tabSize = 1
		}

		const components = $('.fs-fluidcomponent')
		getChildId(components, 0)
		// console.log(components.children('.fs-fluidcomponent').first().attr('id'))
		
		// components.each(function () {
		// 	const id = $(this).attr('id');
		// 	console.log(`#${id}\n`)
		// });
      })
	  .catch(console.error)

/**
 * 1/ add mobile version with new axios request using mobile user agent
 * 2/ compare desktop and mobile
 * 3/ indent correctly
 */
