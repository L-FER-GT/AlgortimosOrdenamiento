//FUNCIOPDES DE LOS ALGORITMOS DE ORDENAMIENO

var graf_Chart;
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 1; i < len; i++) {
      if (arr[i - 1] > arr[i]) {
        // Intercambiar elementos
        let temp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = temp;
        swapped = true;
      }
    }
    len--;
  } while (swapped);

  return arr; // Devolver el arreglo ordenado
}

function bucketSort(arr) {
  const n = arr.length;
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);
  const bucketSize = 100; // Tamaño del balde

  // Crear un array de buckets
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  const buckets = new Array(bucketCount);
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = [];
  }

  // Colocar elementos en los buckets
  for (let i = 0; i < n; i++) {
    const index = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[index].push(arr[i]);
  }

  // Ordenar cada bucket usando insertion sort
  for (let i = 0; i < bucketCount; i++) {
    buckets[i] = insertionSort(buckets[i]);
  }
  // Concatenar todos los buckets ordenados
  let sortedArr = [];
  for (let i = 0; i < bucketCount; i++) {
    sortedArr = sortedArr.concat(buckets[i]);
  }
  return sortedArr;
}

function countSort(arr) {
  let n = arr.length;
  let k = Math.max(...arr); // Calcula el valor máximo en el arreglo

  let count = Array(k + 1).fill(0);
  let output = Array(n);

  // Contar las apariciones de cada valor en arr
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }

  // Acumular las cuentas
  for (let i = 1; i <= k; i++) {
    count[i] += count[i - 1];
  }

  // Construir la lista ordenada
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }

  return output;
}

function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n);
  const count = new Array(10).fill(0);

  // Contar las apariciones de cada dígito en la posición exp
  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
  }

  // Acumular las cuentas
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Construir la lista ordenada basada en el dígito en la posición exp
  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[count[index] - 1] = arr[i];
    count[index]--;
  }

  // Copiar la lista ordenada al arreglo original
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
  return arr;
}

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

function heapSort(arr, n = arr.length) {
  buildMaxHeap(arr, n);

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // Intercambio
    maxHeapify(arr, i, 0);
  }
  return arr; // Devolver el arreglo ordenado
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

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

function quickSort(arr, p = 0, r = arr.length - 1) {
  if (p < r) {
    const q = partition(arr, p, r);
    quickSort(arr, p, q - 1);
    quickSort(arr, q + 1, r);
  }
  return arr; // Devolver el arreglo ordenado
}
function radixSort(arr) {
  const max = Math.max(...arr);

  // Aplicar Counting Sort para cada posición de dígito, comenzando desde las unidades
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  return arr;
}
function randomPartition(arr, p, r) {
  const i = Math.floor(Math.random() * (r - p + 1)) + p;
  [arr[i], arr[r]] = [arr[r], arr[i]]; // Intercambio
  return partition(arr, p, r);
}

function quickSort_Randomized(arr, p = 0, r = arr.length - 1) {
  if (p < r) {
    const q = randomPartition(arr, p, r);
    quickSort_Randomized(arr, p, q - 1);
    quickSort_Randomized(arr, q + 1, r);
  }
  return arr;
}
function selectionSort(A, n = A.length) {
  for (let i = 0; i < n - 1; i++) {
    let min = i; // Inicializa el índice del mínimo como i
    for (let j = i + 1; j < n; j++) {
      if (A[j] < A[min]) {
        min = j; // Actualiza el índice del mínimo si se encuentra un elemento más pequeño
      }
    }
    // Intercambia A[i] con A[min] si el mínimo encontrado es diferente de i
    if (min !== i) {
      let temp = A[i];
      A[i] = A[min];
      A[min] = temp;
    }
  }
  return A; // Devuelve el arreglo ordenado
}

const dataArrays = {
  10: [],
  100: [],
  1000: [],
  10000: [],
  50000: [],
  100000: [],
};
var algoritmos = {
  longArray: {
    data: [10, 100, 1000, 10000, 50000, 100000],
    function: () => {},
  },
  BubbleSort: { data: [-1, -1, -1, -1, -1, -1], function: bubbleSort },
  SelectionSort: { data: [-1, -1, -1, -1, -1, -1], function: selectionSort },
  InsertionSort: { data: [-1, -1, -1, -1, -1, -1], function: insertionSort },
  MergeSort: { data: [-1, -1, -1, -1, -1, -1], function: mergeSort },
  QuickSort: { data: [-1, -1, -1, -1, -1, -1], function: quickSort },
  QuickSort_Randomized: {
    data: [-1, -1, -1, -1, -1, -1],
    function: quickSort_Randomized,
  },
  HeapSort: { data: [-1, -1, -1, -1, -1, -1], function: heapSort },
  CountSort: { data: [-1, -1, -1, -1, -1, -1], function: countSort },
  RadixSort: { data: [-1, -1, -1, -1, -1, -1], function: radixSort },
  BucketSort: { data: [-1, -1, -1, -1, -1, -1], function: bucketSort },
};

