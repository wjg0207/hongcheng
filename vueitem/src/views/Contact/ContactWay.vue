<!--  -->
<template>
  <div class="contact">
    <div class="contact_list">
      <ul>
        <li>
          <span>手机 : 400-9675-186</span>
        </li>
        <li>
          <span>传真 : 028-86912595</span>
        </li>
        <li>
          <span>地址 : 四川成都市金牛区茶店子蜀西路36号金路天下</span>
        </li>
        <li>
          <span>邮编 : 610011</span>
        </li>
      </ul>
      <div class="map">
        <img src="../../assets/img/map.png" />
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang='less' scoped>
.contact {
  margin-left: 20px;
  float: left;
  margin-top: 20px;
  .contact_list {
    ul {
      width: 600px;
      li {
        width: 600px;
        font-size: 12px;
        margin-top: 5px;
      }
      li:first-child span::before {
        content: url(../../assets/img/tel.png);
        width: 9px;
        height: 12px;
        margin-right: 10px;
      }
      li:nth-child(2) span::before {
        content: url(../../assets/img/fax.png);
        width: 12px;
        height: 12px;
        margin-right: 8px;
      }
      li:nth-child(3) span::before {
        content: url(../../assets/img/addr.png);
        width: 9px;
        height: 12px;
        margin-right: 10px;
      }
      li:last-child span::before {
        content: url(../../assets/img/email.png);
        width: 14px;
        height: 12px;
        margin-right: 5px;
      }
    }
    .map {
      img {
        width: 900px;
        height: 300px;
      }
    }
  }
}
</style>