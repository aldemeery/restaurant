import Home from './Components/Home';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Div from './Elements/Div';
import Contact from './Components/Contact';
import App from './App';
import routes from './routes';
import Menu from './Components/Menu';

// Create the components.
const container = new Div({ class: 'container-fluid wrapper' });
const header = new Header();
const main = new Main();
const footer = new Footer();
const home = new Home();
const contact = new Contact();
const menu = new Menu();

// Create tha application.
const app = new App('content');

// Add the application layout.
app.add(container.add(header).add(main).add(footer));

// Register components used with routing.
app.register('contact', contact);
app.register('home', home);
app.register('main', main);
app.register('menu', menu);

// Load the routes.
app.loadRoutes(routes);

// Run the application.
app.run();
