<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="modal-title text-white">
            <span v-if="isNew">新增優惠券</span>
            <span v-else>編輯優惠券</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">名稱</label>
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="請輸入優惠券名稱"
              v-model="couponTemp.title"
            />
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">優惠碼</label>
            <input
              type="text"
              class="form-control"
              id="code"
              placeholder="請輸入優惠碼"
              v-model="couponTemp.code"
            />
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">折扣</label>
            <input
              type="number"
              min="0"
              max="100"
              class="form-control"
              id="percent"
              placeholder="請輸入折扣百分比"
              v-model="couponTemp.percent"
            />
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">期限</label>
            <input
              type="date"
              class="form-control"
              id="due_date"
              v-model="due_date"
            />
          </div>
          <div class="form-check form-switch">
            <input
              class="form-check-input me-1"
              type="checkbox"
              role="switch"
              id="couponTemp.id"
              v-model="couponTemp.is_enabled"
              :true-value="1"
              :false-value="0"
            />
            <label class="form-check-label" :for="couponTemp.id">
              <span v-if="couponTemp.is_enabled">啟用</span>
              <span v-else>不啟用</span>
            </label>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="updateCoupon">
            <span v-if="isNew">新增</span>
            <span v-else>儲存</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["coupon", "isNew"],
  data() {
    return {
      couponTemp: {
        is_enabled: 0,
      },
      due_date: "",
      modal: {},
    };
  },
  watch: {
    coupon() {
      this.couponTemp = this.coupon;
      this.due_date = new Date(this.couponTemp.due_date * 1000)
        .toISOString()
        .split("T")[0];
    },
    due_date() {
      this.couponTemp.due_date = new Date(this.due_date).getTime() / 1000;
    },
  },
  methods: {
    updateCoupon() {
      console.log(this.couponTemp);
      this.$emit("update-coupon", this.couponTemp);
    },
  },
  mounted() {
    this.modal = this.$refs.modal;
  },
};
</script>
