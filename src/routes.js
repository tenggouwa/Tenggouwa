import loadableHandler from '@/components/loadableHandler'

module.exports = [{
    path: '/',
    exact: true,
    component: loadableHandler(() => import('./pages/home'))
},
{
    path: '/hah',
    exact: true,
    component: loadableHandler(() => import('./pages/hah'))
}]
