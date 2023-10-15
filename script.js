
  
  function shuflle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  
  
  
  function bubble_sort(array) {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          var temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
    console.log(array);
    retornarArr(array)
  }
  
  
  function select_sort(array) {
    for (let i = 0; i < array.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
      var aux = array[i]
      array[i] = array[minIndex]
      array[minIndex] = aux
    }
    console.log(array)
    retornarArr(array)
  }
  
  function quick_sort(array) {
    array.sort((a,b) => {
        return a - b
    })
    return retornarArr(array)
  }

  
  /* input do vetor */
  let arr = []

  function pushData() {
    let input = document.getElementById("input").value;
    arr.push(input);
     retornarArr(arr)
  }
  
  function retornarArr(array){
    document.getElementById("text").innerHTML=""
    let pval = "";
    for(let i = 0; i<array.length; i++){
    pval = pval+("<li>" + array[i])
    }
    
    document.getElementById("text").innerHTML=pval
    }
  let selectedObj = {
    bubble_sort: () => { bubble_sort(arr) },
    select: () => { select_sort(arr) },
    quick_sort: () => { quick_sort(arr) }
  }
  
  function selectedOn() {
    let select01 = document.getElementById('select');
  
    console.log(select01.value)
    console.log(selectedObj)
    return selectedObj[select01.value]();
}


function misturarbtn(){
    let misturar = document.getElementById('Misturar').value
    let misturarf = shuflle(arr)
    console.log(misturarf)
    retornarArr(misturarf)
    return misturarf
    
}

