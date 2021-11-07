const path = require('path'); // Isso é um módulo do node.js que permite acessar o caminho do arquivo mais facil 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Isso é um módulo do node.js que permite a criação de um arquivo html automaticamente
const isDevelopment = process.env.NODE_ENV !== 'production'; // Isso é uma variavel de ambiente que vai verificar se o ambiente é de desenvolvimento ou produção
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); // Uma ferramenta que permite que salvemos o nosso codigo e o estado da nossa aplicação nao resete

module.exports = {
    mode: isDevelopment ? 'development' : 'production', // Isso faz com que o webpack evite de fazer alguns processo que deixar mais rapido de se trabalhar em desenvolvimente
    devtool: isDevelopment ? 'eval-source-map' : 'source-map', // Isso faz com que o webpack mostre o código fonte do arquivo que está sendo processado no navegador 
    entry: path.resolve(__dirname, 'src', 'index.jsx'), // Identifico para o webpack está o arquivo principal que ele vai trabalhar
    output: {
        path: path.resolve(__dirname, 'dist'), // Onde ele vai salvar o arquivo
        filename: 'bundle.js' // O nome do arquivo que ele vai salvar   
    },
    resolve: {
        extensions: ['.js', '.jsx'] // Aqui eu defino que eu quero trabalhar com arquivos js e jsx
    },
    devServer: { // Isso ajuda a deixar as coisas mais automatizadas 
        static: path.resolve(__dirname, 'public'), // Aqui eu defino o caminho que o servidor vai acessar o arquivo para ficar carregando automaticamente
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html') // Aqui eu defino o arquivo que eu quero que seja criado automaticamente
        }),
        isDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean), // Aqui eu filtro os plugins que eu quero que sejam executados (hack)
    module: {
        rules: [{
            test: /\.jsx$/, // Estou selecionando todos os arquivos jsx com uma regex
            exclude: /node_modules/, // Aqui eu defino que eu não quero trabalhar com arquivos que estão no node_modules
            use: {
                loader: 'babel-loader',
                options: {
                    plugins: [ // Agora vamos usar umas configuraçoes diferentes no nosso app de refrech sem peder o estado do nosso aplicativo
                        isDevelopment && require.resolve('react-refresh/babel'),
                    ].filter(Boolean),
                },

            }
        },
        { // Aqui estou ensinando o babel a mecher com arquivos css
            test: /\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        { // Isso aqui permite que o webpack meche com arquivos de imagens
            test: /\.(jpg|png|svg)$/,
            exclude: /node_modules/,
            use: {
                loader: 'url-loader',
            },
        },
        ]
    }
};