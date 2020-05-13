module.exports = app => {
  app.use('*', (req, res) => {
    res.status(404).send('the directory you request is not exist in the server')
  })
  
  app.use((err, req, res, next) => {
    res.status(500).send('something went wrong')
  })
}