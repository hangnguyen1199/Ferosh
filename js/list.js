/*register*/
function checkName() {
    var name = document.getElementById('name').value;
    var regexName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýÝ\s]+$/;
    var errorName = document.getElementById('error_name')
    if (name == '' || name == null) {
        errorName.innerHTML = "Vui lòng nhập tên!"
    } else if (!regexName.test(name)) {
        errorName.innerHTML = "Họ tên không hợp lệ!"
    } else {
        errorName.innerHTML = ""
    }
}

function checkMail() {
    var mail = document.getElementById('mail').value;
    var regexMail = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    var errorMail = document.getElementById('error_mail')

    if (mail == '' || mail == null) {
        errorMail.innerHTML = " Vui lòng nhập mail"
    } else if (!regexMail.test(mail)) {
        errorMail.innerHTML = "Mail không đúng định dạng"
    } else {
        errorMail.innerHTML = " ";
    }
}

function checkPhone() {
    var phone = document.getElementById('phone').value;
    var regexPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    var errorPhone = document.getElementById('error_phone')
    if (phone == '' || phone == null) {
        errorPhone.innerHTML = " Vui lòng nhập số điện thoại"
    } else if (!regexPhone.test(phone)) {
        errorPhone.innerHTML = "số điện thoại không đúng định dạng"
    } else {
        errorPhone.innerHTML = " ";
    }
}

function checkBrand() {
    var brand = document.getElementById('brand').value;
    var errorBrand = document.getElementById('error_brand')
    if (brand == '' || brand == null) {
        errorBrand.innerHTML = " Vui lòng nhập tên thương hiệu"
    } else {
        errorBrand.innerHTML = " ";
    }
}

function checkLink() {
    var link = document.getElementById('link').value;
    var regexLink = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
    var errorLink = document.getElementById('error_link')
    if (link == '' || link == null) {
        errorLink.innerHTML = " Vui lòng nhập link"
    } else if (!regexLink.test(link)) {
        errorLink.innerHTML = "Link không đúng định dạng"
    } else {
        errorLink.innerHTML = " ";
    }
}

function checkUse() {
    var username = document.getElementById('username').value;
    var regexUse = /^[A-Za-z0-9_\.]{6,32}$/;
    var errorUse = document.getElementById('error_username');
    if (username == '' || username == null) {
        errorUse.innerHTML = " Vui lòng nhập tài khoản"
    } else if (!regexUse.test(username)) {
        errorUse.innerHTML = "Tên đăng nhập có độ dài từ 6 - 18 ký tự"
    } else {
        errorUse.innerHTML = " ";
    }
}

function checkPass() {
    var regexPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var pw = document.getElementById('pass').value;
    var errorPass = document.getElementById('error_pass');
    if (pw == '' || pw == null) {
        errorPass.innerHTML = " Vui lòng nhập mật khẩu"
    } else if (!regexPass.test(pw)) {
        errorPass.innerHTML = "Mật khẩu không hợp lệ!"
    } else {
        errorPass.innerHTML = " ";
    }
}

function checkPassword() {
    var pw = document.getElementById('pass').value;
    var cpw = document.getElementById('password').value;
    var errorConPass = document.getElementById('error_password');
    if (cpw == '' || cpw == null) {
        errorConPass.innerHTML = " Vui lòng nhập lại mật khẩu"
    } else if (cpw != pw) {
        errorConPass.innerHTML = "Phải trùng với password!"
    } else {
        errorConPass.innerHTML = " ";
    }
}
LoadListCustomers();

function LoadListCustomers() {
    var customers = JSON.parse(localStorage.getItem('Customers'))

    var html = '';
    customers.forEach(element => {
        html += "<tr><td>" + element.Id + "</td><td>" + element.name + "</td><td>" + element.mail + "</td>";
        html += "<td>" + element.phone + "</td><td>" + element.brand + "</td><td>" + element.product + "</td>";
        html += "<td><button onclick='eDit(this)' type='button' class='btn btn-info btn-lg' data-toggle='modal' data-target='#myModal'>Sửa</button><button onclick='Delete(this)'  class='btn btn-danger delete' >Xóa</button></td></tr>";
    });
    document.getElementById("dataList").innerHTML = html;
}

function eDit(index) {
    var customer1 = customers[index];
    document.getElementById('name').value = customer1.name
    document.getElementById('mail').value = customer1.mail
    document.getElementById('phone').value = customer1.phone
    document.getElementById('brand').value = customer1.product

}

function Delete(item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].mail == item.name) {
            customers.splice(i, 1);
            break;
        }
        localStorage.setItem('Customers', JSON.stringify(arr));
        location.reload();
    }
}