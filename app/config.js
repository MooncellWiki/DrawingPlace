module.exports = {
    host: '127.0.0.1',
    port: 5201,
    proxy: {
        '/api': {
            target: 'http://127.0.0.1:5200',
            changeOrigin: true
        },
        '/socket.io': {
            target: 'http://127.0.0.1:5200',
            changeOrigin: true
        }
    }
}