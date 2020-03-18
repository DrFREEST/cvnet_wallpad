<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>환경설정</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-content>
                <v-list-item-title>
                  <router-link :to="item.routingPage">{{ item.title }}</router-link>
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </div>
</template>
<script src="../../public/javascript/configure/settingList.js"></script>
