//DOM
const numberinput = document.getElementById("numberinput") //座號欄位
const sujectchang = document.getElementById("sujectchang") //科目下拉選單
const fractioninput = document.getElementById("fraction") //分數欄位
const btn = document.getElementById("addbtn") //添加分數按鈕
//科目陣列
var chinese = {"項目":'國文'} //國文
var math = {"項目":'數學'} //數學
var english = {"項目":'英文'} //英文
var science = {"項目":'自然'} //自然
var HISTORY = {"項目":'歷史'} //歷史(注意大寫)
var geography = {"項目":'地理'} //地理
var citizen = {"項目":'公民'} //公民
var socialaverage = {"項目":'社會平均'} //社會平均



const numbertest = [1,3,4,5,6,7,8,9,10,21,22,23,24,25,26,27,28,29,30,31,32,33,41]
const subjecttest=["chinese","math","english","science","history","geography","citizen"]

function add() {  //添加分數按鈕函式
    var suject = sujectchang.value
    var number = numberinput.value
    var fraction = fractioninput.value
    function judge(){
        if (number==1 || number>2 && number<11 ||number>20 && number<34 || number==41){
            if (suject!= "NULL"){
                if (fraction<101 && fraction>=0){
                    return true
                }else{
                    alert("分數錯誤，請重新輸入")
                    fractioninput.value=""
                    return false
                }
            }else{
                alert("請選擇科目")
                return false
            }
        }else{
            alert("座號錯誤，請重新輸入")
            numberinput.value=""
            return false
        }
    }
    if (judge()){
        console.log(`座號是${number}號，科目是${suject}，分數是${fraction}分`)
        var dom = String(suject+number)
        document.getElementById(dom).innerText= fraction
        arrayjudeg(suject,number,fraction)
    }
}
function calculate(){   //計算分數按鈕函式
    alert("此功能即將推出，敬請期待")
}

//檢測函式
function arrayjudeg(suject,number,fraction){   //判斷項目並增加物件和console
    switch (suject){
        case 'chinese':
            chinese[number]=fraction
            console.log(chinese)
        break
        case 'math':
            math[number]=fraction
            console.log(math)
        break
        case 'english':
            english[number]=fraction
            console.log(english)
        break
        case 'science':
            science[number]=fraction
            console.log(science)
        break
        case 'history':
            HISTORY[number]=fraction
            console.log(HISTORY)
        break
        case 'geography':
            geography[number]=fraction
            console.log(geography)
        break
        case 'citizen':
            citizen[number]=fraction
            console.log(citizen)
        break
    }
}




//測試功能
function fillup(){
    for (var q=0;q<7;q++){
        for (var i=0;i<23;i++){
            switchtest(q,numbertest[i],true)
            document.getElementById(subjecttest[q]+numbertest[i]).innerText=100
        }
        switchtest(q,i,false)
    }
}
function switchtest(q,i,x){
    switch (q){
        case 0:
            if (x){
                chinese[i]=100
            }else{
                console.log(chinese)
            }
        break
        case 1:
            if (x){
                math[i]=100
            }else{
                console.log(math)
            }
        break
        case 2:
            if (x){
                english[i]=100
            }else{
                console.log(english)
            }
        break
        case 3:
            if (x){
                science[i]=100
            }else{
                console.log(science)
            }
        break
        case 4:
            if (x){
                HISTORY[i]=100
            }else{
                console.log(HISTORY)
            }
        break
        case 5:
            if (x){
                geography[i]=100
            }else{
                console.log(geography)
            }
        break
        case 6:
            if (x){
                citizen[i]=100
            }else{
                console.log(citizen)
            }
        break
    }
}
