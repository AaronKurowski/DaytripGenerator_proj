function removeArrayElement(array, value){
    let index = array.indexOf(value);
    if(index >= 0){
        array.splice(index, 1);
    }
    return array;
}

arrayEx = ["hi", "bye", "sup"];

console.log(removeArrayElement(arrayEx, "hi"));



