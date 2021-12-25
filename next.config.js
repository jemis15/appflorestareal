module.exports = {
    async rewrites() {
        return [{ source: '/configuraciones', destination: '/configuraciones/cuenta' }, { source: '/api/:slug*', destination: "https://florestareal.com.pe/api/:slug*" }]
    },
}