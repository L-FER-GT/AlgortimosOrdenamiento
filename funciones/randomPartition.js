function partition(arr, p, r) {
    const x = arr[r]; // Pivote
    let i = p - 1;

    for (let j = p; j <= r - 1; j++) {
        if (arr[j] <= x) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Intercambio
        }
    }

    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]]; // Intercambio
    return i + 1;
}

function randomPartition(arr, p, r) {
    const i = Math.floor(Math.random() * (r - p + 1)) + p;
    [arr[i], arr[r]] = [arr[r], arr[i]]; // Intercambio
    return partition(arr, p, r);
}

function quickSort(arr, p, r) {
    if (p < r) {
        const q = randomPartition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }
}

export default randomPartition