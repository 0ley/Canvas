//author:凌涛
//
//
//
(function() {
    let ProtagonistFly = function() {
        this.x = 600;
        this.step = 5;
        this.wingNum = -1;
    }
    window.ProtagonistFly = ProtagonistFly;
    //更新
    ProtagonistFly.prototype.update = function() {
            this.x -= this.step;
            this.wingNum++;
            //临界值判断当人上升到顶部的时候就停止
            if (this.x <= 0) {
                this.x = this.x;
            }
            if (this.wingNum == 4) {
                this.wingNum = 0;
            }

        }
        //渲染
    ProtagonistFly.prototype.render = function() {
        //实现上升状态
        switch (this.wingNum) {
            case 0:
                game.context.drawImage(game.allImg["wing1"], (game.canvas.width - game.allImg["wing1"].width) / 2, game.protagonistFly.x - 30 + 10);
                break;
            case 1:
                game.context.drawImage(game.allImg["wing2"], (game.canvas.width - game.allImg["wing2"].width) / 2, game.protagonistFly.x + 10);
                break;
            case 2:
                game.context.drawImage(game.allImg["wing3"], (game.canvas.width - game.allImg["wing3"].width) / 2, game.protagonistFly.x + 10);
                break;
            case 3:
                game.context.drawImage(game.allImg["wing4"], (game.canvas.width - game.allImg["wing4"].width) / 2, game.protagonistFly.x + 10);
                break;
            default:
                break;
        }

        game.context.drawImage(game.allImg["gameProtagonistNorth"], (game.canvas.width - game.allImg["gameProtagonistNorth"].width) / 2, game.protagonistFly.x);
    }
})();