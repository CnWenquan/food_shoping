function Enlarge(smallBox , bigBox , move , img){
			this.init(smallBox , bigBox , move , img);
		}
		Enlarge.prototype =  {
			init: function(smallBox , bigBox , move , img) {
				var that = this;
				this.smallBox = smallBox ;
				this.bigBox  = bigBox ; 
				this.move = move ;
				this.img = img ;
				this.scale1 = this.img.width / this.smallBox.offsetWidth;
				this.scale2 = this.img.height / this.smallBox.offsetHeight;
				this.move.style.width  = this.smallBox.offsetWidth / this.scale1 + 'px';
				this.move.style.height = this.smallBox.offsetHeight / this.scale2 + 'px';
				this.smallBox.onmousemove = function(event) {
					that.goMove(event);
				};
				this.smallBox.onmouseout = function() {
					that.move.style.display = 'none';
					that.bigBox.style.display = 'none';
				};
			},
			goMove : function(event) {
				var event = window.event || event;
				var x = event.clientX ;
				var y = event.clientY ;
				this.move.style.display = this.bigBox.style.display = 'block';
				x = x - this.smallBox.getBoundingClientRect().left - this.move.offsetWidth/2;
				y =  y - this.smallBox.getBoundingClientRect().top -  this.move.offsetHeight/2;
				if( x < 0) {
					x = 0;
				} else if ( x > this.smallBox.offsetWidth - this.move.offsetWidth) {
					x =  this.smallBox.offsetWidth - this.move.offsetWidth;
				}
				if ( y < 0 ) {
					y = 0;
				} else if ( y > this.smallBox.offsetHeight - this.move.offsetHeight) {
					y = this.smallBox.offsetHeight - this.move.offsetHeight;
				}
				this.move.style.left = x + 'px';
				this.move.style.top = y + 'px';
				this.bigBox.scrollLeft = this.scale1 * x;
				this.bigBox.scrollTop = this.scale2 * y;
			} 
		};