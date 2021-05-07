import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Anny Bae',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Articles', path: '/articles' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: 'Anny Bae',
        subTitle: 'Doctor Psychic for the Texas Agems',
        text: 'Lover of Privaledgers',
      },
      about: {
        title: 'About',
      },
      articles: {
        title: 'Articles',
      },
      contact: {
        title: 'Contact',
      },
    };
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className='border-bottom' bg='transparent' expand='lg'>
            <Navbar.Brand>Anny Bae</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
                <Link className='nav-link' to='/about'>
                  About
                </Link>
                <Link className='nav-link' to='/articles'>
                  Articles
                </Link>
                <Link className='nav-link' to='/contact'>
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path='/'
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path='/about'
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path='/articles'
            exact
            render={() => <ArticlesPage title={this.state.articles.title} />}
          />
          <Route
            path='/contact'
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
