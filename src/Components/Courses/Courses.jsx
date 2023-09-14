
import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {

  // load all course
  const [courses, setCourses] = useState([]);
  useEffect(()=>{
    fetch('./course.json')
    .then(res => res.json())
    .then(data => setCourses(data));
  },[])


  return (
    <div>
   
    </div>
  );
};

export default Courses;