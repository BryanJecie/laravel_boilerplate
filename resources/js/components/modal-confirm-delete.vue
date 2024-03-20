<template>
  <b-modal
    id="modal-confirm-delete"
    hide-header
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    header-class="bg-cream"
    body-class="bg-cream pl-5 pr-5 mcd-box-shadow"
    centered
    content-class="border-top background-cream text-color-brown"
    @show="onShow"
  >
    <template #default>
      <div class="row d-flex justify-content-center mt-3">
        <div class="col-sm-12">
          <h3 class="card-title text-center text-danger">
            CONFIRMATION BEFORE DELETING RECORD
          </h3>
          <p class="card-text text-center mt-2 mb-2">
            Are you sure you want to delete
            <strong> {{ name }} </strong> from
            <strong> {{ moduleName }} </strong> records?
          </p>
        </div>
      </div>

      <div class="row d-flex justify-content-center mt-3 mb-3">
        <div class="col-sm-12 text-center">
          <b-button
            type="reset"
            class="btn-ce-cancel shadow bg-cream mr-2"
            style="width: 100px"
            @click="toNo"
          >
            NO
          </b-button>
          <b-button
            type="submit"
            class="bg-brown shadow btn-ce-submit"
            style="width: 100px"
            @click="toYes"
          >
            YES
          </b-button>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  props: {
    selected_item: {
      type: Object,
    },
    moduleName: {
      type: String,
    },
  },
  data() {
    return {
      name: "",
    };
  },
  methods: {
    onShow() {
      if (Object.values(this.selected_item).length > 0) {
        this.name = this.selected_item.full_name;
      }
    },
    toNo() {
      this.$bvModal.hide("modal-confirm-delete");
      this.$emit("modal-no");
    },
    toYes() {
      //   this.$bvModal.hide("modal-confirm-delete");
      this.$emit("modal-yes");
    },
  },
};
</script>

<style>
.card-title {
  font-weight: bolder;
  color: #785b4c !important;
}

.card-text {
  color: #785b4c !important;
}

.mcd-box-shadow {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
