
import { events } from "../gameFrame/Events";
import GameFrame from "../gameFrame/gameFrame.vue";
import Switches from 'vue-switches';

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
    Vue.use(Switches);
  }
}

export default new Installer();


