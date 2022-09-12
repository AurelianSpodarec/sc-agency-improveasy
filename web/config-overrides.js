var path = require('path');
var fs = require('fs');
const { override, addDecoratorsLegacy, babelInclude, addWebpackAlias } = require('customize-cra');

module.exports = function (config, env) {
    return Object.assign(
        config,
        override(
            addDecoratorsLegacy(),
            addWebpackAlias({
                '@reducers': path.resolve(__dirname, 'src/redux/reducers'),
                '@actions': path.resolve(__dirname, 'src/redux/actions'),
                '@selectors': path.resolve(__dirname, 'src/redux/selectors'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@components': path.resolve(__dirname, 'src/components'),
                '@ui': path.resolve(__dirname, 'src/ui'),
                '@routes': path.resolve(__dirname, 'src/routes'),
                '@styles': path.resolve(__dirname, 'src/_styles'),
                '@content': path.resolve(__dirname, 'src/_content'),
                '@context': path.resolve(__dirname, 'src/context'),
                '@hooks': path.resolve(__dirname, 'src/hooks'),
            }),
            babelInclude([path.resolve('src'), fs.realpathSync('node_modules/lib/src')]),
        )(config, env),
    );
};
