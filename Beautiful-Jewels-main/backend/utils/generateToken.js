const jwt =require('jsonwebtoken')

const generateToken = (id) => {
  return jwt.sign({ id }, "SANKETSUPEKAR123VIITPUNE", { expiresIn: '30d' })
}

module.exports = generateToken

