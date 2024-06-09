import countingSort from "./countingSort";
function radixSort(arr, n, d) {
    let max = Math.max(...arr);

    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSort(arr, exp);
    }

    return arr; // Devolver el arreglo ordenado
}
export default radixSort