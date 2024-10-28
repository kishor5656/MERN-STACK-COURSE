const calculator = {
    value :0,

    add(number){
        this.value += number;
        return this;
    },
    
    subtract(number){
        this.value -= number;
        return this;
    },
    multiply(number){
        this.value *= number;
        return this;
    },
    divide(number){
        if (number!=0) {
            this.value /= number;
            return this;
        }else{
            console.error("cant divide kutta")
        }

    },

    getresult(){
        return this.value;
    },

};

let result = calculator.add(5).multiply(2).subtract(4).divide(3).getresult();

console.log(result);