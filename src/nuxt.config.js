const parseArgs = require("minimist")
const argv = parseArgs(process.argv.slice(2), {
  alias: {
    H: "hostname",
    p: "port"
  },
  string: ["H"],
  unknown: parameter => false
})

const port =
  argv.port ||
  process.env.PORT ||
  process.env.npm_package_config_nuxt_port ||
  "3000"
const host =
  argv.hostname ||
  process.env.HOST ||
  process.env.npm_package_config_nuxt_host ||
  "localhost"
module.exports = {
  srcDir: 'code/',
  env: {
    baseUrl: process.env.BASE_URL ||
      `http://${host}:${port}`
  },
  generate: {
    dir: '../build/'
  },
  head: {
    title: "FortJs - Fort Based MVC Web Framework For Nodejs",
    meta: [{
      name: "google-site-verification",
      content: "gFRrtV_TpZtZXXktE2jCL0C69py_TsCtorjh4GDae4U"
    },
    {
      name: "theme-color",
      content: "#ffffff"
    }, {
      name: "msapplication-TileColor",
      content: "#ffffff"
    }, {
      name: "msapplication-TileImage",
      content: "/ms-icon-144x144.png"
    },
    {
      name: "description",
      content: "Fort based MVC web framework for nodejs targeting good code structures & modularity."
    }, {
      name: "robots",
      content: "index, follow"
    }, {
      name: "author",
      content: "Ujjwal Gupta"
    }, {
      name: "Rating",
      content: "General"
    }, {
      name: "Revisit-After",
      content: "1 days"
    }, {
      charset: "utf-8"
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }, {
      property: "og:title",
      content: "FortJs - Fort Based MVC Web Framework For Nodejs"
    }, {
      property: "og:type",
      content: "Node MVC Framework"
    }, {
      property: "og:url",
      content: "http://fortjs.info/"
    }, {
      property: "og:site_name",
      content: "FortJs"
    }, {
      property: "og:description",
      content: "Fort based MVC web framework for nodejs targeting good code structures & modularity."
    }, {
      property: "og:image",
      content: "/img/fort_js_logo_1200_630.png"
    }, {
      name: "twitter:creator",
      content: "@ujjwal_kr_gupta"
    }, {
      name: "twitter:title",
      content: "FortJs - Fort Based MVC Web Framework For Nodejs"
    }, {
      name: "twitter:description",
      content: "Fort based MVC web framework for nodejs targeting good code structures & modularity."
    }, {
      name: "twitter:image",
      content: "http://fortjs.info/img/fort_js_logo_1200_630.png"
    }
    ],
    link: [{
      rel: "apple-touch-icon",
      sizes: "57x57",
      href: "/apple-icon-57x57.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "60x60",
      href: "/apple-icon-60x60.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "72x72",
      href: "/apple-icon-72x72.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "76x76",
      href: "/apple-icon-76x76.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "114x114",
      href: "/apple-icon-114x114.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "120x120",
      href: "/apple-icon-120x120.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "144x144",
      href: "/apple-icon-144x144.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "152x152",
      href: "/apple-icon-152x152.png"
    }, {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-icon-180x180.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      href: "/favicon-192x192.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "96x96",
      href: "/favicon-96x96.png"
    }, {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }, {
      rel: "manifest",
      href: "/manifest.json"
    }, {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#5bbad5"
    }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  plugins: ['~plugins/vuetify.js'],
  css: [{
    src: ('~/styles/app.styl'),
    lang: 'styl'
  }, {
    src: ('~/styles/common.css'),
    lang: 'css'
  }, {
    src: ('~/styles/menu.css'),
    lang: 'css'
  }, {
    src: ('~/styles/footer.css'),
    lang: 'css'
  }],
  scripts: [{
    src: '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'
  }],
  modules: [
    "~/modules/typescript.js",
    ['@nuxtjs/google-analytics', {
      id: process.env.GA_ID || 'UA-131290933-1'
    }]
  ],
  axios: {}
}