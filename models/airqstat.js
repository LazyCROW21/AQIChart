const mongoose = require('mongoose');

const AirQualityIndex = mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    Index: Number,
    PM2dot5: mongoose.Types.Decimal128,
    PM10: mongoose.Types.Decimal128,
    NO: mongoose.Types.Decimal128, 
    NO2: mongoose.Types.Decimal128,
    NOx: mongoose.Types.Decimal128,
    CO: mongoose.Types.Decimal128,
    SO2: mongoose.Types.Decimal128,
    O3: mongoose.Types.Decimal128,
    AQI: mongoose.Types.Decimal128,
    AQI_Bucket: String
});

const AirQIdx = mongoose.model('Stats', AirQualityIndex, 'Stats');

module.exports = AirQIdx;