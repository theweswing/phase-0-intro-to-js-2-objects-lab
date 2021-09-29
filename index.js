// Write your solution in this file!
const employee={
    name:"Wes",
    streetAddress:"30 Rock",
}

function updateEmployeeWithKeyAndValue(object,key,value){
    const newobj={...object}
    newobj[key]=value
    return newobj
}

function destructivelyUpdateEmployeeWithKeyAndValue(Object,key,value){
    Object[key]=value
    return Object
}

function deleteFromEmployeeByKey(employee,key){
    const newemployee={...employee}
    delete newemployee[key]
    return newemployee
}

function destructivelyDeleteFromEmployeeByKey(object,key){
    delete object[key]
    return object
}