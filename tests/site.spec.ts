import {test,expect} from '@playwright/test';
for(const width of [320,390,1440]) test('layout '+width,async({page})=>{
 await page.setViewportSize({width,height:900});await page.goto('/');
 await expect(page.locator('h1')).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
 await page.screenshot({path:'audit/home-'+width+'.png',fullPage:true});
 for(let i=0;i<4;i++)await page.getByRole('button',{name:'Aumentar texto'}).click();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
 await page.screenshot({path:'audit/text200-'+width+'.png',fullPage:true});
});
test('keyboard, navigation, images, form and 404',async({page,request})=>{
 await page.goto('/');await page.keyboard.press('Tab');await expect(page.getByText('Pular para o conteúdo')).toBeFocused();await page.keyboard.press('Enter');
 await page.locator('.site-nav summary').focus();await page.keyboard.press('Enter');await expect(page.locator('.menu-panel')).toBeVisible();
 await page.locator('.menu-panel a').first().click();await expect(page).toHaveURL(/servicos/);await expect(page.locator('h1')).toBeVisible();
 await page.goto('/');await page.evaluate(()=>{(window as any).opened=[];window.open=((url:any)=>{(window as any).opened.push(url);return null;}) as any;});
 await page.locator('button[type=submit]').click();expect(await page.evaluate(()=>(window as any).opened.length)).toBe(0);
 await page.locator('[name=name]').fill('Teste local');await page.locator('[name=phone]').fill('41999999999');await page.locator('[name=city]').selectOption({label:'Curitiba'});await page.locator('[name=neighborhood]').fill('Fanny');
 await page.locator('[name=service]').first().check();await page.locator('form input[type=checkbox]').last().check();await page.locator('button[type=submit]').click();
 expect(await page.evaluate(()=>(window as any).opened[0])).toContain('wa.me/5541991635740');
 for(const img of await page.locator('img[src^="/"]').all()){await img.scrollIntoViewIfNeeded();await expect(img).toHaveJSProperty('complete',true);expect(await img.evaluate((i:HTMLImageElement)=>i.naturalWidth)).toBeGreaterThan(0);}
 await expect(page.locator('.share-links a')).toHaveCount(6);
 await expect(page.getByRole('link',{name:'Voltar ao topo'})).toHaveCount(1);await page.getByRole('link',{name:'Voltar ao topo'}).click();await expect(page.locator('#topo')).toBeFocused();expect(await page.evaluate(()=>scrollY)).toBe(0);
 expect((await request.get('/pagina-inexistente-qa')).status()).toBe(404);
 await page.emulateMedia({reducedMotion:'reduce'});await page.getByRole('button',{name:'Mostrar caminho da água'}).click();expect(await page.locator('.water-flow').evaluate(e=>getComputedStyle(e).animationDuration)).toBe('0s');
});

test('regional guides and searchable inventory',async({page})=>{
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const route of ['/regioes','/bairros/campo-comprido','/bairros/vila-audi','/cidades/colombo','/servicos/rufos']){
 await page.setViewportSize({width:390,height:844});await page.goto(route);await expect(page.locator('h1')).toBeVisible();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
 }
 await page.screenshot({path:'audit/service-mobile.png',fullPage:false});
 await page.goto('/');await page.setViewportSize({width:1440,height:1000});await page.screenshot({path:'audit/desktop-viewport.png'});
 expect(errors).toEqual([]);
});

test('local 250px card, contextual contact and centered mobile logos',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/bairros/vila-audi');
 const card=page.locator('.local-contact img');await card.scrollIntoViewIfNeeded();await expect(card).toHaveJSProperty('complete',true);expect(await card.evaluate((i:HTMLImageElement)=>i.naturalWidth)).toBe(250);const box=await card.boundingBox();expect(box?.width).toBe(250);expect(box?.height).toBe(250);
 await expect(page.locator('.local-contact a.btn-wa')).toHaveAttribute('href',/Vila%20Audi/);
 await page.screenshot({path:'audit/local-card-mobile.png'});
 for(const selector of ['.site-logo','.footer-logo']){const b=await page.locator(selector).boundingBox();expect(Math.abs((b!.x+b!.width/2)-195)).toBeLessThan(2);}
 for(let i=0;i<4;i++)await page.getByRole('button',{name:'Aumentar texto'}).click();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1)).toBeTruthy();
});