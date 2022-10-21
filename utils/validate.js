const Ajv = require('ajv');
const ajv = new Ajv();

const ValidateData = (data, schema) => {
    const isValid = ajv.validate(schema, data);
    if (isValid) {
        return { isValid: isValid };
    } else {
        return { isValid: isValid, errors: ajv.errors }
    }
}

const Validate = (data, schema) => {
    let resp = ValidateData(data, schema);
    if (resp.isValid) throw new Error(JSON.stringify({ customError: resp.errors }));
}

module.exports = { ValidateData, Validate };