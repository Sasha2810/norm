let mas_vvod1 = [];
let mas_vvod2 = [];
let mas_znak = [document.querySelector(".plus"), document.querySelector(".minus"), document.querySelector(".percent"), document.querySelector(".plus-minus"), document.querySelector(".del"), document.querySelector(".umn")];
let numbers = [document.querySelector(".seven"), document.querySelector(".zap"), document.querySelector(".eight"), document.querySelector(".nine"), document.querySelector(".six"), document.querySelector(".five"), document.querySelector(".four"), document.querySelector(".three"), document.querySelector(".two"), document.querySelector(".one"), document.querySelector("zero")];
let vvod = document.querySelector(".vvod");
let chislo = "";
let chislo2 = "";
let answer = "";
let main = [];

function vvod_number() {

    if (chislo == "") {
        for (let i = 0; i < numbers.length - 1; i++)
            numbers[i].onclick = function() {
                mas_vvod1.push(chislo += this.innerText);
                vvod.innerText = mas_vvod1[mas_vvod1.length - 1];
                console.log(mas_vvod1[mas_vvod1.length - 1]);
            }
    } else {
        for (let i = 0; i < numbers.length - 1; i++)
            numbers[i].onclick = function() {
                mas_vvod2.push(chislo2 += this.innerText);
                vvod.innerText = mas_vvod2[mas_vvod2.length - 1];
                console.log(mas_vvod2[mas_vvod2.length - 1]);

            }
    }

    // for (let i = 0; i < numbers.length - 1; i++)
    //     numbers[i].onclick = function() {
    //         mas_vvod2.push(this.innerText);
    //         vvod.innerText = mas_vvod2[mas_vvod1 - 1];
    //         console.log(mas_vvod2[mas_vvod1 - 1]);
    //     }


    return chislo

}

function AC() {
    let ac = document.querySelector(".ac");
    ac.onclick = function() {
        mas_vvod1 = [];
        mas_vvod2 = [];
        answer = "";
        vvod.innerText = '0';
        vvod_number();
    }
    return ac
}

function vvod2() {
    let vvod = document.querySelector(".vvod");;
    let znak = document.getElementsByClassName("znak");

    for (i = 0; i < znak.length - 1; i++) {
        znak[i].onclick = function() {
            vvod.innerText = '0';
            vvod_number();

        }
    }

}

function glav() {
    let sum = document.querySelector(".plus");
    let umn = document.querySelector(".umn");
    let plus_minus = document.querySelector(".plus-minus");
    let percent = document.querySelector(".percent");
    let minus = document.querySelector(".minus");
    
    sum.addEventListener("click", () => { main.push("sum") })
    umn.addEventListener("click", () => { main.push("umn") })
    percent.addEventListener("click", () => { main.push("percent") })
    minus.addEventListener("click", () => { main.push("minus") })
}

// function sum() {
//     if (chislo2 != 0) {
//         answer = Number(mas_vvod1[mas_vvod1.length - 1]) + Number(mas_vvod2[mas_vvod2.length - 1]);
//         vvod.innerText = Number(answer);

//     }
// }

function mega_answer(answer) {
    let sum = document.querySelector(".plus");
    let button_answer = document.querySelector(".answer");
    button_answer.onclick = function() {
        if (answer != 0 && main == "sum") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) + Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
        if (answer != 0 && main == "umn") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) * Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
         if (answer != 0 && main == "minus") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) - Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
        if (answer != 0 && main == "percent") {
            answer = Number(mas_vvod1[mas_vvod1.length - 1]) % Number(mas_vvod2[mas_vvod2.length - 1]);
            vvod.innerText = Number(answer);
        }
        console.log(mas_vvod1[mas_vvod1.length - 1]);
        console.log(mas_vvod2[mas_vvod2.length - 1]);
        console.log(Number(answer));
    }


}


glav();
mega_answer();
vvod2();
vvod_number();
AC();
// sum();
