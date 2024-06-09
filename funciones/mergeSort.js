function merge(arr, p, q, r) {
    const n1 = q - p + 1;
    const n2 = r - q;

    const L = new Array(n1);
    const R = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L[i] = arr[p + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = arr[q + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = p;

    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        } else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }

    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}

function mergeSort(arr, p = 0, r = arr.length - 1) {
    if (p < r) {
        const q = Math.floor((p + r) / 2);
        mergeSort(arr, p, q);
        mergeSort(arr, q + 1, r);
        merge(arr, p, q, r);
    }

    return arr; // Devolver el arreglo ordenado
}

export default mergeSort