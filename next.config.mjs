/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: [
            '@tanstack/react-query',
            '@googlemaps/react-wrapper',
            'react',
            'next',
            'react-countup',
            'react-dom',
            'react-paginate',
            '@tanstack/react-query-devtools'
        ]
    }
};

export default nextConfig;
