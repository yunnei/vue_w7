<template>
  <div class="position-fixed top-0 end-0" style="z-index: 1100">
    <div
      v-for="(message, key) in messages"
      :key="key"
      class="toast-container m-2"
    >
      <div
        class="toast show text-white border-0"
        :class="`bg-${message.style}`"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="d-flex">
          <div class="toast-body">{{ message.content }}</div>
          <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            aria-label="Close"
            @click="toastClear(key)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from "@/utils/emitter.js";
export default {
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    toastShow() {
      setTimeout(() => {
        this.messages.shift();
      }, 5000);
    },
    toastClear(index) {
      this.messages.splice(index, 1);
    },
  },
  mounted() {
    emitter.on("push-message", (message) => {
      const { style = "success", content } = message;
      this.messages.push({ style, content });
      this.toastShow();
    });
  },
};
</script>
