<template>
  <div id="body-member">
    <div id="navBar">
      <span id="logo">MEMBER SITE</span>
      <div class="menuBar">
        <img
          class="hamburger"
          src="../../assets/icon_burger.png"
          width="30px"
          @click="showMenu"
        />

        <ul>
          <li><router-link :to="{ path: '/' }">Home</router-link></li>
          <li>Settings</li>
          <li>My Project</li>
        </ul>
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
          <div class="search">
            <input
              class="form-control"
              type="text"
              v-model="searchForm"
              placeholder="Search..."
              @keydown="searchCourses"
            />
            <font-awesome-icon icon="search" class="icon-search" />
          </div>
        </div>
        <div class="scrollLayout-left">
          <div class="iconLeft"></div>
        </div>

        <div class="scrollLayout-right">
          <div class="iconRight"></div>
        </div>
        <div class="courses-content">
          <div class="card" v-for="item in searchCourses()" :key="item.name">
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

      <div class="my-project">
        <div class="layout-project">
          <div
            class="card"
            v-for="item in projects"
            :key="item.name"
            :style="`background-image:url(${item.img});`"
          >
            <div class="details">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                dicta hic dolores repellat assumenda pariatur, quisquam adipisci
                eum aliquam, ipsa esse? Libero laudantium itaque quae dicta
                error accusantium illo hic porro sequi vel qui vero
                reprehenderit repellat perferendis atque ut voluptate eum, ullam
                quasi? Quas aut repellat eligendi dolor! Nulla porro laboriosam
                quia officiis possimus provident earum voluptas labore
                explicabo, magnam sit vel. Error quisquam natus expedita veniam
                excepturi, recusandae, odit cum reiciendis enim quidem a labore
                animi explicabo vel itaque. Dicta molestiae incidunt iste eum
                perspiciatis eveniet non ex obcaecati et atque fuga architecto,
                maxime porro? Pariatur quas quibusdam illo accusamus, quam
                commodi. Eos consequatur repellat animi beatae sit, accusamus
                itaque, veniam excepturi perspiciatis debitis dolores rem quae
                nulla nobis nostrum officiis eligendi adipisci, voluptatum
                cumque? Sunt doloribus quos non possimus id quas praesentium
                quaerat, atque veniam facilis animi voluptatum odit vero.
                Ratione, aspernatur. Suscipit, nostrum ea totam vero doloribus
                tempora adipisci commodi obcaecati animi consequuntur ipsam a
                incidunt ex, illo officia earum hic cupiditate eaque porro
                quaerat mollitia architecto ab! Illum, repellat. Architecto,
                enim facere temporibus quasi libero repellendus maxime incidunt
                laborum distinctio, voluptatum facilis sapiente doloremque saepe
                repudiandae dolor atque sunt totam a earum culpa! Saepe, omnis.
              </p>
            </div>
            <h3>{{ item.name }}</h3>
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
      searchForm: "",
      alreadyRegister: ["CSS", "JAVA"],
      projects: [
        {
          name: "Project 1",
          img:
            "https://images.unsplash.com/photo-1603531837441-9069e5e8d5c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "Project 2",
          img:
            "https://images.unsplash.com/photo-1604135745600-bc4e7e64e605?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "Project 3",
          img:
            "https://images.unsplash.com/photo-1556103981-d323d306e001?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1349&q=80",
        },
        {
          name: "Project 4",
          img:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
        },
        {
          name: "Project 5",
          img:
            "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1352&q=80",
        },
      ],
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
      let body = document.querySelector(".member-content");

      this.$gsap.timeline().fromTo(body, 2, { opacity: 0 }, { opacity: 1 });
    },
    setProject() {
      let projectCard = document.querySelectorAll(".layout-project .card");
      let projectDetails = document.querySelectorAll(
        ".layout-project .card .details"
      );
      projectCard[0].classList.add("active");

      projectCard.forEach((item, index) => {
        item.addEventListener("click", () => {
          projectCard.forEach((item) => {
            item.classList.remove("active");
          });
          item.classList.add("active");
          projectDetails[index].classList.add("active");
        });
      });
    },
    searchClick() {
      let button = document.querySelector(".icon-search");
      let search = document.querySelector(".search");
      let input = document.querySelector(".search input");

      button.addEventListener("click", () => {
        search.classList.toggle("active");
        input.focus();
      });
    },
    searchCourses() {
      let filter = this.courses.filter((item) => {
        return item.name.toLowerCase().includes(this.searchForm);
      });

      return filter;
    },
    hoverDetails() {
      let contentCard = document.querySelectorAll(".layout-project .card");
      let contentDetails = document.querySelectorAll(
        ".layout-project .card .details"
      );

      contentCard.forEach((item, index) => {
        item.addEventListener("mouseover", () => {
          if (item.classList.contains("active")) {
            contentDetails[index].classList.add("active");
          }
        });
        item.addEventListener("mouseout", () => {
          contentDetails[index].classList.remove("active");
        });
      });
    },
    showMenu() {
      document.querySelector("#navBar .menuBar").classList.toggle("active");
    },
  },
  mounted() {
    this.scrollLeftRight();
    this.animatePercent();
    this.animateInit();
    this.setProject();
    this.searchClick();
    this.hoverDetails();
  },
};
</script>

<style scoped src="./member.css"></style>