function formatearTiempo(tiempoTranscurrido) {
  if (tiempoTranscurrido < 0) {
    return "-";
  }
  // Convertir el tiempo transcurrido según sea necesario
  let tiempoFormateado;
  if (tiempoTranscurrido > 100000) {
    // Mayor a 100 segundos
    const minutos = Math.floor(tiempoTranscurrido / 60000);
    const segundos = ((tiempoTranscurrido % 60000) / 1000).toFixed(3);
    tiempoFormateado = `${minutos}m ${segundos}s`;
  } else if (tiempoTranscurrido > 100) {
    // Mayor a 100 milisegundos
    tiempoFormateado = (tiempoTranscurrido / 1000).toFixed(3) + "s";
  } else {
    tiempoFormateado = tiempoTranscurrido.toFixed(4) + "ms";
  }

  // Devolver el tiempo formateado
  return tiempoFormateado;
}
function llenarTabla() {
  const table = document.getElementById("comparacion-dataTable");
  const tbody = table.querySelector("tbody");
  // Vaciar la tabla
  tbody.innerHTML = "";
  // Llenar la tabla con los datos
  let i = 0;
  for (let x = 0; x < algoritmos["longArray"].data.length; x++) {
    const row = document.createElement("tr");
    // Añadir los datos en 0
    for (const llavesTest of Object.keys(algoritmos)) {
      const dataCell = document.createElement("td");
      if (llavesTest === "longArray") {
        dataCell.textContent = algoritmos[llavesTest].data[i];
      } else {
        dataCell.textContent = formatearTiempo(algoritmos[llavesTest].data[i]);
      }
      row.appendChild(dataCell);
    }
    i += 1;
    tbody.appendChild(row);
  }
}
function generateRandomOrder(value) {
  const arr = [];

  // Llenar el arreglo con valores del 1 al n
  for (let i = 1; i <= value; i++) {
    arr.push(i);
  }

  // Algoritmo de Fisher-Yates para permutar el arreglo
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  dataArrays[value] = arr;
}
function calcularTiempoAlgoritmo(arr, metodo) {
  let newArray = [...arr];
  console.log(newArray);
  // Guardar el tiempo inicial
  const tiempoInicial = performance.now();

  // Ejecutar la función de ordenación con el array dado
  const solution = algoritmos[metodo].function(newArray);

  // Guardar el tiempo final
  const tiempoFinal = performance.now();
  console.log(solution);
  // Calcular el tiempo transcurrido en milisegundos
  const tiempoTranscurrido = tiempoFinal - tiempoInicial;

  return tiempoTranscurrido;
}
function calculateN(ValuePosition) {
  // Si ValuePosition es 0, el número de dígitos es 0
  if (ValuePosition === 0) {
    return 0;
  }

  // Inicializamos n en 0
  let n = 0;
  ValuePosition = Math.floor(ValuePosition / 10);
  // Mientras ValuePosition no sea 0, dividimos entre 10 para contar los dígitos
  while (ValuePosition !== 0) {
    ValuePosition = Math.floor(ValuePosition / 10);
    n++;
  }

  // Restamos 1 al final ya que el ciclo cuenta el dígito más significativo
  // y queremos el número de dígitos menos 1.
  return n - 1;
}
async function CalcularTodosLosTiempos() {
  const tiempos = {
    BubbleSort: 0,
    SelectionSort: 0,
    InsertionSort: 0,
    MergeSort: 0,
    QuickSort: 0,
    QuickSort_Randomized: 0,
    HeapSort: 0,
    CountSort: 0,
    RadixSort: 0,
    BucketSort: 0,
  };
  const ValuePosition = calculateN(
    parseInt(document.getElementById("inicio-select-Ejecucion").value)
  );
  let position = ValuePosition;
  let breakTime = parseInt(
    document.getElementById("nivel-input-ejecucion").value
  );
  for (let i = position; i < Object.keys(dataArrays).length; i++) {
    if (breakTime == 0) {
      break;
    }
    for (const keyMetodo in tiempos) {
      algoritmos[keyMetodo].data[position] = -1;
      llenarTabla();
    }
    position += 1;
    breakTime -= 1;
  }
  // Pausa el programa por un segundo antes de la próxima iteración
  await new Promise((resolve) => setTimeout(resolve, 1000));
  breakTime = parseInt(document.getElementById("nivel-input-ejecucion").value);
  position = ValuePosition;

  for (let i = position; i < Object.keys(dataArrays).length; i++) {
    if (breakTime == 0) {
      break;
    }
    const keyArray = Object.keys(dataArrays)[i];
    const valueArray = [...dataArrays[keyArray]];
    for (const keyMetodo in tiempos) {
      const timeEjecution = calcularTiempoAlgoritmo(valueArray, keyMetodo);
      algoritmos[keyMetodo].data[position] = timeEjecution;
      llenarTabla();
      // Pausa el programa por un segundo antes de la próxima iteración
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
    position += 1;
    breakTime -= 1;
  }
}

async function CalcularTiempos_Select(keyMetodo) {
  const ValuePosition = calculateN(
    parseInt(document.getElementById("inicio-select-Ejecucion").value)
  );
  let position = ValuePosition;
  let breakTime = parseInt(
    document.getElementById("nivel-input-ejecucion").value
  );
  for (let i = position; i < Object.keys(dataArrays).length; i++) {
    if (breakTime == 0) {
      break;
    }
    algoritmos[keyMetodo].data[position] = -1;
    llenarTabla();
    position += 1;
    breakTime -= 1;
  }
  // Pausa el programa por un segundo antes de la próxima iteración
  await new Promise((resolve) => setTimeout(resolve, 1000));
  breakTime = parseInt(document.getElementById("nivel-input-ejecucion").value);
  position = ValuePosition;
  for (let i = position; i < Object.keys(dataArrays).length; i++) {
    if (breakTime == 0) {
      break;
    }
    const keyArray = Object.keys(dataArrays)[i];
    const valueArray = [...dataArrays[keyArray]];
    const timeEjecution = calcularTiempoAlgoritmo(valueArray, keyMetodo);
    algoritmos[keyMetodo].data[position] = timeEjecution;
    llenarTabla();
    // Pausa el programa por un segundo antes de la próxima iteración
    await new Promise((resolve) => setTimeout(resolve, 1000));
    position += 1;
    breakTime -= 1;
  }
}
//Proyect A
document.addEventListener("DOMContentLoaded", () => {
  llenarTabla();
  for (const keyArrays in dataArrays) {
    generateRandomOrder(keyArrays);
  }
  //--------------SECCION DE LA TABLA DE COMPARACION-------------------
  const container_TablaComparacion =
    document.getElementById("comparacion-Form");
  container_TablaComparacion.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe
    for (const keyArrays in dataArrays) {
      generateRandomOrder(keyArrays);
    }
    const SelecAlgoritmo = document.getElementById("selecUnitAlgorithm").value;
    if (SelecAlgoritmo === "All") {
      CalcularTodosLosTiempos();
    } else {
      CalcularTiempos_Select(SelecAlgoritmo);
    }
    llenarTabla();
  });
  // GRAFICAR ALGORITMOS

  // const graf_showBtn = document.getElementById("graf-show-dialog");
  const graf_dialog = document.getElementById("graf-dialog");
  const graf_jsCloseBtn = graf_dialog.querySelector(".close");

  graf_jsCloseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    graf_dialog.close();
  });

  document
    .getElementById("sortingAlgorithmsForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Evita el envío del formulario
      graf_dialog.showModal();
      const formData = new FormData(event.target);
      const esGraficar = {
        BubbleSort: { value: formData.has("bubbleSort"), label: "Bubble Sort" },
        SelectionSort: {
          value: formData.has("selectionSort"),
          label: "Selection Sort",
        },
        InsertionSort: {
          value: formData.has("insertionSort"),
          label: "Insertion Sort",
        },
        MergeSort: { value: formData.has("mergeSort"), label: "Merge Sort" },
        QuickSort: { value: formData.has("quickSort"), label: "QuickSort" },
        QuickSort_Randomized: {
          value: formData.has("quickSort_Randomized"),
          label: "QuickSort_Randomized",
        },
        HeapSort: { value: formData.has("heapSort"), label: "Heap Sort" },
        CountSort: { value: formData.has("countSort"), label: "Count Sort" },
        RadixSort: { value: formData.has("radixSort"), label: "Radix Sort" },
        BucketSort: { value: formData.has("bucketSort"), label: "Bucket Sort" },
      };
      createChart(esGraficar);
    });
  //--------------SECCION ALGORITMO BUBBLESORT-------------------
  const container_BubbleSort = document.getElementById("bubbleSortContainer");
  container_BubbleSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bubble Sort
  });

  //--------------SECCION ALGORITMO SELECTIONSORT-------------------
  const container_SelectionSort = document.getElementById(
    "selectionSortContainer"
  );
  container_SelectionSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Selection Sort
  });

  //--------------SECCION ALGORITMO INSERTIONSORT-------------------
  const container_InsertionSort = document.getElementById(
    "insertionSortContainer"
  );
  container_InsertionSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Insertion Sort
  });

  //--------------SECCION ALGORITMO MERGESORT-------------------
  const container_MergeSort = document.getElementById("mergeSortContainer");
  container_MergeSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Merge Sort
  });

  //--------------SECCION ALGORITMO QUICKSORT-------------------
  const container_QuickSort = document.getElementById("quickSortContainer");
  container_QuickSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Quick Sort
  });

  //--------------SECCION ALGORITMO QUICKSORT RANDOMIZED-------------------
  const container_RandomizedQuickSort = document.getElementById(
    "randomizedQuickSortContainer"
  );
  container_RandomizedQuickSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Quick Sort Randomizado
  });

  //--------------SECCION ALGORITMO HEAPSORT-------------------
  const container_HeapSort = document.getElementById("heapSortContainer");
  container_HeapSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Heap Sort
  });

  //--------------SECCION ALGORITMO COUNTSORT-------------------
  const container_CountSort = document.getElementById("countSortContainer");
  container_CountSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Count Sort
  });

  //--------------SECCION ALGORITMO RADIXSORT-------------------
  const container_RadixSort = document.getElementById("radixSortContainer");
  container_RadixSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Radix Sort
  });

  //--------------SECCION ALGORITMO BUCKETSORT-------------------
  const container_BucketSort = document.getElementById("bucketSortContainer");
  container_BucketSort.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Aquí va tu lógica para el algoritmo Bucket Sort
  });
});

