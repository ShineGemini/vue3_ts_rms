const tree = `
vue3_rms
├── README.md
├── babel.config.js
├── commitlint.config.js
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── page
│       └── run-time
│           ├── index.html
│           ├── script.js
│           └── style.css
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│   │   │   ├── base.less
│   │   │   └── index.less
│   │   └── images
│   │       ├── 404.gif
│   │       ├── bgc.jpg
│   │       ├── logo.png
│   │       ├── logo2.png
│   │       ├── wechat.jpg
│   │       └── weichat_logo.jpg
│   ├── common-ui
│   │   ├── breadcrumb
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── BreadCrumb.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── jl-card
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── JlCard.vue
│   │   ├── jl-descriptions
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── JlDescriptions.vue
│   │   ├── jl-echarts
│   │   │   ├── hooks
│   │   │   │   ├── initECharts.ts
│   │   │   │   └── mapCityToMap.ts
│   │   │   ├── index.ts
│   │   │   ├── map
│   │   │   │   ├── china.json
│   │   │   │   └── city.ts
│   │   │   └── src
│   │   │       └── JlEcharts.vue
│   │   ├── jl-editor
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── JlEditor.vue
│   │   ├── jl-form
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── JlForm.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── jl-tabel
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── JlTabel.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   └── jl-upload
│   │       ├── index.ts
│   │       └── src
│   │           └── JlUpload.vue
│   ├── components
│   │   ├── nav-header
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── NavHeader.vue
│   │   │       └── cpn
│   │   │           └── NavDialog.vue
│   │   ├── nav-menu
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── NavMenu.vue
│   │   ├── page-dialog
│   │   │   ├── index.ts
│   │   │   ├── src
│   │   │   │   └── PageDialog.vue
│   │   │   └── types
│   │   │       └── types.ts
│   │   ├── page-echart
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       ├── PageBarChart.vue
│   │   │       ├── PageChinaChart.vue
│   │   │       ├── PageLineChart.vue
│   │   │       ├── PagePieChart.vue
│   │   │       ├── PagePieLableChart.vue
│   │   │       └── PageRoseChart.vue
│   │   ├── page-search
│   │   │   ├── index.ts
│   │   │   └── src
│   │   │       └── PageSearch.vue
│   │   └── page-tabel
│   │       ├── index.ts
│   │       └── src
│   │           └── PageTabel.vue
│   ├── global
│   │   ├── index.ts
│   │   ├── registerElement.ts
│   │   └── registerGlobal.ts
│   ├── hooks
│   │   ├── countAction.ts
│   │   ├── pageLinkage.ts
│   │   └── permission.ts
│   ├── main.ts
│   ├── router
│   │   ├── index.ts
│   │   └── main
│   │       ├── analysis
│   │       │   ├── dashboard
│   │       │   │   └── dashboard.ts
│   │       │   └── overview
│   │       │       └── overview.ts
│   │       ├── product
│   │       │   ├── category
│   │       │   │   └── category.ts
│   │       │   └── goods
│   │       │       └── goods.ts
│   │       ├── story
│   │       │   ├── chat
│   │       │   │   └── chat.ts
│   │       │   └── list
│   │       │       └── list.ts
│   │       └── system
│   │           ├── department
│   │           │   └── department.ts
│   │           ├── menu
│   │           │   └── menu.ts
│   │           ├── role
│   │           │   └── role.ts
│   │           └── user
│   │               └── user.ts
│   ├── service
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── main
│   │   │   ├── analysis
│   │   │   │   └── index.ts
│   │   │   ├── story
│   │   │   │   └── index.ts
│   │   │   └── system
│   │   │       └── index.ts
│   │   ├── request
│   │   │   ├── index.ts
│   │   │   └── type.ts
│   │   └── types.ts
│   ├── shims-vue.d.ts
│   ├── store
│   │   ├── analysis
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── index.ts
│   │   ├── login
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── product
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   ├── system
│   │   │   ├── index.ts
│   │   │   └── types.ts
│   │   └── types.ts
│   ├── utils
│   │   ├── cache.ts
│   │   ├── formate.ts
│   │   ├── handleString.ts
│   │   └── menuToRoute.ts
│   └── views
│       ├── login
│       │   ├── Login.vue
│       │   ├── cpns
│       │   │   ├── LoginPhone.vue
│       │   │   └── LoginUser.vue
│       │   └── hooks
│       │       └── rules.ts
│       ├── main
│       │   ├── Main.vue
│       │   ├── analysis
│       │   │   ├── dashboard
│       │   │   │   ├── config
│       │   │   │   │   └── showCountConfig.ts
│       │   │   │   ├── cpn
│       │   │   │   │   ├── ShowCharts.vue
│       │   │   │   │   └── ShowCount.vue
│       │   │   │   └── dashboard.vue
│       │   │   └── overview
│       │   │       ├── config
│       │   │       │   ├── dependencies.ts
│       │   │       │   ├── devDependencies.ts
│       │   │       │   ├── projectStandard.ts
│       │   │       │   ├── projectTree.ts
│       │   │       │   └── technologyStacks.ts
│       │   │       └── overview.vue
│       │   ├── product
│       │   │   ├── category
│       │   │   │   ├── category.vue
│       │   │   │   ├── config
│       │   │   │   │   ├── dialog.config.ts
│       │   │   │   │   ├── form.config.ts
│       │   │   │   │   └── tabel.config.ts
│       │   │   │   └── cpn
│       │   │   │       └── CategoryHeader.vue
│       │   │   └── goods
│       │   │       ├── configs
│       │   │       │   ├── dialog.config.ts
│       │   │       │   └── tabel.config.ts
│       │   │       └── goods.vue
│       │   ├── story
│       │   │   ├── chat
│       │   │   │   └── chat.vue
│       │   │   └── list
│       │   │       ├── config
│       │   │       │   └── tabel.config.ts
│       │   │       └── list.vue
│       │   └── system
│       │       ├── department
│       │       │   ├── config
│       │       │   │   ├── dialog.config.ts
│       │       │   │   ├── from.config.ts
│       │       │   │   └── tabel.config.ts
│       │       │   └── department.vue
│       │       ├── menu
│       │       │   ├── configs
│       │       │   │   ├── dialog.config.ts
│       │       │   │   └── tabel.config.ts
│       │       │   └── menu.vue
│       │       ├── role
│       │       │   ├── config
│       │       │   │   ├── dialog.config.ts
│       │       │   │   ├── form.config.ts
│       │       │   │   └── tabel.config.ts
│       │       │   └── role.vue
│       │       └── user
│       │           ├── configs
│       │           │   ├── dialog.config.ts
│       │           │   ├── form.config.ts
│       │           │   └── tabel.config.ts
│       │           └── user.vue
│       └── not-found
│           └── NotFound.vue
├── tsconfig.json
└── vue.config.js
`;

export default tree;
