const cocktailSort = arr => {
    let left = firstSwap = 0;
    let right = lastSwap = arr.length - 1;
    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                lastSwap = i;
            }
        }
        right = lastSwap;
        for (let i = right; i > left; i--) {
            if (arr[i] < arr[i - 1]) {
                [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
                firstSwap = i;
            }
        }
        left = firstSwap;
    }
    return arr;
};