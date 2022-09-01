export function getData(root, url, params) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data
                root.total = res.data.total
                root.tableData.forEach((item) => {
                    item.sex === '1' ? (item.sex_text = '男') : (item.sex_text = '女')
                })
            }
        })
        .catch(err => {
            throw err
        })
}

import qs from 'qs'
export function changeInfo(root, method, url, form, callback) {
    let data = qs.stringify(form)
    root.service[method](url, data)
        .then(res => {
            if (res.data.status === 200) {
                callback(root, url)
                root.dialogFormVisible = false
                root.$refs['form'].resetFields()
                root.$message({ type: 'success', message: res.data.message })
            }
        })
        .catch(err => {
            throw err
        })
}

export function delData(root, url, id, callFun) {
    root.$alert('是否确定删除？', '提示', {
        confirmButtonText: '确定',
        callback: () => {
            root.service.delete(`${url}/${id}`).then(res => {
                    if (res.data.status === 200) {
                        root.$message({ type: 'success', message: res.data.message })
                        callFun(root, url)
                    }
                })
                .catch(err => {
                    throw err
                })

        }
    })
}

export function getTableData(root, url, arr, params, ) {
    root.service.get(url, { params: params || {} })
        .then(res => {
            if (res.data.status === 200) {
                root.tableData = res.data.data
                root.total = res.data.total
                root.tableData.map(item => {
                    arr.map(aItem => {
                        item[aItem] ? item[aItem + '_text'] = '是' : item[aItem + '_text'] = '否'
                    })
                })
                root.loading = false
            }
        })
        .catch(err => {
            throw err
        })
}