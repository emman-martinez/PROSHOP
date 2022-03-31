import { Schema, model } from 'mongoose';

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
    }, 
    password: {
        type: String,
        required: true,
    }, 
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    }, 
}, {
    timestamps: true,
});

const User = model('User', UserSchema);

export default User;