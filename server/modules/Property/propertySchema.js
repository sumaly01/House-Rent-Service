const mongoose = require('mongoose')
const schema = mongoose.Schema;

const propertySchema = new schema({
    contact_person_name: { type: String },
    state: { type: String },
    city: { type: String },
    address: { type: String },
    mobile_number: { type: String },
    email: { type: String },
    price: { type: Number, default: 0 },
    images: [{ type: schema.Types.Mixed }],
    description: { type: String },
    location_coordinates: [{ type: String }],
    property_type: { type: String },
    numberOfRooms: { type: Number, default: 0 },
    numberOfBathrooms: { type: Number, default: 0 },
    waterSupply: { type: String },
    parking: { type: Boolean, default: false },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    is_deleted: { type: Boolean, required: true, default: false },
    is_active: { type: Boolean, required: true, default: true },
    added_at: { type: Date, default: Date.now },
    added_by: { type: schema.Types.ObjectId, ref: 'users' },
});

module.exports = property = mongoose.model('property', propertySchema);
