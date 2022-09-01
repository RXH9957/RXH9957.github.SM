const Mock = require('mockjs')

var data = Mock.mock({
    id: '@id()',
    username: '@cname()',
    date: '@date(yyyy-MM-dd)',
    description: '@paragraph()',
    email: '@email()',
    'age|18-40': 0
})

module.export = app => {
    app.use('api/userinfo', (req, res) => {
        res.json(data)
    })
}

console.log(data)