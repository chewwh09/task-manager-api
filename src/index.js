const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// middleware
// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status('503').send('Site is currently down. Check back soon!')
// })

// uploading documents/images example
// const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, callback) {
//         if (!file.originalname.match(/\.(doc|docx)$/)) {
//             return callback(new Error('Please upload a Word document'))
//         }

//         callback(undefined, true)

//         // callback(new Error('File must be a PDF'))
//         // callback(undefined, true)
//         // callback(undefined, false)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => { // error handling
//     res.status(400).send({ error: error.message})
// })

app.use(express.json()) // This is for the req.body for it to be json. Not 100% confirm
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port', port)
})


// Authentication/token example
// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
// }

// myFunction()

// const pet = {
//     name: 'Hal',
// }


// toJSON simple example
// pet.toJSON = function () {
//     return {}
// }

// console.log(JSON.stringify(pet))


// User-Task relationship
// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('60a7daba3d3998330c350a02')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)


//     // const user = await User.findById('60a7de7659e2e437c8c4739d')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()