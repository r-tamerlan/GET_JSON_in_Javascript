document.getElementById("ajax").addEventListener("click", getJsonFn);

function getJsonFn() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "employees.json", true);

    xhr.onload = function() {

        let html = document.getElementById("employees");

        if (this.status === 200) {
            let employees = JSON.parse(this.responseText);

            employees.forEach(element => {
                html.innerHTML += `<tr>
                                      <td>${element.name}</td>
                                      <td>${element.department}</td>
                                      <td>${element.salary}</td>
                                   </tr>`
            });

        }

    }

    xhr.send();
}