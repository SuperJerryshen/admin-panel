import dynamic from 'dva/dynamic';

// wrapper of dynamic
const dynamicWrapper = (app, models, component) => dynamic({
  app,
  models: () => models.map(m => import(`../models/${m}.js`)),
  component: () => component,
});

// nav data
export const getNavData = app => [
  {
    component: dynamicWrapper(app, ['user'], import('../layouts/BasicLayout')),
    layout: 'BasicLayout',
    name: '首页', // for breadcrumb
    path: '/',
    children: [
      {
        name: '查询表格',
        path: 'table-list',
        component: dynamicWrapper(app, ['rule'], import('../routes/List/TableList')),
      },
      {
        name: '新页面',
        path: 'newpage',
        icon: 'file',
        children: [
          {
            name: '页面1',
            path: 'page1',
            icon: 'form',
            component: dynamicWrapper(app, [], import('../routes/NewPage/NewPage.js')),
          },
        ],
      },
    ],
  },
];

