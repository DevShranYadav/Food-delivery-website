const mongoose = require('mongoose');

const mongodbUrl = "mongodb://foodiemern1:foodiemern11@ac-yoppred-shard-00-00.bukjdcz.mongodb.net:27017,ac-yoppred-shard-00-01.bukjdcz.mongodb.net:27017,ac-yoppred-shard-00-02.bukjdcz.mongodb.net:27017/foodiemern1?ssl=true&replicaSet=atlas-qbok64-shard-0&authSource=admin&retryWrites=true&w=majority";

const mongoDB = async () => {
    mongoose.connect(mongodbUrl, { useUnifiedTopology: true }, async function (err, data) {
        if (err) console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray(async function (err, data) {
                const foodCategory = await mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray(async function (err, catData) {
        
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory=catData;
                        
                    }
                })
            });

        }

    });
}

module.exports = mongoDB;