<template>
    <div class="pages">
        <el-col :span="24" class="container">
            <el-container style="height:100%" >
            <el-aside width="199px"  class="leftView">
                <div class="logo">
                    <img src="../assets/images/nav_logo.png" alt="">
                </div>
                <el-menu  @open="handleOpen"  @close="handleClose" :router='true' default-active='/MeetingList' :unique-opened='true' text-color='#FF8893'  active-text-color='#ffff'>
                     <el-menu-item index="/PeopleManagement">
                        <i class="icon nav_icon_user_normal nav_icon_user_active"></i>
                        <span slot="title">人员管理</span>
                    </el-menu-item>
                    <el-submenu index="11">
                        <template slot="title"><i class="icon nav_icon_group_normal nav_icon_group_active"></i>分组管理</template>
                        <el-menu-item-group>
                            <el-menu-item index="/GroupManagement" >组管理</el-menu-item>
                            <el-menu-item index="/Member">组成员管理</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="/MeetingManagement">
                        <i class="icon nav_icon_mg_normal nav_icon_mg_active"></i>
                        <span slot="title">例行会议室管理</span>
                    </el-menu-item>
                </el-menu>
            </el-aside>
           <el-container class="sub-container">
               <router-view style="width:100%"></router-view>
           </el-container>
        </el-container>
        </el-col>
    </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {}
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style lang='less' >
.el-menu-item-group__title{
    display: none;
}
.el-menu-item-group{
    text-align: left;
    box-sizing: border-box;
    text-indent: 38px;
 }
.pages /deep/ .container,
.pages /deep/ .section {
  height: 100%;
}
.pages /deep/ .el-submenu .el-submenu__icon-arrow{
    display: none;
}
.pages /deep/.el-menu{border:none;background: none;text-align: center;font-size: 16px;}
.pages /deep/ .el-menu-item{
    font-size: 16px;
}
.pages /deep/ .el-menu-item:focus, .pages /deep/ .el-menu-item:hover,.pages /deep/ .el-submenu__title:hover {
    outline: 0;
    background-color: #690C14;
}
.pages /deep/ .el-submenu__title{
    font-size: 16px;
}
.pages /deep/.el-dropdown{
    width: 146px;
    height: 26px;
    line-height: 26px;
    color: #fff;
    border-radius: 2px;
}
.pages /deep/.el-dropdown:hover{
    font-size: 14px;
    color: #FF8893;
    cursor: pointer;
    background: #690C14;
}
.pages /deep/.el-dropdown-menu{
    left:43px !important;
}
.leftView{
    background: url('../assets/images/nav_bg.png') no-repeat;
    background-size: 100% 100%;
}
.pages /deep/.el-header, .pages /deep/.el-footer {
    background-color: rgb(194, 195, 197);
    color: #333;
    line-height: 60px;
}
.pages /deep/ .sub-container{
    padding-left:30px;
}
.pages .el-menu-item-group .el-menu-item {
    font-size: 14px;
}
.pages{
    background:#fff;
    height: 100%;
    .leftView{
          .is-active{
               .icon.nav_icon_user_active{
                   background: url('../assets/images/nav_icon_user_active.png') no-repeat !important;
                   background-size: 100% 100%;
               }
               .icon.nav_icon_mg_active{
                   background: url('../assets/images/nav_icon_mg_active.png') no-repeat !important;
                   background-size: 100% 100%;
               }
               .icon.nav_icon_user_active{
                   background: url('../assets/images/nav_icon_user_active.png') no-repeat !important;
                   background-size: 100% 100%;
               }
               .icon.nav_icon_group_active{
                   margin-right: 7px;
                   background: url('../assets/images/nav_icon_group_active.png') no-repeat !important;
                   background-size: 100% 100%;
               }
           }
        .icon{
           display: inline-block;
           width: 20px;
           height: 18px;
           &.nav_icon_user_normal{
               background: url('../assets/images/nav_icon_user_normal.png') no-repeat;
               background-size: 100% 100%;
           }
            &.nav_icon_mg_normal{
               background: url('../assets/images/nav_icon_mg_normal.png') no-repeat;
               background-size: 100% 100%;
           }
           &.nav_icon_group_normal{
               margin-right: 7px;
               background: url('../assets/images/nav_icon_group_normal.png') no-repeat;
               background-size: 100% 100%;
           }
        }
    }
    .logo{
      margin-top:22px;
      margin-bottom: 30px;
      text-align: center;
    }
}
.fade-enter-active,
  .fade-leave-active {
    transition: all .2s ease;
  }
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>
