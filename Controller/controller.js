const Assessment = require('../Models/data');

exports.submit =async (req,res) => {
    console.log(req.body);
    const { nickname, change, sleepStruggleTime,sleepTime, wakeUpTime,sleepHours, sleepScore, createdAt} = req.body;

    try {
        const response = await Assessment.create({ nickname, change, sleepStruggleTime,sleepTime, wakeUpTime,sleepHours, sleepScore, createdAt });

        res.send({ message: "You have a sleep efficiency of 85%, That's good.", success: true});
    }
    catch (err) {
        res.send({ message: "Something went wrong. Try again later!" });
        console.log(err);
    }
};