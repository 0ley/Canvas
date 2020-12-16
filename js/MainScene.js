//author:凌涛
//
//
//
(function() {
    let MainScence = function() {
        this.step = 5;
        this.selectDirection = 0; //用来控制移动方向：0：下；1：左；2：右；3：上；
        this.countMan = 0;
        this.countDepressionDog = 0;
        this.countDogBad = 0;
        this.moveTrue = false; //初始状态人不走
        this.countMovs = 0;

        //在人的动作表中获取每一个动作图片大小
        this.manW = game.allImg["gameProtagonist"].width / 3;
        this.manH = game.allImg["gameProtagonist"].height / 4;

        //设置初始状态人图片大小
        this.drawW = this.manW * 2;
        this.drawH = this.manH * 2;

        //人物初始在canvas画布中的位置x坐标,y坐标设置为canvas正中央
        this.x = (game.canvas.width - this.manW * 2) / 2;
        this.y = (game.canvas.height - this.manH * 2) / 2;

        //在狗的动作表中获取每一个动作图片大小
        this.depresDogW = game.allImg["dogDepression"].width / 3;
        this.depresDogH = game.allImg["dogDepression"].height / 4;

        //初始的时候，人牵的狗的图片大小为的原图大小
        this.depresDogDrawW = this.depresDogW;
        this.depresDogDrawH = this.depresDogH;

        this.depresDogDrawX = this.x - 10;
        this.depresDogDrawY = this.y + 30;

        //在坏狗的动作表中获取每一个动作图片大小
        this.dogBadW = game.allImg["dogBad"].width / 4;
        this.dogBadH = game.allImg["dogBad"].height / 4;

        //设置移动的坏狗最初始的位置
        this.dogBadSonY = this.y;
        this.dogBadSonX = -80;

        //设置移动的坏狗一号最初始的位置
        this.dogBadSonY1 = Math.random() * canvas.height;
        this.dogBadSonX1 = -500;

        //设置移动的坏狗二号最初始的位置
        this.dogBadSonY2 = Math.random() * canvas.height;
        this.dogBadSonX2 = -900;


        this.relativeV = 0; /* 用来改变setInterval的速度（相对速度）*/

        this.stepLand = 3; //背景每次的增量
        this.landX = 0; /*背景图片的初始x坐标*/

        this.radius = 0; /*遮罩层的半径大小*/

        this.blink = 0; //眨眼的场景为第几个

        this.life = 0;

        this.house1filled = false;
        this.house2filled = false;
        this.house3filled = false;
        this.house4filled = false;

        this.house1 = game.allImg["house1"];
        this.house2 = game.allImg["house2"];
        this.house3 = game.allImg["house3"];
        this.house4 = game.allImg["house4"];

        this.drawTextEnd = 0;
        this.textTime = 0;
    }
    window.MainScence = MainScence;
    MainScence.prototype.clear = function() {
            game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
        }
        //更新
    MainScence.prototype.update = function() {
            this.relativeV++;

            this.textTime++;
            if (this.blink == 10 && this.textTime % 80 == 0) {
                this.drawTextEnd++;
            }

            if (this.relativeV == 5) {
                //当人控制键盘W，A，S，D（↑，↓，←，→）时，才移动
                if (this.moveTrue) {
                    this.countMan++;
                    this.countDepressionDog++;
                    if (this.countDepressionDog === 4)
                        this.countDepressionDog = 0;
                    if (this.countMan === 2)
                        this.countMan = 0;
                }

                //连续获取指定位置的图像，以达到走动动画
                this.countDogBad++;
                if (this.countDogBad == 4)
                    this.countDogBad = 0;
                this.relativeV = 0;
            }
            this.countY += 10;

            //根据键盘按键方向控制人物和小狗的移动方向
            if (this.selectDirection >= 0 && this.selectDirection <= 3 && this.moveTrue) {
                switch (this.selectDirection) {
                    case 0: //向下，按下S键、↓键
                        if (this.y < (game.canvas.height - this.manH * 2)) {
                            this.y += this.step;
                            this.depresDogDrawY += this.step;
                            // console.log(this.x,this.y);
                        }
                        break;
                    case 1: //向左，按下A键、←键
                        if (this.x > 0) {
                            this.x -= this.step;
                            this.depresDogDrawX -= this.step;
                            if (this.landX >= -game.canvas.height)
                                this.landX += this.stepLand;
                        }
                        break;
                    case 2: //向右，按下D键、→键
                        if (this.x < (game.canvas.width - this.manW)) {
                            this.x += this.step;
                            this.depresDogDrawX += this.step;
                            if (this.landX >= -game.canvas.height)
                                this.landX -= this.stepLand;
                        }
                        break;
                    case 3: //向上，按下W键、↑键
                        if (this.y > 0) {
                            this.y -= this.step;
                            this.depresDogDrawY -= this.step;
                        }
                        break;
                    default:
                        break;
                }
            }

            //设置根据人的位置定位移动的那条狗的位置
            if (this.dogBadSonX < game.canvas.width)
                this.dogBadSonX += this.step * 2;
            else {
                this.dogBadSonX = -80;
                //当狗到达canvas最右端时，更改狗的纵坐标为当前人物的坐标
                this.dogBadSonY = this.y;
            }

            //设置第一条随机生成位置的走动的坏狗的位置
            if (this.dogBadSonX1 < game.canvas.width)
                this.dogBadSonX1 += this.step * 2;
            else {
                this.dogBadSonX1 = -200;
                //当狗到达canvas最右边时，随机生成一只狗，纵坐标为随机数
                this.dogBadSonY1 = Math.random() * canvas.height
            }

            //设置第二条随机生成位置的走动的坏狗的位置
            if (this.dogBadSonX2 < game.canvas.width)
                this.dogBadSonX2 += this.step * 2;
            else {
                this.dogBadSonX2 = -200;
                //当狗到达canvas最右边时，随机生成一只狗，纵坐标为随机数
                this.dogBadSonY2 = Math.random() * canvas.height;
            }

            //当进入到人需要去控制人物行动时，此时的半径为150，当人被坏狗碰到之后，坏狗会变大
            if (this.life <= 8 && this.blink >= 4 && this.radius >= 150) {
                if ((this.dogBadSonX1 == this.x && this.y + 30 > this.dogBadSonY1 && this.y - 30 < this.dogBadSonY1) || (this.dogBadSonX == this.x && this.y + 90 > this.dogBadSonY && this.y - 30 < this.dogBadSonY) || (this.dogBadSonX2 == this.x && this.y + 30 > this.dogBadSonY2 && this.y - 30 < this.dogBadSonY2)) {
                    this.depresDogDrawW += 50;
                    this.depresDogDrawH += 50;
                    this.depresDogDrawX -= 25;
                    this.depresDogDrawY -= 25;
                    this.life++;
                }
            }

            if (this.life > 8) {
                this.blink = 9;
            }

            //进来之后的场景不同
            switch (this.blink) {
                case 0: //睁眼
                    if (this.radius < 300) {
                        this.radius += 5;
                    } else {
                        this.blink++;
                    }
                    break;
                case 1: //闭眼
                    if (this.radius > 0) {
                        this.radius -= 5;
                    } else {
                        this.blink++;
                    }
                    break;
                case 2: //睁眼
                    if (this.radius < 200) {
                        this.radius += 5;
                    } else {
                        this.blink++;
                    }
                    break;
                case 3: //闭眼
                    if (this.radius > 0) {
                        this.radius -= 5;
                    } else {
                        this.blink++;
                    }
                    break;
                case 4: //睁眼
                    if (this.radius < 150) {
                        this.radius += 5;
                    }
                    break;
                case 5:
                    this.house1 = game.allImg["house1filled"];
                    this.radius = 240;
                    break;
                case 6:
                    this.house2 = game.allImg["house2filled"];
                    this.radius = 325;
                    break;
                case 7:
                    this.house3 = game.allImg["house3filled"];
                    this.radius = 415;
                    break;
                case 8:
                    this.house4 = game.allImg["house4filled"];
                    this.radius = 1000;
                    this.blink = 11;
                    break;
                case 9: //死亡场景
                    if (this.radius > 0) {
                        this.radius -= 5;
                    }
                    if (this.radius == 0) { //跳转到下一个界面
                        this.blink++;
                    }
                    break;
                case 10:
                    //死亡
                    break;
                case 11:
                    if (this.radius > 0) {
                        this.radius -= 5;
                    }
                    if (this.radius == 0) { //跳转到下一个界面
                        this.blink++;
                    }
                    break;
                case 12:
                    document.getElementById("mainScene").pause();
                    game.sM.enter(4); //跳转到上升界面
                    break;
                default:
            }

            //当人进入每个房间时
            if (this.x >= 0 && this.x <= 160 && this.y >= 100 && this.y < 220 && this.house1filled == false) {
                document.getElementById("mainScene").pause();
                game.sM.enter(5);

            }
            if (this.x >= 600 && this.x <= 760 && this.y >= 100 && this.y <= 220 && this.house2filled == false) {
                document.getElementById("mainScene").pause();
                game.sM.enter(6);
            }
            if (this.x >= 0 && this.x <= 160 && this.y >= 500 && this.y <= 620 && this.house3filled == false) {
                document.getElementById("mainScene").pause();
                game.sM.enter(7);
            }
            if (this.x >= 600 && this.x <= 760 && this.y >= 500 && this.y <= 620 && this.house4filled == false) {
                document.getElementById("mainScene").pause();
                game.sM.enter(8);
            }

        }
        //渲染
    MainScence.prototype.render = function() {
        // this.clear();
        // console.log(this.x,this.y);


        //以下是画一个遮罩层，随着半径的大小变化实现眨眼效果
        game.context.save();
        game.context.beginPath();
        game.canvas.fillStyle = 'black';
        game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

        if (this.blink <= 9) {

            game.context.beginPath();
            game.context.arc(this.x + this.drawW / 2, this.y + this.drawH / 2, this.radius, 0, Math.PI * 2);
            game.context.stroke();
            game.context.clip();

            //根据当前键盘控制，背景图片实现移动，实现相对移动的幻觉
            game.context.drawImage(game.allImg["land"], this.landX, -20, game.canvas.width, game.canvas.height + 20);
            game.context.drawImage(game.allImg["land"], this.landX + game.canvas.width, -20, game.canvas.width, game.canvas.height + 20);
            game.context.drawImage(game.allImg["land"], this.landX - game.canvas.width, -20, game.canvas.width, game.canvas.height + 20);

            game.context.drawImage(this.house1, 0, 100, 160, 120);
            game.context.drawImage(this.house2, 600, 100, 160, 120);
            game.context.drawImage(this.house3, 0, 500, 160, 120);
            game.context.drawImage(this.house4, 600, 500, 160, 120);

            //在图片中截取小狗的走路动作
            if (this.countDepressionDog == 3)
                game.context.drawImage(game.allImg["dogDepression"], 0 + this.depresDogW * 1, 0 + this.depresDogH * this.selectDirection, this.depresDogW, this.depresDogH, this.depresDogDrawX, this.depresDogDrawY, this.depresDogDrawW, this.depresDogDrawH);
            else
                game.context.drawImage(game.allImg["dogDepression"], 0 + this.depresDogW * this.countDepressionDog, 0 + this.depresDogH * this.selectDirection, this.depresDogW, this.depresDogH, this.depresDogDrawX, this.depresDogDrawY, this.depresDogDrawW, this.depresDogDrawH);

            //画两条随机生成的移动的狗
            game.context.drawImage(game.allImg["dogBad"], 0 + this.dogBadW * this.countDogBad, 0 + this.dogBadH * 2, this.dogBadW, this.dogBadH, this.dogBadSonX1, this.dogBadSonY1, 160, 120);
            game.context.drawImage(game.allImg["dogBad"], 0 + this.dogBadW * this.countDogBad, 0 + this.dogBadH * 2, this.dogBadW, this.dogBadH, this.dogBadSonX2, this.dogBadSonY2, 160, 120);

            //画一只根据人的横坐标定位移动的狗
            game.context.drawImage(game.allImg["dogBad"], 0 + this.dogBadW * this.countDogBad, 0 + this.dogBadH * 2, this.dogBadW, this.dogBadH, this.dogBadSonX, this.dogBadSonY, 160, 120);

            //画主角，根据键盘控制，人移动
            game.context.drawImage(game.allImg["gameProtagonist"], 0 + this.manW * this.countMan, 0 + this.manH * this.selectDirection, this.manW, this.manH, this.x, this.y, this.drawW, this.drawH);

            //在画布的最左端画一个大boss狗
            //game.context.drawImage(game.allImg["dogBad"], 0 + this.dogBadW * 0, 0 + this.dogBadH * 2, this.dogBadW, this.dogBadH, -900, game.canvas.height / 2 - (600 * 1.5) / 2, 800 * 1.5, 600 * 1.5);
            //
        } else if (this.blink == 10) {

            switch (this.drawTextEnd) {
                case 0:
                    drawTextChangeColour("我这是怎么了？", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 1:
                    drawTextChangeColour("忽然感觉好轻松啊", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 2:
                    drawTextChangeColour("·····感觉身体好轻啊·····", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 3:
                    drawTextChangeColour("······外面现在很安静的呢！·····", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 4:
                    drawTextChangeColour("外面全是黑的······不过也挺好的", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 5:
                    drawTextChangeColour("我终于解脱了......", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 6:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 7:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 8:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 9:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 10:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 11:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 12:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 13:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                case 14:
                    drawTextChangeColour("吗?", game.canvas.width / 2, game.canvas.height / 2);
                    break;
                default:
                    break;
            }
        }


        game.context.restore();
    }
})();