module.exports = {
    devServer: {
        proxy: {
            '/io': {
                target: 'http://cd.haoma.com',
                ws: true,
                changeOrigin: true
            },
        }
    }
}