function openModule(evt, moduleName) {
  let i, tabcontent, tablinks;
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
function generarColorAleatorio() {
  // Generar valores aleatorios para los componentes rojo, verde y azul (RGB)
  let r = Math.floor(Math.random() * 100) + 110; // Rango entre 128 y 255 (más claro)
  let g = Math.floor(Math.random() * 140) + 110; // Rango entre 128 y 255 (más claro)
  let b = Math.floor(Math.random() * 100) + 110; // Rango entre 128 y 255 (más claro)

  // Convertir los valores RGB a formato hexadecimal
  let colorHexadecimal = "#" + r.toString(16) + g.toString(16) + b.toString(16);

  return colorHexadecimal;
}
function extrapolarDatos(datosOriginales, numPuntosExtra) {
  const ultimoIndice = datosOriginales.length - 1;
  const penultimoIndice = datosOriginales.length - 2;

  const pendiente =
    (datosOriginales[ultimoIndice] - datosOriginales[penultimoIndice]) /
    (ultimoIndice - penultimoIndice);

  const datosExtendidos = [...datosOriginales];
  for (let i = 1; i <= numPuntosExtra; i++) {
    const nuevoValor = datosOriginales[ultimoIndice] + pendiente * i;
    datosExtendidos.push(nuevoValor);
  }
  return datosExtendidos;
}

function createChart(esGraficar) {
  const datasets = [];
  for (const keyGraf in esGraficar) {
    if (esGraficar[keyGraf].value) {
      const colorLine = generarColorAleatorio();
      const datosOriginales = algoritmos[keyGraf].data;
      const datosExtendidos = extrapolarDatos(datosOriginales, 1); // 1 punto extra para llegar a 150,000

      // Línea original
      datasets.push({
        label: esGraficar[keyGraf].label,
        data: datosOriginales,
        backgroundColor: colorLine,
        borderColor: colorLine,
        fill: false,
        tension: 0, // Línea original sin suavizar
      });
      // Línea de tendencia
      datasets.push({
        label: `${esGraficar[keyGraf].label} (Tendencia)`,
        data: datosExtendidos,
        backgroundColor: colorLine,
        borderColor: colorLine,
        fill: false,
        tension: 0.4, // Para suavizar la línea y hacerla curva
        borderDash: [5, 5], // Para hacer la línea punteada
        pointRadius: 0, // Opcional, para ocultar los puntos
        pointHoverRadius: 0, // Opcional, para ocultar los puntos al pasar el cursor
      });
    }
  }

  const ctxLineComp = document
    .getElementById("sortingAlgorithmsChart")
    .getContext("2d");
  if (graf_Chart) {
    graf_Chart.destroy();
  }
  graf_Chart = new Chart(ctxLineComp, {
    type: "line",
    data: {
      labels: [10, 100, 1000, 10000, 50000, 100000, 150000], // Ejemplo de etiquetas extendidas
      datasets: datasets,
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "Comparación de Algoritmos de Ordenación",
        },
        legend: {
          labels: {
            usePointStyle: true, // Usa el estilo de punto para la leyenda
            pointStyle: "circle", // Forma de los puntos en la leyenda
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Iteraciones",
          },
        },
        y: {
          title: {
            display: true,
            text: "Tiempo (ms)",
          },
        },
      },
    },
  });
}

