const CarGame = {
    stage: 
      new createjs.Stage('gameView'),
    container: new createjs.Container(),
    // 将canvas 绘图api-> 面向对象api
    image1: 
      new createjs.Bitmap('./img/bg.png'),
    image2: 
      new createjs.Bitmap('./img/bg.png'),
    bgSpeed: 4,
    tempImgArray: [],
    handleTick (image1, image2) {
      image1.y += this.bgSpeed;
      image2.y += this.bgSpeed;
      if (Math.abs(image1.y) >=
       this.stage.canvas.height) {
         image1.y = 0;
         image2.y = -this.stage.canvas.height;
       }
    },
    tempRedArray: [],
    handleHit (item) {
      let pt = item.localToLocal(
        Math.random()*100,
         Math.random()*100,
          this.carBody);
      
      if (this.carBody.hitTest(pt.x, pt.y)) {
        item.visible = false;
        if (/red.png/.test(item.image.src)) {
          this.tempRedArray.push(item.id);
          this.redText.text = `
            已抢到红包个数：${this.tempRedArray.length}
          `;
        } else {
          
        }
      }
    },
    createImages () {
      let index = parseInt(Math.random()*2);
      let item = this.tempImgArray[index].clone();
      let roadDom = document.getElementById('road');
      let minX = Math.ceil(roadDom.offsetLeft * (750 / document.body.clientWidth));
      let maxX = minX * 3;
      item.x = minX +(maxX-minX)*Math.random()*0.72;
      item.y = -150;
      this.container.addChild(item);
      createjs.Tween.get(item).to({
        y: this.stage.canvas.height
      }, 2500)
      .addEventListener('change', () => {
        this.handleHit(item);
        if (item.y >= this.stage.canvas.height) {
          this.createImages();
        }
      })
    },
    init() {
      //路
      let roadHtml = 
        $('<div id="road"></div>');
      $('body').append(roadHtml);

      // redtext
      this.redText =
       new createjs.Text(`已抢到红包个数:0`,
        "28px Arial", "#ff7700");
      this.redText.x = 50;
      this.redText.y = 10;

      // car
      let carImg = "./img/player.png";
      this.carBody = new createjs.Bitmap(carImg);
      this.carBody.scaleX = 0.9;
      this.carBody.scaleY = 0.9;
      this.carBody.x = 324;
      this.carBody.y = 
        this.stage.canvas.height - 230;
      
      //红包 炸弹
      let redBitMap =
       new createjs.Bitmap('./img/red.png');
      let boomBitMap = 
       new createjs.Bitmap('./img/boom.png');
      this.tempImgArray.push(
        redBitMap, boomBitMap);

      this.image2.y = - this.stage.canvas.height;
      // 加载资源queue
      this.queue = 
        new createjs.LoadQueue();
      this.queue.installPlugin(
        createjs.Sound);
      this.queue.loadManifest([
        {
          id: "bigBg",
          src: "./img/bg.png"
        },
        {
          id: "victory",
          src: "./mp3/victory.mp3"
        },
        {
          id: "sound",
          src: "./mp3/boom.mp3"
        }
      ])
      this.queue.on("progress", () => {
        $("#load-msg").text(
          `加载中${parseInt(this.queue.progress*100)}%...` 
        );
      });
      this.queue
        .addEventListener("complete", () => {
        $('#load-msg').hide();
        createjs.Sound.play('victory');
        this.stage.addChild(this.container);
        this.container.addChild(this.image1);
        this.container.addChild(this.image2);
        this.container.addChild(this.redText);
        this.container.addChild(this.carBody);
        this.createImages();
        createjs.Ticker
          .addEventListener('tick', () => {
          this.handleTick(this.image1, this.image2);
          this.stage.update();
        })
        createjs.Ticker.setFPS(60);
      })
    }
  }
