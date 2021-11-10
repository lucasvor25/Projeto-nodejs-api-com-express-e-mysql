const fs = require('fs')

fs.createReadStream('./arquivos/cao.jpg')
.pipe(fs.createWriteStream('./arquivos/cao-stream.jpg'))
.on('finish', () => console.log("Cao imagem escrito com sucesso"))