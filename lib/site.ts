export const site = {
  title: "Record and replay Go API tests with Keploy",
  shortTitle: "Keploy + Go tutorial",
  subtitle:
    "A step-by-step walkthrough of the fasthttp-postgres sample: record real API traffic, then replay it without a database.",
  description:
    "A hands-on tutorial for Go developers: record and replay API tests with Keploy using the fasthttp-postgres sample.",
  repoUrl: "https://github.com/priyalkhullar/keploydevrel",
  productionUrl: "https://keploydevrel.vercel.app",
  author: "Priyal",
  readTime: "~20 min read",
  datePublished: "2026-10-03",
  keywords: ["Keploy", "Go", "FastHttp", "Postgres", "API testing", "record and replay"],
};

// Vercel exposes the production domain without a protocol.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.NODE_ENV === "production"
    ? site.productionUrl
    : "http://localhost:3000";
