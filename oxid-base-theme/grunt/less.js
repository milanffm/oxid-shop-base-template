module.exports = {

    options: {
        compress: true,
        yuicompress: true,
        optimization: 2,
        plugins: [
            new (require('less-plugin-autoprefix'))({browsers: ["last 2 versions"]})
        ]
    },

    theme: {
        files: {
            "out/oxid-base-theme/src/css/styles.min.css": "build/less/oxid-base-theme.less"
        }
    },

    vendor: {
        files: {
            "out/oxid-base-theme/src/css/libs/jquery.flexslider.min.css": "build/vendor/jquery-flexslider2/less/flexslider.less"
        }
    }

};