requirejs.config({
    baseUrl: 'js/modules',
    paths: {
        jquery: '../../node_modules/jquery/dist/jquery.min',
        bootstrap: '../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.min',
        main: '../main'
    }
});

requirejs(['main']);

