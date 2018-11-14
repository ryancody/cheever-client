
const mongoDb = require('mongodb')

// since settings is set out here, it does not need 'this' to reference within a function
// if settings were set in a function, it would need 'this' ... why?
let settings = {
    dbName:null,
    collection:null
}

let init = false

let client, connect, db

let tester

exports.init = (s) => {
    Object.assign(settings, s)
}

exports.open = async () => {
    console.log('connecting to db...')
    try{
        client = await new mongoDb.MongoClient( process.env.DB_URL, {useNewUrlParser:true} )
        connect = await client.connect()
        db = await connect.db(settings.dbName)
        console.log('db connection successful')
    }catch(e) {
        console.log(e.stack)
    }
}

// find a document and update it
exports.findOneAndUpdate = async (query, data) => {
    let doc = await db.collection( settings.collection ).findOneAndUpdate( query, {$set: data} )
    console.log('findoneandupdate',doc)
}

// find a document
exports.find = async (query) => {
    let doc = await db.collection( settings.collection ).find( query )
    console.log('find',doc)
}

// insert array of documents
exports.insertMany = async (insertArray) => {
    
    await db.collection( settings.collection ).insertMany( insertArray, (err, res) => {
        if (err) throw err
        console.log("Number of documents inserted: " + res.insertedCount)
    })
}

exports.close = async () => {
    try{
        await client.close()
        console.log('db connection closed')
    }catch(e) {
        console.log(e.stack)
    }
}


exports.client = client