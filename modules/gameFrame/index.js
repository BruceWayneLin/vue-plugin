
import { events } from "../gameFrame/Events";
import GameFrame from "../gameFrame/gameFrame.vue";

class Installer { 
  constructor() { 
  }
  install(Vue, options) {
    Vue.component("GameFrame", GameFrame);
    Vue.mixin({
      mounted() {
        console.log("Mounted!");
      }
    });
  }
}

export default new Installer();


