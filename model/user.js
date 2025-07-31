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

const User = mongoose.model('User', userSchema);

module.exports = { User }; // User: User (const User로 선언한 모델 객체를 외부로 내보내는 코드이다)