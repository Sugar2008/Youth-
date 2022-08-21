<template>
  <div v-if="data">
    <!-- 头部 -->
    <my-header />
    <!-- 中间 -->
    <div class="detail" v-for="x in data.data" :key="x.lid">
      <!-- 详情左 -->
      <div class="detailL">
        <!-- 头像 -->
        <div class="avatar">
          <img src="../assets/img/blogdetail/avatar_2.png" alt="" />
        </div>
        <!-- 昵称 -->
        <div class="user">
          <span class="nick">{{ x.nickname }}</span>
          <span class="sex"><i class="el-icon-female"></i></span>
          <span class="lv">Lv.{{ x.lv }}</span>
          <span class="vip">VIP {{ x.VIP }}</span>
        </div>
        <!-- 关注私聊按钮 -->
        <div class="info">
          <span> <i class="el-icon-plus"></i> 关注 </span>
          <span> <i class="el-icon-position"></i> 私聊 </span>
        </div>
        <!-- 座右铭 -->
        <div class="motto">
          <h1>{{ x.motto_title }}</h1>
          <p>
            {{ x.motto_article }}
          </p>
        </div>
        <!-- 粉丝数 -->
        <div class="member">
          <div>
            <li>
              <strong>{{ x.member_origin }}</strong>
              <span>原创</span>
            </li>
            <li>
              <strong>{{ x.member_popularity }}万</strong>
              <span>人气</span>
            </li>
            <li>
              <strong>{{ x.member_fans }}</strong>
              <span>粉丝</span>
            </li>
            <li class="ok">
              <strong>{{ x.member_comment }}</strong>
              <span>评论</span>
            </li>
          </div>
          <div>
            <li>
              <strong>{{ x.member_translate }}</strong>
              <span>翻译</span>
            </li>
            <li>
              <strong>{{ x.member_reprint }}</strong>
              <span>转载</span>
            </li>
            <li>
              <strong>{{ x.member_follow }}</strong>
              <span>关注</span>
            </li>
            <li class="ok">
              <strong>{{ x.member_collect }}</strong>
              <span>收藏</span>
            </li>
          </div>
        </div>
        <!-- 资料简介 -->
        <div class="profile">
          <h3>资料简介</h3>
          <li>
            <i class="el-icon-paperclip"></i>
            ID：
            <span>{{ x.profile_ID }}</span>
          </li>
          <li>
            <i class="el-icon-paperclip"></i>
            性别：
            <span>{{ x.profile_sex }}</span>
          </li>
          <li>
            <i class="el-icon-paperclip"></i>
            城市：
            <span>{{ x.profile_city }}</span>
          </li>
          <li>
            <i class="el-icon-paperclip"></i>
            签名：
            <span>{{ x.profile_autograph }}</span>
          </li>
          <div class="phide" v-show="p">
            <li>
              <i class="el-icon-paperclip"></i>
              QQ：
              <span>{{ x.profile_qq }}</span>
            </li>
            <li>
              <i class="el-icon-paperclip"></i>
              微信：
              <span>{{ x.profile_wx }}</span>
            </li>
            <li>
              <i class="el-icon-paperclip"></i>
              微博：
              <span>{{ x.profile_wb }}</span>
            </li>
            <li>
              <i class="el-icon-paperclip"></i>
              CSDN：
              <span>{{ x.profile_csdn }}</span>
            </li>
          </div>
          <div class="pmore" @click="p = !p">
            <div v-if="p">收起 <i class="el-icon-arrow-up"></i></div>
            <div v-if="!p">查看更多 <i class="el-icon-arrow-down"></i></div>
          </div>
        </div>
      </div>
      <!-- 详情右 -->
      <div class="detailR">
        <!-- 位置 -->
        <div class="position">
          <span>
            <i class="el-icon-location-information"></i>
            您当前的位置：
            <a href="">首页</a>
            >
            <a href="">{{ x.nickname }}的时光轴</a>
          </span>
        </div>
        <!-- 博文 -->
        <div class="block">
          <el-timeline>
            <el-timeline-item timestamp="2018/4/12" placement="top">
              <el-card>
                <h2>{{ x.blog_title }}</h2>
                <span></span>
                <p @click="y = !y">
                  {{ x.blog_article }}
                </p>
                <!-- <p v-show="x">幸福语录：</p> -->
                <p v-show="y">
                  {{ x.blog_harticle }}
                </p>
                <!-- <p v-show="x">
                  人不应该只是活下去。还要能活得明白，活出自我
                  ！使劲活着，不管将来过成啥样，都能对得起自己，问心无愧地来这世上走一遭。越是瞧不起咱们，咱们越要好好活着！
                </p>
                <p v-show="x">缘分就是一堆人里边，我一眼望过去，就是你了！</p>
                <p v-show="x">
                  我就图分辨个好坏对错，如果连好坏对错的理都不讲了，那人活着还是人吗？
                </p> -->
                <img src="../assets/img/index/middleR2/image2.jpg" alt="" />
                <img src="../assets/img/index/middleR2/image2.jpg" alt="" />
                <span></span>
                <div>
                  <a href="">评论</a>
                  <a href="">转载</a>
                </div>
              </el-card>
            </el-timeline-item>
            <!-- <el-timeline-item timestamp="2018/4/3" placement="top">
              <el-card>
                <h2>幸福就是简简单单</h2>
                <span></span>
                <p @click="x = !x">
                  人间百味终有回甘，不顾风雨朝着一个方向全力奔赴。阳光灿烂，鲜花盛开，幸福会来。有所坚持，全力以赴。幸福说得对：“天下没有爬不去的坡，趁着还年轻，把该吃的苦都吃了，剩下的就都是福了。”
                </p>
                <p v-show="x">幸福语录：</p>
                <p v-show="x">
                  何幸福说：这世上的事儿，黑黑白白的，谁能分得清楚，能忍就过去了，这个理我不认！咱不惹事，可也不怕事。不能总是平白无故的受人欺负！
                </p>
                <p v-show="x">
                  人不应该只是活下去。还要能活得明白，活出自我
                  ！使劲活着，不管将来过成啥样，都能对得起自己，问心无愧地来这世上走一遭。越是瞧不起咱们，咱们越要好好活着！
                </p>
                <p v-show="x">缘分就是一堆人里边，我一眼望过去，就是你了！</p>
                <p v-show="x">
                  我就图分辨个好坏对错，如果连好坏对错的理都不讲了，那人活着还是人吗？
                </p>
                <img src="../assets/img/index/middleR2/image2.jpg" alt="" />
                <img src="../assets/img/index/middleR2/image2.jpg" alt="" />
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/2" placement="top">
              <el-card>
                <h2>幸福就是简简单单</h2>
                <span></span>
                <p @click="x = !x">
                  人间百味终有回甘，不顾风雨朝着一个方向全力奔赴。阳光灿烂，鲜花盛开，幸福会来。有所坚持，全力以赴。幸福说得对：“天下没有爬不去的坡，趁着还年轻，把该吃的苦都吃了，剩下的就都是福了。”
                </p>
                <p v-show="x">幸福语录：</p>
                <p v-show="x">
                  何幸福说：这世上的事儿，黑黑白白的，谁能分得清楚，能忍就过去了，这个理我不认！咱不惹事，可也不怕事。不能总是平白无故的受人欺负！
                </p>
                <p v-show="x">
                  人不应该只是活下去。还要能活得明白，活出自我
                  ！使劲活着，不管将来过成啥样，都能对得起自己，问心无愧地来这世上走一遭。越是瞧不起咱们，咱们越要好好活着！
                </p>
                <p v-show="x">缘分就是一堆人里边，我一眼望过去，就是你了！</p>
                <p v-show="x">
                  我就图分辨个好坏对错，如果连好坏对错的理都不讲了，那人活着还是人吗？
                </p>
                <img src="../assets/img/index/middleR2/image2.jpg" alt="" />
                <img src="../assets/img/index/middleR2/image2.jpg" alt="" />
              </el-card>
            </el-timeline-item> -->
          </el-timeline>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="footerone" v-for="x in data.data" :key="x.lv">
      <div class="footavatar">
        <img
          src="../assets/img/blogdetail/avatar_2.png"
          alt=""
          class="footphoto"
        />
        <ul class="footinfo">
          <p class="fname">
            <a href="">{{ x.nickname }}</a>
          </p>
          <p class="finfo">{{ x.footp1 }}</p>
          <p>{{ x.footp2 }}</p>
        </ul>
        <div>{{ x.footdiv }}</div>
      </div>
      <div class="visitors">
        <h2>最近访客（左邻右舍）</h2>
        <ul>
          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s0.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s1.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s2.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s3.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s4.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s5.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s6.jpg" alt="" />
            </a>
          </li>

          <li>
            <a href="">
              <img src="../assets/img/blogdetail/s7.jpg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import "../assets/css/scope.css";
import "../assets/css/header.css";
import "../assets/css/footer.css";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  components: { MyHeader, MyFooter },
  data() {
    return {
      data: [],
      y: false,
      p: false,
    };
  },
  // created() {
  //   console.log(this.$route.query.index);
  // },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const bid = this.$route.query.bid;
      // console.log(bid);
      var url = `http://127.0.0.1:3000/v1/blogdetail/details?cid=${bid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data;
      });
    },
  },
};
</script>
<style scoped src="../assets/css/blogdetail.css"></style>
<style lang="scss" scoped></style>
