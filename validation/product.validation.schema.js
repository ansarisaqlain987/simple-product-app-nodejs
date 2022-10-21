const addproductSchema = {
    type: "object",
    properties: {
        name: { type: "string" },
        price: { type: "number" }
    },
    required: ['name', 'price'],
    additionalProperties: false,
};

const updateProductSchema = addproductSchema;

module.exports = {
    addproductSchema, updateProductSchema
}