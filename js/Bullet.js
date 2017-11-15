/**
 * Created by newuser on 2017/6/23.
 */
function Bullet() {
    this.left = -100;
    this.top = -100; //一开始将子弹藏起来
    // this.isReset = false;
    this.isFlying = false; //子弹待命中
    this.power = 1;
    this.bullet = document.createElement('div');
    this.init();
}

Bullet.prototype.init = function () { //将对象实例展现在 UI页面上
    this.bullet.className = 'bullet';
    this.bullet.style.left = this.left + 'px';
    this.bullet.style.top = this.top + 'px';
    document.body.appendChild(this.bullet)
}

/*
子弹的属性
  left top 值
  isFlying 是否在飞行
  子弹页面元素 element
功能 子弹被飞机打出
 0.初始化子弹将子弹加载到页面中待命
 1. 打出子弹
 2.子弹移动
 3.当满足一些特殊条件时（子弹飞出屏幕） 子弹的回收
*/

Bullet.prototype.shoot = function () { //
    var that = this;
    this.isFlying = true;
    // console.log(this.power)
    this.bullet.timer = setInterval(function () {
        that.refresh();
    },30)
}

Bullet.prototype.refresh = function () {

   if(this.isFlying === true){ // true代表被飞机射出的子弹，子弹需要向上移动 ，flase等待飞机的射出

        if (this.bullet.offsetTop < -10){
            //TODO:清空 重置
            this.reset()
        }else {
            this.bullet.style.top = this.bullet.offsetTop - 2 + 'px'
        }
    }

}

Bullet.prototype.reset = function () {
    this.bullet.style.left = this.left + 'px';
    this.bullet.style.top = this.top + 'px';
    this.isFlying = false;
    clearInterval(this.bullet.timer);
    // document.body.removeChild(this.bullet);
}
