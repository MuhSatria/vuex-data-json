<template>
  <div class="page">
    <nav class="navbar navbar-vertical fixed-left">
      <div class="menu text-white">
        <div class="menu__item">Logo</div>
        <div class="menu__item">
          <img src="@/assets/icon/house.svg" alt="" width="24px" height="24px">
          <div class="item">Search Hub</div>
        </div>
        <div class="menu__item">
          <img src="@/assets/icon/box-seam.svg" alt="" width="24px" height="24px">
          <div class="item">Your Product</div>
        </div>
        <div class="menu__item">
          <img src="@/assets/icon/cart.svg" alt="" width="24px" height="24px">
          <div class="item">Selling Mode</div>
        </div>
        <div class="menu__item">
          <img src="@/assets/icon/truck.svg" alt="" width="24px" height="24px">
          <div class="item">Orders</div>
        </div>
        <div class="menu__item">
          <img src="@/assets/icon/chat-left.svg" alt="" width="24px" height="24px">
          <div class="item">Messages</div>
        </div>
        <div class="menu__item">
          <img src="@/assets/icon/bookmark.svg" alt="" width="24px" height="24px">
          <div class="item">Bookmarks</div>
        </div>
        <div class="menu__item">
          <img src="@/assets/icon/university.svg" alt="" width="24px" height="24px">
          <div class="item">Account</div>
        </div>
      </div>
    </nav>
    <div class="main-content">
      <div class="d-flex flex-wrap">
        <div class="col-xl-9 col-lg-12 col-sm-12 content container-fluid">
          <div class="content__header d-flex justify-content-between align-items-end">
            <h3>Cari Produk</h3>
            <p>Wellcome Back! <b v-text="userName"></b></p>
          </div>
          <!-- button cta -->
          <div class="row mt-5 mb-4">
            <div class="col-6 col-lg-6 col-xl-3 btn-select">
              <button-list />
            </div>
            <div class="col-6 col-lg-6 col-xl-3 btn-select">
              <button-city />
            </div>
            <div class="col-6 col-lg-6 col-xl-3 btn-select">
              <date-pick />
            </div>
            <div class="col-6 col-lg-6 col-xl-2 btn-select">
              <latest />
            </div>
            <div class="col-12 col-lg-12 col-xl-1 btn-select">
              <search />
            </div>
          </div>
          <!-- product -->
          <div class="content__product">
            <div class="card py-3 px-4">
              <div class="row">
                <div class="col-lg-9 col-md-8 col-12 desc">
                  <div class="row">
                    <div class="col-xl-1 col-lg-2 col-sm-12 desc__item">
                      <div class="box">
                        <img src="@/assets/icon/box-seam.svg" alt="">
                      </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-sm-12 desc__item">
                      <div class="d-flex flex-column max-height">
                        <div class="title">AJWA DATES</div>
                        <div class="d-flex">
                          <img src="@/assets/icon/geo-alt.svg" width="16px" alt="">
                          <p class="mb-0 mx-1">Jakarta</p>
                        </div>
                        <a class="mt-auto align-self-start link-product" href="#">Product ID-AD-34566</a>
                      </div>
                    </div>
                    <div class="col-xl-8 col-lg-6 col-sm-12 desc__item">
                      <div class="d-flex flex-column badge-group max-height">
                        <div class="d-flex box-group">
                          <span class="badge bg-success mb-auto p-2">VERTIFIED</span>
                          <p class="label-badge mb-0 mx-3">450 Cartons</p>
                          <p class="label-badge mb-0 ms-auto">Today 10:45 AM</p>
                        </div>
                        <div class="d-flex box-group mt-auto">
                          <span class="badge bg-warning mb-auto p-2">
                            <img src="@/assets/icon/check-2.svg" width="10px" alt="">
                            AVAILABLE</span>
                          <span class="badge bg-info mb-auto p-2 mx-3">PREVIOUS CUSTOM</span>
                          <div class="detail ms-auto">Detail</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-4 col-12 price">
                  <div class="label d-flex justify-content-between">
                    <p class="mb-0">Asking Price</p>
                    <img src="@/assets/icon/bookmark-dark.svg" width="20px" alt="">
                  </div>
                  <h3>Rs. 9670</h3>
                  <button class="btn-cta">FAVORITKAN</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-12 col-sm-12 information">
          <div class="profile">
            <div class="card container-fluid">
              <div class="d-flex justify-content-between">
                <div class="account">
                  <img src="@/assets/2145.jpg" width="50px" alt="">
                  <a href="#">Logout</a>
                </div>
                <div class="cta">
                  <img src="@/assets/icon/suit-heart-fill.svg" width="25px" alt="">
                  <img src="@/assets/icon/three-dots.svg" width="25px" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="tips">
            <div class="card">
              <h5>ESSENTIAL TIPS</h5>
              <p>Unless it's a core competency of you brand,
                dont try to be clever in your product description,
                sales page, or product title</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonList from '../../components/ButtonList.vue'
