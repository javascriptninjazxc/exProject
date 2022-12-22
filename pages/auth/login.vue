<template>
  <div class="main-container">
    <div class="login">
      <div class="login__content">
        <form action="" class="form" method="POST">
          <div class="form__header">
            <div class="form__avatar">
              <IconAvatar />
            </div>
            <h1 class="form__title">
              Log In
            </h1>
            <p class="form__descr">
              We will create an account, if you do not have one, just enter your mail
            </p>
          </div>
          <div class="form__body">
            <div class="form__data">
              <span class="form__icon"><IconMessage/></span>
              <input type="email" class="form__input" placeholder="Email">
              <!--<p class="form__error">Incorrect input</p> < -- Error MSG -->
            </div>
          </div>
          <div class="form__footer">
            <div class="form__captcha">
              <h3 class="form__captcha-text">
                капча
              </h3>
            </div>
            <Button style="width:100%;display:flex;align-items:center;justify-content:center;">
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>