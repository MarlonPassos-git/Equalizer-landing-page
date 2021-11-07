module.exports = {  // Uma maneira de exportar um objeto usando nodeJS 
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {
            runtime: 'automatic', // Isso faz com que possamos usar o JSX sem precisar importar o react 
        }],

    ]
}