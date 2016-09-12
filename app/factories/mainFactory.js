app.factory('mainFactory', mainFactory)

function mainFactory() {

  websites = [
    { name: 'Template', url: 'http://google.com', img: 'grandunion.png', about: 'This is a Template'}
  //  ,{ name: '', url: '', img: '', about: ''}
  ];

  return [ websites ]

}
