<template>
  <div id="app">
    <h1>App.vue</h1>
    <br />
    <router-link to="/member">Member TEST</router-link>
    <br />
    <router-link to="/test">Test 화면보기</router-link>
    <router-view />

    <v-row align="center">
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn small>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn small color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn small disabled>Disabled</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn disabled>Disabled</v-btn>
        </div>
      </v-col>
      <v-col class="text-center" cols="12" sm="4">
        <div class="my-2">
          <v-btn large>Normal</v-btn>
        </div>
        <div class="my-2">
          <v-btn large color="primary">Primary</v-btn>
        </div>
        <div class="my-2">
          <v-btn large color="error">Error</v-btn>
        </div>
        <div class="my-2">
          <v-btn large disabled>Disabled</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<style>
</style>
