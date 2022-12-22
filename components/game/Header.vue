<template>
  <div class="game-header">
    <div class="game-header-title">
        <img :src="data.icon" alt="" width="38px" height="38px">
        <h4>{{data.type}}</h4>
        <h1>{{data.title}}</h1>
        <p>The best private cheats for many popular games! We give a money-back guarantee if the product purchased on our site does not start or does not want to work.</p>
        <div class="divider"></div>
        <div class="buttons">
          <ButtonSecondary>Ring-1: Full version</ButtonSecondary>
          <ButtonSecondary>GameSence Crack</ButtonSecondary>
          <ButtonSecondary>SoftHub</ButtonSecondary>
          <ButtonSecondary>HATE.Project</ButtonSecondary>
        </div>
        <span class="softs"><span>+13</span> Other Gaming Software</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  data() {
    return {
      data: {
        icon: '/images/games/cod_icon.png',
        title: 'Call Of Duty: Series',
        type: 'Gaming Software',
      }
    }
  },
  setup() {
    return { }
  },
})
</script>