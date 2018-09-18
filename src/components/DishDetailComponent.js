import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardImgOverlay, CardText } from 'reactstrap';
import Moment from 'react-moment';

class DishDetail extends Component {
      constructor(props){
        super(props);
      }

      renderDish(dish){
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

      renderComments(comments_dish){
       return (
         <ul className="list-unstyled">
        {
          comments_dish.map( (comments) => {
          return(
            <li key={comments.id}>
              <p>{comments.comment}</p>
              <p>--{comments.author}, {comments.date}</p>
            </li>
          );
        })
      }
      </ul>
    );
      }

      render() {
        if(this.props.selectedDish!=null){
          const dish = this.props.selectedDish;
          return(
          <div className="row">
           <div className="col-12 col-md-5 m-1">
               {this.renderDish(dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
              {this.renderComments(dish.comments)}
          </div>
         </div>
         );
        }
        else{
          return(
            <div></div>
          );
      }
    }
}

export default DishDetail;
