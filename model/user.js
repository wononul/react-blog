const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

/* 비밀번호 해시 처리(pre('save')) */
userSchema.pre('save', function ( next ) {
    const user = this;

    if(user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                user.password = hash; // Store hash in your password DB.
                next();
                console.log(user.password);
            });
        })
    } else {
        next();
    }
})

const User = mongoose.model('User', userSchema);

module.exports = { User }; // User: User (const User로 선언한 모델 객체를 외부로 내보내는 코드이다)