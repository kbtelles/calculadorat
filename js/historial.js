function set_record(operation, result) {
    let item_record = operation + "=\t" + result;
    let records_box_DOM = document.querySelector(".record");
  
    let li = document.createElement("li");
    li.classList.add("histou");
  
    let spanOperation = document.createElement("span");
    spanOperation.textContent = operation;
  
    let spanEqualSign = document.createElement("span");
    spanEqualSign.classList.add("equal-sign");
    spanEqualSign.textContent = " = ";
  
    let spanResult = document.createElement("span");
    spanResult.classList.add("result");
    spanResult.textContent = result;
  
    li.appendChild(spanOperation);
    li.appendChild(spanEqualSign);
    li.appendChild(spanResult);
  
    //Evento funcional
    li.addEventListener("click", function () {
      this.remove();
      let prevResult = this.querySelector(".result").textContent;
      results.value = prevResult;
    });
  
    records_box_DOM.appendChild(li);
    records_box_DOM.scrollTop = records_box_DOM.scrollHeight;
  }
  