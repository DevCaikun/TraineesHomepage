<template>
  <div class="home-page">
    <a-layout :class="themeClass">
      <a-layout-content>
        <a-row :gutter="16">
          <!-- 第一列：占5份，手机端隐藏 -->
          <a-col v-if="isDesktop" class="layout-col-left" :span="5" :xs="0" :sm="0" :md="5" :lg="5">
            <div class="head-portrait">
              <img style="position: absolute;top:-15%;left:-10%;width: 120%; aspect-ratio: 1/1;" src="@/assets/img/head-portrait-kuang.png" alt="" />
            </div>
            <div class="left-div left-des">
              <div class="left-des-item">
                <img src="@/assets/svg/location.svg" alt="" />
                China-Guangzhou
              </div>
              <div class="left-des-item">
                <img src="@/assets/svg/briefcase.svg" alt="" />
                Technology Ltd.
              </div>
            </div>
            <div class="left-div left-tag">
              <div class="left-tag-item">网瘾</div>
              <div class="left-tag-item">小学生</div>
              <div class="left-tag-item">动漫</div>
              <div class="left-tag-item">《三体》</div>
              <div class="left-tag-item">Coding</div>
              <div class="left-tag-item">旅者</div>
              <div class="left-tag-item">骑行</div>
            </div>
            <div class="left-div left-time">
              <ul class="left-time-line">
                <li>
                  <div class="focus"></div>
                  <a href="https://homepage.trainees.cn">TraineesHomepage-个人主页上线</a>
                  <div>2024.12</div>
                </li>
                <li>
                  <div class="focus"></div>
                  <a href="https://base.trainees.cn">TraineesBase-个人在线知识库(练习生基地)上线</a>
                  <div>2024.10</div>
                </li>
                <li>
                  <div class="focus"></div>
                  <div>加入广州XXX集团工业自动化领域-负责某新能源客户软件代码编写</div>
                  <div>2023.6</div>
                </li>
                <li>
                  <div class="focus"></div>
                  <div>捡起了碎的一地的IT知识</div>
                  <div>2023.2</div>
                </li>
                <li>
                  <div class="focus"></div>
                  <div>离职出来后洗心革面,决定专心学习巩固专业技能</div>
                  <div>2022.6</div>
                </li>
                <li>
                  <div class="focus"></div>
                  <div>加入贵阳XX科技集团-负责某省东\南部某项业务的售后和运营</div>
                  <div>2020.12</div>
                </li>
                <li>
                  <div class="focus"></div>
                  <div><a href="http://homepage.trainees.cn">放暑假在家搭建人生第一个网站</a></div>
                  <div>2018.8</div>
                </li>
              </ul>
            </div>
          </a-col>
          <!-- 第二列：占19份，手机和电脑端都显示 -->
          <a-col class="layout-col-right" :span="19" :xs="24" :sm="24" :md="19" :lg="19">
            <a-modal v-model:open="showModal" centered :footer="null" closeIcon="" title="" width="50">
              <img :src="popPicture" alt="" style="max-width: 200px;max-height: 350px;margin: 20px" />
            </a-modal>
            <div v-if="!isDesktop" class="index-head-portrait">
              <img style="position: absolute;top:-15%;left:-10%;width: 120%; aspect-ratio: 1/1;" src="@/assets/img/head-portrait-kuang.png" alt="">
            </div>
            <div class="welcome">
              Hello I' m
              <span class="gradientText">DevCaikun</span>
              <h6>你好，我是程序员菜鲲</h6>
            </div>
            <div class="description">👦 <span class="purpleText">Full Stack</span> Developer</div>
            <div class="description">
              📝 The only way to achieve greatness is to
              <span class="purpleText textBackground">love</span>
              and
              <span class="purpleText textBackground">persevere</span> in what you do.
            </div>
            <div class="iconContainer">
              <a class="iconItem" onclick="" href="https://github.com/DevCaikun/TraineesHomepage" target="_blank">
                <img src="@/assets/svg/github.svg" alt="">
                <div class="iconTip">Github</div>
              </a>
              <a class="iconItem" onclick="" href="https://mail.163.com/">
                <img src="@/assets/svg/mail.svg" alt="">
                <div class="iconTip">Mail</div>
              </a>
              <a class="iconItem" @click="showModalHandle('sponsor')" href="javascript:void(0)">
                <img src="@/assets/svg/sponsor.svg" alt="">
                <div class="iconTip">赞助</div>
              </a>
              <a class="iconItem" @click="showModalHandle('qq')" href="javascript:void(0)">
                <img src="@/assets/svg/qq.svg" alt="">
                <div class="iconTip">QQ</div>
              </a>
              <a class="iconItem" @click="showModalHandle('weixin')" href="javascript:void(0)">
                <img src="@/assets/svg/weixin.svg" alt="">
                <div class="iconTip">微信</div>
              </a>
              <a class="switch" href="javascript:void(0)">
                <a-switch v-model:checked="isDarkMode" @change="toggleTheme" checked-children="开" un-checked-children="关" />
              </a>
            </div>
            <div class="tanChiShe">
              <img :src="themeIcon" alt="">
            </div>
            <div class="title">
              <img src="@/assets/svg/site.svg" alt="">
              Site
            </div>
            <div class="projectList">
              <a v-for="(siteData,index) in site" :key="index" class="projectItem a" target="_blank" :href="siteData.link"
              >
                <div class="projectItemLeft">
                  <h1>{{siteData.title}}</h1>
                  <p>{{siteData.introduce}}</p>
                </div>
                <div class="projectItemRight">
                  <img :src="siteData.img.toString()" alt="">
                </div>
              </a>
            </div>
            <div class="title">
              <img src="@/assets/svg/project.svg" alt="">
              Project
            </div>
            <div class="projectList">
              <a v-for="(projectData,index) in project" :key="index" class="projectItem b" target="_blank" :href="projectData.link"
              >
                <div class="projectItemLeft">
                  <h1>{{projectData.title}}</h1>
                  <p>{{projectData.introduce}}</p>
                </div>
                <div class="projectItemRight">
                  <img :src="projectData.img" alt="">
                </div>
              </a>
            </div>
            <div class="title">
              <img src="@/assets/svg/skills.svg" alt="">
              Skills
            </div>
            <div class="skill">
              <img class="skillPcImg" src="@/assets/svg/skillPc.svg" alt="" srcset="">
              <img class="skillWapImg" src="@/assets/svg/skillWap.svg" alt="" srcset="">
            </div>
          </a-col>

        </a-row>
      </a-layout-content>
      <a-layout-footer :class="themeClass" class="layout-footer">
        <div class="layout-footer-left">TraineesHomepage © {{new Date().getFullYear()}} Created by 程序员菜鲲</div>
        <div class="layout-footer-right">
          <img src="https://g.csdnimg.cn/common/csdn-footer/images/badge.png" alt="" style="width: 15px;height: 15px;margin-right: 5px" />
          <a href="https://beian.miit.gov.cn" class="mr-4 hover:underline md:mr-6 ">备案号：黔ICP备19007557号</a>
        </div>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">

