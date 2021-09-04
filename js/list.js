/*register*/

checkForm();

function checkForm() {
    var customers = JSON.parse(localStorage.getItem('Customers'))

    var html = '';
    customers.forEach(element => {
        html += "<tr><td>" + element.Id + "</td><td>" + element.name + "</td><td>" + element.mail + "</td>";
        html += "<td>" + element.phone + "</td><td>" + element.brand + "</td><td>" + element.product + "</td>";
        html += "<td><button onclick='eDit(this)' type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Sửa</button><button onclick='Delete(this)'  class='btn btn-danger delete' >Xóa</button></td></tr>";
    });
    document.getElementById("dataList").innerHTML = html;
}

// function eDit(index) {
//     var customer1 = customers[index];
//     document.getElementById('name').value = customer1.name
//     document.getElementById('mail').value = customer1.mail
//     document.getElementById('phone').value = customer1.phone
//     document.getElementById('brand').value = customer1.product

// }

// function Delete(item) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].mail == item.name) {
//             customers.splice(i, 1);
//             break;
//         }
//         localStorage.setItem('Customers', JSON.stringify(arr));
//         location.reload();
//     }
// }