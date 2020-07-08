
    function Cycle(options) {
        Object.assign(this,options)
        this.percent = this.percent*(63/100)
    };
    Cycle.prototype = {
        contructor: Cycle,
        init: function(percent) {
            if(percent || percent=== 0)
            this.percent = percent*(63/100);
            //创建画布对象
            var html = "<canvas id='canvas_" + this.id + "' width='" + this.width + "' height='" + this.height + "'></canvas>";
            document.getElementById(this.id).innerHTML = html;
            this.setOptions()
            return this;
        },
        setOptions: function() {
            let canvas = document.getElementById('canvas_' + this.id);
            let context = canvas.getContext('2d');
            context.clearRect(0, 0, this.width, this.height);
            //开始绘画
            // context.beginPath();
            // context.lineWidth = this.border; // 画笔宽
            // context.strokeStyle = this.bgColor;  // 画笔颜色
            // context.arc(this.width / 2, this.height / 2, (this.width / 2 - this.border / 2), 0, 2 * Math.PI); // 画圆 背景
            // context.stroke(); // 描绘
            let deg = this.percent * 3.6 / 180 * Math.PI;  // 角度
            context.beginPath();
            context.lineWidth = this.border;
            context.strokeStyle = this.barColor;
            context.arc(this.width / 2, this.height / 2, (this.width / 2 - this.border / 2), 0 - Math.PI / 2, deg - Math.PI / 2);
            context.stroke();
        }
    }
   export{Cycle};
