import ts_axios from '../../src/index'

ts_axios({
    method: 'get',
    url: '/simple/get',
    params: {
        a:1,
        b:2
    }
})