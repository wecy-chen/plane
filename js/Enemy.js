/**
 * Created by newuser on 2017/6/26.
 */
function Enemy(type) {
    this.type = type;
    this.isFlying = false;
    this.enemy = document.createElement('div');
    this.someData();
    this.init();
}
Enemy.prototype.someData = function () {
    this.HPArray = [1, 50, 15];
    this.topArray = [-24, -164, -60];
    this.speedArray = [10, 2, 6];
    this.top = -500;
    this.left = -500;
}
Enemy.prototype.init = function () {
    this.enemy.className = 'enemy' + this.type;
    this.enemy.style.left = this.left + 'px';
    this.enemy.style.top = this.top + 'px';
    this.HP = this.HPArray[this.type - 1];
    document.body.appendChild(this.enemy);
}

Enemy.prototype.flyEnemy = function () { //
    var that = this;
    this.isFlying = true;
    var randLeft = parseInt(Math.random() * ( window.screen.width - this.enemy.offsetWidth ));
    this.enemy.style.left = randLeft + 'px';
    this.enemy.style.top = this.topArray[this.type - 1] + 'px';
    this.enemy.timer = setInterval(function () {
        that.refresh();
    }, 30)
}

Enemy.prototype.refresh = function () {
    if (this.isFlying === true) {
        var that = this;

        this.isShoot();

        if (this.enemy.offsetTop > window.screen.height + this.enemy.offsetHeight + 60) {
            //TODO:清空 重置
            this.reset();
        } else if (this.HP <= 0) {
            this.enemy.className += ' boom';
            setTimeout(function () {

                that.reset();

            },300)
        }
        else {
            this.enemy.style.top = this.enemy.offsetTop + this.speedArray[this.type - 1] + 'px'
        }
    }

}

Enemy.prototype.isShoot = function () {
    if (this.bulletArray) {
        
        for (var i = 0; i < this.bulletArray.length; i++) {

            var bullet = this.bulletArray[i];

            if(bullet.isFlying === true && impact(this.enemy,bullet.bullet)){

                this.HP -= bullet.power ;

                bullet.reset();

            }else {
                continue;
            }
        }
    }
}

Enemy.prototype.reset = function () {
    this.enemy.style.left = this.left + 'px';
    this.enemy.style.top = this.top + 'px';
    this.isFlying = false;
    this.HP = this.HPArray[this.type - 1];
    this.enemy.className = 'enemy' + this.type
    clearInterval(this.enemy.timer);
}

/*
 敌机的属性
 left top 值
 isFlying 是否在飞行
 HP   敌机的生命值
 敌机页面元素 element
 //拓展  你要想生成 3种不同类型的敌机 传参
 // 参数一 敌机的类型 [参数二 敌机初始声明 参数三 传入敌机爆炸的图片（更好的方法是改变classname）]

 功能 敌机起飞
 0.初始化敌机将敌机加载到页面中待命
 1. 起飞一架敌机
 2. 飞机的移动
 3.当满足一些特殊条件时（当敌机废除屏幕，和被子弹打爆） 敌机的回收
 */
