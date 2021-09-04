/*register*/

checkForm();

function checkForm() {
    var customers = JSON.parse(localStorage.getItem('Customers'))

    var html = '';
    customers.forEach(element => {
        html += "<tr><td>" + element.Id + "</td><td>" + element.name + "</td><td>" + element.mail + "</td>";
        html += "<td>" + element.phone + "</td><td>" + element.brand + "</td><td>" + element.product + "</td>";
        html += "<td><button onclick='eDit(" + element.Id + ")' type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Sửa</button><button onclick='Delete(" + element.Id + ")'  class='btn btn-danger delete' >Xóa</button></td></tr>";
    });
    document.getElementById("dataList").innerHTML = html;
}

function Delete(id) {
    var customers = JSON.parse(localStorage.getItem('Customers'))
    var status = true;
    if (confirm("Bạn muốn chắc chắn muốn xóa")) {
        customers.forEach(element => {
            if (element.Id == id) {
                const index = customers.indexOf(element);
                if (index > -1) {
                    customers.splice(index, 1);
                } else status = false;
            }
        });
    }
    if (status == false) {
        return status;
    }
    localStorage.removeItem("Customers")
    localStorage.setItem('Customers', JSON.stringify(customers))
    location.reload();

}

function eDit(val) {
    document.getElementById("idEdit").innerHTML = "<input hidden value='" + val + "' name='id'> </input> ";
}

function FormEdit() {
    arr = JSON.parse(localStorage.getItem('Customers'))
    var formEdit = document.getElementById('formEdit').elements;
    var fullname = formEdit["hovaten"].value;
    var gmail = formEdit["email"].value
    var phone = formEdit["phone"].value
    var brand = formEdit["brand"].value
    var nameproduct = formEdit["nameproduct"].value
    var link = formEdit["link"].value
    var username = formEdit["username"].value
    var pass = formEdit["pass"].value
    var password = formEdit["password"].value
    var id = formEdit["id"].value
    var status = true;

    arr.forEach(element => {
        if (element.Id == id) {
            if (!checkGmailEdit(gmail, id)) {
                var success = document.querySelector('.success')
                success.style.display = 'flex'
                setTimeout(function() {
                    success.style.display = 'none'
                }, 5000)
                element.name = fullname;
                element.mail = gmail;
                element.phone = phone;
                element.brand = brand;
                element.link = link;
                element.username = username;
                element.pass = pass;
                element.password = password;
            } else {
                var failure = document.querySelector('.failure')
                failure.style.display = 'flex'
                setTimeout(function() {
                    failure.style.display = 'none'
                }, 3000)
                status = false;
            }
        }
    });
    if (status == false) {
        return status;
    }
    localStorage.removeItem("Customers")
    localStorage.setItem('Customers', JSON.stringify(arr))
}

function checkGmailEdit(gmail, id) {
    for (let item = 0; item < arr.length; item++) {
        if (arr[item].mail == gmail && arr[item].Id != id) {
            return true;
        }
    }
    return false;
}