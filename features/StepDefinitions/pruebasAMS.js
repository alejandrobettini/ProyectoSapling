const {Builder, By, Key, until, Keys} = require ('selenium-webdriver');
const { Given, When, Then, setDefaultTimeout } = require ('cucumber');
var webdriver = require ('selenium-webdriver');
require('chromedriver');
var driver;
setDefaultTimeout(1000000);
const { WElements} = require(`${process.cwd()}/pages/pruebasAMS.js`);
const { assert, expect} = require('chai');

Given ('Ingresar a Sapling', async function () {
    this.driver = await new webdriver.Builder().forBrowser('chrome').build();
    await this.driver.get ('http://int.saplinglearning.me/ams');
});

Then ('/^iniciar sesion en Sapling con usuario "(.*)" y contraseña "(.*)"$/', async function () {

    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEusername)));
    var WEusername = await this.driver.findElement(By.xpath(WElements.WEusername));
    await WEusername.sendKeys(usuario);

    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEpassword)));
    var WEpassword = await this.driver.findElement(By.xpath(WElements.WEpassword));
    await WEpassword.sendKeys(contraseña);

    await this.driver.findElement(By.xpath(WElements.WElogin)).click();
});

Given ('hacer click en 3 items', async function () {

    for (var i=0; i<=2;i++){
        await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcheck)));
        let WEcheck = await this.driver.findElement(By.xpath(WElements.WEcheck));
        await WEcheck.click();
    }
});

Then ('click en View Selected items', async function () {

         await this.driver.wait(until.elementLocated(By.xpath(WElements.WEviewSelected)));
        let WEviewSelected = await this.driver.findElement(By.xpath(WElements.WEviewSelected));
        await WEviewSelected.click();
});


/////////////////////// MODELO DE VERIFICACION EN TINDER



When ('envio un like', async function () {
    this.nameLike = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    await this.driver.wait(until.elementLocated(By.xpath(WElements.WEcorazon)));
    let WEcorazon = await this.driver.findElement(By.xpath(WElements.WEcorazon));
    await WEcorazon.click();

});
Then('verificar like', async function () {
    var name2Like = await this.driver.findElement(By.xpath(WElements.girlName)).getText();
    assert(this.nameLike!==name2Like);

});


