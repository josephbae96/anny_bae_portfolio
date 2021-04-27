import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Container, NavBar } from 'react-boostrap';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      title: "Anny Bae",
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Articles', path: '/articles' },
        { title: 'AContact', path: '/contact' }
      ],
      home: {
        title: 'Anny Bae',
        subTitle: 'Doctoral Candidate for the Texas A&M University - Corpus Christi Psychology Program',
        text: 'Lover of Priviledge'
      },
      about: {
        title: 'About'
      },
      Articles: {
        title: 'Articles'
      },
      AContact: {
        title: 'Contact'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <NavBar className="border-bottom" bg="transparent" expand="lg">
            <NavBar.Brand>Anny Bae</NavBar.Brand>
            <NavBar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <NavBar.Collapse id="navbar-toggle">
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/about">About</Link>
              <Link className="nav-link" to="/articles">Articles</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </NavBar.Collapse>
          </NavBar>
        </Container>
      </Router>
      
    );
  }
};


export default App;
