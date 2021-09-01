const nameValidate = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹýÝ\s]+$/
const emailValidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneValidate = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/

function checkName(name) {
    if (!nameValidate.test(name.value) && name.value != '') {
        alertInvalid(name)
    }
}

function checkEmail(email0) {
    if (!emailValidate.test(email0.value) && email0.value != '') {
        alertInvalid(email0)
    }
}

function checkPhone(phone) {
    if (!phoneValidate.test(phone.value) && phone.value != '') {
        alertInvalid(phone)
    }
}

function alertInvalid(value) {
    alert(value.name + " wrong")
}

function alertEmpty() {
    alert("Can not be empty!")
}

function checkEmpty(something) {
    return something.value == '' ? true : false
}

function checkpw(rpw) {
    let pw = document.querySelector('.pass')
    if (pw.value != rpw.value) {
        alert('Vui lòng nhập lại mật khẩu đúng!!!')
    }
}
//Register control
var arr = JSON.parse(localStorage.getItem('customer'))
let tableItem = document.querySelector('#table-item')
let cancelButton = document.querySelector('#cancel')
if (arr.length == 1) {
    tableItem.insertAdjacentHTML("afterbegin", "<p class='empty1'>Không có đăng ký nào <a href='index.html'>(Tự thêm) </a> </p>")
}
for (let i = 1; i < arr.length; i++) {
    let node = document.createElement("tr")
    let node1 = document.createElement("th")
    let content1 = document.createTextNode(i)
    node1.appendChild(content1)
    node1.setAttribute("scope", "row")
    let node2 = document.createElement("td")
    let content2 = document.createTextNode(arr[i].name)
    node2.appendChild(content2)
    let node3 = document.createElement("td")
    let content3 = document.createTextNode(arr[i].email)
    node3.appendChild(content3)
    let node4 = document.createElement("td")
    let content4 = document.createTextNode(arr[i].phone)
    node4.appendChild(content4)
    let node5 = document.createElement("td")
    let content5 = document.createTextNode(arr[i].brand)
    node5.appendChild(content5)
    let node6 = document.createElement("td")
    let content6 = document.createTextNode(arr[i].product)
    node6.appendChild(content6)
    let nodeEdit = document.createElement("td")
    nodeEdit.insertAdjacentHTML("afterbegin", "<button onclick='changeInfor(this)' name=\'" + arr[i].email + "\' class='update edit'data-toggle='modal' data-target='#  Q'>Sửa</button> <button onclick='deleteInfor(this)'  name=\'" + arr[i].email + "\'  class='delete edit'>Xóa</button>")
    node.appendChild(node1)
    node.appendChild(node2)
    node.appendChild(node3)
    node.appendChild(node4)
    node.appendChild(node5)
    node.appendChild(node6)
    node.appendChild(nodeEdit)
    tableItem.appendChild(node)
}

var x;

function changeInfor(infor) {
    for (i = 1; i < arr.length; i++) {
        if (arr[i].email == infor.name) {
            x = i
            let formElement = document.querySelectorAll('.form-item input,textarea,select')
            formElement[0].value = arr[i].name
            formElement[1].value = arr[i].email
            formElement[2].value = arr[i].phone
            formElement[3].value = arr[i].brand
            formElement[4].value = arr[i].product
            formElement[5].value = arr[i].link
            formElement[6].value = arr[i].account
            formElement[7].value = arr[i].password
            formElement[8].value = arr[i].repassword
            break;
        }
    }
}

function deleteInfor(infor) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].email == infor.name) {
            arr.splice(i, 1);
            break;
        }
    }
    localStorage.setItem('customer', JSON.stringify(arr))
    location.reload();
}

function saveFunc() {
    let formElement = document.querySelectorAll('.form-item input,textarea,select')
    arr[x].name = formElement[0].value
    arr[x].email = formElement[1].value
    arr[x].phone = formElement[2].value
    arr[x].brand = formElement[3].value
    arr[x].product = formElement[4].value
    arr[x].link = formElement[5].value
    arr[x].account = formElement[6].value
    arr[x].password = formElement[7].value
    arr[x].repassword = formElement[8].value
    localStorage.setItem('customer', JSON.stringify(arr))
    location.reload();
}