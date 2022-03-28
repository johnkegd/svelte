<script>
  import { onMount } from "svelte";
  let canvas;
  let innerWidth;
  let innerHeight;
  var particles = [];
  let ctx;

  onMount(() => {
    ctx = canvas.getContext("2d");
    let frame = requestAnimationFrame(loop);
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    function loop() {
      frame = requestAnimationFrame(loop);
      ctx.fillStyle = "rgba(0,0,0,0.5)";
      ctx.fillRect(0, 0, innerWidth, innerHeight);

      for (var i = 0; i < 20; i++) {
        particles.push(new Particle());
      }

      for (var i in particles) {
        particles[i].draw();
        particles[i].update();

        if (particles[i].life >= particles[i].lifemax) {
          delete particles[i];
        }
      }
    }
    return () => {
      cancelAnimationFrame(frame);
    };
  });

  class Particle {
    constructor() {
      this.x = Math.random() * innerWidth;
      this.y = Math.random() * innerHeight;
      this.vx = 0;
      this.vy = 0;
      this.ax = 0;
      this.ay = 0;
      this.life = 0;
      this.lifemax = 75;
      this.gravity = 0;
      this.fade = 1;
      this.w = 3;
      this.h = 3;

      this.draw = function () {
        ctx.fillStyle = "rgba(255,255,255," + this.fade + ")";
        ctx.fillRect(this.x, this.y, this.w, this.h);
      };

      this.update = function () {
        this.w += 0.1;
        this.h += 0.1;
        this.vy += this.gravity;
        this.vx += this.ax;
        this.vy += this.ay;
        this.vx *= 0.91;
        this.vy *= 0.91;
        this.y += this.vy;
        this.x += this.vx;
        this.life++;

        if (this.y > innerHeight / 2 && this.x < innerWidth / 2) {
          this.vx += 1;
        }

        if (this.y < innerHeight / 2 && this.x < innerWidth / 2) {
          this.vy += 1;
        }

        if (this.y > innerHeight / 2 && this.x > innerWidth / 2) {
          this.vy -= 1;
        }

        if (this.y < innerHeight / 2 && this.x > innerWidth / 2) {
          this.vx -= 1;
        }

        let deltaX = this.x - innerWidth / 2;
        let deltaY = this.y - innerHeight / 2;

        if (Math.sqrt(deltaX ** 2 + deltaY ** 2) < 50) {
          this.fade -= 0.1;
          this.w -= 1;
          this.h -= 1;
        }
      };
    }
  }
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<canvas bind:this={canvas} />

<style>
  canvas {
    background-color: #000000;
  }
</style>
