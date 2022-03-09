const dotenv = require('dotenv');
const path = require('path');
const joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = joi
  .object()
  .keys({
    NODE_ENV: joi.string().valid('production', 'test', 'development').required(),
    PORT: joi.number().default(3000),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
};
