const Btn = document.getElementById("Btn")
const date = document.getElementById("date")
const wave = document.getElementById("wave")
const back =document.getElementById("back")
const state = document.getElementById("state")

main()
function main() {
    innerT_to_Btn("开始")
}

function innerT_to_Btn(text) {
    Btn.innerHTML = "<h1 id='Btn-text'>"+text+"</h1>"
}
let is_Running=false
Btn.addEventListener("click",()=>{
    if (!is_Running){
        StartTimer()
        innerT_to_Btn("停止")
        is_Running=true
    }else if (is_Running){
        StopTimer()
        innerT_to_Btn("开始")
        is_Running=false
    }
})


/**
 * @name SunMouren
 * 这里是计时器的定义位置，可使用StartTimer()开启,使用StopTimer()关闭
 */
let Timer
let Sec=0
let Min=25
let SecZ
let MinZ
let la=0
let total_walk=0
let penc=3
function StartTimer(){
    Timer = setInterval(() => {
        if (la===0){
            state.innerText="工作"
            new T1()
        }else if(la===1){
            state.innerText="休息"
            new T2()
        }



    }, 1000)
}
function StopTimer(){
    state.innerText="暂停"
    clearInterval(Timer)
}
let vai=0
function T1(){
    vai+=1
    Sec-=1
    if (Sec<=0){
        Min-=1
        Sec=59
    }
    SecZ=Sec
    MinZ=Min
    if (Sec.toString().length<2){
        SecZ="0"+Sec
    }
    if (Min.toString().length<2){
        MinZ="0"+Min
    }
    date.innerText=MinZ+":"+SecZ

    wave.style.bottom=vai/15+"%"
    if (Min<=0&&Sec<=1){
        date.innerText="00:00"
        back.style.background="linear-gradient(135deg,#fccf31,#f55555)"
        date.style.color="#f77e49"
        Btn.style.background="linear-gradient(135deg,#fce38a,#f38181)"
        state.style.color="#f77e49"
        init_to_T2()
        la=1
    }
}
function init_to_T2(){
    total_walk+=1
    Sec=0
    if (total_walk>=4){
        vai=1500
        penc=15
        Min=25
        total_walk=0
    }else{
        vai=300
        penc=3
        Min=5

    }
}
function  init_to_T1() {
    vai=0
    Sec=0
    Min=25
}
function T2(){
    vai-=1
    Sec-=1
    if (Sec<=0){
        Min-=1
        Sec=59
    }
    SecZ=Sec
    MinZ=Min
    if (Sec.toString().length<2){
        SecZ="0"+Sec
    }
    if (Min.toString().length<2){
        MinZ="0"+Min
    }
    date.innerText=MinZ+":"+SecZ
    wave.style.bottom=vai/penc+"%"
    if (Min<=0&&Sec<=1){
        date.innerText="00:00"
        back.style.background="linear-gradient(135deg,#17ead9,#6078ea)"
        date.style.color="#00b5ff"
        Btn.style.background="linear-gradient(135deg,#ffffff,hsl(184, 100%, 75%))"
        state.style.color="#00b5ff"
        init_to_T1()
        la=0
    }
}