export const SKILLS = [
    {
        title: "Frontend",
        icon: "./assets/images/logo-frontend.png",
        skills: [
            { skill: "HTML5", percentage: "80%" },
            { skill: "CSS", percentage: "90%" },
            { skill: "JavaScript", percentage: "75%" },
            { skill: "React.js", percentage: "80%" },
            { skill: "Vue", percentage: "80%" },
        ],
    },
    {
        title: "Backend",
        icon: "./assets/images/logo-backend.png",
        skills: [
            { skill: "Java", percentage: "90%" },
            { skill: "Python", percentage: "65%" },
        ],
    },
    {
        title: "Tools",
        icon: "./assets/images/logo-tools.png",
        skills: [
            { skill: "Git & GitHub", percentage: "85%" },
            { skill: "Visual Studio Code", percentage: "75%" },
            { skill: "Webpack", percentage: "60%" }
        ],
    },
    {
        title: "Soft Skills",
        icon: "./assets/images/logo-skills.png",
        skills: [
            { skill: "Problem-solving", percentage: "80%" },
            { skill: "Collaboration", percentage: "85%" },
            { skill: "Attention to Detail", percentage: "75%" },
        ],
    },
];

export const EXPERIENCE = [
    {
        title: "中国平安保险(集团)股份有限公司",
        job: "开发实习生｜平安理财数据科技部",
        date: "2024.12 - 2025.03",
        responsibilities: [
            "开发产品详情页：采用卡片式布局设计，通过Element Plus组件库实现UI展示产品信",
            "实现版本日期管理模块：支持动态加载/新增日期，通过day.js标准化数据格式，确保与后端交互一致性",
            "实现Excel导出功能：使用xlsx + file-saver库生成包含渠道信息的报表，优化分析专家数据核对效率",
        ],
    },
    {
        title: "上海得物信息科技有限公司",
        job: "测试开发实习生｜社区消费侧",
        date: "2023.12 - 2024.03",
        responsibilities: [
            "负责得物社区消费侧版本迭代的需求评审、测试分析、功能测试、回归测试的完整流程",
            "负责社区部分哪吒后台和客户端接口的单元测试、功能测试以及编写自动化测试用例",
            "熟悉企业项目的开发流程，与开发人员紧密合作，确保需求的准确实现",
        ],
    },
    // {
    //     title: "Frontend Developer at Tech Innovators",
    //     date: "May 2019 - August 2019",
    //     responsibilities: [
    //         "Assisted in the debelopment of a new e-commerce platform, contributing to the implementation of frontend features using React.js.",
    //         "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
    //         "Praticipated in daily stand-up meetings and collaborated with seniro debelopers to troubleshoot and resolve coding issues.",
    //         "Gained hans-on experience with version control systems, specifically Git, in a collaborative development environment.",
    //     ],
    // },
];

export const PROJECTS = [
    {
        title: "个人简历网站的设计与实现 ",
        date: "2025.01 - 2025.03",
        link: "https://lllsinuo.github.io/personal-portfolio/",
        description: "项目描述：基于React开发个人网站，采用函数式组件与模块化设计，使用Hooks实现状态管理，提升代码可维护性",
        images: [],
        responsibilities: [
            "视觉交互：通过 CSS Keyframes实现样式隔离，结合@keyframes和transition完成复杂动画",
            "加载策略：实现组件懒加载 + 图片按需加载，首屏加载时间控制在1s内",
            "响应式布局：基于Flex/Grid + rem单位构建，设置5个媒体查询断点（从375px到4K屏），适配所有设备",
        ],
    },
    {
        title: "基于SpringBoot + Vue的校园点餐系统的设计与实现",
        date: "2023.10 - 2024.06",
        link: "https://github.2",
        description: "项目描述：基于SpringBoot+Vue+UniApp开发的校园餐饮服务平台，采用组件化开发模式，使用Element UI构建响应式界面，集成ECharts实现销售数据可视化，集成在线点餐、订单管理、数据可视化等功能",
        images: [
            { src: "./assets/images/pic1.1.jpg", width: "100px" },
            { src: "./assets/images/pic1.2.jpg", width: "100px" },
            { src: "./assets/images/pic1.3.jpg", width: "100px" },
            { src: "./assets/images/pic1.4.jpg", width: "100px" },
            { src: "./assets/images/pic1.5.jpg", width: "100px" },
            { src: "./assets/images/pic1.6.jpg", width: "100px" },
            { src: "./assets/images/pic1.7.jpg", width: "100px" },
            { src: "./assets/images/pic1.8.jpg", width: "100px" },
            { src: "./assets/images/pic1.9.jpg", width: "100px" },
            { src: "./assets/images/pic1.10.jpg", width: "100px" },
            { src: "./assets/images/pic1.11.jpg", width: "100px" },
            { src: "./assets/images/pic1.12.jpg", width: "100px" },
            { src: "./assets/images/pic1.13.jpg", width: "390px" },
            { src: "./assets/images/pic1.14.jpg", width: "390px" },
            { src: "./assets/images/pic1.15.jpg", width: "390px" },
            { src: "./assets/images/pic1.16.jpg", width: "390px" },
            { src: "./assets/images/pic1.17.jpg", width: "390px" },
            { src: "./assets/images/pic1.18.jpg", width: "390px" },
            { src: "./assets/images/pic1.19.jpg", width: "390px" },
        ],
        responsibilities: [
            "用户管理：通过localStorage实现用户登录状态持久化，减少重复登录操作",
            "订单管理：支持分页查询、多条件筛选（日期/状态），优化大数据量下的列表渲染效率",
            "数据可视化：集成ECharts动态展示销售趋势、用户行为分析等数据，辅助运营决策",
            "数据交互：通过Axios封装统一请求拦截，实现 Token 自动刷新与错误重试机制，保障接口稳定性",
            "本地数据管理：利用uni.StorageSync高效管理购物车/浏览历史数据，支持离线操作与快速恢复",
            "性能优化：采用懒加载和虚拟滚动技术，解决订单列表页卡顿问题，提升页面加载速度",
        ],
    },
    // {
    //     title: "Frontend Developer at Tech Innovators",
    //     date: "May 2019 - August 2019",
    //     link: "https://github.3",
    //     responsibilities: [
    //         "Assisted in the debelopment of a new e-commerce platform, contributing to the implementation of frontend features using React.js.",
    //         "Conducted performance optimization tasks, resulting in a 15% improvement in page load times.",
    //         "Praticipated in daily stand-up meetings and collaborated with seniro debelopers to troubleshoot and resolve coding issues.",
    //         "Gained hans-on experience with version control systems, specifically Git, in a collaborative development environment.",
    //     ],
    // },
];

export const EDUCATION = [
    {
    id: 1,
    category: "education",
    icon: "icon-graduation",
    year: "2020 - 2024",
    title: "哈尔滨工业大学",
    desc: "本科"
  },
  {
    id: 2,
    category: "education",
    icon: "icon-graduation",
    year: "2024 - 2025",
    title: "香港大学", 
    desc: "研究生"
  },
  {
    id: 3,
    category: "experience",
    icon: "icon-briefcase",
    year: "2021-2022",
    title: "123",
    desc: "321"
  },
];