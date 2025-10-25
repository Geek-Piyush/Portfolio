const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/projects", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "yearly", priority: 0.5 },
];

const sitemap = new SitemapStream({ hostname: "https://piyushnashikkar.dev" });
streamToPromise(sitemap).then(() =>
  console.log("✅ Sitemap created successfully!")
);
sitemap.pipe(createWriteStream("./public/sitemap.xml"));
links.forEach((link) => sitemap.write(link));
sitemap.end();
