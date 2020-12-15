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
          <span class="mode-text text-white pr-2" v-if="enabled">
            {{real}}
          </span>
          <span class="mode-text text-white pr-2" v-else>
            {{demo}}
          </span>
          <switches v-model="enabled">
          </switches>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import Fullscreen from "./images/Fullscreen.svg";
import Close from "./images/close.svg";
import Star from "./images/star.svg";
import StarH from "./images/star-h.svg";
import Switches from 'vue-switches';

export default {
  name:"GameFrame",
  props: {
    url: String,
    game: Object, 
    favor: Boolean,
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
      enabled: true
    };
  },
  components:{
    Fullscreen,
    Close, 
    Star,
    StarH,
    Switches
  },
  methods: {
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
    padding-top: 0.3rem;
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
    top: -2px;
  }
 
</style>