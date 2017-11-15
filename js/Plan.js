/**
 * Created by newuser on 2017/6/23.
 */
function Plan() {
    this.oDiv = document.createElement('div');
    this.oDiv.className = 'plan'
    this.nX = 0;
    this.nY = 0;
    this.power = 1;
    this.init();
}
Plan.prototype.init = function () {
    document.body.appendChild(this.oDiv);
    var that = this;
    window.onmousemove = function (evt) {
        evt = evt || window.event;
        that.nX = evt.clientX;
        that.nY = evt.clientY;
        that.oDiv.style.left = that.nX - 33 + 'px'
        that.oDiv.style.top = that.nY - 40 + 'px'
    }
}
