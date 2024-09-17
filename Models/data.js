const mongoose = require('mongoose');

const assessmentSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: [true, 'Nickname is required!']
    },
    change:{
        type: String,
        required: [true, 'Change is required!']
    },
    sleepStruggleTime: {
        type: String,
        required: true
    },
    sleepTime:{
        type: String,
        required: true
    },
    wakeUpTime:{
        type: String,
        required: true
    },
    sleepHours:{
        type: String,
        required: true 
    },
    sleepScore: {
        type: Number,
        default: 85
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

const Assessment = mongoose.model('Assessment', assessmentSchema);
module.exports = Assessment;