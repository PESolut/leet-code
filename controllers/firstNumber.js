const express = require('express')
const controller = express.Router()
// const { BitManipulationSingleNumber, SortingSingleNumber } = require('./firstNumberUtil.js');
const BitManipulationSingleNumber = require('./firstNumberUtil.js')
const SortingSingleNumber = require('./firstNumberUtil.js')



controller.get('/', (req, res) => {
    try {

        // if query is present
        if(req.query.list){
            const listOfNumbersString = (req.query.list);

            // check that the query string is a formated like so
            // [ number1, number2, number3]

            // convert the string into an array of numbers
            const listOfNumbersArr = JSON.parse(listOfNumbersString)
            console.log(listOfNumbersArr)


            // peform function on arr
            const bmOutput = BitManipulationSingleNumber(listOfNumbersArr)
            const sOutput = SortingSingleNumber(listOfNumbersArr)
    
            // output
            res.json({
                'bit manipulation output': bmOutput,
                'sorting output': sOutput
            })
        } else {
            throw {
                message: 'must include a list query with an array of numbers!', status: 'error'
            }
        }
    } catch (error){
        res.status(500).json ({ error : error.message })
    }
})

module.exports = controller
