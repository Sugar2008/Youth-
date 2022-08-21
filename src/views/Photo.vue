<template>
  <div id="body">
    <my-header />
    <div class="content">
      <div class="load">
        <a href="">图片库</a>
        <span>这里有你喜欢的博客文案图片，快收藏！</span>
      </div>
      <div class="wrapper">
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item>
            <img src="../assets/img/photo/w1.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/photo/w2.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/photo/w3.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/photo/w4.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/photo/w5.jpg" alt="" />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/img/photo/w6.jpg" alt="" />
          </el-carousel-item>
        </el-carousel>
        <!-- <ul>
          <li>
            <a href="">
              <img src="../assets/img/photo/p1.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p2.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p3.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p4.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p5.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p6.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p7.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p8.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p9.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p10.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p11.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p12.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p13.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p14.jpg" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="../assets/img/photo/p15.jpg" alt="" />
            </a>
          </li>
        </ul> -->
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
import MyFooter from "@/components/MyFooter.vue";
import MyFooyer1 from "@/components/MyFooyer1.vue";
import MyHeader from "@/components/MyHeader.vue";
export default {
  components: { MyFooter, MyFooyer1, MyHeader },
};
</script>
<style scoped src="../assets/css/photo.css"></style>
<style lang="scss">
.el-carousel__item{
  width: 600px;

  img{
    width: 100%;
  }
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
