const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
'public/css/font-awesome.min.css',
'public/css/simple-line-icons.min.css',
'public/css/style.css'
], 'public/css/all.css')
.scripts([
'public/js/jquery.min.js',
'public/js/popper.min.js',
'public/js/bootstrap.min.js',
'public/js/Chart.min.js',
'public/js/pace.min.js',
'public/js/template.js'
], 'public/js/all.js')
.js(['resources/assets/js/app.js'], 'public/js/app.js');

