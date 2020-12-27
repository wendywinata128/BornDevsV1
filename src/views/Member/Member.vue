<template>
  <div id="body-member">
    <div id="navBar">
      <span id="logo">MEMBER SITE</span>
      <div class="menuBar position-relative">
        <a href="/" class="w-100 h-100 position-absolute"></a>
        <img src="../../assets/icon_burger.png" width="30px" />
      </div>
    </div>

    <div class="member-content">
      <div class="header">
        <div class="card">
          <img
            src="../../assets/wendy.jpg"
            class="img-thumbnail"
            width="200px"
          />
          <div class="profil-description">
            <h3>Wendy Winata</h3>
            <h6>Students at Atma Jaya Yogyakarta</h6>
            <div class="circular-layout">
              <div class="circular-div c-1">
                <h6 class="details">
                  3
                  <h6>Sertificate</h6>
                </h6>
              </div>

              <div class="circular-div c-2">
                <h6 class="details">
                  50
                  <h6>Reputation</h6>
                </h6>
              </div>

              <div class="circular-div c-3">
                <h6 class="details">
                  16
                  <h6>Submission</h6>
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div class="card careers">
          <h4>Careers</h4>
          <h5>You reach career as Intermediate Developer</h5>
          <div class="container">
            <div class="progress"></div>
            <div class="circle-group">
              <div class="circle active">
                1
              </div>
            </div>

            <div class="circle-group">
              <div class="circle active">
                2
              </div>
            </div>

            <div class="circle-group">
              <div class="circle active">
                3
              </div>
            </div>

            <div class="circle-group">
              <div class="circle">
                4
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="content-body">
        <div class="card c-1">
          <h5>Courses Completed</h5>
          <h4>2</h4>
        </div>
        <div class="card c-2">
          <h5>Courses</h5>
          <h4>{{ this.courses.length }}</h4>
        </div>
        <div class="card c-3">
          <h5>Interested Courses</h5>
          <h4>3</h4>
        </div>
        <div class="card c-4">
          <h5>Project</h5>
          <h4>0</h4>
        </div>
      </div>

      <div class="courses card">
        <div class="header-courses">
          <h4>Course</h4>
        </div>
        <div class="scrollLayout-left">
          <div class="iconLeft"></div>
        </div>

        <div class="scrollLayout-right">
          <div class="iconRight"></div>
        </div>
        <div class="courses-content">
          <div class="card" v-for="item in courses" :key="item.name">
            <img
              class="content-img"
              :src="require('../../assets/' + item.img)"
            />
            <span class="mt-4">{{ item.name }}</span>
            <div class="btn-group w-100 pl-4 pr-4 mt-4">
              <div
                v-if="!checkAvailable(item.name)"
                class="btn btn-success w-100"
              >
                REGISTER
              </div>
              <div v-else class="btn btn-danger disabled">ALREADY</div>
            </div>
          </div>
        </div>
      </div>

      <div class="continue-courses">
        <div class="card continue-content">
          <div class="header-continue">
            <h4>Continue Your Course</h4>
          </div>
          <div class="content-continue">
            <div class="item" v-for="item in continueCourses" :key="item.name">
              <img :src="require('../../assets/' + item.img)" />
              <div class="description">
                <h5>{{ item.name }}</h5>
                <div class="card progress-bar">
                  <div class="percent"></div>
                  <h5 class="percent-status">{{ item.status }}%</h5>
                </div>

                <div class="btn btn-success">CONTINUE</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "member",
  data() {
    return {
      alreadyRegister: ["CSS", "JAVA"],
      courses: [
        {
          name: "CSS",
          img: "icon_css.png",
          student: "78",
          color: "",
        },
        {
          name: "HTML",
          img: "icon_html.png",
          student: "",
          color: "",
        },
        {
          name: "GIT",
          img: "icon_git.png",
          student: "",
          color: "",
        },
        {
          name: "JAVA",
          img: "icon_java.png",
          student: "",
          color: "",
        },
        {
          name: "LARAVEL",
          img: "icon_laravel.png",
          student: "",
          color: "",
        },
        {
          name: "PYTHON",
          img: "icon_python.png",
          student: "",
          color: "",
        },
        {
          name: "KOTLIN",
          img: "icon_kotlin.png",
          student: "",
          color: "",
        },
      ],
      continueCourses: [
        {
          name: "JAVA",
          img: "icon_java.png",
          status: "70",
        },
        {
          name: "KOTLIN",
          img: "icon_kotlin.png",
          status: "30",
        },
        {
          name: "PYTHON",
          img: "icon_python.png",
          status: "40",
        },
      ],
    };
  },
  methods: {
    checkAvailable(item) {
      return this.alreadyRegister.includes(item);
    },
    scrollLeftRight() {
      let scrollLeft = document.querySelector(".iconRight");
      let scrollRight = document.querySelector(".iconLeft");
      let content = document.querySelector(".courses-content");

      console.log(scrollRight);

      let scroll;

      scrollLeft.addEventListener("mouseover", () => {
        scroll = setInterval(() => {
          content.scrollLeft++;
        }, 1);
      });

      scrollLeft.addEventListener("mouseout", () => {
        clearInterval(scroll);
      });

      scrollRight.addEventListener("mouseover", () => {
        scroll = setInterval(() => {
          content.scrollLeft--;
        }, 1);
      });

      scrollRight.addEventListener("mouseout", () => {
        clearInterval(scroll);
      });
    },
    animatePercent() {
      let percentContent = document.querySelectorAll(".percent");
      let percentStatus = document.querySelectorAll(".percent-status");

      percentContent.forEach((item, index) => {
        this.$gsap
          .timeline()
          .fromTo(
            item,
            4,
            { width: "0" },
            { width: this.continueCourses[index].status + "%" }
          )
          .fromTo(percentStatus[index], 2, { opacity: 0 }, { opacity: 1 });
      });
    },
    animateInit() {
      let profile = document.querySelector(".member-content .header .card");
      let body = document.querySelector(".member-content");
      console.log(profile);

      this.$gsap.timeline().fromTo(body, 2, { opacity: 0 }, { opacity: 1 });
    },
  },
  mounted() {
    this.scrollLeftRight();
    this.animatePercent();
    this.animateInit();
  },
};
</script>

<style scoped src="./member.css"></style>
