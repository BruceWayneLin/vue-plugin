<template>
  <div
    id="gameFrame"
    :class="{'fullSize': sizeW, '': !sizeW}"
    v-if="url"
  >
    <div 
      class="game-wrap"
    >
      <iframe
        id="gameIframe"
        :src="url"
        allowfullscreen="true"
        :width="width"
        :height="height"
        :class="{'hugeSize': sizeW, '': !sizeW}"
      />
    </div>
    <div>
      <div
        id="special"
        class="container-fluid bg-dark"
      >
        <div class="mr-4">
          <Fullscreen
            width="25px"
            style="cursor:pointer"
            @click="changeSize()"
          />
        </div>
        <div class="mr-4">
          <Close
            @click="toClose()"
            style="cursor:pointer"
            width="25px"
          />
        </div>
        <div class="mr-4" v-if="!favor">
          <Star
            @click="toggleFavorite()"
            style="cursor:pointer"
            width="25px"
          />
        </div>
        <div class="mr-4" v-else>
          <StarH
            @click="toggleFavorite()"
            style="cursor:pointer"
            width="25px"
          />
        </div>
        <div class="mr-4 switch">
          <span class="mode-text text-white pr-2" v-if="!enabledParent">
            {{demo}}
          </span>
          <ToggleButton v-model="enabledParent" :sync="true" @change="toChangeMode"/>
          <span class="mode-text text-white pr-2" v-if="enabledParent">
            {{real}}
          </span>
          {{detect}}
        </div>
      </div>
    </div>
  </div>
  <div v-else
    id="gameFrame"
  >
    <div class="noGameDiv">
       <svg version="1.1"
              xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
              x="0px" y="0px" width="619.2px" height="292.2px" viewBox="0 0 619.2 292.2" enable-background="new 0 0 619.2 292.2"
              xml:space="preserve">
            <defs>
            </defs>
            <g>
        
          <path id="path2995_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M2.1,92.1h45v-30h45.5v-61h32.5v93h-46v30h-77V92.1z"/>
        
          <path id="path2997_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M145.1,80.1h77v-32h-77V80.1z"/>
        <g>
          
            <path id="path2999_1_" sodipodi:nodetypes="ccccccccccccccc" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
            M366.1,15.1h-91v-14h-32v59h32v-13h21v45h-53v32h84v-78h39V15.1z"/>
          <g display="none">
            
              <path id="path3001_1_" sodipodi:nodetypes="ccccc" inkscape:connector-curvature="0" display="inline" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
              M366.8,49.5l0,31.1h-15.5l0-31.1H366.8z"/>
            
              <path id="path3001-0_1_" sodipodi:nodetypes="ccccc" inkscape:connector-curvature="0" display="inline" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
              M347.6,49.5v31.1h-15.9V49.5H347.6z"/>
          </g>
          <g>
            
              <rect x="330.1" y="49.1" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" width="16.5" height="32"/>
            
              <rect x="349.6" y="49.1" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" width="16.5" height="32"/>
          </g>
        </g>
        
          <path id="path3046_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M392.1,48.1h77v32h-77V48.1z"/>
        
          <path id="path3048_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M494.6,1.6h32.5v90.5h59v-30h32v62H494.6V1.6z"/>
      </g>
      <g>
        
          <path id="path3050_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M125.1,167.1v93h-46v31h-78v-33h46.6v-30h45.4v-61H125.1z"/>
        
          <path id="path3052_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M145.1,215.1h77v31h-77V215.1z"/>
        <g>
          
            <path id="path3054_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
            M243.1,167.6h108v32h-108V167.6z"/>
          
            <path id="path3058_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
            M243.1,208.1h108v83h-32v-52h-76V208.1z"/>
        </g>
        
          <path id="path3060_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M364.1,198.1v32h43v61h32v-91h43v-32h-75v30H364.1z"/>
        
          <path id="path3062_1_" inkscape:connector-curvature="0" fill="none" stroke="#FF4C81" stroke-width="2.1835" stroke-linecap="square" d="
          M617.6,168.1v123H585l0.3-91h-91.7v-32H617.6z"/>
      </g>
      <g>
        <circle fill="none" stroke="#FF4C81" stroke-width="2.183" stroke-linecap="square" cx="184.6" cy="143.6" r="32.5"/>
        <g>
          <path fill="none" stroke="#FF4C81" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M196,127.6
            c5.2,3.6,8.6,9.6,8.6,16.4c0,11-9,20-20,20c-11,0-20-9-20-20c0-6.8,3.4-12.8,8.5-16.4"/>
          
            <line fill="none" stroke="#FF4C81" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" x1="184.6" y1="119.6" x2="184.6" y2="135.6"/>
        </g>
      </g>
      <g>
        <g>
          <path display="none" fill="none" stroke="#FF4C81" stroke-width="2.183" d="M245.8,133.1h6.8l8.9,13.6v-13.6h6.9v24.6h-6.9
            l-8.8-13.5v13.5h-6.9V133.1z"/>
          <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M245.8,133.1h6.8l7.9,9.6v-9.6h7.9v24.6h-6.9l-7.8-9.5v9.5h-7.9V133.1
            z"/>
          <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M292.6,136c-2.1-2.2-5.2-3.3-9.1-3.3c-3.8,0-6.8,1.1-9,3.4
            c-2.1,2.2-3.2,5.4-3.2,9.4c0,2.9,0.5,5.3,1.6,7.2c1.1,1.9,2.5,3.3,4.2,4.2c1.7,0.9,3.9,1.3,6.6,1.3c2.6,0,4.8-0.5,6.6-1.5
            s3.1-2.5,4-4.3s1.4-4.2,1.4-7.1C295.8,141.2,294.7,138.2,292.6,136z M285.7,151.2c-2.3,0.4-5.7-1.9-6.3-5.2
            c-0.6-3.3-0.1-6.3,2.2-6.7s5.7,1.9,6.3,5.2S288,150.8,285.7,151.2z"/>
        </g>
        <path display="none" fill="none" stroke="#FF4C81" stroke-width="2.183" d="M323.6,148.8v-5.1h11.3v10.5c-2.2,1.5-4.1,2.6-5.7,3.1
          c-1.7,0.6-3.6,0.8-5.9,0.8c-2.8,0-5.1-0.5-6.9-1.5c-1.8-1-3.1-2.5-4.1-4.4s-1.5-4.2-1.5-6.8c0-2.7,0.5-5,1.6-7
          c1.1-2,2.6-3.5,4.7-4.5c1.6-0.8,3.8-1.2,6.5-1.2c2.6,0,4.6,0.2,5.9,0.7c1.3,0.5,2.4,1.3,3.2,2.3c0.9,1,1.5,2.3,1.9,3.9l-7,1.3
          c-0.3-0.9-0.8-1.6-1.5-2.1c-0.7-0.5-1.6-0.7-2.6-0.7c-1.6,0-2.9,0.6-3.8,1.7s-1.4,3-1.4,5.5c0,2.7,0.5,4.6,1.4,5.7
          c1,1.1,2.3,1.7,4,1.7c0.8,0,1.6-0.1,2.3-0.4c0.7-0.2,1.6-0.7,2.5-1.3v-2.3H323.6z"/>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M322.4,148.1l-0.1-6l12.6-0.1l0,15.7c0,0-10.8,0.4-13.8,0
          s-9.1-3.4-9.6-10.3c-0.5-6.9,3.3-14.4,11.3-15.7s12.2,3.6,12.2,3.6l-4.5,6c0,0-3.5-2.9-6-2.5s-4.4,2.6-4.7,4.9s1.3,5.4,2.4,6.3
          s5,0.7,5,0.7l0-2.7L322.4,148.1z"/>
        <polygon fill="none" stroke="#FF4C81" stroke-width="2.183" points="352.6,131.7 345.7,133.1 337,157.7 345.4,157.7 346.6,153.6 
          352.6,153.6 353.8,157.7 362.5,157.7 	"/>
        <polygon fill="none" stroke="#FF4C81" stroke-width="2.183" points="348.4,147.4 349.6,143.4 350.7,147.4 	"/>
        <polygon display="none" fill="none" stroke="#FF4C81" stroke-width="2.183" points="355.4,163.4 349.5,143.4 343.7,163.4 	"/>
        <path display="none" fill="none" stroke="#FF4C81" stroke-width="2.183" d="M364.7,133.1h9.6l3.7,15l3.7-15h9.6v24.6h-6v-18.8
          l-4.6,18.8h-5.4l-4.6-18.8v18.8h-6V133.1z"/>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M367.7,132.3h8.6l2.7,9.6l3.3-9.6h8.6l3.4,25.4l-8.2,0l-2-9.6l-3,9.6
          h-4.6l-3.1-8.6l-1.6,8.6h-8.5L367.7,132.3z"/>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M395.9,133.1h19.5v6h-11v2.6h10.1v6.8l-10.1,0v2.6l11.4,0v6.5h-19.9
          V133.1z"/>
      </g>
      <g>
        <g>
          <path display="none" fill="none" stroke="#FF4C81" stroke-width="2.183" d="M474.6,133.1h6.8l8.9,13.6v-13.6h6.9v24.6h-6.9
            l-8.8-13.5v13.5h-6.9V133.1z"/>
          <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M474.6,133.1h6.8l7.9,9.6v-9.6h7.9v24.6h-6.9l-7.8-9.5v9.5h-7.9V133.1
            z"/>
          <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M521.3,136c-2.1-2.2-5.2-3.3-9.1-3.3c-3.8,0-6.8,1.1-9,3.4
            c-2.1,2.2-3.2,5.4-3.2,9.4c0,2.9,0.5,5.3,1.6,7.2c1.1,1.9,2.5,3.3,4.2,4.2c1.7,0.9,3.9,1.3,6.6,1.3c2.6,0,4.8-0.5,6.6-1.5
            s3.1-2.5,4-4.3s1.4-4.2,1.4-7.1C524.5,141.2,523.5,138.2,521.3,136z M514.5,151.2c-2.3,0.4-5.7-1.9-6.3-5.2
            c-0.6-3.3-0.1-6.3,2.2-6.7c2.3-0.4,5.7,1.9,6.3,5.2S516.8,150.8,514.5,151.2z"/>
        </g>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M542.9,133.5h7.1v16.4h11v7.4h-18.1V133.5z"/>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M565.1,133.5h7v23.8h-7V133.5z"/>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M576.8,133.5h17.5v6h-9.6v3.3h8.1v5.8h-8.1v8.8h-7.9V133.5z"/>
        <path display="none" fill="none" stroke="#FF4C81" stroke-width="2.183" d="M598.1,133.5h19v5.1h-11.9v3.8h11v4.9h-11v4.7h12.2v5.4
          h-19.3V133.5z"/>
        <path fill="none" stroke="#FF4C81" stroke-width="2.183" d="M597.8,133.1h19.5v6h-11v2.6h10.1v6.8l-10.1,0v2.6l11.4,0v6.5h-19.9
          V133.1z"/>
      </g>
      </svg>
    </div>
  </div>
