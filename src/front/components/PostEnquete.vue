<template>
  <div>
    <h1>{{title}}</h1>
      <p>{{description}}</p>
    <div v-if="!posted"><!-- 入力エリア ここから -->
      <div>
        <input type="radio" id="5" value="5" v-model="enquete.point"><label for="5">5点</label>
        <input type="radio" id="4" value="4" v-model="enquete.point"><label for="4">4点</label>
        <input type="radio" id="3" value="3" v-model="enquete.point"><label for="3">3点</label>
        <input type="radio" id="2" value="2" v-model="enquete.point"><label for="2">2点</label>
        <input type="radio" id="1" value="1" v-model="enquete.point"><label for="1">1点</label>
      </div>
      <div>
        <p>ご意見・ご要望</p>
        <textarea v-model="enquete.message"></textarea>
      </div>
      <div>
        <p>メールアドレス</p>
        <input type="mail" v-model="enquete.mail" />
      </div>
      <div>
        <button @click="sendMessage()">アンケート送信</button>
      </div>
    </div><!-- 入力エリア ここまで-->
    <div v-else><!-- 結果エリア ここから -->
      <div>
        点数{{enquete.point}}点
      </div>
      <div>
        <p>ご意見・ご要望</p>
        <p>{{enquete.message}}</p>
      </div>
      <div>
        <p>メールアドレス</p>
        <p>{{enquete.mail}}</p>
      </div>
    </div><!-- 結果エリア ここまで -->
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      title: "アンケート",
      description: "良かったですか？5点(高い) から 1点(低い) で点数をつけてください。",
      enquete: {},
      posted: false
    };
  },
  methods: {
      sendMessage(){
        this.description = "アンケート送信をありがとうございました。";
        axios.post("/api/enquetes/", this.enquete);//この行を追加
        this.posted = true;
      }
  }
});
</script>