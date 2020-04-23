const moongose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new moongose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function hashPassword(next) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 8);
});

UserSchema.methods = {
  compareHash(hash) {
    return bcrypt.compare(hash, this.password);
  },
};

moongose.model("User", UserSchema);