import {computed, onBeforeUnmount, onMounted, ref} from "vue";
import snakeLightSvg from '@/assets/svg/snake-Light.svg';
import siteProjectIcon1 from '@/assets/img/i1.png';
import siteProjectIcon2 from '@/assets/img/i2.png';
import siteProjectIcon3 from '@/assets/img/i3.png';
import siteProjectIcon4 from '@/assets/img/i4.png';
import siteProjectIcon5 from '@/assets/img/i5.png';
import siteProjectIcon6 from '@/assets/img/i6.png';
import qqImg from '@/assets/img/qqGroup.jpg';
import weixinImg from '@/assets/img/weixinGroup.jpg';
import sponsorImg from '@/assets/img/weixinSponsor.jpg';

const isDesktop = ref(false); // 默认不是桌面端
const isDarkMode = ref(false); // 控制是否是暗黑模式
const themeIcon = ref(snakeLightSvg); // 主题图标
const showModal = ref<boolean>(false); //qq弹框
const popPicture = ref(""); //弹框图片

// 网站
const site = ref([
  {title:"练习生基地",introduce:"资源导航、技术博客、维技百科、项目专栏、互动交流",img:siteProjectIcon1,link:"https://base.trainees.cn"},
  {title:"练习生图床",introduce:"专属于你的图片资源库",img:siteProjectIcon2,link:"https://blog.trainees.cn"},
  {title:"练习生主页",introduce:"我是谁，我来自哪里，我将去往何方。",img:siteProjectIcon3,link:"https://homepage.trainees.cn"},
]);
// 项目
const project = ref([
  {title:"TraineesBase",introduce:"导航、博客、百科、专栏、社区等模块",img:siteProjectIcon6,link:"https://github.com/DevCaikun/TraineesBase"},
  {title:"TraineesAdmin",introduce:"基地集成、权限管理、代码生成",img:siteProjectIcon5,link:"https://github.com/DevCaikun/TraineesAdmin"},
  {title:"TraineesHomepage",introduce:"基于Vue3构建的炫酷唯美个人主页",img:siteProjectIcon4,link:"https://github.com/DevCaikun/TraineesHomepage"},
]);

