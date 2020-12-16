// 通用函数块


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//一下为熊志豪所写
//透明度
var alpha = 0.05;
//控制开始音乐的flag
var startflag = 1;
//淡入标题depression
function drawtitle() {
    game.clear();
    game.context.drawImage(game.allImg["background"], 0, 0);
    game.context.save();
    game.context.globalAlpha = alpha;
    //字体设置
    game.context.fillStyle = 'black';
    game.context.font = '60px century';
    //设置阴影
    game.context.shadowColor = 'rgba(0, 0, 0, 0.8)';
    game.context.shadowOffsetX = 0.5;
    game.context.shadowOffsetY = 0.5;
    game.context.shadowBlur = 1;
    game.context.fillText("depression", 250, 200);
    game.context.strokeText("depression", 250, 200);
    game.context.restore();
    alpha += 0.03;
    if (alpha < 1) {
        requestAnimationFrame(drawtitle);
    } else {
        drawstart();
    }
}
//绘制开始游戏
function drawstart() {
    game.context.save();
    game.context.fillStyle = 'white';
    game.context.font = '40px FangSong';
    game.context.fillText("开始游戏", 320, 500);
    game.context.restore();
}

function drawText(text) {
    game.context.save();
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '50px FangSong';
    game.context.fillText(text, 400, 160);
    game.context.strokeText(text, 400, 160);
    game.context.restore();
}

