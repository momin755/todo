let count = 0;
const sumBtn = document.getElementById("subBtn");
sumBtn.addEventListener("click", function (e) {
  let inputBox = document.getElementById("inputBox").value;
  if (inputBox == "") {
    alert("please Enter a value!");
  } else {
    const tr = document.createElement("tr");
    tr.innerHTML = `<th>${count++}</th>
     <td>${inputBox}</td>
    <td><button onclick={handleDelete}  class="btn btn-danger deleteBtn">Delete</button></td>`;
    document.getElementById("tbody").appendChild(tr);
    tr.querySelector('.deleteBtn').addEventListener('click', handleDelete)
  }
});

const handleDelete= e =>{
  const row = e.target.closest("tr");
  row.remove();
}
