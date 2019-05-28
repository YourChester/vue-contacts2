export default {
  namespaced: true,
  state: {
    menu: [
			{
      url: '/',
      text: 'Contacts'
      },
      {
        url: '/add',
        text: 'Add contact'
      },
      {
        url: '/addgroup',
        text: 'Add group'
      },
    	{
      url: '/group',
      text: 'Group'
    	},
    	{
      url: '/birthday',
      text: 'Birthday'
			}
    ]
  },
  getters: {
    menu (state) {
      return state.menu
    }
  }
}
