// routes
const homeRouter = require('./home')
const manageRouter = require('./manage')

module.exports = app => {
  app.use('/', homeRouter)
  app.use('/manage', manageRouter)
}