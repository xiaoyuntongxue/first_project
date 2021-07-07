<template>
  <div class="home">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>
        <i class="el-icon-s-home"></i>
        首页
      </el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 页面主体部分 -->
    <div class="home_main">
      <div class="main_header">
        <div class="header_div" v-for="view in overView" :key="view.title">
          <div class="div_icon">
            <i :class="view.icon"></i>
          </div>
          <div class="div_num">
            <span class="num">{{view.total}}</span>
            <span>{{view.title}}</span>
          </div>
        </div>
      </div>
      <div class="main_body">
        <div class="body_left">
          <div class="left_header">部门概况</div>
          <div class="left_body">
            <el-table
              :data="tableDataF"
              style="width: 100%"
              height="300">
              <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
              <el-table-column
                prop="depName"
                label="部门名称"
                align="center">
              </el-table-column>
              <el-table-column
                prop="peopleNum"
                label="部门人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="proNum"
                label="项目数量"
                align="center">
              </el-table-column>
              <el-table-column
                prop="depMaster"
                label="部长"
                align="center">
              </el-table-column>
              <el-table-column
                prop="fuMaster"
                label="副部长"
                align="center">
              </el-table-column>
            </el-table>
            <el-table
              :data="tableDataS"
              style="width: 100%; margin-top: 15px;"
              height="300">
              <el-table-column type="index" label="序号" width="60" align="center"></el-table-column>
              <el-table-column
                prop="depName"
                label="部门名称"
                align="center">
              </el-table-column>
              <el-table-column
                prop="peopleNum"
                label="部门人数"
                align="center">
              </el-table-column>
              <el-table-column
                prop="proNum"
                label="项目数量"
                align="center">
              </el-table-column>
              <el-table-column
                prop="depMaster"
                label="部长"
                align="center">
              </el-table-column>
              <el-table-column
                prop="fuMaster"
                label="副部长"
                align="center">
              </el-table-column>
            </el-table>
          </div>
        </div>
        <div class="body_right">
          <div class="right_top">
            <div>项目总数 : 45</div>
            <div>待完成数 : 15</div>
            <div>已完成数 : 30</div>
            <div class="large_num">66.7%<span style="font-size: 20px;"> 完成率</span></div>
          </div>
          <div class="right_top right_bottom">
            <div>项目总数 : 80</div>
            <div>待完成数 : 20</div>
            <div>已完成数 : 60</div>
            <div class="large_num">75%<span style="font-size: 20px;"> 完成率</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mock from '../../mock/mock'
export default {
  name: 'Home',
  data() {
    return {
      // 总览
      overView: [
        {icon: 'el-icon-s-custom',total: 588,title: '人员总数'},
        {icon: 'el-icon-s-shop',total: 20,title: '部门数量'},
        {icon: 'el-icon-s-order',total: 100,title: '项目总数'},
        {icon: 'el-icon-s-claim',total: 60,title: '已成交项目'},
      ],
      tableDataF: [], // 第一个表格数据
      tableDataS: [], // 第二个表格数据
    }
  },
  created() {
    this.getTableDataF()
    this.getTableDataS()
  },
  methods: {
    getTableDataF() {
      this.$http.post('/hxy/project/getTableDataF').then(res => {
        this.tableDataF = res.data.list
      }).catch(err => {
        console.log(err);
      })
    },
    getTableDataS() {
      this.$http.post('/hxy/project/getTableDataS').then(res => {
        this.tableDataS = res.data.list
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  .home_main {
    margin-top: 15px;
    .main_header {
      display: flex;
      justify-content: space-between;
      .header_div {
        width: 24%;
        height: 150px;
        background-color: #fff;
        border-radius: 10px;
        .div_icon {
          float: left;
          width: 40%;
          height: 100%;
          text-align: center;
          line-height: 150px;
          font-size: 60px;
          background-color: skyblue;
          border-radius: 10px 0 0 10px;
          color: #fff;
        }
        .div_num {
          float: left;
          width: 60%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #ccc;
          font-size: 16px;
          .num {
            font-size: 50px;
          }
        }
      }
    }
    .main_body {
      margin-top: 15px;
      display: flex;
      .body_left {
        width: 50%;
        // background-color: pink;
        margin-right: 20px;
        .left_header {
          width: 100%;
          padding: 10px 0;
          margin-bottom: 10px;
          border-bottom: 1px solid #bbb;
          color: #333;
        }
      }
      .body_right {
        width: 50%;
        .right_top {
          height: 270px;
          background-color: #42CAC0;
          padding: 35px 0 25px;
          border-radius: 10px;
          color: #fff;
          font-size: 20px;
          letter-spacing: 1px;
          div {
            margin: 15px 50px;
          }
          .large_num {
            box-sizing: border-box;
            font-size: 50px;
            margin: 10px 0;
            padding: 30px 50px;
            background-color: rgba(0, 0, 0, .1);
          }
        }
        .right_bottom {
          background-color: #A6D669;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>
