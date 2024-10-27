// app/api/posts/route.ts
import { NextResponse } from 'next/server'
import puppeteer from 'puppeteer';
const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
});
const page = await browser.newPage();


export async function GET() {
    // Navigate the page to a URL.
    await page.goto('https://developer.chrome.com/');

    // Set screen size.
    await page.setViewport({ width: 1080, height: 1024 });

    // Type into search box.
    await page.locator('.devsite-search-field').fill('automate beyond recorder');

    // Wait and click on first result.
    await page.locator('.devsite-result-item-link').click();

    // Locate the full title with a unique string.
    const textSelector = await page
        .locator('text/Customize and automate')
        .waitHandle();
    const fullTitle = await textSelector?.evaluate(el => el.textContent);

    // Print the full title.
    console.log('The title of this blog post is "%s".', fullTitle);

    await browser.close();
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await res.json()

    return NextResponse.json({ message: 'success' })
}
type TypeStockItem = {
    // 代码
    code: string;
    // 名称
    name: string;
    // 现价
    now_price: string;
    // 涨跌幅（%）
    price_fluctuation_range: string;
    // 涨跌
    rise_fall: string;
    // 涨速（%）
    growth_rate: string;
    // 换手（%）
    turnover: string;
    // 量比
    quantity_ratio: string;
    // 振幅（%）
    amplitude: string;
    // 成交额
    transaction_amount: string;
    // 流通股
    circulating_shares: string;
    // 流通市值
    circulating_market_value: string;
    // 市盈率
    Price_to_earnings_ratio: string;
}
export async function POST() {
    // Navigate the page to a URL.
    await page.goto('https://q.10jqka.com.cn/');

    // Set screen size.
    await page.setViewport({ width: 1080, height: 1024 });

    // Type into search box.
    const table = await page.$('#maincont');
    const trs = await table?.$$('tbody > tr') ?? [];
    const resultList = [];
    trs.forEach(tr => {

    })
    const trDatList = [];
    for (const tr of trs) {
        const tds = await tr.$$('td');
        const tdDataList = [];
        for (const td of tds) {
            const cellContent = await page.evaluate(td => td.textContent, td);
            tdDataList.push(cellContent);
        }
        trDatList.push({
            // 代码
            code: tdDataList[0],
            // 名称
            name: tdDataList[1],
            // 现价
            now_price: tdDataList[2],
            // 涨跌幅（%）
            price_fluctuation_range: tdDataList[3],
            // 涨跌
            rise_fall: tdDataList[4],
            // 涨速（%）
            growth_rate: tdDataList[5],
            // 换手（%）
            turnover: tdDataList[6],
            // 量比
            quantity_ratio: tdDataList[7],
            // 振幅（%）
            amplitude: tdDataList[8],
            // 成交额
            transaction_amount: tdDataList[9],
            // 流通股
            circulating_shares: tdDataList[10],
            // 流通市值
            circulating_market_value: tdDataList[11],
            // 市盈率
            Price_to_earnings_ratio: tdDataList[12],
        })
    };
    console.log('trDatList=====>', trDatList);
    await browser.close();
    // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const data = await res.json()

    return NextResponse.json({ message: 'success' })
}
