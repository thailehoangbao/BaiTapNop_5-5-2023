//Bai 1 : Tìm số nguyên dương nhỏ nhất 
function soNguyenDuong() {
    var i = 1;
    var sum = 0;
    while (true) {
        sum = sum + i;
        if (sum > 10000) {
            return i;
        };
        i = i + 1;
    };
};
var result1 = soNguyenDuong();
document.querySelector('#result1').innerHTML = 'Số đó là : ' + result1;


//Bài 2 : Tính S(n)

function tinhTong(x, n) {
    sum = 0;
    var i = 1;
    while (
        i <= n
    ) {
        sum = sum + x ** i;
        i = i + 1;
    };
    return sum;
};
document.querySelector('#btn2').onclick = function () {
    var number2 = document.querySelector('#number2').value;
    var soMu = document.querySelector('#soMu').value;
    var result2 = tinhTong(number2, soMu);
    document.querySelector('#result2').style.display = 'block';
    document.querySelector('#result2').innerHTML = 'Tổng S(n) : ' + result2;
};



// Bài 3 : tính Giai Thừa 

function giaiThua(n) {
    var giaiThua = 1;
    for (
        var i = 1;
        i <= n;
        i++
    ) {
        giaiThua = giaiThua * i;
    };
    return giaiThua;
};
document.querySelector('#btn3').onclick = function () {
    var number3 = document.querySelector('#number3').value;
    var result3 = giaiThua(number3);
    document.querySelector('#result3').style.display = 'block';
    document.querySelector('#result3').innerHTML = 'Giai Thừa ' + number3 + " là : " + result3;
};

// Bài 4 :

document.querySelector('#btn4').onclick = function () {
    var result = '';
    document.querySelector('#result4').style.display = 'block';
    for (
        var i = 1;
        i <= 10;
        i++
    ) {
        if ((i % 2) === 0) {
            var result = result + "<div class='alert alert-danger'> Thẻ Thứ " + i + "</div>";
            document.querySelector('#result4').innerHTML = result;
        } else {
            var result = result + "<div class='alert alert-info'> Thẻ Thứ " + i + "</div>";
            document.querySelector('#result4').innerHTML = result;
        };
    };
};

// Bài 5 :


function soNguyenTo(snt) {
    if (snt === 1) {
        return 1;
    } else if (snt === 2) {
        return 2;
    } else if ( snt === 3) {
        return 3;
    };
    for (
        var i = 2;
        i < snt;
        i++
    ) {
        if ((snt % i) == 0) {
            return '';
        };
    };
    if ( i == (snt)) {
        return snt;
    };
};
document.querySelector('#btn5').onclick = function () {
    var n = document.querySelector('#number5').value;
    var i = 1;
    var result = 'Dãy Số Nguyên Tố là : ';
    while ( i <= n ) {
        if ( i == soNguyenTo(i)) {
            result = result + ' ' + i;
        };
        i++;
    };
    document.querySelector('#result5').innerHTML = result;
};