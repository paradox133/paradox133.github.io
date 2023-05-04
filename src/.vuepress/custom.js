/**
 * @file: custom config
 */

let mainConfig = {
  vssueConfig: {
    owner: "Paradox133",
    repo: "Issue-Blog-With-Github-Action",
    clientId: "2783a4b752f56c0ed912",
    clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
  },

  repoConfig: {
    owner: "Paradox133",
    repo: "paradox133.github.io",
    pushBranch: "source",
    email: paradox133119@gmail.com",
    filterUsers: ['paradox133']
  },

  title: "Paradox's Blog",
  description: "Be myself",
  customDomain: "",
  base: "/Issue-Blog-With-Github-Action/",

  slogan: {
    main: "",
    sub: ""
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/Issue-Blog-With-Github-Action"
      },
      {
        name: "Github",
        link: "https://github.com/Yidadaa"
      },
      {
        name: "CV",
        link: "/Issue-Blog-With-Github-Action/cv.html"
      }
    ],
    headTitle: [""],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      }

    ],
    extraFooters: [
      {
        title: "ABOUT",
        text: "",
        link: ""
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
