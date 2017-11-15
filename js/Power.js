/**
 * Created by newuser on 2017/6/26.
 */
function Power() {
    this.isFlying = false
    this.power = document.createElement('div');

    this.init();
}

Power.prototype.init = function () {
    this.power.className = 'power';
    this.power.style.left = -200 + 'px';
    this.power.style.top = -200 + 'px';
    document.body.appendChild(this.power);
    this.add = 4;
}

Power.prototype.flyEnemy = function () { //
    var that = this;
    this.isFlying = true;
    var randLeft = parseInt(Math.random() * ( window.screen.width - 20));
    this.power.style.left = randLeft + 'px';
    this.power.style.top = -20 + 'px';
    this.power.timer = setInterval(function () {
        that.refresh();
    }, 30)
}

Power.prototype.refresh = function () {
    if (this.isFlying === true) {
        if(this.plan && impact(this.plan.oDiv,this.power)){
            this.reset()
            this.plan.power += this.add;
        }if (this.power.offsetTop > window.screen.height + this.power.offsetHeight + 60) {
            //TODO:清空 重置
            this.reset();
        } else {
            var red = parseInt(Math.random() * 255);
            var green = parseInt(Math.random() * 255);
            var blue = parseInt(Math.random() * 255);
            this.power.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
            this.power.style.top = this.power.offsetTop + 10 + 'px'
        }
    }
}

Power.prototype.reset = function () {
    this.power.style.left = -200 + 'px';
    this.power.style.top = -200 + 'px';
    this.isFlying = false;
    clearInterval(this.power.timer);
}