document.getElementById("guardarBtn").addEventListener("click", guardarObjeto);
document.getElementById("cargarBtn").addEventListener("click", cargarObjeto);

function guardarObjeto() {
  // Convertir el objeto a formato JSON
  let json = JSON.stringify(algoritmos);

  // Crear un enlace de descarga
  let enlaceDescarga = document.createElement("a");
  enlaceDescarga.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(json)
  );
  const ahora = new Date();
  const año = ahora.getFullYear();
  const mes = ahora.getMonth() + 1;
  const dia = ahora.getDate();
  const hora = ahora.getHours();
  const minuto = ahora.getMinutes();
  const segundo = ahora.getSeconds();

  const archivoName = `DatosAlgoritmosSORT_${año}${mes < 10 ? "0" + mes : mes}${
    dia < 10 ? "0" + dia : dia
  }_${hora < 10 ? "0" + hora : hora}${minuto < 10 ? "0" + minuto : minuto}${
    segundo < 10 ? "0" + segundo : segundo
  }.json`;
  enlaceDescarga.setAttribute("download", archivoName);
  enlaceDescarga.style.display = "none";

  // Agregar el enlace al cuerpo del documento
  document.body.appendChild(enlaceDescarga);

  // Simular clic en el enlace de descarga
  enlaceDescarga.click();

  // Eliminar el enlace después de la descarga
  document.body.removeChild(enlaceDescarga);
}

