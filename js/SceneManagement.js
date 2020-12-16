//
//场景管理器，控制场景变换
//author：熊志豪，凌涛
//熊志豪：开始场景+各个小场景
//凌涛：主场景，峡谷下坠上升和结局场景
//
//
(function() {
    let SceneManager = function() {
        this.bindEvent();
        game.mainScene = new MainScence();
    };
    SceneManager.prototype.enter = function(number) {
        switch (number) {
            case 0:
                this.startClickcount = 1;
                break;
            case 1:
                this.toCanyon = 0;
                game.scene = 1;
                break;
            case 2:
                this.VV = 0;
                game.canyonFall = new Canyon();
                game.protagonistFall = new ProtagonistFall();
                game.scene = 2;
                break;
            case 3:
                game.scene = 3;
                break;
            case 4:
                this.timer = 0;
                this.blink = 0;
                this.radius = 0;
                game.conyonFly = new Canyon();
                game.conyonFly.fall = false; //使峡谷适应上升状态
                game.protagonistFly = new ProtagonistFly();
                game.scene = 4;
                break;
            case 5: //钢琴场景
                game.mainScene.moveTrue = false;
                clickcount = 0;
                pianoFlag = 0;
                game.scene = 5;
                keyPressCount = 0;
                keyPressCode = [68, 68, 70, 71, 71, 70, 68, 83, 65, 65, 83, 68, 68, 83, 83, 68, 68, 70, 71, 71, 70, 68, 83, 65, 65, 83, 68, 83, 65, 65, 83, 83, 68, 65, 83, 68, 70, 68, 65, 83, 68, 70, 68, 83, 65, 83, 81, 68, 68, 70, 71, 71, 70, 68, 83, 65, 65, 83, 68, 83, 65, 65];
                break;
            case 6: //电视场景
                game.mainScene.moveTrue = false;
                clickcount = 0;
                televisionFlag = 0;
                game.scene = 6;
                break;
            case 7: //对抗病魔经历
                game.mainScene.moveTrue = false;
                game.scene = 7;
                clickcount = 0;
                break;
            case 8:
                game.mainScene.moveTrue = false;
                game.scene = 8;
                clickcount = 0;
                keyFlag = 0;
                rightOrWrongFlag = 1;
                break;
            case 9:
                this.timer = 0;
                game.scene = 9;
                break;
            default:
                break;
        }
    };
    SceneManager.prototype.startClickcount;
    SceneManager.prototype.BOOL_Rain = false; //用来控制下雨
    SceneManager.prototype.drawRainAndCrack = function() {
        if (this.startClickcount > 0 && this.startClickcount < 3) {
            if (this.BOOL_Rain === false) {
                game.context.drawImage(game.allImg["backgroundRain1"], 0, 0);
                this.updateAndRender();
                this.BOOL_Rain = true;
            } else if (this.BOOL_Rain === true) {
                game.context.drawImage(game.allImg["backgroundRain2"], 0, 0);
                this.updateAndRender();
                this.BOOL_Rain = false;
            }
        }
    }
    SceneManager.prototype.drawText = function(e) {
        switch (e) {
            case 1:
                drawText("你这个人怎么这么自私");
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                break;
            case 2:
                drawText("你就是个废物");
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                break;
            case 3:
                drawText("果然跟你在一起就没好事");
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                break;
            case 4:
                drawText("扫把星")
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                break;
            case 5:
                drawText("比你不幸的人多了去了");
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                break;
            case 6:
                game.context.drawImage(game.allImg["background2"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("你怎么这么矫情");
                break;
            case 7:
                game.context.drawImage(game.allImg["background2"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("抑郁症？");
                break;
            case 8:
                game.context.drawImage(game.allImg["background3"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("没有的事");
                break;
            case 9:
                game.context.drawImage(game.allImg["background3"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("你就是为不学习、不工作找借口");
                break;
            case 10:
                game.context.drawImage(game.allImg["background3"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("你就是懒、矫情");
                break;
            case 11:
                game.context.drawImage(game.allImg["background4"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("你就是想博取别人关注");
                break;
            case 12:
                game.context.drawImage(game.allImg["background4"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("抑郁症？");
                break;
            case 13:
                game.context.drawImage(game.allImg["background4"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("就是成天没事瞎想的");
                break;
            case 14:
                game.context.drawImage(game.allImg["background5"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("真正知道社会艰苦的才不会得这个病");
                break;
            case 15:
                game.context.drawImage(game.allImg["background5"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("不要听医生和你瞎说");
                break;
            case 16:
                game.context.drawImage(game.allImg["background5"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("你就是经历得太少了");
                break;
            case 17:
                game.context.drawImage(game.allImg["background6"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("你那么想死早就死了吧");
                break;
            case 18:
                game.context.drawImage(game.allImg["background6"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("是啊");
                break;
            case 19:
                game.context.drawImage(game.allImg["background6"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("我");
                break;
            case 20:
                game.context.drawImage(game.allImg["background7"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("可能");
                break;
            case 21:
                game.context.drawImage(game.allImg["background7"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("不该活在在这个世界上吧");
                break;
            case 22:
                game.context.drawImage(game.allImg["background8"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("毕竟...");
                break;
            case 23:
                game.context.drawImage(game.allImg["background8"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("我");
                break;
            case 24:
                game.context.drawImage(game.allImg["background8"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("...");
                break;
            case 25:
                game.context.drawImage(game.allImg["background9"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawText("有");
                break;
            case 26:
                game.context.drawImage(game.allImg["background9"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawTextDrop("抑郁症啊", 400, 160);
                break;
            case 27:
                game.context.drawImage(game.allImg["background9"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawTextDrop("抑郁症啊", 400, 160);
                drawTextDrop("抑郁症啊", 200, 160);
                drawTextDrop("抑郁症啊", 600, 160);
                drawTextDrop("抑郁症啊", 400, 260);
                drawTextDrop("抑郁症啊", 400, 60);
                break;
            case 28:
                game.context.drawImage(game.allImg["background10"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                drawTextDrop("抑郁症啊", 200, 60);
                drawTextDrop("抑郁症啊", 200, 160);
                drawTextDrop("抑郁症啊", 200, 260);
                drawTextDrop("抑郁症啊", 600, 60);
                drawTextDrop("抑郁症啊", 600, 160);
                drawTextDrop("抑郁症啊", 600, 260);
                drawTextDrop("抑郁症啊", 400, 60);
                drawTextDrop("抑郁症啊", 400, 160);
                drawTextDrop("抑郁症啊", 400, 260);
                break;
            case 29:
                game.context.drawImage(game.allImg["background10"], 0, 0);
                game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++)
                        drawTextDrop("抑郁症啊", 80 + i * 160, j * 80);
                }
                break;
            case 30:
                this.enter(2);
                break;
            default:
                // game.scene = 1;
                break;
        }
    }
    SceneManager.prototype.updateAndRender = function() {
        switch (game.scene) {
            case 0:
                game.context.drawImage(game.allImg["background"], 0, 0);
                drawtitle();
                break;
            case 1: //开始场景
                if (this.startClickcount < 28) {
                    game.context.drawImage(game.allImg["background"], 0, 0);
                    game.context.drawImage(game.allImg["gameProtagonist"], 0, 0, 40, 40, 380, 305, 40, 40);
                }
                //输出文字
                this.drawText(this.startClickcount);
                break;
            case 2: //下落场景
                this.VV++;
                //临界值判断：当人掉到最底部的时候动画停止
                if (game.protagonistFall.x <= game.canvas.height) {
                    game.canyonFall.update();
                } else {
                    document.getElementById("scene01music").pause();
                    game.sM.enter(3);
                }
                game.canyonFall.render();
                if (this.VV % 10 == 0) {
                    game.protagonistFall.update();
                }
                game.protagonistFall.render();
                break;
            case 3: //主场景
                // setInterval(()=>{
                game.mainScene.update();
                game.mainScene.render();
                break;

            case 4: //上升场景
                this.timer++;
                switch (this.blink) {
                    case 0:
                        if (this.radius < 800) {
                            this.radius += 5;
                        }
                        break;
                        // case 1:
                        //     if(this.radius > 0) {
                        //         this.radius--;
                        //     }
                        //     else {
                        //         this.blink = 2;
                        //     }
                        //     break;
                        // case 2:
                        //     this.enter(9);
                        //     break;
                    default:
                        break;
                }
                // this.radius += 5;

                let myColour = game.context.createRadialGradient(game.canvas.width / 2, game.canvas.height / 2, 0, game.canvas.width / 2, game.canvas.height / 2, 500);
                myColour.addColorStop(1, '#ff4500'); //橙红
                myColour.addColorStop(7 / 8, '#ff0da6'); //洋玫瑰色
                myColour.addColorStop(6 / 8, '#ffff4d'); //月黄
                myColour.addColorStop(5 / 8, '#7fff00'); //查特酒色
                myColour.addColorStop(4 / 8, '#66ffe6'); //水蓝
                myColour.addColorStop(3 / 8, '#007fff'); //湛蓝
                myColour.addColorStop(2 / 8, '#5c50e6'); //紫藤色
                myColour.addColorStop(1 / 8, '#6633cc'); //紫水晶色
                myColour.addColorStop(0, '#5000b8'); //纈草紫

                game.context.save();
                game.context.fillStyle = myColour;

                game.context.beginPath();
                game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

                game.context.beginPath();
                game.context.arc(game.canvas.width / 2, game.canvas.height / 2, this.radius, 0, Math.PI * 2);
                console.log(this.radius);
                game.context.stroke();
                game.context.clip();

                //临界值判断：当人飞到最顶部的时候动画停止
                game.conyonFly.update();
                if (game.protagonistFly.x <= 0) {
                    this.enter(9);
                } else {
                    game.conyonFly.render();
                    if (this.timer % 10 == 0) {
                        game.protagonistFly.update();
                    }
                    game.protagonistFly.render();
                }
                game.context.restore();
                break;

            case 5:
                game.context.drawImage(game.allImg["musicRoom"], 0, 0);
                switch (clickcount) {
                    case 1:
                        drawGame1Text("这是哪？");
                        break;
                    case 2:
                        drawGame1Text("音乐...教室？");
                        break;
                    case 3:
                        drawGame1Text("钢琴....");
                        break;
                    case 4:
                        drawGame1Text("好久没弹了呢");
                        break;
                    case 5:
                        drawGame1Text("那我...");
                        break;
                    case 6:
                        drawGame1Text("试着弹一段吧！");
                        break;
                    case 7:
                        game.context.drawImage(game.allImg["piano"], 0, 0);
                        drawMusic();
                        if (keyPressCount == 62) {
                            drawMusicScores("Fantastic!", 350, 380, "red");
                            drawMusicScores("press Enter to continue", 280, 410, "blue");
                        }

                        break;
                    case 8:
                        drawGame1Text("欢乐颂...");
                        break;
                    case 9:
                        drawGame1Text("真是熟悉的旋律啊");
                        break;
                    case 10:
                        drawGame1Text("贝多芬");
                        break;
                    case 11:
                        drawGame1Text("我曾经最喜欢的音乐家");
                        break;
                    case 12:
                        drawGame1Text("他坚信人类最终会战胜自身丑恶的东西");
                        break;
                    case 13:
                        drawGame1Text("我怎么就忘了呢...");
                        break;
                    case 14:
                        drawGame1Text("音乐给我带了的欢乐");
                        break;
                    case 15:
                        drawGame1Text("音乐给予了我勇气与幸福");
                        break;
                    case 16:
                        drawGame1Text("看来");
                        break;
                    case 17:
                        drawGame1Text("世界上还是有");
                        break;
                    case 18:
                        drawGame1Text("吸引着我的");
                        break;
                    case 19:
                        drawGame1Text("乐趣啊~");
                        break;
                    default:
                        break;
                }
                break;
            case 6:
                switch (clickcount) {
                    case 0:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        break;
                    case 1:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("这是？");
                        break;
                    case 2:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("我的卧室？");
                        break;
                    case 3:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("咦？");
                        break;
                    case 4:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("电脑在放什么？");
                        break;
                    case 5:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("我看看...");
                        break;
                    case 6:
                        game.context.drawImage(game.allImg["television"], 62, 75, 935, 650, 0, 0, 800, 600);
                        game.context.drawImage(world, 120, 0, 720, 720, 35, 60, 640, 390);
                        break;
                    case 7:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("...");
                        break;
                    case 8:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("对啊！");
                        break;
                    case 9:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("这个世界上");
                        break;
                    case 10:
                        game.context.drawImage(game.allImg["television_room"], 0, 0, 1080, 1080, 0, 0, 800, 600);
                        drawRoomText("还有很多美好的事物等着我去发现呢");
                        break;

                    default:
                        break;
                }
                break;
            case 7:
                game.context.drawImage(game.allImg["storyScene"], 0, 0, 650, 423, 0, 0, 800, 600);
                switch (clickcount) {
                    case 0:

                        break;
                    case 1:
                        drawStoryText("我今年18岁，是一个很普通很普通的高中生",
                            "刚参加完了19年高考就被诊断为急性淋巴细胞白血病", "高考前就有不适了，吃不下饭，胃胀，冒虚汗",
                            "身体皮肤上还出现了血点和莫名其妙的淤斑", "一考完就去医院做了个血常规，结果出来后血小板只有15",
                            "正常人都是100-300＋（好像是这个数值吧）", "当天就住了院并做了骨穿，输了好多好多液体啊",
                            "当时并不知道是白血病，可我心里已经有预感了", "晚上亲戚得知了我的消息都来看我了",
                            "大家都让我别怕，要坚强，姨妈哭的好厉害", "看着我也忍不住跟着哭",
                            "当时可能就觉得自己快死了吧，心里非常难受");
                        break;
                    case 2:
                        drawStoryText("不知道为什么就得上这个病了挺绝望",
                            "医生说住院的那刻心里好绝望", "谁知道更绝望的在后面",
                            "骨穿好疼 我好害怕", "躺在医院的第一个晚上是爸爸妈妈和仔仔陪我度过的",
                            "我很开心我可以和他正大光明的在一起了", "但 我还是很难过",
                            "我得了好重的病", "后期还要化疗我真的好难过",
                            "我害怕付出了这一系列代价后", "我还是离开了我舍不得我爱我的亲人",
                            "我不想因为自己让他们难过");
                        break;
                    case 3:
                        drawStoryText("今天住院第六天了吧",
                            "昨天化疗了 不知道什么时候掉的头发",
                            "我知道我的免疫力下降了", "我要多吃饭补充营养",
                            "我觉得我应该找点事做做了", "比如画画看书什么的",
                            "好害怕上不了大学和同龄人又差了一级", "大家都好关心我",
                            "我很开心呀大家都在帮助我", "为了大家我要挺住", "照顾好自己 听医生的话",
                            "加油 你一定能好的");
                        break;
                    case 4:
                        drawStoryText("今天星期二",
                            "喉咙感觉好多了",
                            "一早起来牙龈也没有出血挺开心的", "身上的淤斑消了好多",
                            "仔仔去买小面包鸡肉肠了", "同学朋友买了好多零食嘿嘿嘿",
                            "高一的学弟学妹们来了 可惜我睡着了", "学妹写的信很感人",
                            "让我更加有了对抗病魔的信心", "还拍了视频捐了款 花花很香", "我好感动大家都没有放弃我",
                            "我也不能!!!");
                        break;

                    case 5:
                        drawStoryText("今天进仓了 为了不让我感染把我隔离保护起来",
                            "仓里也挺舒服的呢 不知道这回骨髓是不是阴性的",
                            "真希望快点移植啊 但是又有点害怕", "只能一个人待在仓里 妈妈和我隔了一个玻璃",
                            "但至少是可以看见彼此的 心里好受多了", "照顾我的护士姐姐阿姨都挺好",
                            "不断地鼓励我", "一切都挺好的",
                            "要继续乐观下去 不可以丧了", "要勇敢哦 慢慢适应这个环境", "仓里挺干净的 也很安静",
                            "今晚应该可以睡个安稳觉吧");
                        break;
                    case 6:
                        drawStoryText("得这个病已经快四个月了",
                            "好快啊 恍然间我都经历了这么多了",
                            "多希望是梦", "是梦就好了",
                            "现在只有一个心愿", "希望快点好起来",
                            "过着和正常人一样的生活就好了", "康复以后还想干许多事呢",
                            "要把以前错过的都弥补回来", "学业什么的已经不重要了", "只想陪在爱我的人的身边",
                            "平平淡淡开开心心的就好");
                        break;
                    case 7:
                        drawStoryText("今天出院终于见到阳光了",
                            "撒在脸上的感觉很不真实",
                            "走路都有点机械了", "可我真的好开心啊",
                            "太阳热烘烘的味道让人想到：", "哦 原来我也在过夏天那！",
                            "当然咯 下个夏天 我就可以穿着好看的裙子", "我就可以痛痛快快的游泳",
                            "我就可以吃好吃的冰淇淋和圣代了！", "很快的", "我相信很快的",
                            "要挺住要加油");
                        break;
                    case 8:
                        drawStoryText("今天出院啦！",
                            "结束了最后一次化疗",
                            "下次终于可以移植了！", "也在生日之际收获了满满的感动",
                            "有来自家人朋友网友的祝福", "有科室主任和教授送的花",
                            "还有我的英雄叔叔带给我的鼓励祝福", "我真的超幸福的！",
                            "被爱包围着", "所以啊 我在想等我病好了", "一定要为社会付出 一定也要贡献自己的力量",
                            "让更多人感受到社会的爱");
                        break;
                    case 9:
                        drawStoryText2("（以上根据真实故事改编）");
                        break;
                    case 10:
                        drawStoryText2("这就是她对抗病魔的过程吗...");
                        break;
                    case 11:
                        drawStoryText2("真有勇气啊！");
                        break;
                    case 12:
                        drawStoryText2("抑郁症....");
                        break;
                    case 13:
                        drawStoryText2("我也该直面了");
                        break;
                    default:
                        break;
                }
                break;
            case 8:
                switch (clickcount) {
                    case 0:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        break;
                    case 1:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("这是...");
                        break;
                    case 2:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("教室？");
                        break;
                    case 3:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("我怎么来到这了");
                        break;
                    case 4:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("嗯？");
                        break;
                    case 5:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("黑板上的...");
                        break;
                    case 6:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("是题目？");
                        break;
                    case 7:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        break;
                    case 8:
                        game.context.drawImage(game.allImg["blackboard"], 0, 0, 1280, 719, 0, 0, 800, 600);
                        drawQuestionText(" 1.下列诗人中哪位诗人是初唐诗人?", '48px FangSong', 100);
                        drawSelectText("A.李白", "B.白居易", "C.陶渊明", "D.张若虚");
                        if (keyFlag == 4) {
                            keyFlag = 0;
                            drawResultText(1);
                            clickcount++;
                        } else if (keyFlag != 0) {
                            drawResultText(0);
                            rightOrWrongFlag = 0;
                        }

                        break;
                    case 9:
                        game.context.drawImage(game.allImg["blackboard"], 0, 0, 1280, 719, 0, 0, 800, 600);
                        drawQuestionText(" 2.从全体3位正整数中任取一数，则此数以2为底", '34px FangSong', 65);
                        drawQuestionText("   的对数也是正整数的概率为?", '34px FangSong', 120);
                        drawSelectText("A.1/225", "B.1/300", "C.1/450", "D.以上全不对");
                        if (keyFlag == 2) {
                            keyFlag = 0;
                            drawResultText(1);
                            clickcount++;
                        } else if (keyFlag != 0) {
                            drawResultText(0);
                            rightOrWrongFlag = 0;
                        }
                        break;
                    case 10:
                        game.context.drawImage(game.allImg["blackboard"], 0, 0, 1280, 719, 0, 0, 800, 600);
                        drawQuestionText(" 3.Mary had to call a taxi because the box was", '34px century', 65);
                        drawQuestionText("  ______ to carry all the way home.", '34px century', 120);
                        drawSelectText("A.much too heavy", "B.too much heavy", "C.heavy too much", "D.too heavy much");
                        if (keyFlag == 1) {
                            keyFlag = 0;
                            drawResultText(1);
                            clickcount++;
                        } else if (keyFlag != 0) {
                            drawResultText(0);
                            rightOrWrongFlag = 0;
                        }
                        break;
                    case 11:
                        game.context.drawImage(game.allImg["blackboard"], 0, 0, 1280, 719, 0, 0, 800, 600);
                        drawQuestionText(" 4.若int类型数据占2个字节,则unsigned int类型", '34px FangSong', 65);
                        drawQuestionText("   数据的取值范围是?", '34px FangSong', 120);
                        drawSelectText("A.0-255", "B.0-65535", "C.-32768-32767", "D.-256-255");
                        if (keyFlag == 2) {
                            keyFlag = 0;
                            drawResultText(1);
                            clickcount++;
                        } else if (keyFlag != 0) {
                            drawResultText(0);
                            rightOrWrongFlag = 0;
                        }
                        break;
                    case 12:
                        game.context.drawImage(game.allImg["blackboard"], 0, 0, 1280, 719, 0, 0, 800, 600);
                        drawQuestionText(" 5.DOM模型中document对象提供的通过id获取对象", '34px FangSong', 65);
                        drawQuestionText("   的方法？", '34px FangSong', 120);
                        drawSelectText("A.getContext()", "B.getElementById()", "C.getDocumentById()", "D.getObjectById()");
                        if (keyFlag == 2) {
                            keyFlag = 0;
                            drawResultText(1);
                            clickcount++;
                        } else if (keyFlag != 0) {
                            drawResultText(0);
                            rightOrWrongFlag = 0;
                        }
                        break;
                    case 13:
                        game.context.drawImage(game.allImg["blackboard"], 0, 0, 1280, 719, 0, 0, 800, 600);
                        drawResultText(2);
                        break;
                    case 14:
                        document.getElementById("answermusic").pause();
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        break;
                    case 15:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("我竟然都做对了！");
                        break;
                    case 16:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("原来不知不觉中");
                        break;
                    case 17:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("我已经懂了这么多的知识");
                        break;
                    case 18:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("看来");
                        break;
                    case 19:
                        game.context.drawImage(game.allImg["classRoom"], 0, 0, 2400, 1800, 0, 0, 800, 600);
                        drawSelfText("我并没有自己想象中的那么没用啊");
                        break;
                    default:
                        break;
                }
                break;
            case 9:
                this.timer += 1;
                game.context.drawImage(game.allImg["end"], 0, 0, 800, 800, 0, 0, 800, 600);
                // console.log(this.timer % 40);
                if (this.timer % 40 > 0 && this.timer % 40 < 10)
                    game.context.drawImage(game.allImg["wing1"], (game.canvas.width - game.allImg["wing1"].width) / 2, (game.canvas.height - game.allImg["wing1"].height) / 2 - 200 - 20);
                if (this.timer % 40 >= 10 && this.timer % 40 < 20)
                    game.context.drawImage(game.allImg["wing2"], (game.canvas.width - game.allImg["wing2"].width) / 2, (game.canvas.height - game.allImg["wing2"].height) / 2 - 200 + 10);
                if (this.timer % 40 >= 20 && this.timer % 40 < 30)
                    game.context.drawImage(game.allImg["wing3"], (game.canvas.width - game.allImg["wing3"].width) / 2, (game.canvas.height - game.allImg["wing3"].height) / 2 - 200 + 10);
                if (this.timer % 40 >= 30 && this.timer % 40 < 40)
                    game.context.drawImage(game.allImg["wing4"], (game.canvas.width - game.allImg["wing4"].width) / 2, (game.canvas.height - game.allImg["wing3"].height) / 2 - 200);
                game.context.drawImage(game.allImg["gameProtagonistNorth"], (game.canvas.width - game.allImg["gameProtagonistNorth"].width) / 2, (game.canvas.height - game.allImg["gameProtagonistNorth"].height) / 2 - 200 - 5);
                endText(this.timer / 2.5);
                // if(this.timer / 2.5 > 480) {
                //         this.enter(0);
                // }
                break;
            default:
                break;
        }
    };
    SceneManager.prototype.bindEvent = function() {
        //只能给canvas绑定事件
        //通过鼠标位置来判定
        //不同场景下都可能会有点击事件，所以需要判断是哪个场景的点击
        game.canvas.onclick = (e) => {
            //this--->sM场景管理器的实例
            switch (game.scene) {
                case 0:
                    //点击播放音乐
                    if (startflag == 1)
                        document.getElementById("startmusic").play();
                    let mousePoint = { x: 0, y: 0 };
                    mousePoint.x = e.clientX;
                    mousePoint.y = e.clientY;
                    mousePoint = windowToCanvas(canvas, mousePoint);
                    //点击开始游戏后
                    if (mousePoint.x < 480 && mousePoint.x > 310 && mousePoint.y < 500 && mousePoint.y > 460) {
                        //停止开始音乐
                        startflag = 0;
                        document.getElementById("startmusic").pause();
                        //播放下一段场景的音乐
                        document.getElementById("scene01music").play();
                        //进入下一个场景
                        this.enter(1);
                    }
                    break;
                case 1:
                    this.startClickcount++;
                    break;
                case 2:

                    break;
                case 3:
                    document.getElementById("mainScene").play();
                    break;

                case 5:
                    if (pianoFlag == 0) {
                        let mousePoint2 = { x: 0, y: 0 };
                        mousePoint2.x = e.clientX;
                        mousePoint2.y = e.clientY;
                        mousePoint2 = windowToCanvas(canvas, mousePoint2);
                        if (mousePoint2.x < 610 && mousePoint2.x > 410 && mousePoint2.y < 380 && mousePoint2.y > 235) {
                            clickcount++;
                            pianoFlag = 1;
                        }

                    } else if (pianoFlag == 1) {
                        if (clickcount < 7 || clickcount > 7)
                            clickcount++;
                    }
                    if (clickcount == 20) {
                        document.getElementById("mainScene").play();
                        game.scene = 3;
                        game.mainScene.blink = 5;
                        game.mainScene.house1filled = true;
                    }
                    break;
                case 6:
                    if (clickcount < 5 || clickcount > 6)
                        clickcount++;
                    else {
                        if (televisionFlag == 0) {
                            let mousePoint2 = { x: 0, y: 0 };
                            mousePoint2.x = e.clientX;
                            mousePoint2.y = e.clientY;
                            mousePoint2 = windowToCanvas(canvas, mousePoint2);
                            if (mousePoint2.x < 620 && mousePoint2.x > 500 && mousePoint2.y < 400 && mousePoint2.y > 340) {
                                clickcount++;
                                televisionFlag = 1;
                            }

                        } else if (televisionFlag == 1) {
                            let mousePoint2 = { x: 0, y: 0 };
                            mousePoint2.x = e.clientX;
                            mousePoint2.y = e.clientY;
                            mousePoint2 = windowToCanvas(canvas, mousePoint2);
                            if (mousePoint2.x < 775 && mousePoint2.x > 700 && mousePoint2.y < 140 && mousePoint2.y > 75) {
                                if (world.paused)
                                    world.play();
                                else
                                    world.pause();
                            } else if (mousePoint2.x < 775 && mousePoint2.x > 700 && mousePoint2.y < 260 && mousePoint2.y > 185) {
                                if (world.ended)
                                    clickcount++;
                            }
                        }
                    }
                    if (clickcount == 11) {
                        document.getElementById("mainScene").play();
                        game.scene = 3;
                        game.mainScene.blink = 6;
                        game.mainScene.house2filled = true;
                    }

                    //console.log(e.clientX, e.clientY);
                    break;
                case 7:
                    if (clickcount == 0) {
                        document.getElementById("storyScenemusic").play();
                        clickcount++;
                    } else {
                        clickcount++;
                    }
                    if (clickcount == 14) {
                        document.getElementById("storyScenemusic").pause();
                        document.getElementById("mainScene").play();
                        game.scene = 3;
                        game.mainScene.blink = 7;
                        game.mainScene.house3filled = true;
                    }
                    break;
                case 8:
                    if (clickcount < 7 || clickcount > 12) {
                        clickcount++;
                    } else if (clickcount == 7) {
                        let mousePoint2 = { x: 0, y: 0 };
                        mousePoint2.x = e.clientX;
                        mousePoint2.y = e.clientY;
                        mousePoint2 = windowToCanvas(canvas, mousePoint2);
                        if (mousePoint2.x < 600 && mousePoint2.x > 170 && mousePoint2.y < 330 && mousePoint2.y > 230) {
                            clickcount++;
                            document.getElementById("answermusic").play();
                        }
                    } else {
                        if (rightOrWrongFlag == 0) {
                            clickcount = 8;
                            rightOrWrongFlag = 1;
                            keyFlag = 0;
                        }
                    }
                    if (clickcount == 20) {
                        document.getElementById("happyEnd").play();
                        game.scene = 3;
                        game.mainScene.blink = 8;
                        game.mainScene.house4filled = true;
                    }
                    break;
                default:
                    break;
            }
        }
        window.onkeydown = (e) => {
            switch (game.scene) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:

                    break;
                case 3:
                    if (e.keyCode == 87 || e.keyCode == 38) { //如果键盘按键为W，上 时
                        game.mainScene.selectDirection = 3;
                        game.mainScene.moveTrue = true;
                    } else if (e.keyCode == 65 || e.keyCode == 37) { //左
                        game.mainScene.selectDirection = 1;
                        game.mainScene.moveTrue = true;
                    } else if (e.keyCode == 40 || e.keyCode == 83) { //下
                        game.mainScene.selectDirection = 0;
                        game.mainScene.moveTrue = true;
                    } else if (e.keyCode == 68 || e.keyCode == 39) { //右
                        game.mainScene.selectDirection = 2;
                        game.mainScene.moveTrue = true;
                    }
                    break;
                case 5:
                    //如果弹奏正确，则计数加一
                    if (keyPressCode[keyPressCount] == e.keyCode) {
                        keyPressCount++;
                    }
                    //Q键
                    if (e.keyCode == 81) {
                        //重新开始播放音乐
                        document.getElementById("QKey").currentTime = 0;
                        document.getElementById("QKey").play();
                        //A键
                    } else if (e.keyCode == 65) {
                        document.getElementById("AKey").currentTime = 0;
                        document.getElementById("AKey").play();
                        //S键
                    } else if (e.keyCode == 83) {
                        document.getElementById("SKey").currentTime = 0;
                        document.getElementById("SKey").play();
                        //D键
                    } else if (e.keyCode == 68) {
                        document.getElementById("DKey").currentTime = 0;
                        document.getElementById("DKey").play();
                        //F键
                    } else if (e.keyCode == 70) {
                        document.getElementById("FKey").currentTime = 0;
                        document.getElementById("FKey").play();
                        //G键
                    } else if (e.keyCode == 71) {
                        document.getElementById("GKey").currentTime = 0;
                        document.getElementById("GKey").play();
                        //以enter结束
                    } else if (e.keyCode == 13 && keyPressCount == 62) {
                        clickcount++;
                        keyPressCount++;
                    }
                    break;
                case 8:
                    //A键
                    if (e.keyCode == 65) {
                        console.log('a');
                        keyFlag = 1;
                    }
                    //B键
                    if (e.keyCode == 66) {
                        console.log('b');
                        keyFlag = 2;
                    }
                    //C键
                    if (e.keyCode == 67) {
                        console.log('c');
                        keyFlag = 3;
                    }
                    //D键
                    if (e.keyCode == 68) {
                        console.log('d');
                        keyFlag = 4;
                    }
                    break;
                default:
                    break;
            }
        }
        window.onkeyup = (e) => {
            switch (game.scene) {
                case 0:
                    break;
                case 1:
                    break;
                case 2:

                    break;
                case 3:
                    if (e.keyCode == 87 || e.keyCode == 38) { //如果键盘按键为W，上 时
                        game.mainScene.moveTrue = false;
                    } else if (e.keyCode == 65 || e.keyCode == 37) { //左
                        game.mainScene.moveTrue = false;
                    } else if (e.keyCode == 40 || e.keyCode == 83) { //下
                        game.mainScene.moveTrue = false;
                    } else if (e.keyCode == 68 || e.keyCode == 39) { //右
                        game.mainScene.moveTrue = false;
                    }
                    break;
                case 5:
                    if (e.keyCode == 81)
                        document.getElementById("QKey").pause();
                    else if (e.keyCode == 65)
                        document.getElementById("AKey").pause();
                    else if (e.keyCode == 83)
                        document.getElementById("SKey").pause();
                    else if (e.keyCode == 68)
                        document.getElementById("DKey").pause();
                    else if (e.keyCode == 70)
                        document.getElementById("FKey").pause();
                    else if (e.keyCode == 71)
                        document.getElementById("GKey").pause();
                    break;
                default:
                    break;
            }
        }
    }
    window.SceneManager = SceneManager;

    //钢琴小游戏文本变化
    function drawMusic() {
        //欢乐颂
        drawMusicScores("Ode to joy", 320, 40, "purple");
        //第一行
        if (keyPressCount > 0)
            drawMusicScores("3", 160, 100, "purple");
        else
            drawMusicScores("3", 160, 100, "white");
        if (keyPressCount > 1)
            drawMusicScores("3", 190, 100, "purple");
        else
            drawMusicScores("3", 190, 100, "white");
        if (keyPressCount > 2)
            drawMusicScores("4", 220, 100, "purple");
        else
            drawMusicScores("4", 220, 100, "white");
        if (keyPressCount > 3)
            drawMusicScores("5", 250, 100, "purple");
        else
            drawMusicScores("5", 250, 100, "white");
        if (keyPressCount > 4)
            drawMusicScores("5", 280, 100, "purple");
        else
            drawMusicScores("5", 280, 100, "white");
        if (keyPressCount > 5)
            drawMusicScores("4", 310, 100, "purple");
        else
            drawMusicScores("4", 310, 100, "white");
        if (keyPressCount > 6)
            drawMusicScores("3", 340, 100, "purple");
        else
            drawMusicScores("3", 340, 100, "white");
        if (keyPressCount > 7)
            drawMusicScores("2", 370, 100, "purple");
        else
            drawMusicScores("2", 370, 100, "white");
        if (keyPressCount > 8)
            drawMusicScores("1", 400, 100, "purple");
        else
            drawMusicScores("1", 400, 100, "white");
        if (keyPressCount > 9)
            drawMusicScores("1", 430, 100, "purple");
        else
            drawMusicScores("1", 430, 100, "white");
        if (keyPressCount > 10)
            drawMusicScores("2", 460, 100, "purple");
        else
            drawMusicScores("2", 460, 100, "white");
        if (keyPressCount > 11)
            drawMusicScores("3", 490, 100, "purple");
        else
            drawMusicScores("3", 490, 100, "white");
        if (keyPressCount > 12)
            drawMusicScores("3.", 520, 100, "purple");
        else
            drawMusicScores("3.", 520, 100, "white");
        if (keyPressCount > 13)
            drawMusicScores("2", 550, 100, "purple");
        else
            drawMusicScores("2", 550, 100, "white");
        if (keyPressCount > 14) {
            drawMusicScores("2", 580, 100, "purple");
            drawMusicScores("-", 610, 100, "purple");
        } else {
            drawMusicScores("2", 580, 100, "white");
            drawMusicScores("-", 610, 100, "white");
        }

        //第二行
        if (keyPressCount > 15)
            drawMusicScores("3", 160, 170, "purple");
        else
            drawMusicScores("3", 160, 170, "white");
        if (keyPressCount > 16)
            drawMusicScores("3", 190, 170, "purple");
        else
            drawMusicScores("3", 190, 170, "white");
        if (keyPressCount > 17)
            drawMusicScores("4", 220, 170, "purple");
        else
            drawMusicScores("4", 220, 170, "white");
        if (keyPressCount > 18)
            drawMusicScores("5", 250, 170, "purple");
        else
            drawMusicScores("5", 250, 170, "white");
        if (keyPressCount > 19)
            drawMusicScores("5", 280, 170, "purple");
        else
            drawMusicScores("5", 280, 170, "white");
        if (keyPressCount > 20)
            drawMusicScores("4", 310, 170, "purple");
        else
            drawMusicScores("4", 310, 170, "white");
        if (keyPressCount > 21)
            drawMusicScores("3", 340, 170, "purple");
        else
            drawMusicScores("3", 340, 170, "white");
        if (keyPressCount > 22)
            drawMusicScores("2", 370, 170, "purple");
        else
            drawMusicScores("2", 370, 170, "white");
        if (keyPressCount > 23)
            drawMusicScores("1", 400, 170, "purple");
        else
            drawMusicScores("1", 400, 170, "white");
        if (keyPressCount > 24)
            drawMusicScores("1", 430, 170, "purple");
        else
            drawMusicScores("1", 430, 170, "white");
        if (keyPressCount > 25)
            drawMusicScores("2", 460, 170, "purple");
        else
            drawMusicScores("2", 460, 170, "white");
        if (keyPressCount > 26)
            drawMusicScores("3", 490, 170, "purple");
        else
            drawMusicScores("3", 490, 170, "white");
        if (keyPressCount > 27)
            drawMusicScores("2.", 520, 170, "purple");
        else
            drawMusicScores("2.", 520, 170, "white");
        if (keyPressCount > 28)
            drawMusicScores("1", 550, 170, "purple");
        else
            drawMusicScores("1", 550, 170, "white");
        if (keyPressCount > 29) {
            drawMusicScores("1", 580, 170, "purple");
            drawMusicScores("-", 610, 170, "purple");
        } else {
            drawMusicScores("1", 580, 170, "white");
            drawMusicScores("-", 610, 170, "white");
        }

        //第三行
        if (keyPressCount > 30)
            drawMusicScores("2", 160, 240, "purple");
        else
            drawMusicScores("2", 160, 240, "white");
        if (keyPressCount > 31)
            drawMusicScores("2", 190, 240, "purple");
        else
            drawMusicScores("2", 190, 240, "white");
        if (keyPressCount > 32)
            drawMusicScores("3", 220, 240, "purple");
        else
            drawMusicScores("3", 220, 240, "white");
        if (keyPressCount > 33)
            drawMusicScores("1", 250, 240, "purple");
        else
            drawMusicScores("1", 250, 240, "white");
        if (keyPressCount > 34)
            drawMusicScores("2", 280, 240, "purple");
        else
            drawMusicScores("2", 280, 240, "white");
        if (keyPressCount > 35)
            drawMusicScores("3", 310, 240, "purple");
        else
            drawMusicScores("3", 310, 240, "white");
        if (keyPressCount > 36)
            drawMusicScores("4", 340, 240, "purple");
        else
            drawMusicScores("4", 340, 240, "white");
        if (keyPressCount > 37)
            drawMusicScores("3", 370, 240, "purple");
        else
            drawMusicScores("3", 370, 240, "white");
        if (keyPressCount > 38)
            drawMusicScores("1", 400, 240, "purple");
        else
            drawMusicScores("1", 400, 240, "white");
        if (keyPressCount > 39)
            drawMusicScores("2", 430, 240, "purple");
        else
            drawMusicScores("2", 430, 240, "white");
        if (keyPressCount > 40)
            drawMusicScores("3", 460, 240, "purple");
        else
            drawMusicScores("3", 460, 240, "white");
        if (keyPressCount > 41)
            drawMusicScores("4", 490, 240, "purple");
        else
            drawMusicScores("4", 490, 240, "white");
        if (keyPressCount > 42)
            drawMusicScores("3", 520, 240, "purple");
        else
            drawMusicScores("3", 520, 240, "white");
        if (keyPressCount > 43)
            drawMusicScores("2", 550, 240, "purple");
        else
            drawMusicScores("2", 550, 240, "white");
        if (keyPressCount > 44)
            drawMusicScores("1", 580, 240, "purple");
        else
            drawMusicScores("1", 580, 240, "white");
        if (keyPressCount > 45)
            drawMusicScores("2", 610, 240, "purple");
        else
            drawMusicScores("2", 610, 240, "white");
        if (keyPressCount > 46)
            drawMusicScores("5.", 640, 240, "purple");
        else
            drawMusicScores("5.", 640, 240, "white");
        //第四行
        if (keyPressCount > 47)
            drawMusicScores("3", 160, 310, "purple");
        else
            drawMusicScores("3", 160, 310, "white");
        if (keyPressCount > 48)
            drawMusicScores("3", 190, 310, "purple");
        else
            drawMusicScores("3", 190, 310, "white");
        if (keyPressCount > 49)
            drawMusicScores("4", 220, 310, "purple");
        else
            drawMusicScores("4", 220, 310, "white");
        if (keyPressCount > 50)
            drawMusicScores("5", 250, 310, "purple");
        else
            drawMusicScores("5", 250, 310, "white");
        if (keyPressCount > 51)
            drawMusicScores("5", 280, 310, "purple");
        else
            drawMusicScores("5", 280, 310, "white");
        if (keyPressCount > 52)
            drawMusicScores("4", 310, 310, "purple");
        else
            drawMusicScores("4", 310, 310, "white");
        if (keyPressCount > 53)
            drawMusicScores("3", 340, 310, "purple");
        else
            drawMusicScores("3", 340, 310, "white");
        if (keyPressCount > 54)
            drawMusicScores("2", 370, 310, "purple");
        else
            drawMusicScores("2", 370, 310, "white");
        if (keyPressCount > 55)
            drawMusicScores("1", 400, 310, "purple");
        else
            drawMusicScores("1", 400, 310, "white");
        if (keyPressCount > 56)
            drawMusicScores("1", 430, 310, "purple");
        else
            drawMusicScores("1", 430, 310, "white");
        if (keyPressCount > 57)
            drawMusicScores("2", 460, 310, "purple");
        else
            drawMusicScores("2", 460, 310, "white");
        if (keyPressCount > 58)
            drawMusicScores("3", 490, 310, "purple");
        else
            drawMusicScores("3", 490, 310, "white");
        if (keyPressCount > 59)
            drawMusicScores("2.", 520, 310, "purple");
        else
            drawMusicScores("2.", 520, 310, "white");
        if (keyPressCount > 60)
            drawMusicScores("1", 550, 310, "purple");
        else
            drawMusicScores("1", 550, 310, "white");
        if (keyPressCount > 61) {
            drawMusicScores("1", 580, 310, "purple");
            drawMusicScores("-", 610, 310, "purple");
        } else {
            drawMusicScores("1", 580, 310, "white");
            drawMusicScores("-", 610, 310, "white");
        }
    }
})();