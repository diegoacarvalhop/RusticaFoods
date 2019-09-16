if (process.env.NODE_ENV == "production") {
    module.exports = {
        mongoURI: 'mongodb+srv://maxxacai:maxxacaioficial@maxxacai-s3lsh.azure.mongodb.net/test?retryWrites=true'
    }
} else {
    module.exports = {
        mongoURI: 'mongodb://localhost/rusticafoods'
    }
}