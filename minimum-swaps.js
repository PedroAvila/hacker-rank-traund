const minimumSwaps = (arr) => {
    let swaps = 0;
    let n = arr.length;

    let arrPos = arr.map((value, index) => [value, index]);

    arrPos.sort((a, b) => a[0] - b[0]);

    let visited = new Array(n).fill(false);

    for (let i = 0; i < n; i++) {
        if (visited[i] || arrPos[i][1] === i) {
            continue;
        }

        let cycleSize = 0;
        let x = i;

        while (!visited[x]) {
            visited[x] = true;
            x = arrPos[x][1];
            cycleSize++;
        }

        if (cycleSize > 0) {
            swaps += cycleSize - 1;
        }
    }

    arr.sort((a, b) => a - b);

    return swaps;
}

let arr = [7, 1, 3, 2, 4, 5, 6];
let result = minimumSwaps(arr);
console.log(`Número de intercambios: ${result}`);