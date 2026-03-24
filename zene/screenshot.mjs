import puppeteer from 'puppeteer';

(async () => {
    // Launch browser
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set exact viewport for a 16:9 desktop
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    
    // Set human user agent to bypass Unsplash 403 forbidden protection
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36');
    
    console.log("Navigating to local static server...");
    // Since basePath is /zene/out, the server serves it at localhost:3333/zene/out/
    await page.goto('http://localhost:3333/zene/out/', { waitUntil: 'networkidle2' });
    
    // Wait an extra second for animations (like framer-motion) to finish sliding in
    await new Promise(r => setTimeout(r, 2000));
    
    console.log("Taking screenshot...");
    await page.screenshot({ 
        path: '../img/zene-preview.png', 
        clip: { x: 0, y: 0, width: 1920, height: 1080 } // Crop exactly the top 1080 pixels (the Hero section)
    });
    
    await browser.close();
    console.log("Screenshot saved!");
})();
