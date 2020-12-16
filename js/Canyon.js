//author:凌涛
//
//
//
(function() {
    let Canyon = function() {
        this.x = 0;
        this.w = 600;
        this.h = 400;
        this.step = 5;
        this.fall = true;
    }
    window.Canyon = Canyon;
    //更新
    Canyon.prototype.update = function() {
            // this.
            if (this.fall) {
                this.x -= this.step;
                //临界值判断
                if (this.x <= -game.canvas.height) {
                    this.x = 0;
                }
            } else {
                this.x += this.step;
                //临界值判断
                if (this.x >= game.canvas.height) {
                    this.x = 0;
                }
            }
        }
        //渲染
    Canyon.prototype.render = function() {
        //制造峡谷循环，实现下落状态
        if (this.fall) {
            game.context.drawImage(game.allImg["canyon"], 0, this.x, game.canvas.width, game.canvas.height);
            game.context.drawImage(game.allImg["canyon"], 0, this.x + game.canvas.height, game.canvas.width, game.canvas.height);
        } else {
            game.context.drawImage(game.allImg["canyon"], 0, this.x - game.canvas.height, game.canvas.width, game.canvas.height);
            game.context.drawImage(game.allImg["canyon"], 0, this.x, game.canvas.width, game.canvas.height);
        }
    }
})();