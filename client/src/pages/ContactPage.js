import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import Featured from '../components/Featured';
import Content from '../components/Content';

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      disabled: 'false',
      emailSent: '',
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      disabled: true,
    });

    axios({
      method: 'POST',
      url: '/send',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.');
        this.resetForm();
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.');
      }
    });
  };

  render() {
    return (
      <div>
        <Featured title={this.props.title} />
        <Content>
          <Form>
            <Form.Group>
              <Form.Label htmlFor='full-name'>Full Name</Form.Label>
              <Form.Control
                id='full-name'
                name='name'
                type='text'
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='email'>Email</Form.Label>
              <Form.Control
                id='email'
                name='email'
                type='email'
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='subject'>Subject</Form.Label>
              <Form.Control
                id='subject'
                name='subject'
                type='text'
                value={this.state.subject}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor='message'>Message</Form.Label>
              <Form.Control
                id='message'
                name='message'
                as='textarea'
                rows='4'
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button
              className='d-inline-block'
              variant='primary'
              type='submit'
              disabled={this.state.disabled}
              onClick={this.handleSubmit}
            >
              Submit
            </Button>

            {this.state.emailSent === true && (
              <p className='d-inline success-msg'>Email Sent</p>
            )}
            {this.state.emailSent === false && (
              <p className='d-inline err-msg'>Email Not Sent</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
