const mailId = "thaarchana7jan@gmail.com";
const address = "Noida Sector 62";
const jsIcon = require('./assets/images/javascript.png')
 
const jqueryIcon = require  ('./assets/images/jquery.png')
const bootstrapIcon = require  ('./assets/images/bootstrap.png')
const reactIcon = require  ('./assets/images/react.png')
const redux = require  ('./assets/images/redux.png')
const htmlicon = require  ('./assets/images/html.png')
const cssicon = require  ('./assets/images/css.png')
const psIcon = require  ('./assets/images/photoshop.png')


const sociallinks = [
    {
        name: "github",
        link: "https://github.com/archanaweb",
        icon: "fa-brands fa-github"
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/archana-thakur-40939b20a/",
        icon: "fa-brands fa-linkedin"
    },
    {
        name: "Website",
        link: "mailto:thaarchana7jan@gmail.com",
        icon: "fa-solid fa-envelope"
    }
];

const timeline = [
    {
        year: "2023",
        projectName: 'Alyamuna Densons',
        url: 'https://www.alyamunadensons.ae/',
        title: 'Created awesome🤩 UI for Alyamuna Densons'
    },
    {
        year: "2022",
        projectName: 'Famooshed',
        url: 'https://www.famooshed.com/',
        title: 'Created Grocery website using Bootstrap, Jquery and other frontend technology'
    },
    {
        year: "2021",
        projectName: 'Ashaafoundation',
        url: 'https://www.ashaafoundation.org/',
        title: 'Make Donation website'
    },
    {
        year: "2020",
        projectName: 'Graduation',
        title: 'Compleated graduation from DU'
    },

];

const skills = [
    {
        name: 'Javascript',
        percentage: 70,
        icon: jsIcon
    },
    {
        name: 'Jquery',
        percentage: 80,
        icon: jqueryIcon
    },
    {
        name: 'Bootstrap',
        percentage: 90,
        icon: bootstrapIcon
    },
    {
        name: 'HTML',
        percentage: 90,
        icon: htmlicon
    },
    {
        name: 'CSS',
        percentage: 90,
        icon: cssicon
    },
    {
        name: 'React',
        percentage: 65,
        icon: reactIcon
    },
    {
        name: 'Redux',
        percentage: 60,
        icon: redux
    },
    {
        name: 'Photoshop',
        percentage: 70,
        icon: psIcon
    }
];



module.exports = {mailId, address, sociallinks, timeline, skills};