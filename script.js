const dataArrays = {
  10: [],
  100: [],
  1000: [],
  10000: [],
  100000: [],
};
const dataTest = {
  longArray: [10, 100, 1000, 10000, 100000],
  BubbleSort: ["0", "0", "0", "0", "0"],
  SelectionSort: ["0", "0", "0", "0", "0"],
  InsertionSort: ["0", "0", "0", "0", "0"],
  MergeSort: ["0", "0", "0", "0", "0"],
  QuickSort: ["0", "0", "0", "0", "0"],
  QuickSort_Randomized: ["0", "0", "0", "0", "0"],
  HeapSort: ["0", "0", "0", "0", "0"],
  CountSort: ["0", "0", "0", "0", "0"],
  RadixSort: ["0", "0", "0", "0", "0"],
  BucketSort: ["0", "0", "0", "0", "0"],
};
function llenarTabla() {
  const table = document.getElementById("comparacion-dataTable");
  const tbody = table.querySelector("tbody");
  // Vaciar la tabla
  tbody.innerHTML = "";
  // Llenar la tabla con los datos
  let i = 0;
  for (let x = 0; x < dataTest["longArray"].length; x++) {
    const row = document.createElement("tr");
    // Añadir los datos en 0
    for (const llavesTest of Object.keys(dataTest)) {
      const dataCell = document.createElement("td");
      dataCell.textContent = dataTest[llavesTest][i];
      row.appendChild(dataCell);
    }
    i += 1;
    tbody.appendChild(row);
  }
}
function generateRandomOrder(value) {
  const arr = [];

  // Llenar el arreglo con valores del 1 al n
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  // Algoritmo de Fisher-Yates para permutar el arreglo
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  dataArrays[value] = arr;
}
//Proyect A
document.addEventListener("DOMContentLoaded", () => {
  llenarTabla();
  for (const keyArrays in dataArrays) {
    generateRandomOrder(keyArrays);
  }
  //--------------SECCION DE LA TABLA DE COMPARACION-------------------
  const container_TablaComparacion = document.getElementById(
    "tablaComparacionContainer"
  );
  container_TablaComparacion.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    dataTest["BubbleSort"][0] = 5;
    llenarTabla();
  });
  //--------------SECCION ALGORITMO BUBBLESORT-------------------
  container_BubbleSort = document.getElementById("bubbleSortContainer");
  container_BubbleSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bubble Sort
  });

  //--------------SECCION ALGORITMO SELECTIONSORT-------------------
  container_SelectionSort = document.getElementById("selectionSortContainer");
  container_SelectionSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Selection Sort
  });

  //--------------SECCION ALGORITMO INSERTIONSORT-------------------
  container_InsertionSort = document.getElementById("insertionSortContainer");
  container_InsertionSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Insertion Sort
  });

  //--------------SECCION ALGORITMO MERGESORT-------------------
  container_MergeSort = document.getElementById("mergeSortContainer");
  container_MergeSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Merge Sort
  });

  //--------------SECCION ALGORITMO QUICKSORT-------------------
  container_QuickSort = document.getElementById("quickSortContainer");
  container_QuickSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Quick Sort
  });

  //--------------SECCION ALGORITMO QUICKSORT RANDOMIZED-------------------
  container_RandomizedQuickSort = document.getElementById(
    "randomizedQuickSortContainer"
  );
  container_RandomizedQuickSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Quick Sort Randomizado
  });

  //--------------SECCION ALGORITMO HEAPSORT-------------------
  container_HeapSort = document.getElementById("heapSortContainer");
  container_HeapSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Heap Sort
  });

  //--------------SECCION ALGORITMO COUNTSORT-------------------
  container_CountSort = document.getElementById("countSortContainer");
  container_CountSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Count Sort
  });

  //--------------SECCION ALGORITMO RADIXSORT-------------------
  container_RadixSort = document.getElementById("radixSortContainer");
  container_RadixSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Radix Sort
  });

  //--------------SECCION ALGORITMO BUCKETSORT-------------------
  container_BucketSort = document.getElementById("bucketSortContainer");
  container_BucketSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bucket Sort
  });
});

function openModule(evt, moduleName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tabcontent = document.getElementsByClassName("tab-content-2");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  document.getElementById(moduleName).classList.add("active");
  evt.currentTarget.classList.add("active");
}
