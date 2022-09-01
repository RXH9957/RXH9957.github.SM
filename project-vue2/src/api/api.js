import service from '../service.js'
import qs from 'qs'

export function login(data) {
    return service({
        method: 'post',
        url: '/login',
        data
    })
}

export function students(params) {
    return service({
        method: 'get',
        url: '/students',
        params
    })
}

export function studentDel(id) {
    return service({
        method: 'delete',
        url: `/students/ ${ id }`,
    })
}

export function info(data) {
    data = qs.stringify(data)
    return service({
        method: 'post',
        url: '/info',
        data
    })
}

export function updataInfo(data) {
    data = qs.stringify(data)
    return service({
        method: 'put',
        url: '/info',
        data
    })
}

export function getInfo() {
    return service({
        method: 'get',
        url: '/info',
    })
}

export function infoDel(id) {
    return service({
        method: 'delete',
        url: `/info/${id}`,
    })
}

export function dataView() {
    return service({
        method: 'get',
        url: '/dataview',
    })
}

export function travelView() {
    return service({
        method: 'get',
        url: '/travel',
    })
}