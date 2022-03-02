<template>
  <header class="syw-header-section">
    <div class="container">
      <div class="nav-header">
        <nav class="syw-menu-wrap" role="navigation">
          <ul class="syw-primary-menu sf-menu">
            <li>
              <router-link class="" :to="`/`">Home</router-link>
            </li>
            <li>
              <router-link class="" :to="`/weddingHall`">WeddingHall</router-link>
            </li>
            <li>
              <router-link class="" :to="`/gallery`">Gallery</router-link>
            </li>
            <li>
              <router-link class="" :to="`/guestBook`">GuestBook</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'Navigation'
};
</script>
<style>
.syw-header-section {
  padding: 0;
  position: relative;
  left: 0;
  width: 100%;
  z-index: 1022;
  background: #fff;
}

.nav-header {
  position: relative;
  float: right;
  width: 100%;
}

.syw-menu-wrap {
  position: relative;
  z-index: 2;
  display: block;
  float: right;
  margin-top: 15px;
}

.syw-menu-wrap .sf-menu a {
  padding: 1em .75em;
}

.syw-primary-menu > li > ul li.active > a {
  color: #F69D9D !important;
}

.syw-primary-menu > li > .sf-with-ul:after {
  border: none !important;
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  float: right;
  margin-right: -0px;
  top: 50%;
  font-size: 12px;
  margin-top: -7px;
  content: "\e922";
  color: rgba(0, 0, 0, 0.5);
}

.syw-primary-menu > li > ul li {
  position: relative;
}

.syw-primary-menu > li > ul li > .sf-with-ul:after {
  border: none !important;
  font-family: 'icomoon';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  float: right;
  margin-right: 10px;
  top: 20px;
  font-size: 12px;
  content: "\e924";
  color: rgba(0, 0, 0, 0.5);
}

.syw-primary-menu .syw-sub-menu {
  padding: 10px 7px 10px;
  background: #fff;
  left: 0;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  -ms-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  -o-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.syw-primary-menu .syw-sub-menu > li > .syw-sub-menu {
  left: 100%;
}

.syw-primary-menu .syw-sub-menu:before {
  position: absolute;
  top: -9px;
  left: 20px;
  width: 0;
  height: 0;
  content: '';
}

.syw-primary-menu .syw-sub-menu:after {
  position: absolute;
  top: -8px;
  left: 21px;
  width: 0;
  height: 0;
  border-right: 8px solid transparent;
  border-bottom: 8px solid #fff;
  border-bottom: 8px solid white;
  border-left: 8px solid transparent;
  content: '';
}

.syw-primary-menu .syw-sub-menu .syw-sub-menu:before {
  top: 6px;
  left: 100%;
}

.syw-primary-menu .syw-sub-menu .syw-sub-menu:after {
  top: 7px;
  right: 100%;
  border: none !important;
}
</style>