<template>
  <div class="b-index row">
    <div class="b-index__header col width-full">
      <div class="b-index__header__logo">
        <div class="b-index__header__logo__content ml-20px row content-center">
          <img
            class="responsive-img"
            src="/img/fort_js_logo_200_137.png"
            alt="JsStore logo"
          />
          <h1 class="b-index__header__logo__content__text">FortJs</h1>
        </div>
      </div>
      <div class="b-index__header__style"></div>
    </div>
    <div sm12 offset-md1 md10 offset-xl-2 xl8 class="margin-top-40px">
      <div id="divOverview">
        <h3>
          Write beautiful server code and create maintainable app using FortJs
        </h3>
        <div>
          Component based MVC web framework for nodejs targeting good code
          structures & modularity.
        </div>
      </div>
      <div class="row content-center mt-20px">
        <a class="btn primary mr-10px x-big ripple" href="tutorial/get-started">
          Get Started
        </a>
        <a
          class="btn secondary outlined mr-10px x-big"
          href="https://github.com/ujjwalguptaofficial/fortjs"
          target="_blank"
        >
          Github
          <i class="margin-left-10px fab fa-github"></i>
        </a>
        <a
          class="btn secondary outlined x-big"
          target="_blank"
          href="https://gitter.im/JsStore/fortjs"
        >
          Get Help
          <i class="margin-left-10px fab fa-gitter"></i>
        </a>
      </div>
      <div class="col mt-20px content-center">
        <h2>
          Open-source MIT Licensed | Supported with all plugins & frameworks
        </h2>
        <div class="row frameworks">
          <a
            class="socket-io"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/fortjs-examples/tree/master/socket.io"
          >
            <img src="https://socket.io/css/images/logo.svg" />
          <!-- </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/react"
          >
            <img src="/img/React.js_logo-512.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/svelte"
          >
            <img src="/img/svelte.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/angular"
          >
            <img src="/img/angular.png" />
          </a>
          <a
            class="vue"
            target="_blank"
            href="https://github.com/ujjwalguptaofficial/jsstore-examples/tree/master/electron"
          >
            <img src="/img/electronjs.png" />
          </a> -->
        </div>
      </div>
      <div class="mt-20px top-border">
        <h4></h4>
        <div class="row wrap features content-center">
          <div
            class="features__item"
            v-for="item in features"
            :key="item.title"
          >
            <h4 class="div-header">{{ item.title }}</h4>
            <span class="div-body" v-html="item.subTitle"> </span>
          </div>
        </div>
      </div>
      <div class="col mt-20px top-border content-center">
        <h3>A Big thanks to these open source tools</h3>
        <div class="row mt-20px content-v-center">
          <a
            target="_blank"
            title="github"
            href="https://github.com/ujjwalguptaofficial/fortjs"
          >
            <img
              class="responsive-img"
              src="/img/github.svg"
              alt="github logo"
            />
          </a>
          <a
            target="_blank"
            class="ml-20px"
            title="gitter"
            href="https://gitter.im/fortjs"
          >
            <img
              style="height: 50px; width: 50px; padding-top: 8px"
              class="responsive-img"
              src="/img/gitter.svg"
              alt="github logo"
            />
          </a>
          <a
            target="_blank"
            class="ml-20px"
            title="npm"
            href="https://www.npmjs.com/package/fortjs"
          >
            <img
              style="height: 50px; width: 50px; padding-top: 8px"
              class="responsive-img"
              src="/img/Npm-logo.svg"
              alt="npm logo"
            />
          </a>
          <a
            target="_blank"
            class="ml-20px"
            title="travis"
            href="https://travis-ci.org/ujjwalguptaofficial/fortjs"
          >
            <img
              style="height: 50px; width: 50px; padding-top: 8px"
              class="responsive-img"
              src="/img/travis.png"
              alt="travis logo"
            />
          </a>
          <a
            target="_blank"
            class="ml-20px"
            title="meidum"
            href="https://medium.com/fortjs"
          >
            <svg class="svgIcon-use" width="45" height="45" viewBox="0 0 45 45">
              <path
                d="M5 40V5h35v35H5zm8.56-12.627c0 .555-.027.687-.318 1.03l-2.457 2.985v.396h6.974v-.396l-2.456-2.985c-.291-.343-.344-.502-.344-1.03V18.42l6.127 13.364h.714l5.256-13.364v10.644c0 .29 0 .342-.185.528l-1.848 1.796v.396h9.19v-.396l-1.822-1.796c-.184-.186-.21-.238-.21-.528V15.937c0-.291.026-.344.21-.528l1.823-1.797v-.396h-6.471l-4.622 11.542-5.203-11.542h-6.79v.396l2.14 2.64c.239.292.291.37.291.768v10.353z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      meta: [
        {
          hid: "keywords",
          name: "keywords",
          content: "jsstore, sql, indexeddb, storage, wrapper",
        },
        {
          hid: "description",
          name: "description",
          content:
            "JsStore is a client side javascript library for performing database operation inside browser using indexeddb.",
        },
      ],
    };
  },
  created() {
    this.features = [
      {
        title: "Fort Based",
        subTitle: `<a href="https://github.com/ujjwalguptaofficial/fort">Fort</a> is an
                        architecture on top of MVC`,
      },
      {
        title: "Next Gen Code",
        subTitle: "Create your app in typescript or es6",
      },
      {
        title: "Modular",
        subTitle: "FortJs provides components to make apps more modular",
      },
      {
        title: "Fun To Create",
        subTitle: "You are not creating an app but a fort",
      },
      {
        title: "Fully Customizable",
        subTitle: `Use your favourite view engine or configure your session store and
                        more...`,
      },
      {
        title: "Beautiful code",
        subTitle: "Code written for FortJs are more beautiful & readable",
      },
    ];
  },
};
</script>


<style lang="scss" scoped>
.flixlovers {
  width: 150px;
  margin-right: 10px;
}
.b-index__header__logo {
  position: absolute;
  width: 100%;
  background-color: var(--primary-color);
  text-align: center;
  color: white;
  z-index: 1;

  div .logo-tagline {
    display: block;
  }
}

.b-index__header__style {
  position: relative;
  background-color: var(--primary-color);
  color: #fff;
  width: 100%;
  /* height: 150px; */
  height: 204px;
  transform: skewY(5deg);
}

#divOverview {
  font-family: 0;
  text-align: center;
}

.logo-text {
  font-size: 50px;
}

#divLinkGroup {
  text-align: center;
  margin-top: 30px;
}

.frameworks {
  margin-top: 20px;
  //   img {
  //     height: 80px;
  //   }

  .vue {
    img {
      width: 40px;
      height: auto;
    }
    margin-right: 20px;
  }
}

.features__item {
  margin-bottom: 28px;
  margin-right: 28x;
  width: 350px;
}
.b-index__header__logo__content__text {
  align-self: center;
  margin-left: 20px;
  font-size: 3rem;
}
</style>