<template>
  <div>
    <my-header />
    <div class="wblog">
      <div class="userhead">
        <div class="headbanner"></div>
        <div class="headinfo">
          <div class="infot">
            <div class="tL">
              <div class="tll">
                <div class="tavatar">
                  <img src="../assets/img/writeblog/useravatar.jpg" alt="" />
                </div>
                <a href="">
                  <img src="../assets/img/writeblog/icon-vip.png" alt="" />
                </a>
              </div>
              <div class="trr">
                <div class="hname">
                  <span class="nick">安和桥</span>
                  <span class="sex"><i class="el-icon-female"></i></span>
                  <span class="lv">Lv.6</span>
                  <span class="vip">VIP 9</span>
                </div>
                <div class="hnews">
                  <span><span>8</span>被访问</span>
                  |
                  <span><span>1</span>原创</span>
                  |
                  <span><span>暂无</span>排名</span>
                  |
                  <span><span>10</span>转载</span>
                  |
                  <span><span>3</span>关注</span>
                  |
                  <span><span>96</span>粉丝</span>
                </div>
              </div>
            </div>
            <div class="tR">
              <div class="tRbtn"></div>
            </div>
          </div>
          <div class="infob">
            <div class="address">
              <i class="el-icon-location-information"></i>
              <span>IP 地址：山西平遥</span>
            </div>
            <div class="detail">
              <div class="dhide" v-show="datashow">
                <li>
                  <i class="el-icon-paperclip"></i>
                  <span>签名：希望以后的我们再相逢都是站在最高处。</span>
                </li>
                <li>
                  <i class="el-icon-connection"></i>
                  <span>个人简介：热爱生活，梦想优质程序员。</span>
                </li>
                <li>
                  <i class="el-icon-news"></i>
                  <span>博客简介：安和桥的博客</span>
                </li>
                <li>
                  <i class="el-icon-edit-outline"></i>
                  <span>博客描述：记录生活，分享生活</span>
                </li>
              </div>
              <div class="dmore" @click="datashow = !datashow">
                <div v-if="datashow">收起 <i class="el-icon-arrow-up"></i></div>
                <div v-if="!datashow">
                  查看更多 <i class="el-icon-arrow-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="userbody">
        <div class="bodyL">
          <el-row style="width: 300px">
            <el-col>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
              >
                <el-submenu index="/writeblog/myblog">
                  <template slot="title">
                    <i class="el-icon-edit"></i>
                    <span slot="title">我的博客</span>
                  </template>
                  <el-menu-item index="1-1">文章管理</el-menu-item>
                  <el-menu-item index="1-2">草稿箱</el-menu-item>
                  <el-menu-item index="1-2">回收站</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-circle-plus-outline"></i>
                    <span slot="title">我的关注</span>
                  </template>
                  <el-menu-item index="2-1">关注的人</el-menu-item>
                  <el-menu-item index="2-2">关注的社区</el-menu-item>
                </el-submenu>
                <el-menu-item index="/writeblog/mycollect">
                  <i class="el-icon-star-off"></i>
                  <span slot="title">我的收藏</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="bodyR">
          <div class="bodyRnav">
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="最近动态" name="first">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
              <el-tab-pane label="文章" name="second">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
              <el-tab-pane label="资源" name="third">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
              <el-tab-pane label="问答" name="fourth">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
              <el-tab-pane label="帖子" name="fifth">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
              <el-tab-pane class="ok" label="写博客" name="sixth">
                <div class="bbody">
                  <div class="btitle">
                    <span>文章标题：</span>
                    <select name="" id="">
                      <option value="">请选择</option>
                      <option value="">原创</option>
                      <option value="">转载</option>
                      <option value="">翻译</option>
                    </select>
                    <input type="text" />
                  </div>
                  <div class="bcontent">
                    <span>文章内容：</span>
                    <textarea cols="100" rows="18"></textarea>
                  </div>
                  <div class="btype">
                    <span>文章类别：</span>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">摄影</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">穿搭</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">运动</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">萌宠</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">心情</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">美食</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">游戏</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">自拍</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">风景</label>
                    <input type="checkbox" name="a" id="" />
                    <label for="a">记录生活</label>
                  </div>
                  <div class="btype">
                    <span>发布形式：</span>
                    <input type="radio" name="b" id="" />
                    <label for="b">全部可见</label>
                    <input type="radio" name="b" id="" />
                    <label for="b">仅我可见</label>
                    <input type="radio" name="b" id="" />
                    <label for="b">粉丝可见</label>
                    <input type="radio" name="b" id="" />
                    <label for="b">VIP可见</label>
                  </div>
                  <div class="bdata">
                    <span>发布日期：</span>
                    <div class="block">
                      <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd"
                      >
                      </el-date-picker>
                    </div>
                  </div>
                  <div class="button">
                    <input type="submit" value="发表文章" />
                    <input type="button" value="立即保存" />
                    <input type="button" value="舍弃文章" />
                  </div>
                </div>
              </el-tab-pane>
              <el-tab-pane label="互动" name="seventh">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
              <el-tab-pane label="问答" name="eighth">
                <el-empty description="暂无数据"></el-empty>
              </el-tab-pane>
            </el-tabs>
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
import MyFooyer1 from "@/components/MyFooyer1.vue";
import MyFooter from "@/components/MyFooter.vue";
export default {
  components: { MyHeader, MyFooyer1, MyFooter },
  data() {
    return {
      datashow: false,
      emptyshow: true,
      activeName: "sixth",
      value2: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped src="../assets/css/writeblog.css"></style>
<style lang="scss">
.el-tabs__item {
  height: 56px !important;
  line-height: 56px !important;
}
.el-tabs__header {
  margin: 0;
  padding: 0 25px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 5%);
}
.ok {
  background-color: #fff;
  height: 544px;
}
.el-tab-pane:not(.ok) {
  background-color: #fffafa;
  height: 464px;
  padding-top: 80px;
}
.el-tabs__nav-wrap::after {
  height: 1px;
}
.el-input__inner,
.el-input__icon {
  height: 24px;
  line-height: 24px !important;
  color: #5d5d5d;
  border-color: rgb(118, 118, 118);
}
</style>
