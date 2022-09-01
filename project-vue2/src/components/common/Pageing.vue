<template>
  <div class="workMent">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[5, 10, 20, 50, 100]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      :url="url"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getTableData } from '@/utils/table.js'
export default {
  props: {
    total: Number,
    url: String
  },
  data() {
    return {
      page: 1,
      size: 10
    }
  },
  created() {
    getTableData(this.$parent, this.url, ['completed'], {
      page: this.page,
      size: this.size
    })
  },
  methods: {
    handleSizeChange(val) {
      this.size = val
      this.page = 1
      getTableData(this.$parent, this.url, ['completed'], {
        page: this.page,
        size: val
      })
    },
    handleCurrentChange(val) {
      this.page = val
      getTableData(this.$parent, this.url, ['completed'], {
        page: val,
        size: this.size
      })
    }
  }
}
</script>

<style lang="less">
.workMent {
  .el-pagination {
    text-align: left;
    margin-top: 20px;
  }
}
</style>
