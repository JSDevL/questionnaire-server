var mongoose = require('mongoose');

var sectionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name cannot be left blank"
    },
    children: [{
        section_id: mongoose.Schema.Types.ObjectId,
        name: String
    }],
    root: Boolean
});

module.exports = mongoose.model('sections', sectionSchema);
