/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3030',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;