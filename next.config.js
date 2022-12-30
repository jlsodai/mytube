/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	images: {
		domains: [
			"images.unsplash.com",
			"sources.unsplash.com",
			"yt3.ggpht.com",
		],
	},
};

module.exports = nextConfig;
