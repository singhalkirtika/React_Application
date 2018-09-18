import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

class DishDetail extends Component {
      constructor(props){
        super(props);
        console.log("DishDetail constructor invoked");
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
              <p>--{comments.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short',
            day: '2-digit'}).format( new Date( Date.parse(comments.date)))}</p>
            </li>
          );
        })
      }
      </ul>
    );
      }

      render() {
        console.log("DishDetailComponent render invoked");
        console.log(this.props.dish);
        if(this.props.dish!=null){
          return(
          <div className="container">
            <div className="row">
             <div className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.dish)}
             </div>
             <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
               {this.renderComments(this.props.dish.comments)}
             </div>
            </div>
          </div>
          );
        }
        else{
          return(
            <div className="container">
            <div></div>
            </div>
          );
      }
    }

    componentDidMount() {
      console.log("DishdetailComponent componentDidMount invoked");
    }

    componentDidUpdate(){
      console.log("DishDetailComponent componentDidUpdate invoked");
    }
}

export default DishDetail;
