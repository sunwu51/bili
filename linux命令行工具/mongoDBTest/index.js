'use strict';
var {getAllCmdName, getDocByName} = require('./mongo')

exports.main_handler = async (event, context) => {
    console.log(event)
    var name = event.name; 
    var res = await getDocByName(name)
    return res
};