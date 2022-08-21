<template>
  <div class="my-header">
    <header class="top container2">
      <div
        class="pop left animated cardInLeft"
        data-easein="cardInLeft"
        data-easeout="cardOutLeft"
        id="pop7"
        v-if="ShowHiddenL"
        @click.stop=""
      >
        <div class="arrow"></div>
        <div class="pinner">
          <div class="pcontent">
            <p>
              一个人旅行，不理会繁杂的琐事，自由自在地，去体验一个城市，一段故事，留下一片欢笑。
            </p>
          </div>
        </div>
      </div>
      <div
        class="pop right animated cardInRight"
        data-easein="cardInRight"
        data-easeout="cardOutRight"
        id="pop6"
        v-if="ShowHiddenR"
        @click.stop=""
      >
        <div class="arrow"></div>
        <div class="pinner">
          <div class="pcontent">
            <p>欠自己的旅行，终有一天，要还给自己。</p>
          </div>
        </div>
      </div>
      <img
        src="../assets/img/header/arrow1.png"
        alt=""
        class="icon icon1"
        @click.stop="ShowHiddenL = !ShowHiddenL"
      />
      <img
        src="../assets/img/header/arrow1.png"
        alt=""
        class="icon icon2"
        @click.stop="ShowHiddenR = !ShowHiddenR"
      />

      <!-- 座右铭 -->
      <div class="quotes">
        <div class="text">
          <router-link to="/index/" class="logo">
            <img src="../assets/img/header/logo.png" alt="" />
            <div>Youth</div>
          </router-link>
          <!-- 时光 · 记录 -->
        </div>
        <p>
          一生至少该有一次，为了某个人而忘了自己，不求有结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇到你。(再美的回忆还是会淡忘，只能让相片定格那瞬间。)
        </p>
        <div class="flower">
          <a href="#" class="make">咔嚓</a>
          <div class="mess">
            <ul class="reset">
              <li
                style="
                  transform: rotate(12deg);
                  z-index: 4;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/1.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(-5deg);
                  z-index: 3;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/2.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(0deg);
                  z-index: 12;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/3.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(17deg);
                  z-index: 7;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/4.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(13deg);
                  z-index: 8;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/5.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(-7deg);
                  z-index: 12;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/6.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(19deg);
                  z-index: 11;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/7.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(6deg);
                  z-index: 15;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/9.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="transform: rotate(9deg); z-index: 3; top: 0px; left: 0px"
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/10.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(12deg);
                  z-index: 10;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/12.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(-16deg);
                  z-index: 13;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/13.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(6deg);
                  z-index: 11;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/14.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="
                  transform: rotate(-3deg);
                  z-index: 5;
                  top: 0px;
                  left: 0px;
                "
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/15.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
              <li
                style="transform: rotate(5deg); z-index: 9; top: 0px; left: 0px"
              >
                <a class="fancybox" data-fancybox-group="gallery" href=""
                  ><img
                    src="../assets/img/header/16.jpg"
                    alt="小清新个人博客主页"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 导航栏 -->
      <div class="nav">
        <ul>
          <li><router-link to="/index/">首页</router-link></li>
          <li><a href="">慢生活</a></li>
          <li><router-link to="/photo/">图片库</router-link></li>
          <li><a href="">杂货铺</a></li>
          <li><router-link to="/writeblog">写博客</router-link></li>
          <li><router-link to="/about/">关于我们</router-link></li>
        </ul>
        <ul v-if="username">
          <li>欢迎：{{ username }}</li>
          <li><span @click="updateUname(null)">退出</span></li>
        </ul>
        <ul v-else>
          <li>
            <router-link to="/login/">登录</router-link>
          </li>
          <li>
            <router-link to="/register/">注册</router-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["username"]),
  },
  data() {
    return {
      disabled: false,
      ShowHiddenL: false,
      ShowHiddenR: false,
    };
  },
  mounted() {
    document.addEventListener("click", this.HiddenClick);
  },
  methods: {
    ...mapMutations(["updateUname"]),
    // 点击页面事件 隐藏需要隐藏的区域
    HiddenClick() {
      this.ShowHidden = false;
    },
    // 点击列表内，选中内容，并隐藏
    ConBtn(val) {
      alert("内容" + val);
      this.ShowHidden = false;
    },
  },
};
</script>

<style lang="scss"></style>