</template>
<script>
import Fullscreen from "./images/Fullscreen.svg";
import Close from "./images/close.svg";
import Star from "./images/star.svg";
import StarH from "./images/star-h.svg";
import { ToggleButton } from 'vue-js-toggle-button'

export default {
  name:"GameFrame",
  props: {
    url: String,
    game: Object, 
    favorParent: Boolean,
    enabledParent: Boolean,
    logined: Boolean,
    real: {
      default: 'Real Mode', 
      type: String
    },
    demo: {
      default: 'Demo Mode', 
      type: String
    },
  },
  data(){
    return {
      height: "500px",
      width: "50%",
      sizeW: false,
      favor: false,
    };
  },
  components:{
    Fullscreen,
    Close, 
    Star,
    StarH,
    ToggleButton
  },
  computed: {
    detect() {
      this.favor = this.favorParent;
    },
  },
  methods: {
    toChangeMode() {
      this.$emit('playMode', this.enabledParent);
    },
    changeSize() {
      this.sizeW = !this.sizeW;
      document.getElementById("gameIframe").classList.add("hugeSize");
      this.width = "100vw";
      this.height = "100vh";
    },
    toClose() {
      this.url = '';
    },
    toggleFavorite(event) {
      this.$emit('addFavor', this.favor);
    }
  },
  mounted(){
    this.detect
  }
};
</script>
<style lang="scss" scoped>
  #gameIframe {
    top: 0;
    left: 0;
    z-index: 1;
    position:inherit!important;
    min-height: 500px;
    margin: auto;
    display: block;
    width: 100%;
    height: 500px;
  }
  .fullSize {
    #special {
      position: absolute!important;
      bottom: 0!important;
      left: 0!important;
    } 
  }
  #gameFrame {
    max-width: 1300px;
    margin: auto;
  }

  #gameIframe.hugeSize {
    min-width: 100vw !important;
    position: fixed!important;
    min-height: 90vh!important;
    z-index: 214748364;
  }

  #special  {
    display: flex;
    justify-content: flex-end;
    border-radius: 0.5rem;
    background: center center / cover rgb(15, 33, 46);
    color: rgb(213, 220, 235);
    padding: 0px;
    overflow: hidden;
    padding: 15px;
    margin-top: 5px;
  }
  .switch {
  }
  .vue-switcher.vue-switcher-theme--default.vue-switcher-color--default {
    div {
        background-color: #31153e!important;

        &:after {
            background-color: #fff!important;
        }
    }
  }
  .mode-text {
    position:relative;
    top: 2px;
  }
  .noGameDiv {
    margin: auto;
    text-align: center;
    padding: 5% 0px;
  }
  iframe, .noGameDiv {
    border: 2px solid #84519c;
    border-radius: 12px;
    -webkit-border-radius:12px;
    -moz-border-radius:12px;
    -ms-border-radius:12px;
  }
 
</style>