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
var totalscore = {"項目":'總分'} //總分
var average = {"項目":'平均'} //平均
var ranking = {"項目":'名次'} //名次
var accelerateOPEN = false

const numbertest = [1,3,4,5,6,7,8,9,10,21,22,23,24,25,26,27,28,29,30,31,32,33,41]
const subjecttest=["chinese","math","english","science","history","geography","citizen"]


//按鈕函式
function add() {  //添加分數按鈕函式
    var suject = sujectchang.value
    var number = numberinput.value
    var fraction = fractioninput.value
    function judge(){
        if (number==1 || number>2 && number<11 ||number>20 && number<34 || number==41){
            if (suject!= "NULL"){
                if (fraction<101 && fraction>=0 && fraction!=""){  
                    return true
                }else{
                    if (fraction=="") {
                        alert("請輸入分數")
                    }else{
                        alert("分數錯誤，請重新輸入")
                        fractioninput.value=""
                        return false
                    }
                    
                }
            }else{
                alert("請選擇科目")
                return false
            }
        }else{
            if (number=="") {
                alert(`請輸入座號`)
            }else{
                alert("座號錯誤，請重新輸入")
                numberinput.value=""
                return false
            }

        }
    }
    if (judge()){
        console.log(`座號是${number}號，科目是${suject}，分數是${fraction}分`)
        var dom = String(suject+number)
        document.getElementById(dom).innerText= fraction
        arrayjudeg(suject,number,fraction)
        hint("分數添加成功")
        fractioninput.value=""
        if (accelerateOPEN) {
            switch (suject){
                case 'chinese':
                    sujectchang.value="math"
                break
                case 'math':
                    sujectchang.value="english"
                break
                case 'english':
                    sujectchang.value="science"
                break
                case 'science':
                    sujectchang.value="geography"
                break
                case 'geography':
                    sujectchang.value="history"
                break
                case 'history':
                    sujectchang.value="citizen"
                break
                case 'citizen':
                    sujectchang.value="chinese"
                    numberinput.value= Number(numberinput.value)+1
                    number = numberinput.value
                    if (numberBoolean(number)) {
                    }else{
                        if (number<42) {
                            while(numberBoolean(number)==false){
                                numberinput.value= Number(numberinput.value)+1
                                number = numberinput.value
                            }
                        }
                    }
                break
            }
        }
    }

}
function calculate(){   //計算分數按鈕函式
    if (objectdetection()){
        continuecalculate()
        hint("成功計算")
    }else{
        if (confirm("分數尚未全部輸入完畢，您確定要繼續計算嗎")){
            continuecalculate()
            hint("成功計算")
        }else{
            return
        }
    }
}

