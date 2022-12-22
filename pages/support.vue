<template>
  <div class="main-container">
    <Breadcrumb>Support</Breadcrumb>
    <div class="page-support">
        <SupportCategory
          v-for="(category, categoryIndex) in categories"
          :key="categoryIndex"
          :data="category"
        >
          <SupportElement 
            v-for="(element, elementIndex) in category.elements"
            :key="elementIndex"
            :data="element"
          />
        </SupportCategory>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const categories = [
      {
        title: 'Support Services',
        elements: [
        {
          icon: '/images/support/telegram.svg',
          title: 'Support Telegram',
          status: 1,
          button: 'Go To Support'
        },
        {
          icon: '/images/support/discord.svg',
          title: 'Support Discord',
          status: 1,
          button: 'Go To Support'
        }
        ]
      },
      {
        title: 'Installation help',
        elements: [
        {
          icon: '/images/support/telegram.svg',
          title: 'Microsoft Visual C++ 2005-2019',
          description: 'Package with components',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'DriverPack',
          description: 'Installing all drivers',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'Microsoft Net Framework 4.7.1',
          description: 'Package with components',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'NVIDIA',
          description: 'Update your video driver',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'AMD',
          description: 'Update your video driver',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'Directx 12',
          description: 'Package with components',
          button_outline: 'Download'
        },
        ]
      },
      {
        title: 'Windows Defenders',
        elements: [
        {
          icon: '/images/support/telegram.svg',
          title: 'Defender Control',
          description: 'Package with components',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'Disable Secure boot in bios system',
          description: 'Installing all drivers',
          button_outline: 'Watch'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'Auto-Disable Windows SmartScreen',
          description: 'Package with components',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'Auto-Disable User Account Control (UAC)',
          description: 'Update your video driver',
          button_outline: 'Download'
        }
        ]
      },
      {
        title: 'Support programs',
        elements: [
        {
          icon: '/images/support/telegram.svg',
          title: 'WinRar',
          description: 'Package with components',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'LightShot',
          description: 'Installing all drivers',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'AnyDesk',
          description: 'Package with components',
          button_outline: 'Download'
        },
        {
          icon: '/images/support/telegram.svg',
          title: 'TeamViewer',
          description: 'Update your video driver',
          button_outline: 'Download'
        }
        ]
      }
    ];

    return { categories }
  },
})
</script>
