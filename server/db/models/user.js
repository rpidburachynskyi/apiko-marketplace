const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    id: {
        type: Number,
        default: 0
    },
    verifyed: {
        type: Boolean,
        default: false
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedProducts: {
        type: [Number], // products ids
        default: []
    }
});

userSchema.pre("save", async function(n) {
    if(this.id !== 0) return;

    const obj = await userModel.find().sort({ field: 'desc', id: -1 }).limit(1);
    this.id = obj[0] ? obj[0].id + 1 : 0;
    n();
});

const userModel = model("Users", userSchema);

exports.createUser = (fullName, email, password) => userModel.create({ fullName, email, password });
exports.getUserById = (id) => userModel.findOne({ id });
exports.getUserByEmail = (email) => userModel.findOne({ email });
exports.getUserByEmailAndPassword = (email, password) => userModel.findOne({ email, password });