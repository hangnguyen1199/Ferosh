$(document).ready(function() {
    $('.slide-reason').slick({
        autoplay: true,
        autoplaySpeed: 2000,
    });
});
$(document).ready(function() {
    $('.partner-slide').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 5,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, {
            breakpoint: 481,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }, ]
    });

});
/*loadingpage*/
var loader = document.getElementById("preloader");
loader.style.display = 'flex'
setTimeout(function() {
    loader.style.display = 'none'
}, 3000)

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
    var regexMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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
    var regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
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
        errorPass.innerHTML = "Tối thiểu tám ký tự, ít nhất một chữ cái và một số"
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


var formElement = document.querySelectorAll('.form-group input,textarea,select')
var arr = [];
var arrNew = JSON.parse(localStorage.getItem('IDCustomer'))
if (arrNew == null) {
    localStorage.setItem('IDCustomer', JSON.stringify([1]))
}
arr = JSON.parse(localStorage.getItem('IDCustomer'))

function FormValidate() {
    if (localStorage.getItem('Customers') == "undefined") localStorage.removeItem("Customers");
    arr = JSON.parse(localStorage.getItem('Customers'))
    var fullname = formElement[0].value
    var gmail = formElement[1].value
    var phone = formElement[2].value
    var brand = formElement[3].value
    var link = formElement[5].value
    var username = formElement[6].value
    var pass = formElement[7].value
    var password = formElement[8].value
    var registerInfo = {}

    if (arr == null) {
        arr = [];
        registerInfo = {
            Id: 1,
            name: fullname,
            mail: gmail,
            phone: phone,
            brand: brand,
            link: link,
            username: username,
            pass: pass,
            password: password,
        }
    } else {
        registerInfo = {
            Id: arr[arr.length - 1].Id + 1,
            name: fullname,
            mail: gmail,
            phone: phone,
            brand: brand,
            link: link,
            username: username,
            pass: pass,
            password: password,
        }
    }
    var loading = document.querySelector('.submit-loading')
    loading.style.display = 'flex'
    setTimeout(function() {
        loading.style.display = 'none'
    }, 3000)
    if (!checkGmail(gmail)) {
        var success = document.querySelector('.success')
        success.style.display = 'flex'
        setTimeout(function() {
            success.style.display = 'none'
        }, 5000)
        arr.push(registerInfo)

        localStorage.setItem('Customers', JSON.stringify(arr))
        return false;
    } else {
        var failure = document.querySelector('.failure')
        failure.style.display = 'flex'
        setTimeout(function() {
            failure.style.display = 'none'
        }, 3000)
        return false;
    }
}

function checkGmail(gmail) {
    for (let item = 0; item < arr.length; item++) {
        if (arr[item].mail == gmail) {
            return true;
        }
    }
    return false;
}