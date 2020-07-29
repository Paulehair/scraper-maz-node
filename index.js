const axios = require('axios')
const cheerio = require('cheerio')
const readline = require("readline");

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
let url = ''

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Entrez l\'url que vous voulez traiter\n', function(url) {
	url = `${url}`

	axios
		.get(url)
		.then(response => {
			const html = response.data
			const $ = cheerio.load(html)

			const getChildId = node => {
				const tabLength = '	'.repeat($(node).parents('.fs-fluidcomponent').length)
				console.log(`${tabLength}#${node.attr('id')}`)
				let children = null
				node.hasClass('fs-grid-placeholder') ? children = node.children('.fs-grid-placeholder__container').children('.fs-fluidcomponent') : children = node.children('.fs-fluidcomponent')
				children.each(function (i, el) {
					getChildId($(el))
				})
			}

			const components = $('.fs-fluidcomponent')
			console.log('FS TEMPLATE COMPONENTS');
			components.each(function (i, el) {
				if ($(el).parent().hasClass('fs-template')) {
					getChildId($(el))
				}
			})

			if (process.argv[2] === '--grid') {
				console.log('FS GRID DESKTOP COMPONENTS');
				const gridComponents = $('.fs-grid-placeholder')
				gridComponents.each(function (i, el) {
					if ($(el).parent().hasClass('fs-grid')) {
						getChildId($(el))
					}
				})
			}
			console.log('Appuyez sur ctrl+c pour quitter')
		})
		.catch(console.error)
	
});

rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
});
