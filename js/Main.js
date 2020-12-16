//author:熊志豪
//
//
//
(function() {
    let Game = function() {
        //获取canvas标签，加到实例this上当作私有属性
        this.canvas = document.getElementById("canvas");
        //创建绘图环境,加到实例this上当作私有属性
        this.context = this.canvas.getContext("2d");
        this.allImg = {
            "background": "image/startBackground/background.png",
            "background2": "image/startBackground/background2.png",
            "background3": "image/startBackground/background3.png",
            "background4": "image/startBackground/background4.png",
            "background5": "image/startBackground/background5.png",
            "background6": "image/startBackground/background6.png",
            "background7": "image/startBackground/background7.png",
            "background8": "image/startBackground/background8.png",
            "background9": "image/startBackground/background9.png",
            "background10": "image/startBackground/background10.png",
            "backgroundRain1": "image/startBackground/backgroundRain1.png",
            "backgroundRain3": "image/startBackground/backgroundRain3.png",
            "gameProtagonist": "image/gameProtagonist.png",
            //以下是人旋转的八个方向
            "gameProtagonistEast": "image/gameProtagonist/gameProtagonistEast.png",
            "gameProtagonistNortheast": "image/gameProtagonist/gameProtagonistNortheast.png",
            "gameProtagonistSoutheast": "image/gameProtagonist/gameProtagonistSoutheast.png",
            "gameProtagonistSouth": "image/gameProtagonist/gameProtagonistSouth.png",
            "gameProtagonistSouthwest": "image/gameProtagonist/gameProtagonistSouthwest.png",
            "gameProtagonistWest": "image/gameProtagonist/gameProtagonistWest.png",
            "gameProtagonistNorthwest": "image/gameProtagonist/gameProtagonistNorthwest.png",
            "gameProtagonistNorth": "image/gameProtagonist/gameProtagonistNorth.png",
            "canyon": "image/gameProtagonist/canyon.png",
            //以下是两只狗
            "dogBad": "image/mainScene/dogBad.png",
            "dogDepression": "image/mainScene/dogDepression.png",
            //以下是背景图
            "land": "image/mainScene/land.png",
            "cave": "image/mainScene/cave.png",
            //以下是人上升的翅膀
            "wing1": "image/wing/wing1.png",
            "wing2": "image/wing/wing2.png",
            "wing3": "image/wing/wing3.png",
            "wing4": "image/wing/wing4.png",
            //以下是八个房间（填充、非填充）
            "house1": "image/house/house1.png",
            "house2": "image/house/house2.png",
            "house3": "image/house/house3.png",
            "house4": "image/house/house4.png",
            "house1filled": "image/house/house1filled.png",
            "house2filled": "image/house/house2filled.png",
            "house3filled": "image/house/house3filled.png",
            "house4filled": "image/house/house4filled.png",
            //以下是钢琴房间的图片
            "musicRoom": "image/musicRoom/musicRoom.jpg",
            "piano": "image/musicRoom/piano.png",
            //以下是电视房间的图片
            "television_room": "image/televisionRoom/television_room.png",
            "television": "image/televisionRoom/television.png",
            //以下是对抗病魔房间的图片
            "storyScene": "image/fightDiseaseRoom/scene2.jpg",
            //以下是答题房间的图片
            "classRoom": "image/classRoom/classRoom.jpg",
            "blackboard": "image/classRoom/blackboard.jpg",

            //终点的图片

            "end": "image/end.jpg"
        };
        this.scene = 0; //场景编号
        this.VV = 0; //标记人物下落
        this.BooL = false;
        //加载所有图片
        let n = 0 //计数器
        let total = Object.keys(this.allImg).length; //图片总个数
        //循环对象，加载所有图片,让对象的属性值都变成真实img图片
        for (let key in this.allImg) {
            ((src) => {
                this.allImg[key] = new Image();
                this.allImg[key].src = src;
                this.allImg[key].onload = () => {
                    n++;
                    if (n == total) {
                        //此时图片加载完成，可以进入游戏
                        this.start();
                    }
                }
            })(this.allImg[key]);
        }
    };
    window.Game = Game;
    Game.prototype.clear = function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    window.onkeydown = function(event) {
        if (event.keyCode == 13) {
            console.log(123);
        }
    }

    Game.prototype.start = function() {
        this.frame = 0;
        //实例化场景管理器
        this.sM = new SceneManager();
        //默认进入场景0 开始界面
        this.sM.enter(0);
        this.sM.updateAndRender();
        this.timer = setInterval(() => {
            this.clear();
            this.frame++;
            // if(this.startClickcount > 0 && this.startClickcount < 3) {
            //     if(this.BooL === false) {
            //         game.context.drawImage(game.allImg["backgroundRain1"], 0, 0);
            //         this.updateAndRender();
            //         this.BooL = true;
            //     }
            //     else if(this.BooL === true) {
            //         game.context.drawImage(game.allImg["backgroundRain2"], 0, 0);
            //         this.updateAndRender();
            //         this.BooL = false;
            //
            this.sM.updateAndRender();
            //显示场景编号
        }, 20);
    }
})();