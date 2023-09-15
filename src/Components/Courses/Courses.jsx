import { GoBook } from "react-icons/go";
import { FiDollarSign } from "react-icons/fi";
import { useEffect } from "react";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Courses = () => {

  // load all course
  const [courses, setCourses] = useState([]);
  const [selectCourse, setSelectCourse] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
    .then(data => setCourses(data));
  },[])

  // select button
  const handleToSelect = (course)=>{
    const isExist = selectCourse.find(item => item.id == course.id);
    let coursePrice = course.price;
    let courseCredit = course.credit;
    if(isExist){
      toast('The course name is already exist')
    }else{
        selectCourse.forEach(price => {
        coursePrice = coursePrice + price.price;
      });
      selectCourse.forEach(credit =>{
        courseCredit = courseCredit + credit.credit;
      })
      setTotalPrice(coursePrice);
      setTotalCredit(courseCredit);
      setSelectCourse([...selectCourse,course]);
    }
  }

  return (
    <div className="flex gap-6 justify-around">
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4">
        {courses.map((course) => (
          <div key={course.id} className="card bg-white rounded-xl p-4 mx-auto">
            <img
              src={course.cover_img}
              alt="cover-image"
              className="rounded-lg w-full mx-auto"
            />
            <div className="card-body items-center text-center mt-4">
              <h2 className="card-title mb-2 text-lg text-[#1C1B1B] font-semibold">
                {course.course_name}
              </h2>
              <p className="text-[#1C1B1B99] text-sm font-normal">
                {course.details}
              </p>
              <div className="flex justify-between gap-1 items-center my-4">
                <p>
                  <FiDollarSign></FiDollarSign>
                </p>
                <p className="text-base text-[#1C1B1B99] font-medium">
                  Price: {course.price}
                </p>
                <p>
                  <GoBook></GoBook>
                </p>
                <p className="text-base text-[#1C1B1B99] font-medium">
                  Credit: {course.credit}hr
                </p>
              </div>
              <div className="card-actions">
                <button
                  onClick={() => handleToSelect(course)}
                  className="bg-[#2F80ED] w-full p-2 text-lg text-white rounded-lg font-semibold"
                >
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Cart
        selectCourse={selectCourse}
        totalPrice={totalPrice}
        totalCredit={totalCredit}
      ></Cart>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Courses;