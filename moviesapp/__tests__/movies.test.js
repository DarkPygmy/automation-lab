const {Builder, Browser, By, until} = require('selenium-webdriver')

let driver

beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build()
})

afterEach(async () => {
    await driver.quit()
})

test('cross out a movie', async () => {
    await driver.get('http://localhost:3001')

    await driver.sleep(1000)
    await driver.findElement(By.id('add-movie-input')).sendKeys('Detective Pikachu')

    await driver.sleep(1000)
    await driver.findElement(By.css('button[type="submit"]')).click()

    await driver.sleep(1000)
    await driver.findElement((By.xpath('//label[@for="movie-0"]')), 3000).click()

    await driver.sleep(2000)
})

test('uncross out a movie', async () => {
    await driver.get('http://localhost:3001')

    await driver.sleep(1000)
    await driver.findElement(By.id('add-movie-input')).sendKeys('Detective Pikachu')

    await driver.sleep(1000)
    await driver.findElement(By.css('button[type="submit"]')).click()

    await driver.sleep(1000)
    await driver.findElement((By.xpath('//label[@for="movie-0"]')), 3000).click()

    await driver.sleep(2000)

    await driver.sleep(1000)
    await driver.findElement((By.xpath('//label[@for="movie-0"]')), 3000).click()
    await driver.sleep(2000)
})

 test('delete a movie', async () => {
    await driver.get('http://localhost:3001')

    await driver.sleep(1000)
    await driver.findElement(By.id('add-movie-input')).sendKeys('Detective Pikachu')

    await driver.sleep(1000)
    await driver.findElement(By.css('button[type="submit"]')).click()


    await driver.findElement(By.className('delete-btn'), 1000).click()
    await driver.sleep(2000)
 })
