const { check } = require("express-validator");
const {validateResult} = require('../../helpers/validateHelper')

const validateCreate = [
    check("name").exists().not().isEmpty(),
    check("last_name").exists().not().isEmpty(),
    check("second_last_name").exists().not().isEmpty(),
    check("email").exists().not().isEmpty().isEmail(),
    check("telephone").exists().not().isEmpty().isNumeric(),
    check("gender").exists().not().isEmpty(),
    check("birth_date").exists().not().isEmpty(),

    (req, res, next) => {
        validateResult(req, res, next)
    }
];


module.exports = {validateCreate}
