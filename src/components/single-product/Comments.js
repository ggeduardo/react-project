import React,{Fragment} from 'react'

const Comments = (props)=>{
    
    const data = props.data.Comments
    const commentStyle=["review_item","review_item reply","review_item reply"]
    const commentTxt=[]

    const repeater=()=>{
        commentStyle.forEach((e,i)=>{
            commentTxt.push(
                <div className={e} key={i}>
					<div className="media">
						<div className="d-flex">
							<img src={data.Images[i]} alt=""/>
						</div>
					        <div className="media-body">
						    <h4>{data.Name[i]}</h4>
						    <h5>{data.Fecha[i]}</h5>
						    <a className="reply_btn" href="#">Responder</a>
						</div>
					</div>
                    <p>{data.comment[i]}</p>
				</div>
            )
        })

    }
    repeater()
        
    return(
        <Fragment>
            <div className="row">
				<div className="col-lg-6">
					<div className="comment_list">
					    {commentTxt}
					</div>
				</div>
				<div className="col-lg-6">
					<div className="review_box">
						<h4>Post a comment</h4>
						<form className="row contact_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
							<div className="col-md-12">
								<div className="form-group">
									<input type="text" className="form-control" id="name" name="name" placeholder="Your Full name"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input type="email" className="form-control" id="email" name="email" placeholder="Email Address"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<input type="text" className="form-control" id="number" name="number" placeholder="Phone Number"/>
								</div>
							</div>
							<div className="col-md-12">
								<div className="form-group">
									<textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
								</div>
							</div>
						    <div className="col-md-12 text-right">
								<button type="submit" value="submit" className="btn submit_btn">Submit Now</button>
							</div>
						</form>
					</div>
				</div>
			</div>
        </Fragment>

    )
}

export default Comments