import React, {Component} from 'react';
import { Button, Row, Label, ModalBody, Modal, ModalHeader } from 'reactstrap';
import { Control, LocalForm, Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      isModalOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModal(){
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values){
     console.log("Current State is:" + JSON.stringify(values));
     alert("Current State is:" + JSON.stringify(values));
  }

  render(){
    return(
      <React.Fragment>

      <Button onClick={this.toggleModal} color="light" className="btn-outline-dark">
        <span className="fa fa-edit fa-lg"></span> Submit Comment</Button>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
          <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
            <Row className="form-group m-1">
                 <Label htmlFor="rating">Rating</Label>
                 <Control.select model=".rating" className="form-control" name="rating">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                </Control.select>
            </Row>

               <Row className="form-group m-1">
                   <Label htmlFor="firstname">Your Name</Label>
                   <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name"
                        className="form-control" validators={{minLength: minLength(3), maxLength: maxLength(15)}}/>
                        <Errors className="text-danger" model=".yourname" show="touched"
                        messages = {{
                          minLength: 'Must be greater than 3 characters',
                          maxLength: 'Must be 15 characters or less'
                        }}/>
               </Row>

               <Row className="form-group m-1">
                   <Label htmlFor="message">Comment</Label>
                  <Control.textarea model=".comment" className="form-control" id="comment" name="comment" rows="6"/>
               </Row>

               <Row className="form-group m-1 mt-2">
                      <Button type="submit" color="primary">
                        Submit
                      </Button>
               </Row>
          </LocalForm>
          </ModalBody>
        </Modal>
     </React.Fragment>
    );
  }
}

export default CommentForm;
