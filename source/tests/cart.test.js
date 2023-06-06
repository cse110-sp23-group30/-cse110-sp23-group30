const puppeteer = require('puppeteer');
const path = require('path');

let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

describe('Cart Page', () => {
  beforeAll(async () => {
    await page.goto('file://' + path.resolve(__dirname, '../cart_screen/cart.html'));
  });

  test('Add Plate button redirects to the correct page', async () => {
    await page.click('#add-plate');
    expect(await page.url()).toContain('/source/plate-screen/plate-screen.html'); // adjust as necessary
  });

  test('Add Bowl button redirects to the correct page', async () => {
    await page.goBack();
    await page.click('#add-bowl');
    expect(await page.url()).toContain('/source/bowl-screen/bowl-screen.html'); // adjust as necessary
  });

  test('Confirm Purchase button redirects to the correct page', async () => {
    await page.goBack();
    await page.click('#confirm');
    expect(await page.url()).toContain('/source/cookie_screen/cookie_screen.html'); // adjust as necessary
  });

  test('Clear Cart button pops up the confirm-clear element', async () => {
    await page.goBack();
    await page.click('#clear');
    const displayStyle = await page.$eval('#confirm-clear', el => getComputedStyle(el).display);
    expect(displayStyle).toBe('block');
  });

  test('Delete button pops up the confirm-delete element', async () => {
    // This test assumes that there is at least one delete button (class = "deletebtn") on the page
    await page.click('.deletebtn');
    const displayStyle = await page.$eval('#confirm-delete', el => getComputedStyle(el).display);
    expect(displayStyle).toBe('block');
  });
});
