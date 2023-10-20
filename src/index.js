import app from "./app.js"


const port = 3000

app.listen(port, () => {
    console.log("Server is runing in port: " + port)
}).on('error', (err) => {
    console.error('Sorry something went wrong \n', err)
})

