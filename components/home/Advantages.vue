<template>
  <div class="home-advantages">
    <div class="home-advantages__head">
      <p>cheats.im</p>
      <h2>Why do players<br>choose us?</h2>
      <div class="home-advantages__divider"></div>
    </div>
    <div class="home-advantages__cards">
      <HomeAdvantageCard 
        title="Low prices" 
        text="Advertising banner, underneath maybe a small list of games"
      >
        <IconAdvantageCoin />
      </HomeAdvantageCard>
      <HomeAdvantageCard 
        title="Fast support" 
        text="Advertising banner, underneath maybe a small list of games"
      >
        <IconAdvantageMessage />
      </HomeAdvantageCard>
      <HomeAdvantageCard 
        title="Huge selection" 
        text="Advertising banner, underneath maybe a small list of games"
      >
        <IconAdvantageReceipt />
      </HomeAdvantageCard>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return { }
  },
})
</script>