// 监听主题设定的值如果发生变化则动态设定对应的class
let themeClass = computed(() => {
  return  isDarkMode.value ? "dark" : "light";
});

// 切换主题按钮的回调
const toggleTheme = (value:any) => {
  console.log("value",value);
  const newTheme = value ? 'dark' : 'light';
  // 存储到localStore避免刷新丢失
  localStorage.setItem('theme', newTheme);
};

// 点击qq或打赏图标的回调
const showModalHandle = (img:string) => {
  if (img == "qq") {
    popPicture.value = qqImg;
  }
  if (img == "weixin") {
    popPicture.value = weixinImg;
  }
  if (img == "sponsor") {
    popPicture.value = sponsorImg;
  }
  showModal.value = true;
};

// 检查窗口是否大于992,并设定到isDesktop
const checkIfDesktop = () => {
  // 992px 作为桌面端的标准
  isDesktop.value = window.innerWidth >= 992;
}

onMounted(() => {
  // 页面加载时检测屏幕尺寸
  checkIfDesktop();
  // 监听窗口变化
  window.addEventListener('resize', checkIfDesktop);
  // 第一次加载或刷新后重新从localStore获取黑/白天设定
  isDarkMode.value = localStorage.getItem('theme') === 'dark';
});

onBeforeUnmount(() => {
  // 移除事件监听
  window.removeEventListener('resize', checkIfDesktop);
})

</script>

<style scoped lang="scss">
@font-face {
  font-family: "a";
  /*中文字体*/
  src: url(@/assets/fonts/Ubuntu-Regular.ttf);
  font-display: swap;
}
@font-face {
  font-family: "b";
  src: url(@/assets/fonts/Ubuntu-Regular.ttf);
  font-display: swap;
}
@font-face {
  font-family: "title";
  /*英文字体*/
  src: url(@/assets/fonts/Pacifico-Regular.ttf);
  font-display: swap;
}

