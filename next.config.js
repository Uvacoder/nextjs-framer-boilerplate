module.exports = {
    reactStrictMode: true,
    webpack: (config) => {
        config.experiments = {
            buildHttp: true,
            layers: true,
        }
        return config
    },
}
