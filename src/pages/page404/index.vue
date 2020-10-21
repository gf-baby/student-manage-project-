<template>
  <div>
    <h2>My is</h2>
    <h1>404</h1>
    <h4>{{ sy }}</h4>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tetle: [
        "不要太在乎自己的长相，因为能力不会写在脸上",
        "泪，自己尝。痛，自己扛。未来，自己去闯",
        "只有经历最痛苦的坚持，才能配得上拥有最永久的幸福",
        "让结局不留遗憾，让过程更加完美",
        "天下风去出我辈，一入江湖岁月摧",
        "有的路，你必须一个人走，这不是孤独而是选择",
        "活着就该逢山开路，遇水架桥，生活，你给我压力，我还你奇迹",
        "放弃不难，但坚持一定很酷",
        "少时不惧举步维艰之险阻，老来不为悔之不及而憾言，春秋十载满风雨，依然饮酒说华年",
        "❤若向阳，无畏悲伤"
      ]
    };
  },
  computed: {
    sy() {
      let id = parseInt(Math.random() * 10);
      return this.tetle[id];
    }
  }
};
</script>

<style scoped>
div {
  text-align: center;
  margin: 100px auto;
}
h1 {
  font: 100px/100px "";
  /* font-weight: bold; */
  color: paleturquoise;
}
h2 {
  font: 30px/30px "Aa柠檬小姐","Aa草莓妹妹","Aa蜜桃小公举","华文行楷";
  font-weight: bold;
}
h4 {
  font: 25px/25px "";
  color: skyblue;
}
</style>