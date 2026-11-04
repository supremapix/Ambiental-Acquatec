import {test,expect} from '@playwright/test';
import {ARTICLES} from '../knowledge-data.js';
import {SERVICES} from '../site-data.js';
for(const width of [360,1440])test('service hubs and guides '+width,async({page})=>{
 await page.setViewportSize({width,height:900});const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const route of ['/servicos','/guias',...SERVICES.map(s=>'/servicos/'+s.id),...ARTICLES.map(a=>'/guias/'+a.slug)]){
  await page.goto(route);await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
 }
 await page.goto('/servicos/manta-termica');await expect(page.locator('main a.btn-wa').first()).toHaveAttribute('href',/manta%20t%C3%A9rmica/);
 await page.locator('main details').first().locator('summary').click();await expect(page.locator('main details').first()).toHaveAttribute('open','');
 await page.screenshot({path:'audit/thermal-hub-'+width+'.png'});
 await page.goto('/guias');await page.locator('.knowledge-card a').first().click();await expect(page).toHaveURL(/guias\/.+/);await page.goBack();await expect(page).toHaveURL(/\/guias$/);await page.goForward();await expect(page).toHaveURL(/guias\/.+/);expect(errors).toEqual([]);
});
test('metropolitan directory search and locality anchor',async({page})=>{
 await page.goto('/regioes');await page.getByRole('searchbox').fill('Casas de Pedra');await expect(page.locator('main').getByRole('link',{name:/Casas de Pedra/})).toHaveCount(1);await page.locator('main').getByRole('link',{name:/Casas de Pedra/}).click();await expect(page).toHaveURL(/cidades\/rio-negro#localidade-casas-de-pedra/);await expect(page.locator('#localidade-casas-de-pedra')).toContainText('Bom Jesus');await page.goBack();await page.getByRole('searchbox').fill('Piraquara');await expect(page.locator('main .locality-city')).toHaveCount(1);
});
