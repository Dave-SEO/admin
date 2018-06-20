import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      // component: resolve => require(['components/demo'], resolve),
      component: resolve => require(['views/Home'], resolve),
      children: [
        {
          path: '/PeopleManagement',
          name: 'PeopleManagement',
          component: resolve => require(['views/people/PeopleManagement'], resolve)
        },
        {
          path: '/GroupManagement',
          name: 'GroupManagement',
          component: resolve => require(['views/Group/GroupManagement'], resolve)
        },
        {
          path: '/Member',
          name: 'Member',
          component: resolve => require(['views/Group/Member'], resolve)
        },
        {
          path: '/MeetingManagement',
          name: 'MeetingManagement',
          component: resolve => require(['views/meeting/MeetingManagement'], resolve)
        }
      ]
    },
    {
      path: '/addMeeting/:id',
      name: '/addMeeting',
      component: resolve => require(['views/people/AddMeeting'], resolve)
    }
    // {
    //   path: '/demo',
    //   name: 'demo',
    //   component: resolve => require(['components/demo'], resolve)
    // }
  ]
})
