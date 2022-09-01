<template>
  <div class="infoMent">
    <el-form :inline="true" class="demo-form-inline" size="medium">
      <el-form-item>
        <el-button type="primary" @click="addStudent">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名" align="center">
      </el-table-column>
      <el-table-column prop="sex_text" label="性别" align="center">
      </el-table-column>
      <el-table-column prop="age" label="年龄" align="center">
      </el-table-column>
      <el-table-column prop="father" label="父亲姓名" align="center">
      </el-table-column>
      <el-table-column prop="mather" label="母亲姓名" align="center">
      </el-table-column>
      <el-table-column prop="address" label="家庭地址" align="center">
      </el-table-column>
      <el-table-column prop="time" label="入校时间" align="center">
      </el-table-column>
      <el-table-column prop="phone" label="联系方式" align="center">
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-edit"
            @click="edit(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            size="mini"
            icon="el-icon-delete"
            @click="del(scope.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      :title="state ? '添加学生信息' : '修改学生信息'"
      :visible.sync="dialogFormVisible"
      width="500px"
    >
      <el-form :model="form" :rules="rules" ref="form">
        <el-form-item prop="name" label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="sex_text"
          label="性别"
          :label-width="formLabelWidth"
        >
          <el-radio v-model="form.sex" label="1">男</el-radio>
          <el-radio v-model="form.sex" label="2">女</el-radio>
        </el-form-item>
        <el-form-item prop="age" label="年龄" :label-width="formLabelWidth">
          <el-input v-model="form.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="father"
          label="父亲姓名"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.father" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="mather"
          label="母亲姓名"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.mather" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="address"
          label="家庭地址"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item
          prop="time"
          label="入校时间"
          :label-width="formLabelWidth"
        >
          <el-date-picker
            v-model="form.time"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-d"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item
          prop="phone"
          label="联系电话"
          :label-width="formLabelWidth"
        >
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeInfo('form')">取 消</el-button>
        <el-button type="primary" @click="sure('form')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getData, changeInfo, delData } from '@/utils/table.js'

export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      pickerOptions: {},
      form: {
        name: '',
        sex: '1',
        age: '',
        father: '',
        mather: '',
        address: '',
        time: '',
        phone: ''
      },
      formLabelWidth: '80px',
      rules: {
        name: [
          {
            required: true,
            message: '请输入姓名'
          }
        ],
        sex: [
          {
            required: true
          }
        ],
        age: [
          {
            required: true,
            message: '请输入年龄'
          }
        ],
        address: [
          {
            required: true,
            message: '请输入家庭住址'
          }
        ],
        time: [
          {
            required: true,
            message: '请输入入校时间'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入联系电话'
          }
        ]
      },
      total: 0,
      state: true
    }
  },
  created() {
    getData(this, '/info')
  },
  methods: {
    edit(row) {
      this.form = { ...row }
      this.state = false
      this.dialogFormVisible = true
    },
    del(id) {
      delData(this, '/info', id, getData)
    },
    closeInfo(form) {
      this.$refs[form].resetFields()
      this.dialogFormVisible = false
    },
    addStudent() {
      this.form = {
        name: '',
        sex: '1',
        age: '',
        father: '',
        mather: '',
        address: '',
        time: '',
        phone: ''
      }
      this.state = true
      this.dialogFormVisible = true
    },
    sure(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          let methods = ''
          this.state ? (methods = 'post') : (methods = 'put')
          changeInfo(this, methods, '/info', this.form, getData)
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.infoMent {
  .el-form-item,
  .demo-form-inline {
    text-align: left;
  }
}
</style>
