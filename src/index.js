// To get the database starting, open a new terminal and run /Users/Admin/mongodb/bin/mongod.exe --dbpath=/Users/Admin/mongodb-data
const app = require('./app')
const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port', port)
})