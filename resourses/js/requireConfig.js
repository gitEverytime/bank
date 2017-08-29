/**
 * @author Mona@pingpongx.com
 * @copyright pingpongx.com 2016
 */

requirejs.config({
    baseUrl: "/resources/js/",
    paths: {
        jquery: 'vendor/jquery-v3.0.0/jquery-3.0.0.min',
        // 'jquery.zclip': 'vendor/jquery.zclip/jquery.zclip.min',
       
    },
    shim: {
        'jquery.validate': {
        
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});