function drawTextDrop(text, x, y) {
    game.context.save();
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '50px FangSong';
    game.context.fillText(text, x, y);
    game.context.strokeText(text, x, y);
    game.context.restore();
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//乐趣-钢琴小游戏
function drawGame1Text(text) {
    game.context.save();
    game.context.fillStyle = "purple";
    game.context.strokeStyle = "purple";
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '40px FangSong';
    game.context.fillText(text, 400, 200);
    game.context.strokeText(text, 400, 200);
    game.context.restore();
}

function drawMusicScores(text, x, y, color) {
    game.context.save();
    game.context.fillStyle = color;
    game.context.strokeStyle = color;
    //game.context.textAlign = 'center';
    //game.context.textBaseline = 'middle';
    game.context.font = '30px century';
    game.context.fillText(text, x, y);
    game.context.strokeText(text, x, y);
    game.context.restore();
}

// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//视频
function drawRoomText(text) {
    game.context.save();
    game.context.fillStyle = "#22ff00";
    game.context.strokeStyle = "#22ff00";
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '40px FangSong';
    game.context.fillText(text, 400, 200);
    game.context.strokeText(text, 400, 200);
    game.context.restore();
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//小故事
function drawStoryText(text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12) {
    game.context.save();
    game.context.fillStyle = "#00c2c7";
    game.context.strokeStyle = "#00c2c7";
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '30px FangSong';
    game.context.fillText(text1, 400, 50);
    game.context.fillText(text2, 400, 95);
    game.context.fillText(text3, 400, 140);
    game.context.fillText(text4, 400, 185);
    game.context.fillText(text5, 400, 230);
    game.context.fillText(text6, 400, 275);
    game.context.fillText(text7, 400, 320);
    game.context.fillText(text8, 400, 365);
    game.context.fillText(text9, 400, 410);
    game.context.fillText(text10, 400, 455);
    game.context.fillText(text11, 400, 500);
    game.context.fillText(text12, 400, 545);
    game.context.restore();
}

function drawStoryText2(text) {
    game.context.save();
    game.context.fillStyle = "#14d5b8";
    game.context.strokeStyle = "#14d5b8";
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '40px FangSong';
    game.context.fillText(text, 400, 300);
    game.context.restore();
}


// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------

//答题
function drawSelfText(text) {
    game.context.save();
    game.context.fillStyle = "#ff4d00";
    game.context.strokeStyle = "#ff4d00";
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '40px FangSong';
    game.context.fillText(text, 400, 300);
    game.context.restore();
}


//画题目
function drawQuestionText(text, font, y) {
    game.context.save();
    game.context.fillStyle = "#5bfc8";
    game.context.strokeStyle = "#5bfc8";
    //game.context.textAlign = 'center';
    // game.context.textBaseline = 'middle';
    game.context.font = font;
    game.context.fillText(text, 15, y);
    game.context.restore();
}


//画选项
function drawSelectText(text1, text2, text3, text4) {
    game.context.save();
    game.context.fillStyle = "#fdfcfc";
    game.context.strokeStyle = "#fdfcfc";
    //game.context.textAlign = 'center';
    //game.context.textBaseline = 'middle';
    game.context.font = '50px FangSong';
    game.context.fillText(text1, 50, 200);
    game.context.fillText(text2, 50, 300);
    game.context.fillText(text3, 50, 400);
    game.context.fillText(text4, 50, 500);
    game.context.restore();
}

//画对错

function drawResultText(flag) {
    game.context.save();
    game.context.fillStyle = "#D70A17";
    game.context.strokeStyle = "#D70A17";
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '50px FangSong';
    if (flag == 1)
        game.context.fillText("Rihgt!", 400, 300);
    else if (flag == 0) {
        game.context.fillText("Wrong!", 400, 300);
        game.context.fillText("Click here to retry", 400, 400);
    } else {
        game.context.fillStyle = "#CA0714";
        game.context.strokeStyle = "#CA0714";
        game.context.fillText("Congratulation！", 400, 300);
    }
    game.context.restore();
}



// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//转换坐标

function windowToCanvas(canvas, point) {
    // 获取canvas元素的所有样式属性
    var canvasStyle = window.getComputedStyle(canvas);
    // point.x-=parseFloat(canvasStyle["margin-left"]);
    // point.y-=parseFloat(canvasStyle["margin-top"]);

    // 获取元素的位置属性
    var bbox = canvas.getBoundingClientRect();
    // 除去canvas在文档坐标系的左边和顶部距离
    point.x -= bbox.left;
    point.y -= bbox.top;

    // 除去canvas的边框宽度
    point.x -= parseFloat(canvasStyle["border-left-width"]);
    point.y -= parseFloat(canvasStyle["border-top-width"]);

    // 除去canvas的内边距宽度
    point.x -= parseFloat(canvasStyle["padding-left"]);
    point.y -= parseFloat(canvasStyle["padding-top"]);

    // 绘图环境和canvas的大小比例调整 
    var xRatio = canvas.width / parseFloat(canvasStyle["width"]);
    var yRatio = canvas.height / parseFloat(canvasStyle["height"]);

    // 从文档坐标系调整到canvas坐标系
    point.x *= xRatio;
    point.y *= yRatio;

    // 返回调整后的坐标值
    return point;

}



// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------
//一下为凌涛所写


function drawTextChangeColour(text, x, y) {
    game.context.save();
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '50px century';
    game.context.fillStyle = 'white';
    game.context.fillText(text, x, y);
    game.context.strokeText(text, x, y);
    game.context.restore();
}

function drawTextEnd(text, x, y) {
    game.context.save();
    game.context.textAlign = 'center';
    game.context.textBaseline = 'middle';
    game.context.font = '50px century';
    game.context.fillStyle = '#ff73b3';
    game.context.fillText(text, x, y);
    game.context.strokeText(text, x, y);
    game.context.restore();
}

function rainbowMask(radius) {
    game.context.beginPath();
    let myColour = game.context.createRadialGradient(game.canvas.width / 2, game.canvas.height / 2, 0, game.canvas.width / 2, game.canvas.height / 2, 500);
    myColour.addColorStop(0, 'red');
    myColour.addColorStop(1 / 8, 'orange');
    myColour.addColorStop(1 / 8, 'yellow');
    myColour.addColorStop(1 / 8, 'green');
    myColour.addColorStop(1 / 8, 'cyan');
    myColour.addColorStop(1 / 8, 'blue');
    myColour.addColorStop(1 / 8, 'Indigo');
    myColour.addColorStop(1 / 8, 'BlueViolet');
    myColour.addColorStop(1 / 8, 'purple');
    game.context.fillStyle = myColour;
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    game.context.beginPath();
    game.context.arc(game.canvas.width / 2, game.canvas.height / 2, radius, 0, Math.PI * 2);
    game.context.stroke();
    game.context.clip();
}


function endText(timer) {
    if (timer > 0 && timer < 40)
        drawTextEnd("外面的世界好美啊", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 40 && timer < 80)
        drawTextEnd("蓝天...白云...青山...绿水...", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 80 && timer < 120)
        drawTextEnd("世界那么大，我想去看看", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 120 && timer < 160)
        drawTextEnd("我也该去看看了！", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 160 && timer < 200)
        drawTextEnd("深陷痛苦的朋友们，请相信自己", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 200 && timer < 240)
        drawTextEnd("相信身边的人", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 240 && timer < 280)
        drawTextEnd("我们也相信你", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 280 && timer < 320)
        drawTextEnd("一定要去外面的世界看看噢~", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 320 && timer < 360)
        drawTextEnd("外面的世界很精彩", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 360 && timer < 400)
        drawTextEnd("一定要去看看噢！", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 400 && timer < 440)
        drawTextEnd("加油！！！", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 440 && timer < 480)
        drawTextEnd("冲呀！！", game.canvas.width / 2, game.canvas.height / 2);
    if (timer > 480)
        drawTextEnd("End", game.canvas.width / 2, game.canvas.height / 2);

}