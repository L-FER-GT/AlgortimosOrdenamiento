function maxHeapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Intercambio
        maxHeapify(arr, n, largest);
    }
}

function buildMaxHeap(arr, n) {
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, n, i);
    }
}

function heapSort(arr, n) {
    buildMaxHeap(arr, n);

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Intercambio
        maxHeapify(arr, i, 0);
    }

    return arr; // Devolver el arreglo ordenado
}

export default heapSort