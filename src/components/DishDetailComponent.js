import React from 'react';
import { Card, CardBody, CardTitle, CardImg, CardText } from 'reactstrap';

function RenderDish({dish}){
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

function RenderComments({comment_dish}){
       return (
         <ul className="list-unstyled">
        {
          comment_dish.map( (comments) => {
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

  const  DishDetail = (props) => {
        if(props.dish!=null){
          return(
          <div className="container">
            <div className="row">
             <div className="col-12 col-md-5 m-1">
               <RenderDish dish={props.dish} />
             </div>
             <div className="col-12 col-md-5 m-1">
               <h4>Comments</h4>
                <RenderComments comment_dish={props.dish.comments}/>
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


export default DishDetail;
