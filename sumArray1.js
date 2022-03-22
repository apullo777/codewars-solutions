function sumAll(num1, num2) {
    // sumAll(1, 4), returns the sum of 1 + 2 + 3 + 4 which is 10
        let list = [];
        for (i = num1; i<= num2; i++) {
            list.push(i)
        }
        let sum = list.reduce((a, b) => a+b, 0)
        return sum
    }