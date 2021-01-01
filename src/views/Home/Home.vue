<template>
  <div id="body-home">
    <div id="navBar">
      <a @click="scrollTo('courses')" class="btn btn-text menu">COURSES</a>
      <span id="logo">BORN DEVS</span>
      <a @click="scrollTo('contact')" class="btn btn-text menu-contact">
        CONTACT ME
      </a>
    </div>

    <div id="content">
      <div class="slogan">
        <img src="../../assets/programmer.png" />
      </div>
      <div class="slogan-content">
        <h3 class="title">KEEP LEARNING</h3>
        <p class="subtitle">In Learning you gain some experience</p>
        <div class="member">
          150 MEMBER ACTIVE
          <div></div>
          <div class="btn btn-primary w-100" @click="dialog = true">
            JOIN NOW
          </div>
        </div>
        <div class="experience row">
          <div
            class="card-group col-12 col-sm"
            v-for="item in experiences"
            :key="item.name"
          >
            <div class="card">
              <img
                class="mx-auto mt-4"
                width="110px"
                height="120px"
                :src="require('../../assets/' + item.img)"
                @error="onError"
              />
              <div class="percent"></div>
              <span class="name"
                >{{ item.name }}
                <div class="subtitle">
                  {{ item.end }}% User has learned this topic
                </div>
                <div class="btn btn-success mt-4">JOIN NOW</div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="title-group">
        <span>WHY CHOOSE US</span>
        <h2>MODERN,ADAPTIVE,HELPING.</h2>
      </div>

      <div class="content">
        <div class="card-group">
          <div class="card">
            <img
              class="mt-4"
              src="../../assets/icon_experience.png"
              width="70%"
            />
            <h3 class="mt-4">EXPERIENCE</h3>
            <div class="p-4 w-100">
              <a class="btn btn-primary w-100">OUR PROJECT</a>
            </div>
          </div>
        </div>

        <div class="card-group">
          <div class="card">
            <img
              class="mt-4"
              src="../../assets/icon_solutions.png"
              width="70%"
            />
            <h3 class="mt-4">SOLUTIONS</h3>
            <div class="p-4 w-100">
              <a class="btn btn-primary w-100">ACHIEVEMENT</a>
            </div>
          </div>
        </div>

        <div class="card-group">
          <div class="card">
            <img class="mt-4" src="../../assets/icon_cheap.png" width="70%" />
            <h3 class="mt-4">CHEAP</h3>
            <div class="p-4 w-100">
              <a class="btn btn-primary w-100">OUR QUALITY</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-2" id="courses">
      <div class="title-group">
        <span>TRUST US</span>
        <h2>WE LOVE TO HELP.</h2>
      </div>
      <div class="scrollLeft">
        <div class="icon-right"></div>
      </div>
      <div class="scrollRight">
        <div class="icon-left"></div>
      </div>

      <div class="content">
        <div class="card-group" v-for="item in courses" :key="item.index">
          <div class="card">
            <img
              class="card-img-top mt-4"
              :src="require('../../assets/' + item.img)"
              width="100%"
            />
            <div class="card-body">
              <h5 class="card-title">{{ item.name }}</h5>
              <a class="btn btn-primary w-100 mt-4">ENTER THIS COURSE</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer" id="contact">
      <div class="content">
        <h5 class="title">Wendy Winata @2020</h5>
        <div class="btn btn-danger" @click="backTop">BACK TO TOP</div>
      </div>
    </div>

    <transition name="fade">
      <Dialog v-if="dialog"></Dialog>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import Dialog from "../Components/Dialog/Dialog.vue";

export default {
  name: "Home",
  components: {
    Dialog,
  },
  data() {
    return {
      dialog: false,
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
      experiences: [
        {
          name: "Front End",
          img: "icon_css.png",
          start: 0,
          end: 97,
        },
        {
          name: "Back End",
          img: "icon_laravel.png",
          start: 0,
          end: 88,
        },
        {
          name: "Software",
          img: "icon_java.png",
          start: 0,
          end: 100,
        },
        {
          name: "Git",
          img: "icon_git.png",
          start: 0,
          end: 55,
        },
        {
          name: "Logic Programming",
          img: "icon_c.png",
          start: 0,
          end: 85,
        },
      ],
    };
  },
  methods: {
    onError(event) {
      console.log(event);
    },
    scrollLeft() {
      let scrollLeft = document.querySelector(".icon-right");
      let content = document.querySelector(".section-2 .content");
      let scrollRight = document.querySelector(".icon-left");
      let scrollTime;

      scrollLeft.addEventListener("mouseover", () => {
        console.log("asd");
        scrollTime = setInterval(() => {
          content.scrollLeft += 2;
        }, 1);
      });

      scrollLeft.addEventListener("mouseout", () => {
        clearInterval(scrollTime);
      });

      scrollRight.addEventListener("mouseover", () => {
        scrollTime = setInterval(() => {
          content.scrollLeft -= 1;
        }, 1);
      });

      scrollRight.addEventListener("mouseout", () => {
        clearInterval(scrollTime);
      });
    },
    animateHeight() {
      let logo = document.querySelector(".slogan");
      let title = document.querySelector(".title");
      let subtitle = document.querySelector(".subtitle");
      let member = document.querySelector(".member");
      let experience = document.querySelector(".experience");

      this.$gsap
        .timeline()
        .fromTo(
          logo,
          3,
          { height: "0%", width: "100%" },
          { height: "80%", width: "30%" }
        )
        .fromTo([title, subtitle], 2, { opacity: "0.0" }, { opacity: "1" })
        .fromTo(
          member,
          2,
          { opacity: "0.0", right: "30%" },
          { opacity: "1", right: "0px" },
          "-=2"
        )
        .fromTo(
          experience,
          2,
          { opacity: "0" },
          { opacity: "1", callback: this.animatePercent }
        );

      document.querySelectorAll(".card-group")[6].style =
        "transform:scale(1.2)";

      if (window.matchMedia("(max-width:800px)").matches) {
        this.$gsap.to(logo, 3, { width: "100%" });
        document.querySelectorAll(".card-group")[6].style =
          "transform:scale(1)";
      }
    },
    animatePercent() {
      let percent = document.querySelectorAll(".percent");
      percent.forEach((element, index) => {
        this.$gsap.fromTo(
          percent[index],
          5,
          { height: "0%" },
          { height: this.experiences[index].end + "%" }
        );
      });
    },
    dialogExit() {
      window.onclick = (event) => {
        let exitDialog = document.querySelector("#dialog-body");
        if (event.target == exitDialog) {
          this.dialog = false;
        }
      };
    },
    backTop() {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollTo(item) {
      let goTo = document.getElementById(item);
      console.log(goTo);
      goTo.scrollIntoView({ behavior: "smooth" });
    },
    animateOnScroll() {
      let section = document.querySelector(".section");
      let section2 = document.querySelector(".section-2");
      window.addEventListener("scroll", () => {
        let viewport = (window.innerHeight / 5) * 4;

        if (section.getBoundingClientRect().top < viewport) {
          section.classList.add("active");
        } else {
          section.classList.remove("active");
        }

        if (section2.getBoundingClientRect().top < viewport) {
          section2.classList.add("active");
        } else {
          section2.classList.remove("active");
        }
      });
    },
  },
  mounted() {
    this.animateHeight();
    this.scrollLeft();
    this.dialogExit();
    this.animateOnScroll();
  },
};
</script>

<style scoped src="./home.css"></style>
