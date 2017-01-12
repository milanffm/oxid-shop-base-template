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
            "out/cado/src/css/styles.min.css": "build/less/cado.less"
        }
    },

    vendor: {
        files: {
            "out/cado/src/css/libs/jquery.flexslider.min.css": "build/vendor/jquery-flexslider2/less/flexslider.less"
        }
    }

};