let outputscreen = document.getElementById('anjam');


function display(num) {
  outputscreen.value += num
}


function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value)
  }
  catch (err) {
    alert("هەڵەیە")
  }
}

function clr() {
  outputscreen.value = ''
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1)
}
