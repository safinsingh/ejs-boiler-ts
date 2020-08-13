import express from 'express'

const app = express()

app.use(express.urlencoded())
app.use(express.static('static'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(process.env.PORT || 3000)
