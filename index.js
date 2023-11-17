// This function creates an object orderObject
 function orderObject() {
    let order = {}
    return order;
 }
// This function should prompt user to place order (comma-separated), returns array with orders
function getOrder() {
    let flavors = window.prompt("Please place your order using commas between each froyo flavor. Thanks!", 
        "vanilla,vanilla,vanilla,strawberry,coffee,coffee");
    const flavorsArr = flavors.split(',');
    return flavorsArr;
}

// This function adds order from orderArr to froyoOrder class and returns the obj w/ count of each flavor
function   addOrder(arr, obj) {
    for (let i = 0; i < arr.length; i++) {
        const orderStr = arr[i];
        if (obj[orderStr] === undefined) {
            obj[orderStr] = 0;
        }
        obj[orderStr]++;
    }
    return obj;
}

let froyoOrder = orderObject();
let orderArr = getOrder();
froyoOrder = addOrder(orderArr, froyoOrder);
console.log(froyoOrder);
