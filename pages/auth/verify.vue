<template>
  <div class="main-container">
    <div class="verify">
      <div class="verify__content">
        <div class="verify__box">
          <div class="verify__header">
            <div class="verify__avatar">
              <IconVerify />
            </div>
            <h1 class="verify__title">
              avangard.grk@gmail.com
            </h1>
            <p class="verify__descr">
              Please enter the code that we sent
              you by email
            </p>
          </div>
          <div class="verify__body">
            <CodeInput
                  v-model="code"
            />
          </div>
          <div class="verify__footer">
            <ButtonSecondary style="width:100%;display:flex;align-items:center;justify-content:center;">
              Log In
            </ButtonSecondary>
            <div class="verify__msg">
              <div class="verify__error">
                <IconDanger />
                <h3 class="verify__error-msg">
                  You entered an incorrect code
                </h3>
              </div>
            </div>
            <h4 class="verify__code">Resent code: <a href="#"> Send (00:54)</a></h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import {
    defineComponent,
    ref
  } from '@nuxtjs/composition-api'
  import CodeInput from "../../components/input/CodeInput.vue";
  export default defineComponent({
    components: {
    CodeInput
  },
  setup() {
    const code = ref('')
    return {
      code
    }
  },
  })
</script>