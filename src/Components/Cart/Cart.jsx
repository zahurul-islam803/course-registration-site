import PropTypes from "prop-types";
const Cart = ({ selectCourse, totalPrice, totalCredit, remaining }) => {
  return (
    <div>
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-lg text-[#2F80ED] font-bold">
          Credit Hour Remaining {remaining} hr
        </h2>
        <hr className="text-[#1C1B1B33] my-4" />
        <h2 className="text-xl text-[#1C1B1B] font-bold mb-5">Course Name</h2>
        {selectCourse.map((course) => (
          <li className="list-decimal text-[#1C1B1B99]" key={course.id}>
            {course.course_name}
          </li>
        ))}
        <hr className="text-[#1C1B1B33] mt-6" />
        <h5 className="text-[#1C1B1BCC] font-medium my-4">
          Total Credit Hour : {totalCredit}
        </h5>
        <hr className="text-[#1C1B1B33] my-4" />
        <h5 className="text-[#1C1B1BCC] font-semibold">
          Total Price : {totalPrice} USD
        </h5>
      </div>
    </div>
  );
};
Cart.propTypes = {
  selectCourse: PropTypes.array.isRequired,
  totalPrice: PropTypes.object.isRequired,
  totalCredit: PropTypes.object.isRequired,
  remaining: PropTypes.object.isRequired
};
export default Cart;
