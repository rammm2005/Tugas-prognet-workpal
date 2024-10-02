const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resource/js')
        },
        fallback: {
            "global": require.resolve('global/'),
        },
        extensions: ['.js', '.jsx', '.php']
    }
};
