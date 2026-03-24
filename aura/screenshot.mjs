import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    
    console.log("Navigating to Aura...");
    await page.goto('http://localhost:3336/aura/out', { waitUntil: 'networkidle2' });
    
    await new Promise(r => setTimeout(r, 3000));
    
    console.log("Taking screenshot...");
    await page.screenshot({ 
        path: '../img/aura-preview.png', 
        clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    
    await browser.close();
    console.log("Screenshot saved!");
})();
