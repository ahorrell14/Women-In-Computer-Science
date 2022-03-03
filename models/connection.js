const connections = [
{
    id: '1', 
    type: 'Meeting',
    title: 'Introduction Meeting',
    host: 'Autumn Horrell',
    content: 'Join us on Zoom to meet our team members and learn about our semester goals! Meeting ID: 353 213 3011', 
    date: 'February 3, 2022', 
    time: '1:00 pm - 2:00 pm', 
    img: 'https://sites.uml.edu/vtr/files/2020/05/Zoom-Pro-Annually-2-1024x1024-1.jpg', 
    imgAlt: 'Zoom logo'
},
{
    id: '2', 
    type: 'Workshop',
    title: 'HTML Fundamentals Course', 
    host: 'Stephanie Davis',
    content: 'Join us to learn the fundamentals of HTML! This is the first step towards learning how to build your own website! Join on campus: Woodward 232.',
    date: 'February 16, 2022', 
    time: '5:00 pm - 6:00 pm', 
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/2048px-HTML5_logo_black.svg.png', 
    imgAlt: 'HTML logo'
},
{
    id: '3', 
    type: 'Workshop', 
    title: 'CSS Fundamentals Course', 
    host: 'Tyler Collins', 
    content: 'During this workshop we will continue learning how to create a website by building our HTML skills and integrating CSS! Join us on campus: Colvard 211.', 
    date: 'February 27, 2022', 
    time: '6:00 pm - 7:00 pm', 
    img: 'https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png', 
    imgAlt: 'CSS logo'
}
];

exports.find = function() {
    return connections;
};

exports.findById = function(id) {
    return connections.find(connection => connection.id === id);
};