const availableItems = ['bread','cakes','pasteries'];

function checkAvailability(item){
    return availableItems.includes(item);
}

module.exports ={
    checkAvailability
};