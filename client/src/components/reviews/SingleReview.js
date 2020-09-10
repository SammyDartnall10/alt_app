import React, { Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import { getReview } from "../../actions/reviews"


// const SingleLocation = ({ getLocation, reviews: { reviews }, match }) => {

const SingleReview = ({ getReview, review: { review }, match }) => {

  useEffect(() => {
    getReview(match.params.id)
  }, [getReview])

  if (!review) {

    return (
      <div>
        No review to show
      </div>
    )
  }

  return (
    <Fragment>
      <div>
        <h1>Test single review</h1>
        <h1>{review[0].businessName}</h1>
        <span>{review[0].review}</span>
        <strong><span>{review[0].rating}</span></strong>
        <h3>Reviewed by:</h3><span>{review[0].reviewedBy}</span>

        <h3>Comments:</h3>
      </div>
    </Fragment>
  )
}

SingleReview.propTypes = {

}

const mapStateToProps = (state) => ({
  review: state.reviews
})

// export default SingleReview
export default connect(mapStateToProps, { getReview })(SingleReview)
// export default connect(mapStateToProps, { getLocation, allReviews })(SingleLocation);
// 5f088d1e8ce7926ef81bca54



// import React, { Fragment, useEffect } from "react";
// import propTypes from "prop-types";
// import { connect } from "react-redux";

// const SingleLocation = ({ getLocation, allReviews, location: { location }, reviews: { reviews }, match }) => {

//   useEffect(() => {
//     getLocation(match.params.id)
//   }, [getLocation])

//   useEffect(() => {
//     allReviews(match.params.id)
//   }, [allReviews])


//   if (!location) {
//     // or !this.props.user.profile depending on your initialState
//     // https://stackoverflow.com/questions/50862192/react-typeerror-cannot-read-property-props-of-undefined
//     return null;
//   }

//   return (
//     <Fragment>

//       <div> {(location) ?
//         (
//               <button>Add Review</button>

//         ): (
//           <h4>Nobody's left a review yet!...</h4>
//         )}
//       </div>
//     </Fragment>
//   );
// };


// const mapStateToProps = (state) => ({
//   // auth: state.auth,
//   location: state.location,
//   reviews: state.reviews
// });

// export default connect(mapStateToProps, { getLocation, allReviews })(SingleLocation);
