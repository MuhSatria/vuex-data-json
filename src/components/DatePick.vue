<template>
  <div class="button-box">
    <button type="button" class="button-custom">
      <button class="btn-nav">
        <img src="@/assets/icon/chevron-left.svg" width="18px" alt="">
      </button>
      <label for="list" class="btn-label">Maret 2020</label>
      <button class="btn-nav">
        <img src="@/assets/icon/chevron-right.svg" width="18px" alt="">
      </button>
    </button>
    <div class="select-data">
      <ul role="listbox" class="ul-select">
        <li role="option" arial-selected="false" class="li-select">
          <button type="button">
            <span>Buku</span>
          </button>
        </li>
        <li role="option" arial-selected="false" class="li-select">
          <button type="button">
            <span>Majalah</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>

.button-box {
  .button-custom {
    border: none;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
    display: flex;
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    background-color: white;
    text-align: left;
    padding: 0 4px 0 8px;
    justify-content: space-between;

    .btn-nav {
      border: none;
      background-color: white;

      &:focus {
        background-color: #f3f4f5;
      }
    }
  }

  .select-data {
    transition: all 280ms ease-out;
    // width: 255px;
    padding: 0 4px;
    overflow: auto;
    position: absolute;
    background-color: white;
    border: 1px solid #f3f4f5;
    border-radius: 0 0 8px 8px;
    transform-origin: center top;
    scroll-behavior: smooth;
    opacity: 0;
    visibility: hidden;
    transform: translateY(10px);
    // z-index: 200;

    .ul-select {
      list-style: none;
      padding: 0;
      margin: 4px 0;

      .li-select {
        cursor: pointer;
        list-style: none;
        outline: none;
        position: relative;
        min-height: 40px;
        display: flex;
        align-items: center;
        padding: 4px 0;

        button {
          display: flex;
          -webkit-box-align: center;
          align-items: center;
          position: relative;
          padding: 6px 8px 6px 5px;
          color: rgba(49, 53, 59, 0.96);
          background-color: rgb(255, 255, 255);
          font-size: 14px;
          font-weight: 400;
          min-height: 32px;
          border-top: none;
          border-right: none;
          border-bottom: none;
          border-image: initial;
          text-align: left;
          line-height: 1.33;
          width: 100%;
          cursor: pointer;
          border-radius: 4px;
          border-left: 3px solid transparent;
          appearance: none;

          &:hover {
            background-color: #f3f4f5;
          }
        }

        &::before {
          content: "";
          position: absolute;
          left: -4px;
          top: 0;
          height: 100%;
          width: 3px;
          opacity: 0;
        }
      }
    }
  }
}
</style>
