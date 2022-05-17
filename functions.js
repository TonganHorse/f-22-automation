const {By} = require('selenium-webdriver')

require('chromedriver')

const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath(`//input`)).sendKeys('Top Gun\n')
    await driver.findElement(By.xpath(`//button[text()='Add']`)).click()
    await driver.findElement(By.xpath(`//li/span[text()='Top Gun']`)).click()
    const remove = await driver.findElement(By.xpath(`//li/button[text()='x']`)).click()

    expect(remove).toBe(null)
    
}

module.exports = {deleteMovie}