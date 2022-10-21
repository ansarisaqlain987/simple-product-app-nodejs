const mongoose = require('mongoose');

exports.connectDB = () => {
    const dbUrl = process.env.DB_URL;
    if (!dbUrl) {
        console.log("DB URL is not present");
        process.exit(0);
    }
    mongoose.connect(dbUrl, {});
    const connection = mongoose.connection;
    return { connection }
}