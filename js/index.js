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

/*register*/
function Register() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var phone = document.getElementById('phone').value;
    var brand = document.getElementById('brand').value;
    var link = document.getElementById('link').value;
    var username = document.getElementById('username').value;
    var pass = document.getElementById('pass').value;
    var password = document.getElementById('password').value;

    var regexName = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýÝ\s]+$/;
    if (_.isEmpty(name)) {
        document.getElementById('error_name').innerHTML = "Vui lòng nhập tên";
    } else if (!regexName.test(name)) {
        document.getElementById('error_name').innerHTML = "Họ tên không hợp lệ!";
    } else {
        document.getElementById('error_name').innerHTML = " ";
    }

    var regexMail = /^[A-Za-z0-9_.]{6,32}@([a-zA-Z0-9]{2,12})(.[a-zA-Z]{2,12})+$/;
    if (_.isEmpty(mail)) {
        document.getElementById('error_mail').innerHTML = "Vui lòng nhập mail";
    } else if (!regexMail.test(mail)) {
        document.getElementById('error_mail').innerHTML = "Định dạng mail không đúng ";
    } else {
        document.getElementById('error_mail').innerHTML = " ";
    }

    var regexPhone = /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/;
    if (_.isEmpty(phone)) {
        document.getElementById('error_phone').innerHTML = "Vui lòng nhập số điện thoại";
    } else if (!regexPhone.test(phone)) {
        document.getElementById('error_phone').innerHTML = "Số điện thoại không đúng định dạng";
    } else {
        document.getElementById('error_phone').innerHTML = " ";
    }

    var regexBrand = /^[a-zA-Z0-9]+$/;
    if (_.isEmpty(brand)) {
        document.getElementById('error_brand').innerHTML = "Vui lòng nhập tên thương hiệu";
    } else if (!regexBrand.test(brand)) {
        errorBrand.innerHTML = "Tên thương hiệu không hợp lệ!"
    } else {
        document.getElementById('error_brand').innerHTML = "";

    }

    var regexLink = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if (_.isEmpty(link)) {
        document.getElementById('error_link').innerHTML = "Vui lòng nhập link FB/ Instagram/ website"
    } else if (!regexLink.test(link)) {
        document.getElementById('error_link').innerHTML = "Link không hợp lệ!"
    } else {
        document.getElementById('error_link').innerHTML = "";
    }

    var regexUsername = /^[A-Za-z0-9_\.]{6,32}$/;
    if (_.isEmpty(username)) {
        document.getElementById('error_username').innerHTML = "Vui lòng nhập tên đăng nhập";
    } else if (!regexUsername.test(username)) {
        document.getElementById('error_username').innerHTML = "Tên đăng nhập có độ dài từ 6 - 18 ký tự"
    } else {
        document.getElementById('error_username').innerHTML = "";
    }

    var regexPass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    if (_.isEmpty(pass)) {
        document.getElementById('error_pass').innerHTML = "Vui lòng nhập mật khẩu";
    } else if (!regexPass.test(pass)) {
        document.getElementById('error_pass').innerHTML = "Mật khẩu không hợp lệ!"
    } else {
        document.getElementById('error_pass').innerHTML = "";
    }

    if (_.isEmpty(password)) {
        document.getElementById('error_password').innerHTML = "Vui lòng nhập lại mật khẩu";
    } else if (password != pass) {
        document.getElementById('error_password').innerHTML = "Phải trùng với password!";
    } else {
        document.getElementById('error_password').innerHTML = "";
    }

    if (name && mail && phone && brand && link && username && pass && password) {
        let registerInfo = {
            mail: mail,
            phone: phone,
            brand: brand,
            link: link,
            pass: pass,
            password: password,
        };
        localStorage.setItem(name, JSON.stringify(registerInfo));
        alert('them thanh cong');
    }
}