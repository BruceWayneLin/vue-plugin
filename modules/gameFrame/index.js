
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
    // Vue.prototype.$gameFrame = (options) => {
    //   events.$emit("gameFrame", options);
    // };
  }
}

export default new Installer();


