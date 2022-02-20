export class PseudoRandom {
    constructor(seed) {
      this.seed = seed;
      this.init = seed;
    }
    getNext(a = 45, c = 21, m = 67) {
      return (this.seed = (a * this.seed + c) % m);
    }
  
    reset() {
      this.seed = this.init;
    }
  } // LCPRNG