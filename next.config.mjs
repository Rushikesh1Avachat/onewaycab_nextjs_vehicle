/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "https://source.unsplash.com"
            }
        ]
    }
}

export default nextConfig;
