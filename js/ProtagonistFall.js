//author:凌涛
//
//
//
(function() {
    var ProtagonistFall = function() {
        this.x = 0;
        this.step = 20;
        this.a = 0;
    }
    window.ProtagonistFall = ProtagonistFall;
    //更新
    ProtagonistFall.prototype.update = function() {
            // this.
            this.x += this.step;
            //临界值判断当人掉到底部的时候就停止
            if (this.x >= game.canvas.height) {
                this.x = this.x;
            }
        }
        //渲染
    ProtagonistFall.prototype.render = function() {
        //game.context.drawImage(game.allImage["protagonistLeft"],/*game.canvas.width / 2, -this.x*/50,80,30,40,game.canvas.width / 2,-this.x-20,50,50);
        if (this.x <= game.canvas.height) {
            switch (this.x / 20 % 8) {
                case 0:
                    game.context.drawImage(game.allImg["gameProtagonistNorth"], 400, game.protagonistFall.x);
                    break;
                case 1:
                    game.context.drawImage(game.allImg["gameProtagonistNorthwest"], 400, game.protagonistFall.x);
                    break;
                case 2:
                    game.context.drawImage(game.allImg["gameProtagonistWest"], 400, game.protagonistFall.x);
                    break;
                case 3:
                    game.context.drawImage(game.allImg["gameProtagonistSouthwest"], 400, game.protagonistFall.x);
                    break;
                case 4:
                    game.context.drawImage(game.allImg["gameProtagonistSouth"], 400, game.protagonistFall.x);
                    break;
                case 5:
                    game.context.drawImage(game.allImg["gameProtagonistSoutheast"], 400, game.protagonistFall.x);
                    break;
                case 6:
                    game.context.drawImage(game.allImg["gameProtagonistEast"], 400, game.protagonistFall.x);
                    break;
                default:
                    game.context.drawImage(game.allImg["gameProtagonistNortheast"], 400, game.protagonistFall.x);
                    break;
            }
        }
        // else {
        //     game.scene = 2;
        // }
    }
})();