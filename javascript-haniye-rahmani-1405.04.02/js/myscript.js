function fun1() {
    var num = Number(document.getElementById("num1").value);
    if (num % 2 == 0) {
        alert("زوج است");
    } else {
        alert("فرد است");
    }
}

// ------------------------------------------------------------

function fun2() {
    var inp = Number(document.getElementById("num1").value);
    var sum = 0;
    for (var i = 0; i <= inp; i++) {
        sum += i;
    }
    console.log(sum);
}

// -------------------------------------------------------------

function fun3() {
    var n = Number(document.getElementById("num1").value);
    for (var i = 0; i < n; i++) {
        var str = "";
        for (var j = 0; j < i ; j++) {
            str += "*";

        }
          console.log(str);
    } 
  
}
// ------------------------------------------------------------
function fun4() {
    var x = Number(document.getElementById("num1").value);
    for(var i=0; i<=100;i++){
        if(i%3!==0 && i%7!==0){
            console.log(i);
        }
    }
}