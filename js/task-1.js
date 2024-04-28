function isEnoughCapacity(products, containerSize) {
    let maxCapacity = 0;
    const values = Object.values(products);
    for (const key of values) {
        maxCapacity = maxCapacity + key;
    }
   
    if (maxCapacity <= containerSize){
       return true; 
    }
    if (maxCapacity > containerSize) {
    return false;
}
    }
  

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8));
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); 
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); 