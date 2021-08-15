export const DynamicAsideMenuConfig = {
  items: [
    {
      title: 'Dashboards',
      root: true,
      alignment: 'left',
      page: '/dashboard',
      translate: 'MENU.DASHBOARD',
    },
    {
      title: 'Services',
      root: true,
      alignment: 'left',
      page: '/service',
      translate: 'MENU.SERVICES',
    },
    {
      title: 'Routes',
      root: true,
      alignment: 'left',
      page: '/routes',
      translate: 'MENU.ROUTES',
    },
    {
      title: 'Consumers',
      root: true,
      alignment: 'left',
      page: '/consumer',
      translate: 'MENU.CONSUMERS',
    },
    {
      title: 'Plugins',
      root: true,
      alignment: 'left',
      page: '/plugin',
      translate: 'MENU.PLUGINS',
    },
    {
      title: 'Users',
      root: true,
      alignment: 'left',
      page: '/user',
      translate: 'MENU.USERS',
    },
    {
      title: 'Builder',
      root: true,
      alignment: 'left',
      page: '/builder',
    },
    {
      title: 'Custom',
      root: true,
      alignment: 'left',
      toggle: 'click',
      page: '',
      submenu: [
        {
          title: 'Error Pages',
          bullet: 'dot',
          icon: 'flaticon2-list-2',
          page: '/error',
          submenu: [
            {
              title: 'Error 1',
              page: '/error/error-1'
            },
            {
              title: 'Error 3',
              page: '/error/error-3'
            },
            {
              title: 'Error 4',
              page: '/error/error-4'
            },
            {
              title: 'Error 5',
              page: '/error/error-5'
            }
          ]
        }
      ]
    }
  ]
};
