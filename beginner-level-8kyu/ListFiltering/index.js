// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(list) {

    return list.filter(str => typeof str != 'string');
}

// return a new list filtered when str type is not a string

function filter_list2(list) {
    return list.filter(num => typeof num === 'number');
}