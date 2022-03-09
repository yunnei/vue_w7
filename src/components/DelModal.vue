<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">刪除產品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body text-center">
          是否刪除
          <strong v-if="item.title" class="text-danger">{{
            item.title
          }}</strong>
          <strong v-else class="text-danger">{{ item.id }}</strong>
          ?
          <br />
          （注意：刪除後無法復原。）
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-danger" @click="delItem">
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      modal: {},
    };
  },
  methods: {
    delItem() {
      this.$emit("del-item");
    },
  },
  mounted() {
    this.modal = this.$refs.modal;
  },
};
</script>
