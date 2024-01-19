export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'About',
      route: '/about',
    },
    {
      label: 'Gallerie',
      route: '/gallery',
    },
    
    {
      label: 'Create Event',
      route: '/events/create',
    },
    {
      label: 'My Profile',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }