import { useState } from "react";
import "../CourseForm.css";

export default function CourseForm({ onSearch, skillOptions, courses })  {
  const [skillArea, setSkillArea] = useState("");
  const [semester, setSemester] = useState("");

  return (
    <div className='course-form'>
        

    

      <h2>Find Courses</h2>
      <select onChange={(e) => setSkillArea(e.target.value)}>
        <option value="">Select Skill Area</option>
        {skillOptions.map((skill, i) => (
          <option key={i} value={skill}>{skill}</option>
        ))}
      </select>

      <select onChange={(e) => setSemester(e.target.value)}>
        <option value="">Select Semester</option>
        <option value="S1">S1</option>
        <option value="S2">S2</option>
        <option value="S3">S3</option>
        <option value="S5">S5</option>
        <option value="S6">S6</option>
        <option value="S7">S7</option>
        <option value="S8">S8</option>
      </select>

      <button className="course-form button" onClick={() => onSearch(skillArea, semester)}>Find Courses</button>

       
       
    </div>
   
  );
}