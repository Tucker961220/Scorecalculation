//DOM
const numberinput = document.getElementById("numberinput") //座號欄位
const sujectchang = document.getElementById("sujectchang") //科目下拉選單
const fractioninput = document.getElementById("fraction") //分數欄位
const btn = document.getElementById("addbtn") //添加分數按鈕
//科目陣列
var chinese = {"科目":'國文'} //國文
var math = {"科目":'數學'} //數學
var english = {"科目":'英文'} //英文
var science = {"科目":'自然'} //自然
var history = {"科目":'歷史'} //歷史
var geography = {"科目":'地理'} //地理
var citizen = {"科目":'公民'} //公民

function add() {
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
function arrayjudeg(suject,number,fraction){
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
            history[number]=fraction
            console.log(history)
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