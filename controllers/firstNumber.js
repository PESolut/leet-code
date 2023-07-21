const express = require('express')
const controller = express.Router()
const BitManipulationSingleNumber = require ('./firstNumberUtil.js')

controller.get('/', (req, res) => {
    try {

        // if query is present
        if(req.query.list){
            const listOfNumbersString = (req.query.list);

            // convert the string into an array of numbers
            const listOfNumbersArr = JSON.parse(listOfNumbersString)
            console.log(listOfNumbersArr)


            // peform function on arr
            const bmOutput = BitManipulationSingleNumber(listOfNumbersArr)
    
            // output
            res.json({
                'bit manipulation output': bmOutput
            })
        }
    } catch (error){
        res.status(500).json ({ error : error.message })
    }
})

module.exports = controller