/* 默认白天模式 */
.light {
  //background-color: rgba(255, 255, 255, 0.1);
  //color: #fff;
}
/* 黑夜模式 */
.dark {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.home-page {
  width: 100vw;
  height: 100vh;
  background-image: url("@/assets/img/background.jpg");
  background-size: cover;
  background-position: center;
  :deep(.ant-layout) {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgb(0, 0, 0,0.2);
    background-blend-mode: multiply;//背景混合模式
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(5px);
    .ant-layout-content{
      width: 100%;
      height: 95%;
      padding: 0 15%;
      .ant-row{
        height: 100%;
        .layout-col-left {
          margin:0%;
          height: 100%;
          overflow-y: scroll;
          display: flex;
          padding: 0 15px;
          // 左边不会因为右边撑开父元素而一同滚动
          position: sticky;
          top: 0;
          left: 0;
          align-items: center;
          flex-direction: column;
          color: white;
          .head-portrait {
            flex-shrink: 0;
            width: 80%;
            position: relative;
            aspect-ratio: 1/1;
            margin-top: 50px;
            background-size: cover;
            border-radius: 50%;
            background-image: url('@/assets/img/head-portrait.jpg');
          }
          .left-div {
            flex-shrink: 0;
            width: 100%;
            border-radius: 13px;
            margin-top: 15px;
            padding: 20px;
            background-color: rgb(0, 0, 0,0.3);
          }
          .left-des {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .left-des-item {
              display: flex;
              align-items: center;
              line-height: 20px;
              font-size: 15px;
              margin-bottom: 5px;
              overflow: hidden;
              img{
                width: 26px;
                height: 26px;
                fill:var(--fill);
                font-size: 18px;
                margin-right: 10px;
              }
            }
          }
          .left-tag {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            padding: 14px;
            .left-tag-item {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 28px;
              margin: 0px 5px 5px 0;
              padding: 10px;
              font-size: 13px;
              border-radius: 111px;
              background: rgb(27 42 57 / 20%);
            }
          }
          .left-time {
            .left-time-line {
              width: 100%;
              //height: 200px;
              max-height: 270px;
              font-size: 13px;
              padding-left: 8px;
              scroll-snap-type: y mandatory;
              overflow-y: scroll;
              li {
                list-style: none;
                position: relative;
                padding: 15px 0px 0px 15px;
                border-left: 2px solid #d5d5d5;
                border-radius: 0;
                scroll-snap-align: end;
                color: #ffffff;
                .focus {
                  width: 8px;
                  height: 8px;
                  border-radius: 22px;
                  background-color: rgb(255 255 255);
                  border: 2px solid #fff;
                  position: absolute;
                  left: -5px;
                  top: 50%;
                }
              }
              //第一个 li 子元素的第一个 .focus 子元素。
              li:first-child {
                .focus:first-child {
                  background-color: #aaffcd;
                  animation: focus 1.8s ease infinite;
                }
              }
            }
            //选中 left-time-line 元素的滚动条，并将其隐藏
            .left-time-line::-webkit-scrollbar {
              display: none;
            }
          }
        }
        //滚动条设置为不显示
        .layout-col-left::-webkit-scrollbar {
          display: none;
        }
        .layout-col-right {
          height: 100%;
          padding: 40px 0px;
          display: flex;
          flex-direction: column;
          overflow-y: scroll;
          color: white;
          .index-head-portrait {
            flex-shrink: 0;
            width: 40%;
            margin-top: 40px;
            position: relative;
            max-width: 200px;
            aspect-ratio: 1/1;
            background-size: cover;
            border-radius: 50%;
            border: 0.5px solid #ffffff;
            background-image: url('@/assets/img/head-portrait.jpg');
          }
          .welcome {
            font-size: 60px;
            font-weight: 500;
            margin: 20px 0;
            position: relative;
            .gradientText {
              //允许背景图像或背景颜色只在文本区域内显示，而不是在整个元素的背景中显示
              -webkit-background-clip: text;
              //引入自定义字体名称
              font-family: "title";
              -webkit-text-fill-color: transparent;
              background-size: 200%;
              background-position: 0%;
              animation: backgroundSizeAnimation 10s ease-in-out infinite;
              //设置背景图像渐变
              background-image: linear-gradient(120deg, rgb(133, 62, 255), #f76cc6 30%, rgb(255, 255, 255) 60%);
            }
            h6{
              margin: 0;
              position: relative;
              left: 0;
              right: 0;
              transform: scaleY(1); /* 垂直翻转文本 */
              opacity: 0.5; /* 调整透明度以模拟水中倒影效果 */
              filter: blur(2px); /* 添加模糊效果 */
            }
          }
          .description {
            font-size: 20px;
            margin-top: 7px;
            .purpleText {
              color: #747bff;
              font-weight: 800;
            }
            .textBackground {
              font-weight: 800;
              background: rgb(19, 20, 24,0.2);
              border-radius: 5px;
              font-size: 17px;
              margin: 0 3px;
              padding: 2px 4px;
            }
          }
          .iconContainer {
            width: 100%;
            height: 60px;
            display: flex;
            align-items: center;
            margin-top: 20px;
            .iconItem {
              width: 49px;
              height: 43px;
              box-sizing: border-box;
              border-radius: 7px;
              display: flex;
              margin-left: 10px;
              backdrop-filter: blur(var(0px));
              -webkit-backdrop-filter: blur(var(0px));
              background: rgba(249, 250, 251, 0.2);
              align-items: center;
              justify-content: center;
              transition: width 0.3s ease, opacity 0.3s ease, transform 0.3s ease;
              flex-shrink: 0;
              img {
                width: 29px;
                height: 29px;
                fill:#ffffff;;
                font-size: 22px;
                margin-right: 3px;
              }
              .iconTip {
                white-space: nowrap;
                display: none;
              }
            }
            .iconItem:hover {
              width: 85px;
              transform: translateY(-2px);
              background: rgba(249, 250, 251, 0.2);
            }
            .iconItem:hover .iconTip {
              display: block;
            }
            .switch {
              width: 55px;
              height: 43px;
              box-sizing: border-box;
              border-radius: 7px;
              display: flex;
              margin-left: 10px;
              backdrop-filter: blur(0px);-webkit-backdrop-filter: blur(0px);
              background: rgba(249, 250, 251, 0.2);
              align-items: center;
              justify-content: center;
              transition: width 1s ease, opacity 1s ease, transform 1s ease;
              flex-shrink: 0;
              .ant-switch-checked {
                display: flex;
                align-items: center;
                .ant-switch-inner {
                  text-align: center;
                }
              }
            }
            .switch:hover {
              width: 55px;
              background: rgba(249, 250, 251, 0.2);
            }
          }
          .iconContainer::-webkit-scrollbar {
            display: none;
          }
          .tanChiShe {
            width: 99%;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          .title {
            display: flex;
            align-items: center;
            font-size: 26px;
            font-weight: 800;
            margin: 20px 0;
            transition: transform 0.4s ease;
            img {
              margin-right: 8px;
              height: 26px;
              width: 26px;
              fill: #ffffff;
            }
          }
          .title:hover {
            transform: translateY(-5px);
          }
          .projectList {
            width: 100%;
            height: auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: start;
            .projectItem {
              width: calc(25% - 5px);
              margin: 5px 5px;
              border-radius: 8px;
              padding: 15px;
              display: flex;
              background-color: rgba(249, 250, 251, 0.22);
              backdrop-filter: blur(0px);-webkit-backdrop-filter: blur(0px);
              transition: opacity 0.5s ease, background-color 0.2s ease, border 0.2s ease, transform 0.3s ease;
              .projectItemLeft {
                transition: width 0.4s ease;
                width: 80%;
                p {
                  font-size: 12px;
                  margin-top: 15px;
                  color: rgb(228, 228, 228);
                }
                h1 {
                  font-weight: normal;
                  font-size: 16px;
                  margin: 0px;

                  transition: font-size 0.4s ease;
                  color: rgb(255, 255, 255);
                }
              }
              .projectItemRight {
                overflow: hidden;
                transition: width 0.4s ease;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 20%;
                img {
                  height: 39px;
                  width: 39px;
                }
              }
            }
            .projectItem.pressed {
              transform: scale(0.9);
              /* 缩小到原来的0.9倍 */
              background-color: rgb(19, 23, 27);
            }
            .projectItem:hover {
              box-shadow: 0 8px 16px -4px #2c2d300c;
              transform: translateY(-2px);
              .projectItemLeft {
                width: 100%;
              }
              .projectItemRight {
                width: 0%;
                img {
                  transform: rotate(40deg);
                }
              }
              h1 {
                font-size: 18px;
              }
            }
          }
          .skill {
            padding: 5px 5px 5px 5px;
            width: 100%;
            .skillPcImg {
              width: 100%;
              display: block !important;
            }
            .skillWapImg {
              display: none !important;
            }
          }
        }
      }
    }
    .layout-footer{
      width: 100%;
      height: 5%;
      padding: 0 5%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgb(0, 0, 0,0.2);
      .layout-footer-left{
        display: flex;
        align-items: center;
        color: white;
      }
      .layout-footer-right{
        display: flex;
        align-items: center;
        color: white;
        a{color: white;}
      }
    }
  }
}

@media (max-width: 991px) {
  :deep(.ant-layout) {
    .ant-layout-content{
      padding: 0 5% !important;
      .ant-row{
        height: 100%;
        .layout-col-left {
          .head-portrait {
          }
          .left-div {
          }
          .left-des {
            .left-des-item {
              img{
              }
            }
          }
          .left-tag {
            .left-tag-item {
            }
          }
          .left-time {
            .left-time-line {
              li {
                .focus {
                }
              }
              //第一个 li 子元素的第一个 .focus 子元素。
              li:first-child {
                .focus:first-child {
                  background-color: #aaffcd;
                  animation: focus 1.8s ease infinite;
                }
              }
            }
            //选中 left-time-line 元素的滚动条，并将其隐藏
            .left-time-line::-webkit-scrollbar {
              display: none;
            }
          }
        }
        //滚动条设置为不显示
        .layout-col-left::-webkit-scrollbar {
        }
        .layout-col-right {
          padding: 20px 0px !important;
          .index-head-portrait {
          }
          .welcome {
            font-size: 45px !important;
            font-weight: 500;
            .gradientText {
            }
            h6{
            }
          }
          .description {
            font-size: 18px !important;
            .purpleText {
              font-weight: 500;
            }
            .textBackground {
              font-weight: 500;
              border-radius: 5px;
              font-size: 17px;
              margin: 0 3px;
              padding: 2px 4px;
            }
          }
          .iconContainer {
            .iconItem {
              img {
                width: 22px;
                height: 22px;
                fill:#ffffff;;
                font-size: 22px;
                margin-right: 3px;
              }
              .iconTip {
              }
            }
            .iconItem:hover {
            }
            .iconItem:hover .iconTip {
            }
            .switch {
            }
            .switch:hover {
            }
          }
          .iconContainer::-webkit-scrollbar {
          }
          .tanChiShe {
            img {
            }
          }

          .title {
            font-size: 20px !important;
            font-weight: 600 !important;
            margin: 15px 0 !important;
            img {
            }
          }
          .title:hover {
          }
          .projectList {
            .projectItem {
              width: calc(50% - 35px) !important;
              padding: 10px !important;
              .projectItemLeft {

                h1 {
                  font-size: 12px !important;
                }
                p {
                  margin: 5px 0px !important;
                  font-size: 10px !important;
                }
              }
              .projectItemRight {
                img {
                  height: 29px !important;
                  width: 29px !important;
                }
              }
            }
            .projectItem.pressed {
            }
            .projectItem:hover {
              .projectItemLeft {
                width: 100%;
              }
              .projectItemRight {
                width: 0%;
                img {
                }
              }
              h1 {
                font-size: 18px;
              }
            }
          }
          .skill {
            .skillPcImg {
              display: none !important;
            }
            .skillWapImg {
              display: block !important;
              width: 100%;
            }
          }
        }
      }
    }
    .layout-footer{
      width: 100%;
      height: 5%;
      padding: 0 5%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: rgb(0, 0, 0,0.2);
      .layout-footer-left{
        display: flex;
        align-items: center;
        color: white;
      }
      .layout-footer-right{
        display: flex;
        align-items: center;
        color: white;
        a{color: white;}
      }
    }
  }
}

a:hover,
a:link,
a:visited,
a:active,
a:focus {
  text-decoration: none;
  outline: none;
  border: none;
  color: inherit;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}


/* 设置滚动条样式 */
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background-color: var(--main_text_color, #000000);
  border-radius: 8px;
  height: 20%;
}
::-webkit-scrollbar-track {
  background-color: var(--main_bg_color, linear-gradient(50deg, #a2d0ff, #ffffff));
}



</style>