//其餘函式
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
function objectdetection(){  //檢測分數是否全部輸入完畢
    if (Object.keys(chinese).length==24&&Object.keys(math).length==24&&Object.keys(english).length==24&&Object.keys(science).length==24&&Object.keys(history).length==24&&Object.keys(geography).length==24&&Object.keys(citizen).length==24){
        return true
    }else{
        return false
    }
}
function continuecalculate(){
    for (var i=0;i<23;i++){
        var societytotal = 0   
        societytotal = Number(HISTORY[numbertest[i]])+Number(geography[numbertest[i]])+Number(citizen[numbertest[i]])
        socialaverage[numbertest[i]]=Math.round(societytotal/3*10)/10
        document.getElementById(`socialAverage${numbertest[i]}`).innerText=socialaverage[numbertest[i]]
    }
    console.log(socialaverage)
    for (var i=0;i<23;i++){
        var total = 0
        total = Number(chinese[numbertest[i]])+Number(math[numbertest[i]])+Number(english[numbertest[i]])+Number(science[numbertest[i]])+Number(socialaverage[numbertest[i]])
        totalscore[numbertest[i]] = total
        document.getElementById(`total${numbertest[i]}`).innerText=totalscore[numbertest[i]]
    }
    console.log(totalscore)
    for (var i=0;i<23;i++){
        average[numbertest[i]] = Math.round(totalscore[numbertest[i]]/5*10)/10
        document.getElementById(`average${numbertest[i]}`).innerText=average[numbertest[i]]
    }
    var rankingg = 1
    var copyaverage = Object.assign({},average)
    for(var q=0;q<23;q++){
        var top = 0
        var topnumber = []
        for (var i=0;i<23;i++){
            if (copyaverage[numbertest[i]]>top){
                top=copyaverage[numbertest[i]]
                topnumber= [numbertest[i]]
            }else if (copyaverage[numbertest[i]]==top) {
                
            }
        }
        copyaverage[topnumber]=0
        ranking[topnumber]=rankingg
        rankingg++
    }
    for(var i=0;i<23;i++){
        document.getElementById(`ranking${numbertest[i]}`).innerText=ranking[numbertest[i]]
    }
    console.log(ranking)
    //未添加分數計算欄文字刪除
    for (var i=0;i<23;i++){
        if (document.getElementById(`socialAverage${numbertest[i]}`).innerText=="NaN"){
            document.getElementById(`socialAverage${numbertest[i]}`).innerText=""
        }
    }
    for (var i=0;i<23;i++){
        if (document.getElementById(`total${numbertest[i]}`).innerText=="NaN"){
            document.getElementById(`total${numbertest[i]}`).innerText=""
        }
    }
    for (var i=0;i<23;i++){
        if (document.getElementById(`average${numbertest[i]}`).innerText=="NaN"){
            document.getElementById(`average${numbertest[i]}`).innerText=""
        }
    }
    for (var i=0;i<23;i++){
        if (document.getElementById(`ranking${numbertest[i]}`).innerText=="undefined"){
            document.getElementById(`ranking${numbertest[i]}`).innerText=""
        }
    }
}
//判斷座號是否正確
function numberBoolean(x){
    if (x==1 || x>2 && x<11 ||x>20 && x<34 || x==41) {
        return true
    }else{
        return false
    }
}


//測試功能
function fillup(){
    for (var q=0;q<7;q++){
        for (var i=0;i<23;i++){
            document.getElementById(subjecttest[q]+numbertest[i]).innerText=Random()
            switchtest(q,numbertest[i],true)
        }
        switchtest(q,i,false)
    }
}
function Random(){
    return Math.floor(Math.random() * 100)
}
function switchtest(q,i,x){
    switch (q){
        case 0:
            if (x){
                chinese[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(chinese)
            }
        break
        case 1:
            if (x){
                math[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(math)
            }
        break
        case 2:
            if (x){
                english[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(english)
            }
        break
        case 3:
            if (x){
                science[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(science)
            }
        break
        case 4:
            if (x){
                HISTORY[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(HISTORY)
            }
        break
        case 5:
            if (x){
                geography[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(geography)
            }
        break
        case 6:
            if (x){
                citizen[i]=document.getElementById(subjecttest[q]+i).innerText
            }else{
                console.log(citizen)
            }
        break
    }
}
function download(){
    html2canvas(document.querySelector("#sheet")).then(function (canvas) {
        a = document.createElement("a");
        a.href = canvas
          .toDataURL("image/jpeg", 0.92)
          .replace("image/jpeg", "image/octet-stream");
        a.download = "段考成績表.jpg";
        a.click();
      });
}
// 提示動畫
function hint(message){
    document.getElementById("alertbox").innerText=message
    document.getElementById("alertbox").classList='show alertbox'
    setTimeout(()=>{document.getElementById("alertbox").classList='hide alertbox'},3000)
}

//設定
function setup(){
    document.getElementById("all").style.display="block"
    document.getElementById("setup").style.display="block"
}
function closea(){
    document.getElementById("all").style.display="none"
    document.getElementById("setup").style.display="none"
}
function closeb(){
    document.getElementById("all").style.display="none"
    document.getElementById("setup").style.display="none"
}
function accelerateBTN(){
    if (accelerateOPEN) {
        document.getElementById("accelerate").classList="close circle"
        accelerateOPEN=false
        sujectchang.value="NULL"
        numberinput.value=""
        hint(`快速輸入模式已關閉`)
    }else{
        document.getElementById("accelerate").classList="open circle"
        accelerateOPEN=true
        sujectchang.value="chinese"
        numberinput.value="1"
        hint(`快速輸入模式已開啟`)
    }
}

function qq(){
    alert(`此功能及將推出，敬請期待`)
}
// fillup()
