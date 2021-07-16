function random(num) {
  let random = Math.floor((Math.random() * num))
  return random;
}
module.exports = { random }