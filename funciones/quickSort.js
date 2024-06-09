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

function quickSort(arr, p, r) {
    if (p < r) {
        const q = partition(arr, p, r);
        quickSort(arr, p, q - 1);
        quickSort(arr, q + 1, r);
    }

    return arr; // Devolver el arreglo ordenado
}

export default quickSort