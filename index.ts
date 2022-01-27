import app from './app'

const PORT:string | number = process.env.PORT || 8017
app.listen(PORT, ():void => {
  return console.log(`Express is listening at http://localhost:${PORT}`)
})
