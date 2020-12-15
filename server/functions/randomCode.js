function getRandomCode(length) {
  var code = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    code += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  console.log();
  return code;
}
const takeRandomCode = getRandomCode(5);

module.exports = takeRandomCode;
