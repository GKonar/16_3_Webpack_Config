const path = require('path');

//webpack.config.js
module.exports = { // to kolejny moduł, który eksportuje obiekt konfiguracyjny potrzebny webpackowi
    entry: './src/app.js', //wskazuje plik od którego zaczynamy proces kompilacji
    output: { // wskazuje na ścieżkę i nazwę pliku wejściowego
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    }
};