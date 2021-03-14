<template>
  <div class="card py-3 px-4">
    <div class="row">
      <div class="col-xl-9 col-lg-12 col-sm-12 product-desc">
        <div class="row">
          <div class="col-xl-1 col-lg-2 col-sm-12 section">
            <div class="icon">
              <img src="@/assets/icon/box-seam.svg" alt="">
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-sm-12 section">
            <div class="d-flex flex-column box-desc">
              <div class="title">{{ title }}</div>
              <div class="d-flex">
                <img src="@/assets/icon/geo-alt.svg" width="16px" alt="">
                <p class="mb-0 mx-1">{{ location }}</p>
              </div>
              <a class="mt-auto align-self-start link-product" href="#">{{ seri }}</a>
            </div>
          </div>
          <div class="col-xl-8 col-lg-6 col-sm-12 section">
            <div class="d-flex flex-column box-badge">
              <div class="d-flex box-group">
                <span v-if="vertified === 1" class="badge bg-success mb-auto p-2">VERTIFIED</span>
                <span v-else class="badge bg-secondary mb-auto p-2">NOT VERTIFIED</span>
                <p class="label-badge mb-0 mx-3">{{ total }} Cartons</p>
                <p class="label-badge mb-0 ms-auto">Today {{ time }} AM</p>
              </div>
              <div class="d-flex box-group mt-auto">
                <span  class="badge bg-warning mb-auto p-2">
                  <img src="@/assets/icon/check-2.svg" width="10px" alt="">
                  AVAILABLE</span>
                <span v-if="agen === 1" class="badge bg-info mb-auto p-2 mx-3">PREVIOUS CUSTOM</span>
                <span class="badge bg-primary mb-auto p-2 mx-3">NEWLY JOINED</span>
                <div class="detail ms-auto">Detail</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-lg-12 col-sm-12 product-price">
        <div class="d-flex flex-column box-price">
          <button class="btn-cta btn-fill">HAPUS FAVORIT</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'title', 'location', 'seri', 'price', 'total', 'time', 'vertified', 'status', 'agen', 'wishlist'],
  computed: {
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/mixins';

.card {
  border: none;
  border-radius: 20px;
  margin: 10px auto;

  .product-desc {

    @include breakpoint-down (small) {
      padding-bottom: 20px;
    }

    .section {

      @include breakpoint-up (large) {
        height: 135px;
      }

      @include breakpoint-down (medium) {
        &:nth-child(1n+2) {
          margin-top: 20px;
        }
      }

      .icon {
        background-color: $bgIcon;
        width: 45px;
        height: 45px;

        img {
          width: 40px;
          margin: auto;
          display: block;
          padding: 2px 0;
        }
      }

      .box-badge {
        height: 100%;

        .box-group {

          @include breakpoint-down (medium) {
            &:nth-child(2) {
              margin-top: 10px !important;
            }

          }
          .label-badge {
            font-weight: 600;
          }
        }
      }

      .box-desc {
        height: 100%;

        .title {
          font-size: 21px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .link-product {
          color: $mainFont;
        }
      }
    }
  }

  .product-price {

    @include breakpoint-up (large) {
      padding: 0 25px;
    }

    @media only screen and (min-width: 1200px) {
      border-left: 1px solid $greyWhite;
    }

    @media only screen and (max-width: 1199px) {
      border-top: 1px solid $greyWhite;
      padding-top: 10px;
      margin-top: 20px;
    }

    .box-price {
      height: 100%;

      .btn-cta {
        width: 100%;
        border: none;
        border-radius: 10px;
        padding: 10px;
        margin-top: auto;
      }

      .btn-fill {
        background-color: #54DEB5;
        color: white;
      }

      .btn-outline {
        background-color: white;
        border: 1px solid $btnActive;
        color: $btnActive;
      }
    }
  }
}
</style>