function cargarObjeto() {
  // Cargar el archivo JSON
  let input = document.createElement("input");
  input.type = "file";

  input.onchange = function (event) {
    let archivo = event.target.files[0];

    let lector = new FileReader();
    lector.readAsText(archivo, "UTF-8");

    lector.onload = function (event) {
      let json = event.target.result;
      let objetoCargado = JSON.parse(json);
      for (const keyValue in objetoCargado) {
        algoritmos[keyValue].data = [...objetoCargado[keyValue].data];
      }
      llenarTabla();
      console.log("Objeto cargado:", objetoCargado);
      // alert("Objeto cargado desde el archivo JSON.");
    };
  };

  input.click();
}
function activarCheckbox(grupo) {
  var checkboxGroup = document.querySelectorAll(`input[id^="${grupo}"]`);
  checkboxGroup.forEach(function (checkbox) {
    checkbox.checked = true;
  });
}

document
  .getElementById("select_G1_Group")
  .addEventListener("click", function () {
    document.querySelectorAll(".checkboxGroup").forEach((checkbox) => {
      checkbox.checked = false;
    });
    const G1Checkboxes = ["bubbleSort", "selectionSort", "insertionSort"];
    G1Checkboxes.forEach((name) => {
      document.querySelector(`input[name="${name}"]`).checked = true;
    });
  });

document
  .getElementById("select_G2_Group")
  .addEventListener("click", function () {
    document.querySelectorAll(".checkboxGroup").forEach((checkbox) => {
      checkbox.checked = false;
    });
    const G2Checkboxes = [
      "mergeSort",
      "quickSort",
      "quickSort_Randomized",
      "heapSort"
    ];
    G2Checkboxes.forEach((name) => {
      document.querySelector(`input[name="${name}"]`).checked = true;
    });
  });

document
  .getElementById("select_G3_Group")
  .addEventListener("click", function () {
    document.querySelectorAll(".checkboxGroup").forEach((checkbox) => {
      checkbox.checked = false;
    });
    const G3Checkboxes = ["countSort", "radixSort"];
    G3Checkboxes.forEach((name) => {
      document.querySelector(`input[name="${name}"]`).checked = true;
    });
  });
