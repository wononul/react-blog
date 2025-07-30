const mongoose = require('mongoose');

/* schemayptes 학습: https://mongoosejs.com/docs/schematypes.html */
const userSchema = mongoose.Schema({ // schema 필드 정의
    name: {
        type: String,
        maxLength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true // 앞뒤 공백 제거
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 5
    },
    role: {
        type: Number,
        default: 0
    }
})