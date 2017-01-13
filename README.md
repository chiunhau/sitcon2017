### Title

寫寫你的美好：一起打造「藝術產生器」吧！

### Abstract

寫程式可以很技術、很商業、很解決問題...但也可以很溫柔、很感性（並且不解決問題）！拜程式語言的強大之賜，我們得已將更多知識與創意導入藝術創作中，讓「美」能以新的姿態進入日常生活。本議程將圍繞在衍生藝術（generative art） 的基本概念，使用 p5.js 此入門級的繪圖函式庫，帶大家認識一些有趣的演算法與思考方式，一起來打造簡單而繽紛的藝術產生器，來實踐對於美好生活的想像。

### Outline

我將此議程定位為人人都能上手的科普講座，因此將技術門檻降到最低（使用 p5js），目的不是傳授新的技術，而是提供聽眾 code as art, art as life 的新概念。我想傳遞的價值與知識有以下：

- 如何用程式語言玩藝術，何謂衍生式藝術（generative art）
- 產生器（generator）的基本概念與實作方式
- 衍生式藝術的核心：只調整 generator 的參數與演算法，不直接參與「結果」。跟傳統的藝術相反
- 基本的 p5.js 玩法（color、transform、math、shapes）就可以寫出很多效果
- 三角函數的應用會特別示範，因為只要一個函式搭配參數變化就能做出效果驚人的視覺
- random 與 noise 概念介紹與應用（noise 可以先理解為具有連續性的 random，他在日後很重要）
- 非常簡單的運動學（F=MA、steering behavior、physics engine、flocking，這邊電玩物理學的東西太多，不會全講）
- flowfield（模擬自然界中河流、礦物紋理的視覺）
- 回到 generative 的主線，談談觀看程式、藝術與生活的思考方式

為了讓整個議程有趣生動，我每介紹一個知識，都會有附圖、作品、動畫、甚至 live demo（如果時間許可）。

### Pitch

這個議題是不分技術與背景的，因為藝術是人類生活的一部分，而衍生是藝術又是基於程式語言才發展出來的，所以個人認為很適合在 sitcon 分享。

### Reference for review

#### 我的一些衍生藝術作品
- [彩帶產生器：math](https://www.behance.net/gallery/42975781/Aesthetic-Computing-Study-I)
- [樹の產生器：recursive](http://codepen.io/chiunhauyou/pen/dMBEoY)
- [荷包蛋：noise](http://codepen.io/chiunhauyou/pen/LkjvYw)
- [早安晨之美：noise](https://chiunhau.github.io/p5-gallery/mid2/)
- [時間之河：flowfield + repeller + steering](https://chiunhau.github.io/p5-gallery/final-project/)
- [彩色瀑布：physic engine](https://chiunhau.github.io/p5-gallery/waterFall/)
- [不知所云：Math.tan()](https://chiunhau.github.io/p5-gallery/circle-forms/)
- [彩帶：Math.sin()](https://chiunhau.github.io/p5-gallery/sin-translate/)
- [簡單 3D 實作](https://chiunhau.github.io/p5-gallery/fake-3d/)
- [靜香團：transform](http://imgur.com/a/7md9Q)

#### 不是我的，但可能會拿來分享
- [WebGL 音樂視覺化](http://audiograph.xyz)
- [EXPERIMENTS IN GENERATIVE ART & DESIGN](http://experimentsingenerativeart.tumblr.com)
- [Sasj：專長為 2D 圖形研究](http://sasj.tumblr.com)
- [Jessica Rosenkrantz：將自然界的演算法導入 3D 列印](http://n-e-r-v-o-u-s.com)
- [Diana Lange：植物姿態的再現](http://www.diana-lange.de/portfolio/generative/nature_of_code/nature.html)
- [Holger Lippmann：Generative artist](https://www.facebook.com/holger.lippmann?pnref=about.eh)
- 還有好多我放不完

### Bio

台科大商業設計系三年級，專注於平面設計的修煉，夢想是當藝術家或月薪嬌妻。寫了四年有餘的程式，目前把程式語言當作設計的工具之一（菸）。SITCON 2016 講者、五倍紅寶石前端實習生、TEDxNTUST 設計部長。
