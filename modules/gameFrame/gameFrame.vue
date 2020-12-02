<template>
  <div
    class="gameFrame"
    v-if="bool"
  >
    <div 
      class="game-wrap"
    >
      <iframe
        id="gameIframe"
        src="https://cdn.spinomenal.com/ExternalComponents/Game/play.html?partnerId=innovision&amp;gameToken=840356f228f8fa88&amp;gameCode=SlotMachine_ChestOfFortunes&amp;langCode=en_US&amp;platform=1&amp;HomeUrl=https%3a%2f%2ftrustdice.win&amp;configFile=ConfigTestV2-NormalGames.json&amp;isReal=false&amp;srvUrl=https%3a%2f%2frgs-ss-demo.spinomenal.com%2fapi"
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
        <div class="mr-2">
          <Fullscreen
            width="25px"
            @click="changeSize()"
          />
        </div>
        <div class="mr-2">
          <Close
            @click="toClose()"
            width="25px"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Fullscreen from "./images/Fullscreen.svg";
import Close from "./images/close.svg";

export default {
  name:"GameFrame",
  props: {
    url: String,
  },
  data(){
    return {
      height: "500px",
      width: "50%",
      sizeW: false,
      bool: true
    };
  },
  components:{
    Fullscreen,
    Close
  },
  methods: {
    changeSize() {
      document.getElementById("gameIframe").classList.add("hugeSize");
      this.width = "100vw";
      this.height = "100vh";
    },
    toClose() {
      this.bool = false;
    }
  },
  mounted(){
    document.addEventListener("keydown", function(event) {
      if(event.keyCode === 27){
        document.getElementById("gameIframe").classList.remove("hugeSize");
      }
    });
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
  .gameFrame {
    max-width: 1300px;
  }

  #gameIframe.hugeSize {
    min-width: 100vw !important;
    position: fixed!important;
    min-height: 100vh!important;
    z-index: 214748364;
  }
  #special  {
    display: flex;
    justify-content: flex-end;
  }
 
</style>