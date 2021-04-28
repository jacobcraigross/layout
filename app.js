// PASCALS TRIANGLE

const initApp = () => {
    const pascalArray = pascalsTriangle(8); // this function will return an array of arrays 
}

document.addEventListener("DOMContentLoaded", initApp);

const pascalsTriangle = (rows = 3) => {
    if(rows < 3) rows = 3;
    const stackArray = [];
    let i = 1;

    while(i <= rows) {
        const rowArray = [];
        let x = 0;
        let rowValue;

        while(x < i) {
            if(!x || x === i - 1) {
                rowValue = 1
            } else {
                rowValue = ( parseInt (stackArray[i - 2][x]) + parseInt (stackArray[i - 2][x - 1]) );
            }
            rowArray.push(rowValue);
            x++;
        }
        console.log(rowArray);
        stackArray.push(rowArray);
        i++;
    }
    console.log(stackArray);
    return stackArray;
}
