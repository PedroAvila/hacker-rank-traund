function countTriplets(arr, r) {
    let count = 0;
    let potential = {};
    let combinations = {};

    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (combinations[value]) {
            count += combinations[value];
        }

        if (potential[value]) {
            if (!combinations[value * r]) {
                combinations[value * r] = 0;
            }
            combinations[value * r] += potential[value];
        }

        if (!potential[value * r]) {
            potential[value * r] = 0;
        }
        potential[value * r]++;
    }

    return count;
}

const arr = [1, 4, 16, 64];
const r = 4;
console.log(countTriplets(arr, r));  
