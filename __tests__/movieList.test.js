const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const {deleteMovie} = require('../functions')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('check movies results', async () => {
    await deleteMovie(driver)
})
