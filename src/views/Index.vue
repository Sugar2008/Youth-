<template>
  <div v-if="data">
    <my-header />
    <div class="middle">
      <div class="middleL">
        <!-- 搜索 -->
        <div class="middleL1">
          <h3>搜索</h3>
          <div class="search">
            <el-autocomplete
              popper-class="my-autocomplete"
              v-model="state"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
            >
              <i
                class="el-icon-edit el-input__icon"
                slot="suffix"
                @click="handleIconClick"
              >
              </i>
              <template slot-scope="{ item }">
                <div class="name">{{ item.value }}</div>
                <span class="addr">{{ item.address }}</span>
              </template>
            </el-autocomplete>
          </div>
        </div>
        <!-- 音乐 -->
        <div class="middleL2">
          <h3>我的音乐</h3>
          <div class="music">
            <dl>
              <dt class="art">
                <img src="../assets/img/index/avatar.jpg" alt="" />
              </dt>
              <dd class="icon-song">
                <span></span>
                我很快乐
              </dd>
              <dd class="icon-artist">
                <span></span>
                歌手：刘惜君
              </dd>
              <dd class="icon-album">
                <span></span>
                专辑：《我很快乐》
              </dd>
              <dd class="icon-like">
                <span></span>
                喜欢
              </dd>
              <dd class="icon-music">
                <audio src="../assets/let_it_go.mp3" controls></audio>
              </dd>
            </dl>
          </div>
        </div>
        <!-- 标签 -->
        <div class="middleL4">
          <h3>全部标签</h3>
          <div class="tags">
            <ul>
              <a
                href="#"
                class="tag-link-20 tag-link-position-1"
                title="1个话题"
                style="font-size: 8pt"
                >人像</a
              >
              <a
                href="#"
                class="tag-link-7 tag-link-position-2"
                title="1个话题"
                style="font-size: 8pt"
                >假如</a
              >
              <a
                href="#"
                class="tag-link-27 tag-link-position-3"
                title="6个话题"
                style="font-size: 22pt"
                >可爱</a
              >
              <a
                href="#"
                class="tag-link-33 tag-link-position-4"
                title="1个话题"
                style="font-size: 8pt"
                >吊带衫</a
              >
              <a
                href="#"
                class="tag-link-28 tag-link-position-5"
                title="2个话题"
                style="font-size: 12.581818181818pt"
                >唯美</a
              >
              <a
                href="#"
                class="tag-link-14 tag-link-position-6"
                title="2个话题"
                style="font-size: 12.581818181818pt"
                >夏天</a
              >
              <a
                href="#"
                class="tag-link-9 tag-link-position-7"
                title="5个话题"
                style="font-size: 20.218181818182pt"
                >男神</a
              >
              <a
                href="#"
                class="tag-link-18 tag-link-position-8"
                title="4个话题"
                style="font-size: 18.181818181818pt"
                >小清新</a
              >
              <a
                href="#"
                class="tag-link-15 tag-link-position-9"
                title="1个话题"
                style="font-size: 8pt"
                >少男</a
              >
              <a
                href="#"
                class="tag-link-25 tag-link-position-10"
                title="3个话题"
                style="font-size: 15.636363636364pt"
                >帽子</a
              >
              <a
                href="#"
                class="tag-link-34 tag-link-position-11"
                title="1个话题"
                style="font-size: 8pt"
                >扎辫</a
              >
              <a
                href="#"
                class="tag-link-16 tag-link-position-12"
                title="1个话题"
                style="font-size: 8pt"
                >摄影</a
              >
              <a
                href="#"
                class="tag-link-6 tag-link-position-13"
                title="1个话题"
                style="font-size: 8pt"
                >散场</a
              >
              <a
                href="#"
                class="tag-link-12 tag-link-position-14"
                title="2个话题"
                style="font-size: 12.581818181818pt"
                >宁静的夏天</a
              >
              <a
                href="#"
                class="tag-link-21 tag-link-position-15"
                title="1个话题"
                style="font-size: 8pt"
                >文艺范</a
              >
              <a
                href="#"
                class="tag-link-17 tag-link-position-16"
                title="1个话题"
                style="font-size: 8pt"
                >梁静茹</a
              >
              <a
                href="http://www.lmlblog.com/winter/xqsb/"
                class="tag-link-19 tag-link-position-17"
                title="1个话题"
                style="font-size: 8pt"
                >爱生活</a
              >
              <a
                href="#"
                class="tag-link-5 tag-link-position-18"
                title="1个话题"
                style="font-size: 8pt"
                >流年</a
              >
              <a
                href="#"
                class="tag-link-11 tag-link-position-19"
                title="6个话题"
                style="font-size: 22pt"
                >清新</a
              >
              <a
                href="#"
                class="tag-link-31 tag-link-position-20"
                title="1个话题"
                style="font-size: 8pt"
                >游泳</a
              >
              <a
                href="#"
                class="tag-link-32 tag-link-position-21"
                title="1个话题"
                style="font-size: 8pt"
                >沐浴阳光</a
              >
              <a
                href="#"
                class="tag-link-10 tag-link-position-22"
                title="1个话题"
                style="font-size: 8pt"
                >白色</a
              >
              <a
                href="#"
                class="tag-link-22 tag-link-position-23"
                title="1个话题"
                style="font-size: 8pt"
                >眼睛</a
              >
              <a
                href="#"
                class="tag-link-24 tag-link-position-24"
                title="4个话题"
                style="font-size: 18.181818181818pt"
                >短发</a
              >
              <a
                href="#"
                class="tag-link-23 tag-link-position-25"
                title="1个话题"
                style="font-size: 8pt"
                >穿搭</a
              >
              <a
                href="#"
                class="tag-link-29 tag-link-position-26"
                title="1个话题"
                style="font-size: 8pt"
                >篮球</a
              >
              <a
                href="#"
                class="tag-link-35 tag-link-position-27"
                title="1个话题"
                style="font-size: 8pt"
                >红色</a
              >
              <a
                href="#"
                class="tag-link-13 tag-link-position-28"
                title="1个话题"
                style="font-size: 8pt"
                >萌</a
              >
              <a
                href="#"
                class="tag-link-26 tag-link-position-29"
                title="1个话题"
                style="font-size: 8pt"
                >运动</a
              >
              <a
                href="#"
                class="tag-link-30 tag-link-position-30"
                title="1个话题"
                style="font-size: 8pt"
                >长发</a
              >
              <a
                href="#"
                class="tag-link-4 tag-link-position-31"
                title="2个话题"
                style="font-size: 12.581818181818pt"
                >青春</a
              >
            </ul>
          </div>
        </div>
        <!-- 排行榜 -->
        <div class="middleL5">
          <h3>排行榜</h3>
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="周排行" name="first" class="week">
              <a>幸福就是简简单单</a>
              <a>从今天起我要做一个幸福的人</a>
              <a>全方位关爱你的生活</a>
              <a>全方位关爱你的生活</a>
              <a>全方位关爱你的生活</a>
              <a>全方位关爱你的生活</a>
              <a>全方位关爱你的生活</a>
              <a>全方位关爱你的生活</a>
            </el-tab-pane>
            <el-tab-pane label="月排行" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="总排行" name="third">角色管理</el-tab-pane>
          </el-tabs>
        </div>
        <!-- 相框 -->
        <div class="middleL3">
          <div class="photo">
            <div class="pin"></div>
            <div id="float" class="pimage">
              <a href="">
                <img src="../assets/img/index/middleL/photo.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="middleR">
        <div class="middleR1">
          <swiper
            ref="swiper"
            @mouseover.native="stopSwiper"
            @mouseout.native="startSwiper"
            :options="swiperOption"
          >
            <swiper-slide>
              <img src="../assets/img/index/banner5.jpg" alt="" />
              <div>沐浴阳光，蝉鸣渐止，不思不念，不悔不伤。</div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/img/index/banner4.jpg" alt="" />
              <div>花开不败。时光清宁，光阴流转，与你共眠，岁月温暖。</div>
            </swiper-slide>
            <swiper-slide>
              <img src="../assets/img/index/banner3.jpg" alt="" />
              <div>生死不晓，往事成说，执吾之手，与吾赴老。</div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="middleR2">
          <div class="blogList" v-for="x in data.data" :key="x.bid">
            <div class="blogWords">
              <div class="blogInfo">
                <div class="blogInfoL">
                  <!-- 头像 -->
                  <div class="avater">
                    <a href="">
                      <img
                        src="../assets/img/index/middleR2/avatar.jpg"
                        alt=""
                      />
                      <i></i>
                    </a>
                  </div>
                  <!-- 作者信息 -->
                  <div class="name">
                    <a href="">
                      <font>{{ x.nickname }}</font>
                    </a>
                    <span class="mark lv">Lv.{{ x.lv }}</span>
                    <span class="mark vip">VIP {{ x.VIP }}</span>
                    <br />
                    <p>{{ x.create_time }}</p>
                  </div>
                </div>
                <div class="blogInfoR">
                  <div @click="goDetail(x.bid)">
                    <i class="el-icon-more-outline"></i>
                  </div>
                </div>
              </div>
              <div class="blogContent">
                <p>
                  {{ x.article }}
                </p>
              </div>
              <div class="blogImage">
                <img :src="x.img" alt="" />
                <!-- <img :src="x.img" alt="" /> -->
              </div>
              <div class="blogBar">
                <div class="bar">
                  <div>
                    <img src="../assets/img/index/middleR2/like.png" alt="" />
                    <span>{{ x.like }}</span>
                  </div>
                  <div>
                    <img
                      src="../assets/img/index/middleR2/comment.png"
                      alt=""
                    />
                    <span>{{ x.comment }}</span>
                  </div>
                  <div>
                    <img
                      src="../assets/img/index/middleR2/collect.png"
                      alt=""
                    />
                    <span>{{ x.collection }}</span>
                  </div>
                  <div>
                    <img src="../assets/img/index/middleR2/send.png" alt="" />
                    <span>{{ x.forward }}</span>
                  </div>
                </div>
                <div class="tag">
                  <a href="">{{ x.tag }}</a>
                </div>
              </div>
              <div class="blogVisitor">
                <a href="">
                  <img src="../assets/img/index/middleR2/avatar.jpg" alt="" />
                </a>
                <a href="">
                  <img src="../assets/img/index/middleR2/avatar.jpg" alt="" />
                </a>
                <a href="">
                  <img src="../assets/img/index/middleR2/avatar.jpg" alt="" />
                </a>
              </div>
            </div>
          </div>
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
import MyFooter from "@/components/MyFooter.vue";
import MyFooyer1 from "@/components/MyFooyer1.vue";
export default {
  components: { MyHeader, MyFooter, MyFooyer1 },
  data() {
    return {
      data: null,
      restaurants: [],
      state: "",
      activeName: "first",
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 3000,
          // 用户操作后 让自动滚动失效:  假
          disableOnInteraction: false,
        },
      },
    };
  },
  mounted() {
    this.getDate();
    this.restaurants = this.loadAll();
  },
  methods: {
    getDate() {
      var url = "http://127.0.0.1:3000/v1/blog/infos";
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
        console.log(res.data.data[0].bid);
      });
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    handleIconClick(ev) {
      console.log(ev);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    stopSwiper() {
      // alert('鼠标进入')
      // 调用 swiper 组件中的 autoplay 的 stop方法
      // 问题: 如何得到 swiper 组件的引用??
      // 做法: ref属性, 可以通过组件的ref属性 把一个变量和组件捆绑在一起
      // ref: reference缩写. 引用
      // console.log("$refs:", this.$refs);

      // 此层级 只能自己到后台查看
      this.$refs.swiper.$swiper.autoplay.stop();
    },
    startSwiper() {
      // alert('鼠标离开')
      this.$refs.swiper.$swiper.autoplay.start();
    },
    // 用于编程式跳转
    goDetail(index) {
      // const bid = this.href[1];
      // console.log("bid:", bid);b
      // console.log(index);
      // this.$router.push({ path: "/blogdetail", query: { bid: index } });
      this.$router.push(`/blogdetail?bid=${index}`);
    },
  },
};
</script>
<style scoped src="../assets/css/index.css"></style>
<style scoped src="../assets/css/ind_middleL.css"></style>
<style scoped src="../assets/css/ind_middleR.css"></style>
<style lang="scss">
// 轮播图
.swiper-slide {
  position: relative;
}
.swiper-slide div {
  height: 35px;
  line-height: 35px;
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 3px;
  color: #fff;
  font-size: 16px;
  padding-left: 10px;
  font-family: "Lucida Sans Unicode", "Lucida Grande", Arial, Helvetica,
    sans-serif;
  background-image: linear-gradient(
    to right,
    rgba(51, 51, 51, 0.3),
    rgba(51, 51, 51, 0.1)
  );
}
.swiper-container-horizontal > .swiper-pagination-bullets {
  text-align: right;
  bottom: 15px;
  left: -15px;
}
.swiper-pagination-bullet {
  width: 15px;
  height: 5px;
  color: orangered;
  border-radius: 0;
}
.el-tabs__header {
  margin: 0;
}
// 排行榜
.el-tabs__nav {
  width: 360px;
  display: flex;
  text-align: center;
}
.el-tabs__item {
  width: 120px;
}
</style>
