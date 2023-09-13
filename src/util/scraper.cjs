const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

const url = 'https://youtube.com';
//const url = 'https://bot.sannysoft.com';

async function run() {
  // init headless browser on target
  const browser = await puppeteer.launch(`headless: "new"`);
  const page = await browser.newPage();
  await page.goto(url);

  //await page.screenshot({path: "bot.jpg"})

  // scrapey scrapey
  const title = await page.title();
  //const description = await page.$eval('meta[name="description"]', el => el.content);
  console.log(`Title: ${title}`);
  //console.log(`Description: ${description}`);

  await browser.close();
}

run();