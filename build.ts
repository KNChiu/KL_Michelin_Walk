/**
 * 建置單檔版：把 data.js 與 app.js 內嵌進 index.html → index-standalone.html
 * 用法：bun build.ts
 * 維護流程：改 data.js → 跑一次 bun build.ts → index-standalone.html 更新
 */
const html = await Bun.file("index.html").text();
const data = await Bun.file("data.js").text();
const app = await Bun.file("app.js").text();

const out = html
  .replace('<link rel="preconnect" href="https://fonts.googleapis.com">', '<link rel="preconnect" href="https://fonts.googleapis.com">')
  .replace('<script src="data.js"></script>\n<script src="app.js"></script>',
    `<script>\n${data}\n</script>\n<script>\n${app}\n</script>`);

// 保險：單檔版不需要「資料檔未載入」的提示
const fuse = /\n<script>\n\/\/ 保險絲[\s\S]*?<\/script>/;
const finalOut = out.replace(fuse, "");

await Bun.write("index-standalone.html", finalOut);
console.log(`OK: index-standalone.html ${(finalOut.length / 1024).toFixed(1)} KB`);
