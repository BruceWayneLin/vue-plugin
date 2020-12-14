
import { events } from "../gameFrame/Events";
import GameFrame from "../gameFrame/gameFrame.vue";
var VueUi = require('@vue/ui')
import '@vue/ui/dist/vue-ui.css'
var lodash = require('lodash');
var output = lodash.without([1, 2, 3], 1);
console.log(output);

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
    Vue.use(VueUi);
  }
}

export default new Installer();


