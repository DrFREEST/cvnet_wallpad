<template>
  <div class="common-page">
    <div class="common-page-top">
      <div class="common-page-top-btns left">
        <v-btn depressed title="뒤로가기" color="transparent" @click="back_page">
          <v-icon class="icon-history-back"></v-icon>
        </v-btn>
      </div>
      <h1>푸쉬 알림 설정</h1>
      <div class="common-page-top-btns right"></div>
    </div>
    <div class="common-page-content">
      <div class="common-page-list">
        <v-list flat inactive>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-content>
                <v-switch
                  flat
                  :v-model="item.modelName"
                  :label="item.title"
                  :input-value="item.value"
                  @change="on_write(item.modelName, item.value, index)"
                ></v-switch>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </div>
</template>
<script src="../../public/javascript/configure/setPush.js"></script>