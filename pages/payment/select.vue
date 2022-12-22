<template>
  <div class="main-container">
  <Breadcrumb>Payment Select</Breadcrumb>
	<PaymentHeader></PaymentHeader>
  <div class="payment-select">
    <div class="payment-select-row">
      <div class="payment-select-row-title">
        Crypto Payments
      </div>
      <div class="payment-select-row-all">
          <NuxtLink to="/payment/crypto" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Bitcoin (BTC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/crypto" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Ethereum (ETC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/crypto" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Litecoin (LTC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/crypto" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>USD Coin</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/crypto" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>TRON (TRX)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/crypto" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Monero (MRL)</span>
        </button>
          </NuxtLink>
      </div>
    </div>
    <div class="payment-select-row">
      <div class="payment-select-row-title">
        Cards Payments
      </div>
      <div class="payment-select-row-all">
          <NuxtLink to="/payment/card" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Bitcoin (BTC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/card" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Ethereum (ETC)</span>
        </button>
          </NuxtLink>
      </div>
    </div>
    <div class="payment-select-row">
      <div class="payment-select-row-title">
        E-Wallets Payments
      </div>
      <div class="payment-select-row-all">
          <NuxtLink to="/payment/card" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Bitcoin (BTC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/card" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Ethereum (ETC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/card" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>Litecoin (LTC)</span>
        </button>
          </NuxtLink>
          <NuxtLink to="/payment/card" style="text-decoration: none;">
        <button>
          <i><IconBitcoin /></i>
          <span>USD Coin</span>
        </button>
          </NuxtLink>
      </div>
    </div>
  </div>
  </div>
</template>