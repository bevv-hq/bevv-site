// Submits every URL in the live sitemap to IndexNow (Bing, Yandex, Naver, Seznam
// and others; Google doesn't use it). Run after a deploy: npm run indexnow
// Optional: pass URLs to submit only those, e.g. npm run indexnow -- https://bevv.co.uk/blog
const host = "bevv.co.uk";
const key = "3582a8f6d8374dfb621b0f408551b1a6";
const keyLocation = `https://${host}/${key}.txt`;

async function sitemapUrls() {
  const xml = await (await fetch(`https://${host}/sitemap.xml`)).text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
}

const args = process.argv.slice(2);
const urlList = args.length > 0 ? args : await sitemapUrls();

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation, urlList }),
});

console.log(`Submitted ${urlList.length} URLs: HTTP ${response.status}`);
if (!response.ok && response.status !== 202) process.exitCode = 1;
