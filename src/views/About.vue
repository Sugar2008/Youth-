<template>
  <div>
    <my-header />
    <div class="about">
      <div class="video">
        <video src="../assets/promotionalVideo.mp4" loop muted autoplay></video>
      </div>
      <div class="contact">
        <h1>联系Youth</h1>
        <div>
          Youth邮箱：
          <span>yaoli990905@163.com</span>
        </div>
        <div>
          Youth电话：
          <span>17835448534</span>
        </div>
        <div>
          青少年守护专线：
          <span>400-9922-556</span>
        </div>
        <div>
          联系地址：
          <span>山西省晋中市平遥县</span>
        </div>
      </div>
      <div class="map">
        <div
          id="map"
          style="
            width: 100%;
            height: 400px;
            border: 3px soild black;
            margin-bottom: 10px;
          "
        ></div>
      </div>
      <div class="message">
        <h1>Youth留言</h1>
        <div class="m1">
          <span>昵称：</span>
          <input type="text" />
        </div>
        <div class="m2">
          <span>留言：</span>
          <textarea cols="60" rows="15"></textarea>
        </div>
      </div>
    </div>
    <my-fooyer-1 />
    <my-footer />
  </div>
</template>

<script>
import "../assets/css/scope.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import MyHeader from "@/components/MyHeader.vue";
import MyFooyer1 from "@/components/MyFooyer1.vue";
import MyFooter from "@/components/MyFooter.vue";
import AmapLoader from "@amap/amap-jsapi-loader";
export default {
  components: { MyHeader, MyFooyer1, MyFooter },
  mounted() {
    (window._AMapSecurityConfig = {
      securityJsCode: "51931793ddf06cd6115f799aa7ed9c2f",
    }),
      // 使用AMapLoader加载AMap对象，从而获取AMap实例
      AmapLoader.load({
        key: "365abf0f1d6f1c37db70c330a5706886",
        version: "2.0",
        plugins: ["AMap.ToolBar"],
      }).then((AMap) => {
        let map = new AMap.Map("map"); // 让地图在#div中显示
        map.addControl(new AMap.ToolBar());

        // let weather = new AMap.Map("map");
      });
  },
};
</script>
<style scoped src="../assets/css/about.css"></style>
<style lang="scss" scoped></style>
