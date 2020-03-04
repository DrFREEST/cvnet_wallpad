<template>
  <div class="common-page">
    <div class="common-page-content">
      <div class="common-page-result-message">
        <v-icon class="icon-success"></v-icon>
        <p>
          성공적으로
          <br />인증되었습니다!
        </p>
      </div>
    </div>
    <div class="common-page-bottom">
      <v-btn depressed outlined to="/login">로그인 화면으로</v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "certificationSuccess",
  watch: {},
  computed: {},
  mounted() {},
  methods: {},
  components: {}
};
</script>