<template>
  <div class="main-container">
  <Breadcrumb>Payment Support</Breadcrumb>
	<PaymentHeader></PaymentHeader>

  <div class="payment-support">
      <div class="payment-support-title">
        Support Services
      </div>

      <div class="payment-support-row">
        <div class="payment-support-row-block">
          <div class="payment-support-row-block-info">
            <div class="payment-support-row-block-info-text">
              <i><IconSupportTelegram /></i>
              <div>
                <span class="payment-support-row-block-info-text-title">Support Telegram</span>
                <span class="payment-support-row-block-info-text-status">Online</span>
              </div>
            </div>
          </div>

          <div class="payment-support-row-block-btn">
            <ButtonSecondary>
              Go To Support
            </ButtonSecondary>
          </div>
        </div>
        <div class="payment-support-row-block">
          <div class="payment-support-row-block-info">
            <div class="payment-support-row-block-info-text">
              <i><IconSupportDiscord /></i>
              <div>
                <span class="payment-support-row-block-info-text-title">Support Discord</span>
                <span class="payment-support-row-block-info-text-status">Online</span>
              </div>
            </div>
          </div>

          <div class="payment-support-row-block-btn">
            <ButtonSecondary>
              Go To Support
            </ButtonSecondary>
          </div>
        </div>
      </div>

      <div class="payment-support-notification">
        <div>
          <i><IconSupportShield /></i>
          <span>Closed Invites</span>
        </div>
        <p>In order to purchase this product, you need to write to <span class="ds">Discord</span> or <span class="tg">Telegram</span>.</p>
      </div>
  </div>
  </div>
</template>