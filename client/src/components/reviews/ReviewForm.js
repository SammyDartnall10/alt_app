import React, { useState, useEffect } from 'react'
import { createEditReview, getReview } from '../../actions/reviews'

import { connect } from "react-redux";

const ReviewForm = ({ createEditReview, getReview, loc, match }) => {
  // trying a use effect instead? Might pull it through to the. Should be pass from previous component though
  useEffect(() => {
    getReview(match.params.id)
  }, [getReview])

  const [formData, setFormData] = useState({
    reviewDetail: "",
    rating: ""
  });

  const {
    reviewDetail,
    rating
  } = formData

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    createEditReview(
      {
        reviewDetail,
        rating
      },
      loc.location._id
    );
  };

  if (!loc) {
    // or !this.props.user.profile depending on your initialState
    // https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined
    return null;
  }

  return (
    <div>
      <h1>Create/Update review</h1>
      <h4>For </h4><h4>{loc.location.businessName}</h4>
      <form onSubmit={(e) => onSubmit(e)}>
        <label for="reviewDetail" onChange={(e) => onChange(e)}>Review Detail:</label>
        <input type="text" id="reviewDetail" name="reviewDetail"></input><br></br>

        <label for="rating">Rating:</label>
        <input type="text" id="rating" name="rating" onChange={(e) => onChange(e)}></input>

        <button type="submit">Submit</button>
      </form>


    </div>
  )
}

export default connect(null, { createEditReview, getReview })(ReviewForm)



{/* <form>
        <label for="reviewDetail">First name:</label><br>
          <input type="text" id="reviewDetail" name="reviewDetail"><br>
            <label for="lname">Last name:</label><br>
              <input type="text" id="lname" name="lname">
</form> */}