function sum(numA, numB){
    return numA + numB
}

function multiply(numA , numB){
    return numA * numB
}

// Testing Framework

function test(message, callback){
    try{
        callback();
        console.log("executed", message)
    }catch(error){
        console.error(error)
        console.log('Not executed', message )
    }
}


// Testing Assertion

function expect(actual){
    return {
        toEqual : function(expected){
            if(actual !== expected){
                throw new Error(`${actual} is not equal to ${expected}`)
            }
        },
        toBeEqual : function(expected){
            if(typeof actual !== expected){
                throw new Error(`${typeof actual} is not equal to ${expected}`)
            }
        },

    }
}

// testing 

function testSum(){
    result = sum(2, 3);
    expected = 5;
    expect(result).toEqual(expected);
}

function typeTestSum(){
    result = sum(2, 3);
    expected = "number";
    expect(result).toBeEqual(expected)
}

function testMultiply(){
    result = multiply(2, 3);
    expected = 6;
    expect(result).toEqual(expected)
}

test("Testing for sum 2 and 3", testSum)
test("type of testing sum is number or not", testSum)

test("Testing for the multiplication number", testMultiply)