import ButtonCity from '../../components/ButtonCity.vue'
import Latest from '../../components/Lates'
import DatePick from '../../components/DatePick'
import Search from '../../components/Search'
export default {
  components: {
    ButtonList,
    ButtonCity,
    Latest,
    DatePick,
    Search
  },
  data () {
    return {
      userName: 'Hiten',
      product: [
        {
          id: 1,
          title: 'Majalah Ekonomi',
          lokasi: 'Jakarta Pusat',
          seri: 'Product ID-AD-0004',
          harga: 9620,
          jumlah: '200 Buku',
          waktu: '02:00',
          status: 1,
          stock: 1,
          agen: 2
        },
        {
          id: 2,
          title: 'Komik',
          lokasi: 'Bekasi',
          seri: 'Product ID-B-0004',
          harga: 4620,
          jumlah: '50 Buku',
          waktu: '12:00',
          status: 1,
          stock: 1,
          agen: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixins';

.max-height {
  height: 100%;
}

.page {
  display: block;

  .navbar-vertical {
    background-color: $secondary;

    @include breakpoint-up (medium) {
      display: block;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: 100%;
      max-width: 250px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 40px;
      overflow-y: auto;
      border-radius: 50px 0 0 0;
      flex-flow: row nowrap;
      justify-content: start;
    }

    .menu {

      @include breakpoint-up (medium) {
        height: 100%;
        display: flex;
        flex-direction: column;
      }

      &__item {
        display: flex;

        img {
          margin-right: 20px;
        }

        @include breakpoint-up (medium) {
          padding: 20px 10px;

          &:nth-child(7) {
            margin-top: auto;
          }
        }
      }
    }
  }

  .main-content {
    display: block;
    height: 100vh;

    @include breakpoint-up (medium) {
      margin-left: 250px;
      background-color: $secondary;
    }

    .content {
      height: 100vh;
      color: $mainFont;
      background-color: $greyWhite;

      @include breakpoint-up (medium) {
        border-radius: 50px 0 0 0;
      }

      &__header {
        padding-top: 40px;

        h3 {
          margin-bottom: 0;
        }

        p {
          margin-bottom: 0;
        }
      }
      // control header
      .btn-select {

        @include breakpoint-down (large) {

          &:nth-child(1n+3) {
            margin-top: 10px;
          }
        }
        .btn-custom-select {

          button {
            width: 100%;
          }
        }
      }

      &__product {

        .card {
          background-color: white;
          border: none;
          border-radius: 20px;
          margin-top: 15px;

          .desc {

            @include breakpoint-down (small) {
              padding-bottom: 20px;
            }

            &__item {

              @include breakpoint-up (large) {
                height: 130px;
              }

              @include breakpoint-down (medium) {
                &:nth-child(1n+2) {
                  margin-top: 20px;
                }
              }
              .box {
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

              .title {
                font-size: 21px;
                font-weight: 600;
                margin-bottom: 10px;
              }

              .link-product {
                color: $mainFont;
              }

              .badge-group {

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
            }
          }

          .price {

            @include breakpoint-up (large) {
              padding: 0 25px;
            }

            @include breakpoint-up (medium) {
              border-left: 1px solid $greyWhite;
            }

            @include breakpoint-down (small) {
              border-top: 1px solid $greyWhite;
              padding-top: 10px;
            }

            .label {
              margin-bottom: 15px;
            }

            .btn-cta {
              width: 100%;
              background-color: $btnActive;
              color: white;
              border: none;
              border-radius: 10px;
              padding: 10px;
              margin-top: 10px;

              &:focus {
                background-color: white;
                border: 1px solid $btnActive;
                color: $btnActive;
              }
            }
          }
        }
      }
    }

    .information {
      background-color: $greyWhite;
      padding: 20px;

      .profile {

        .card {
          padding: 20px;
          border-radius: 20px;
          border: none;

          .account {

            img {
              margin-right: 10px;
            }

            a {
              text-decoration: none;
              color: $mainFont;
            }
          }

          .cta {
            margin: auto 0;

            img {
              &:nth-child(1) {
                margin-right: 10px;
              }
            }
          }
        }
      }

      .tips {
        padding: 20px 0;

        .card {
          padding: 30px 20px;
          border: none;
          border-radius: 20px;
          background-color: white;
          height: 350px;

          h5 {
            color: orange;
          }

          p {
            text-align: left;
          }
        }
      }
    }
  }
}
</style>
