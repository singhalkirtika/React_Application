import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText,  Breadcrumb, BreadcrumbItem  } from 'reactstrap';
import { Link } from 'react-router-dom';
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
     this.toggleModal();
     this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render(){
    return(
      <React.Fragment>

      <Button onClick={this.toggleModal} color="light" className="btn-outline-dark">
        <span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>

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
                   <Label htmlFor="author">Your Name</Label>
                   <Control.text model=".author" id="author" name="author" placeholder="Your Name"
                        className="form-control" validators={{minLength: minLength(3), maxLength: maxLength(15)}}/>
                        <Errors className="text-danger" model=".author" show="touched"
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

function RenderDish({dish}){
    if(dish!=null){
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
          </CardBody>
       </Card>
      );
    }
    else{
      return(
        <div></div>
      );
    }

}

function RenderComments({comments, addComment, dishId}){
     if(comments!=null){
       return (
         <div className="col-12 col-md-5 m-1">
           <h4>Comments</h4>
           <ul className="list-unstyled">
          {
            comments.map( (comment) => {
            return(
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short',
              day: '2-digit'}).format( new Date( Date.parse(comment.date)))}</p>
              </li>
              );
            })
          }
          </ul>
              <CommentForm dishId={dishId} addComment={addComment}/>
          </div>
      );
     }
     else{
       return(
         <div></div>
       );
     }
  }

  const  DishDetail = (props) => {
          return(
          <div className="container">
          <div className="row">
              <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                  <h3>{props.dish.name}</h3>
                  <hr />
              </div>
          </div>
            <div className="row">
             <div className="col-12 col-md-5 m-1">
               <RenderDish dish={props.dish} />
             </div>
               <RenderComments comments={props.comments}
                   addComment={props.addComment} dishId={props.dish.id}/>
            </div>
          </div>
          );
    }


export default DishDetail;
