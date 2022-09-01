import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: '首页',
            redirect: '/login',
            hidden: true,
            component: () =>
                import ('@/components/Login.vue')
        },
        {
            path: '/login',
            name: 'Login',
            hidden: true,
            component: () =>
                import ('@/components/Login.vue')
        },
        {
            path: '*',
            name: 'NotFound',
            hidden: true,
            component: () =>
                import ('@/components/NotFound.vue')
        },
        {
            path: '/home',
            name: '学生管理',
            redirect: '/home/student',
            iconClass: 'fa fa-users',
            component: () =>
                import ('@/components/Home.vue'),
            children: [{
                    path: '/home/student',
                    name: '学生列表',
                    iconClass: 'fa fa-list',
                    component: () =>
                        import ('@/components/students/StudentList.vue')
                },
                {
                    path: '/home/info',
                    name: '信息列表',
                    iconClass: 'fa fa-list-alt',
                    component: () =>
                        import ('@/components/students/InfoList.vue')
                },
                {
                    path: '/home/infos',
                    name: '信息管理',
                    iconClass: 'fa fa-list-alt',
                    component: () =>
                        import ('@/components/students/InfoMent.vue')
                },
                {
                    path: '/home/work',
                    name: '作业列表',
                    iconClass: 'fa fa-list-ul',
                    component: () =>
                        import ('@/components/students/WorkList.vue')
                },
                {
                    path: '/home/works',
                    name: '作业管理',
                    iconClass: 'fa fa-th-list',
                    component: () =>
                        import ('@/components/students/WorkMent.vue')
                }
            ]
        },
        {
            path: '/dataAnalysis',
            name: '数据分析',
            redirect: '/dataAnalysis/dataview',
            iconClass: 'fa fa-bar-chart',
            component: () =>
                import ('@/components/Home.vue'),
            children: [{
                    path: '/dataAnalysis/dataview',
                    name: '数据概览',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/DataView.vue')
                },
                {
                    path: '/dataAnalysis/mapview',
                    name: '地图概览',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/MapView.vue')
                },
                {
                    path: '/dataAnalysis/travel',
                    name: '旅游地图',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/TravelMap.vue')
                },
                {
                    path: '/dataAnalysis/score',
                    name: '分数地图',
                    iconClass: 'fa fa-line-chart',
                    component: () =>
                        import ('@/components/dataAnalysis/ScoreMap.vue')
                }
            ]
        },
        {
            path: '/users',
            name: '用户中心',
            redirect: '/users/user',
            iconClass: 'fa fa-user',
            component: () =>
                import ('@/components/Home.vue'),
            children: [{
                path: '/users/user',
                name: '权限管理',
                iconClass: 'fa fa-user',
                component: () =>
                    import ('@/components/users/User.vue')
            }]
        }
    ],
    mode: 'history'
})