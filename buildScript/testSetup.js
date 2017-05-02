require('babel-register')();

//Dehabilitando los features de webpack que Mocha no entiende.
require.extensions['.css'] = function () {}
