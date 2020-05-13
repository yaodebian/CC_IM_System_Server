module.exports = {
  home: (req, res) => {
    res.send('you are now in home page')
  },
  user: (req, res) => {
    res.send('you are now in user page')
  },
  login: (req, res) => {
    let query = req.query
    if (query.username === 'yaodebian' && query.password === '123456') {
      res.send('login successful')
    } else {
      res.send('wrong user name or password')
    }
  },
  serverError: (req, res, next) => {
    throw new Error('something went wrong')
  }
}