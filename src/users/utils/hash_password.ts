const bcrypt = require('bcrypt');
const saltRounds = 10;

export const hashPassword = async (password: string) => {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }
    console.log(typeof hash);
  });
};
