
// function myFunction() {
//   const form = document.getElementById("myForm").submit();
// }

let expense = 1;
function addExpense() {
    expense++;
    const newName = document.getElementById('expenses');
    const newInput = document.createElement("div");
    newInput.innerHTML = '<div class="label">Expense ' + expense +':</div><div class="content"><input type="text" placeholder="Expense Name"><span class="currencyinput">$<input type="number" name="currency" placeholder=" Monthly Cost"><img id="x-img" src="../photos/circle-x.png"  width="15" height="15"</div>';
    newName.appendChild(newInput);
    newName.appendChild(newDel);
}


// function showInput() {
//   document.getElementById('submit_button').innerHTML = 
//               document.getElementById('expenses').value;
// }
// </script>

// document.createElement("p")