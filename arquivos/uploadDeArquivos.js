const fs = require('fs')

fs.readFile('./arquivos/cao.jpg',(erro, buffer) =>{
    console.log('Imagem deu certo')

    fs.writeFile('./arquivos/cao2.jpg', buffer, (erro)=>{
        console.log('imagem foi escrita')
    })
})