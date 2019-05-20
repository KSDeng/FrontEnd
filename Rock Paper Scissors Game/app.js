// 定义全局变量
// const userScore = 0;     // const 是常量，不可改变
// const computerScore = 0;
var userScore = 0;
var computerScore = 0;
const recoverTime = 300;
// 获取html文档中的元素
const userScore_span = document.getElementById("user-score");           // 根据id查找html节点
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");          //根据类名查找html节点
//const result_div = document.querySelector(".result");
const result_p = document.querySelector(".result > p");     // 获取result类下的p标签
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
// 函数声明     // 冗余，因为JS中存在变量提升机制
/*
function game();
function win();
function lose();
function draw();
function getComputerChoice();
*/

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissor'];       // 定义一个字符串数组
    const randomNumber = Math.floor(Math.random() * 3); // 在0,1,2中产生一个整数
    return choices[randomNumber];           // 访问数组元素
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    // switch case语句的使用
    switch (userChoice + " " + computerChoice){   // '+'直接将字符串相连
        case "rock scissor":
        case "scissor paper":
        case "paper rock":
            //console.log("User wins!");
            win(userChoice, computerChoice);
            break;
        case "rock paper":
        case "paper scissor":
        case "scissor rock":
            //console.log("Computer wins!");
            lose(userChoice, computerChoice);
            break;
        case "rock rock":
        case "paper paper":
        case "scissor scissor":
            //console.log("It's a draw.");
            draw(userChoice, computerChoice);
            break;
    }
    
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;       // 将变量显示在html页面上
    //computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
    //result_p.innerHTML = `${userChoice} beats ${computerChoice}, you win!`;     // 与上一行等价的表达方式, ${}表示引用变量

    const smallUserWord = "user".fontsize(3).sub();         // fontsize()设置字体大小, sub()表示将文字下标
    const smallComputerWord = "computer".fontsize(3).sub();
    result_p.innerHTML = `${userChoice}${smallUserWord} beats ${computerChoice}${smallComputerWord}, you win!`;
    //document.getElementById(userChoice).classList.add('.green-glow');
    document.getElementById(userChoice).classList.add('green-glow');        // 注意这里green-glow前面不用加'.'，因为已经确定是一个class
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('green-glow'); }, recoverTime);     // 等待指定时间后执行funtion(), 去除绿色边框效果
}

function lose(userChoice, computerChoice){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    //result_p.innerHTML = userChoice + " is beaten by " + computerChoice + ". You lose!";
    result_p.innerHTML = `${userChoice} is beaten by ${computerChoice}, you lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    //setTimeout(function(){ document.getElementById(userChoice).classList.remove('red-glow'); }, recoverTime);
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), recoverTime);    // 匿名函数。若函数体只有一行则可以省略大括号
}

function draw(userChoice, computerChoice){
    //result_p.innerHTML = "Both user and computer get " + userChoice + ". It's a draw.";
    result_p.innerHTML = `Both user and computer get ${userChoice}, it's a draw.`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){ document.getElementById(userChoice).classList.remove('gray-glow'); }, recoverTime);
}

function main(){
    //添加事件监听函数
    /*rock_div.addEventListener('click', function(){  // 定义鼠标点击响应事件
        game('rock');
    })
    paper_div.addEventListener('click', function(){
        game('paper');
    })
    scissor_div.addEventListener('click', function(){
        game('scissor');
    })*/
    
    //使用匿名函数
    rock_div.addEventListener('click', () => game('rock'));
    paper_div.addEventListener('click', () => game('paper'));
    scissor_div.addEventListener('click', () => game('scissor'));
}

// 运行main函数
main();

/*
rock_div.addEventListener('click',function(){
    console.log("You click on the rock.");
})
paper_div.addEventListener('click',function(){
    console.log("You click on the paper.");
})
scissor_div.addEventListener('click',function(){
    console.log("You click on the scissor.");
})
*/
