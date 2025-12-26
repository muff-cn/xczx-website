const recommendation_content_items_imgs = [
    "./imgs/uploads/course01.png",
    "./imgs/uploads/course02.png",
    "./imgs/uploads/course03.png",
    "./imgs/uploads/course04.png",
    "./imgs/uploads/course05.png",
    "./imgs/uploads/course06.png",
    "./imgs/uploads/course07.png",
    "./imgs/uploads/course08.png",
    "./imgs/uploads/course09.png",
    "./imgs/uploads/course10.png",
]
const recommendation_content_items_titles = [
    "JavaScipt数据看板项目实战",
    "Vue.js实战----面经全端项目",
    "玩转Vue全家桶, iHRM人力资源项目",
    "Vue.js实战医疗项目----优医问诊",
    "小程序实战: 小兔鲜电商小程序项目",
    "前端框架Flutter开发实战",
    "熟练使用React.js----极客园H5项目",
    "熟练使用React.js----极客园PC端项目",
    "前端实用技术, Fetch API实战",
    "前端高级Node.js零基础入门教程"
]
const recommendation_content_items_infos = [
    '1125',
    '2756',
    '9456',
    '7192',
    '2703',
    '2841',
    '95682',
    '904',
    '1516',
    '2766'
]
const recommendation_content_items = document.getElementsByClassName("card-content-item")
for (let i = 0; i < 10; i++) {
    console.log(recommendation_content_items[i])
    recommendation_content_items[i].innerHTML = `
        <img src="${recommendation_content_items_imgs[i]}" alt="">
        <div> 
        <div class="card-content-item-title">
    ${recommendation_content_items_titles[i]} 
        </div>
        <div class="card-content-item-info"><span>高级</span>&nbsp;•&nbsp;${recommendation_content_items_infos[i]}人在学习</div>
        </div>
    `
}
frontend_cards = [
    {
        img: "./imgs/uploads/web01.png",
        title: "JS高级,JavaScript进阶面向对象",
        info: "10254"
    },
    {
        img: "./imgs/uploads/web02.png",
        title: "0基础玩转微信小程序",
        info: "17365"
    },
    {
        img: "./imgs/uploads/web03.png",
        title: "JS基础----语法解析+项目实战",
        info: "7851"
    },
    {
        img: "./imgs/uploads/web04.png",
        title: "前端框架Vue2+Vue3全套视频",
        info: "9812"
    },
]
python_cards = [
    {
        img: "./imgs/uploads/python01.png",
        title: "Django视频教程_Django入门",
        info: "9037"
    },
    {
        img: "./imgs/uploads/python02.png",
        title: "Python实战项目, 从0开发一个博客系统",
        info: "8863"
    },
    {
        img: "./imgs/uploads/python03.png",
        title: "Python+大数据进阶教程",
        info: "8745"
    },
    {
        img: "./imgs/uploads/python04.png",
        title: "数据分析入门|300分钟",
        info: "7845 "
    }
]
ai_cards = [
    {
        img: "./imgs/uploads/ai01.png",
        title: "4天快速入门Python数据挖掘",
        info: "7845"
    },
    {
        img: "./imgs/uploads/ai02.png",
        title: "计算机视觉入门及案例实战",
        info: "7841"
    },
    {
        img: "./imgs/uploads/ai03.png",
        title: "AI深度学习自然语言处理NLP",
        info: "4646"
    },
    {
        img: "./imgs/uploads/ai05.png",
        title: "Python进阶课程-Web基础开发",
        info: "14875"
    },
    {
        img: "./imgs/uploads/ai06.png",
        title: "AI-OpenCV图像处理",
        info: "13657"
    },
]
java_cards = [
    {
        img: "./imgs/uploads/web02.png",
        title: "Mybatis注解开发及注解配置",
        info: "7415"
    },
    {
        img: "./imgs/uploads/java02.png",
        title: "详细分析LinkedList数据链表",
        info: "8456"
    },
    {
        img: "./imgs/uploads/java03.png",
        title: "全面深入Mysql数据库优化",
        info: "4698"
    },
    {
        img: "./imgs/uploads/java04.png",
        title: "全面剖解RocketMQ和项目实战",
        info: "12354"
    },
    {
        img: "./imgs/uploads/java05.png",
        title: "三天系统学习ZooKeeper",
        info: "13002"
    },
]

function create_card(type_id) {
    let cards_container = document.getElementById(type_id)
    let cards;

    switch (type_id) {
        case "python":
            cards = python_cards
            break
        case "frontend":
            cards = frontend_cards
            break
        case "ai":
            cards = ai_cards
            break
        case "java":
            cards = java_cards
            break
    }
    for (let i = 0; i < cards.length; i++) {
        let div = document.createElement('div')
        div.className = "card-content-item"
        div.innerHTML = `
        <img src="${cards[i].img}" alt="">
        <div> 
        <div class="card-content-item-title">
    ${cards[i].title} 
        </div>
        <div class="card-content-item-info"><span>高级</span>&nbsp;•&nbsp;${cards[i].info}人在学习</div>
        </div>
    `
        cards_container.appendChild(div)
    }
}

create_card("frontend")
create_card("python")
create_card("ai")
create_card("java")







