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

function validateSelectBox(obj) {
    var options = obj.children;
    var html = '';
    for (var i = 0; i < options.length; i++) {
        if (options[i].selected) {
            html += '<li>' + options[i].value + '</li>';
        }
    }
    document.getElementById('result').innerHTML = html;
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

function eDit(id) {
    var customers = JSON.parse(localStorage.getItem('Customers'))
    var html = '';
    customers.forEach(element => {
        if (element.Id == id) {
            html += '<div class="form-group row"><label id="erroName" class="control-label col-md-3 col-sm-3" for="hovaten">Họ và tên</label>'
            html += '<div class="col-md-6 col-sm-9" id="hovaten"><input type="text" class="form-control" id="name" placeholder="Nguyễn Văn A"'
            html += ' name="hovaten" onblur="checkName(this);" value="' + element.name + '" required /><span class="txt-test" id="error_name"></span>  </div> </div>'
            html += ' <div class="form-group row"><label class="control-label col-md-3 col-sm-3" for="information">Thông tin liên hệ</label>'
            html += '<div class="col-md-3 col-sm-9"><input type="text" class="form-control" id="mail" placeholder="Email" '
            html += 'name="email" onblur="checkMail(this);" value="' + element.mail + '" required><span class="txt-test" id="error_mail"></span>'
            html += '</div><label class="control-label col-md-3 col-sm-3 numberphone" for="information">Số điện thoại</label><div class=" col-md-3 col-sm-9">'
            html += '<input type="text" class="form-control form-two" id="phone" placeholder="0123456789" value="' + element.phone + '" name="phone" onblur="checkPhone(this);" required>'
            html += '<span class="txt-test" id="error_phone"></span></div></div><div class="form-group row"><label class="control-label col-md-3 col-sm-3" for="brand">Tên thương hiệu</label>'
            html += '<div class="col-md-6 col-sm-9"><input type="text" class="form-control" id="brand" placeholder="Example" name="brand" onblur=" checkBrand(this)"'
            html += 'value="' + element.brand + '" required><span class="txt-test" id="error_brand"></span></div></div> <div class="form-group row">'
            html += '<label class="control-label col-sm-3" for="product">Sản phẩm kinh doanh</label><div class="col-md-6 col-sm-9"> <select id="product" class="form-control" name="nameproduct" onchange="validateSelectBox(this)" required>'
            html += '<option value="Thời trang">Thời trang</option><option value="Mỹ phẩm - TPCN">Mỹ phẩm - TPCN</option> <option value="Phụ kiệu (giày dép, túi xách, trang sức & các loại phụ kiện khác">Phụ kiệu (giày dép, túi xách, trang sức & các loại phụ kiện khác</option> </select></div></div>'
            html += ' <div class="form-group row"><label class="control-label col-md-3 col-sm-3" for="product">Link FB/ Instagram/ Website</label><div class="col-md-6 col-sm-9">'
            html += ' <textarea id="link" class="form-control" name="link" rows="3" onblur="checkLink(this);" required>' + element.link + '</textarea><span class="txt-test" id="error_link"></span> </div> </div>'
            html += '<div class="form-group row"><label class="control-label col-md-3 col-sm-3" for="username">Tài khoản</label><div class=" col-md-6 col-sm-9">'
            html += '<input type="text" class="form-control" id="username" placeholder="Tài khoản" name="username" onblur="checkUse(this);" value="' + element.username + '" required>'
            html += '<span class="txt-test" id="error_username"></span></div></div><div class="form-group row"><label class="control-label col-md-3 col-sm-3" for="password">Mật khẩu</label><div class="col-md-3 col-sm-9">'
            html += ' <input type="password" class="form-control" id="pass" placeholder="Mật khẩu" name="pass" onblur="checkPass(this);" value="' + element.pass + '" required>'
            html += '<span class="txt-test" id="error_pass"></span></div><label class="control-label col-md-3 col-sm-3 confirm" for="pass">Nhập lại mật khẩu</label> <div class=" col-md-3 col-sm-9">'
            html += '<input type="password" class="form-control form-two ps" id="password" placeholder="Nhập lại mật khẩu" name="password" onblur="checkPassword(this);" value="' + element.password + '" required>'
            html += '<span class="txt-test" id="error_password"></span></div></div><div class="form-group row"><input hidden value="' + id + '" /></div>'
        }
    })
    document.getElementById("errorText").innerHTML = html;
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