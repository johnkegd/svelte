export default class Debug {
    constructor(dat) {
        this.active = window.location.hash === '#debug' || window.location.hash.includes("#debug");

        if (this.active) {
            this.ui = new dat.GUI();
        }
    }
}