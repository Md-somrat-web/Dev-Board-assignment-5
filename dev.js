const allButtons = document.querySelectorAll("#completed");
for (let btn of allButtons) {
  btn.addEventListener("click", function (event) {
    alert("Board updated Successfully");

    const NumberOne = document.getElementById("number-one").innerText;
    const newNumber = parseInt(NumberOne) - 1;
    document.getElementById("number-one").innerHTML = newNumber;

    const NumberTwo = document.getElementById("number-two").innerText;
    const newNumberTwo = parseInt(NumberTwo) + 1;
    document.getElementById("number-two").innerHTML = newNumberTwo;

    const title =
      event.target.parentNode.parentNode.parentNode.querySelector(
        "h1"
      ).innerText;

    newTrCreate(title);
  });
}

// create element new tr
function newTrCreate(title) {
  const Table = document.getElementById("table");
  const newTr = document.createElement("tr");
  const d = new Date();
  const hour = d.getHours();
  const ampm = hour >= 12 ? "pm" : "am";

  newTr.innerHTML = `<td class="mt-5 bg-white text-black gap-8  pt-5 font-medium ">You have completed the task ${title} at ${hour}: ${d.getMinutes()} : ${d.getSeconds()} ${ampm}</td>`;
  return Table.appendChild(newTr);
}
document.getElementById("click-blogs").addEventListener("click", function () {
  window.location.href = "/Blogs.html";
});
document.getElementById("go-Back").addEventListener("click", function () {
  window.history.back("index.html");
});
