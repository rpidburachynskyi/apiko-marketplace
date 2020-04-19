const { Schema, model } = require("mongoose");
const crypto = require("crypto");

const sessionSchema = new Schema({
    userId: {
        type: Number,
        default: 0
    },
    sesid: {
        type: String,
    }
});

sessionSchema.pre("save", function(next) {
    const sesid = crypto.randomBytes(256);
    this.sesid = sesid;
    next();
});

const sessionModel = model("Sessions", sessionSchema);

exports.createSession = (userId) => sessionModel.create({ userId });
exports.getSessionBySesid = (sesid) => sessionModel.findOne({ sesid });
exports.removeSession = (sesid) => sessionModel.findOneAndDelete({ sesid });