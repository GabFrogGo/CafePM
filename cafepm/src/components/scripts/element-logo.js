const axios = require('axios');
const cheerio = require('cheerio');

//URL post dinamica
const url = 'https://pixiv.net/';

async function fetchData(url) {
    console.log('Getting data...');
    try {
        const response = await axios(url);
        if (response.status !== 200) {
            throw new Error('Error getting data');
        }
        return response.data;
    } catch (error) {
        console.error(error);
        return null;
    }
}

fetchData(url).then((html) => {
    if (!html) {
        return;
    }
    const $ = cheerio.load(html);
    const icons = $('link[rel="icon"], link[rel="shortcut icon"]');
    icons.each(function() {
        const iconUrl = $(this).attr('href');
        console.log('Icon URL:', iconUrl);
    });
});