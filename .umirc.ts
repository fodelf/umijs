import { defineConfig } from 'umi';

export default defineConfig({
  layout: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      routes:[{
        path:'cc',component: '@/pages/cc'
      }]
    },
    { path: '/test', component: '@/pages/test',exact:false},
    { component: '@/pages/404' },
  ],
});
