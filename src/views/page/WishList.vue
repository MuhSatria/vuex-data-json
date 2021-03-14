<template>
  <div class="page">
    <nav class="navbar navbar-vertical navbar-mobile fixed-left">
      <div class="menu text-white">
        <div class="menu__item logo">Logo</div>
        <div class="menu__item">
          <router-link to="/" class="d-flex">
            <img src="@/assets/icon/house.svg" alt="" width="24px" height="24px">
            <div class="item">Search Hub</div>
          </router-link>
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
      <div class="menu-mobile">
        <img src="@/assets/icon/list.svg" alt="">
      </div>
    </nav>
    <div class="main-content">
      <div class="d-flex flex-wrap">
        <div class="col-xl-9 col-lg-12 col-sm-12 content container-fluid">
          <div class="content__header d-flex justify-content-between align-items-end">
            <h3>Favorit</h3>
            <p>Wellcome Back! <b v-text="userName"></b></p>
          </div>
          <!-- product -->
          <div class="content__product mt-5 mb-4">
            <card-wishlist
            v-for="(product, index) in wish"
            :key="wish[index].id"
            :title="wish[index].title"
            :location="wish[index].location"
            :seri="wish[index].seri"
            :price="wish[index].price"
            :total="wish[index].total"
            :time="wish[index].time"
            :vertified="wish[index].vertified"
            :status="wish[index].status"
            :agen="wish[index].agen"
            :wishlist="wish[index].wishlist"/>
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
import CardWishlist from '../../components/CardWishlist'
export default {
  components: {
    CardWishlist
  },
  data () {
    return {
      userName: 'Hiten'
    }
  },

  computed: {
    wish () {
      return this.$store.getters.inWish.map((wishIten) => {
        return this.$store.getters.product.find((productItem) => {
          return wishIten === productItem.id
        })
      })
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

  .navbar-mobile {
    @media only screen and (max-width: 767px) {
      height: 80px;

      .menu {
        .logo {
          font-size: 30px;
          padding: 10px 20px;
        }

        &__item {
          &:nth-child(1n+2) {
            display: none;
          }
        }
      }

    }

    .menu-mobile {
      display: none;

      @media only screen and (max-width: 767px) {
        display: block;
        padding: 0 20px;

        img {
          width: 35px;
          cursor: pointer;
        }
      }
    }
  }

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
        cursor: pointer;

        a {
          text-decoration: none;
          color: white;
          &:focus {
            font-weight: 600;
          }
        }

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
      // overflow: auto;

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
