import EventEmitter from "./EventEmitter.js";

export default class Sizes extends EventEmitter {
  constructor(svelteListener) {
    super();

    if (svelteListener) {
      //test
      this.resizeHandler = this.getResizeHandler.bind(this);
    } else {
      // Setup
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      // Resize event
      window.addEventListener("resize", () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.pixelRatio = Math.min(window.devicePixelRatio, 2);

        this.trigger("resize");
      });
    }
  }

  getResizeHandler() {
    var _self = this;
    console.log("external listener ", this);
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    this.trigger("resize");
  }
}
