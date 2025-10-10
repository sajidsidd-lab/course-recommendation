import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";
import Login from "./components/Login";
import CourseForm from "./components/CourseForm";
import "./RecommendedCourse.css"
import "./CourseCard.css"

function App() {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [skillOptions, setSkillOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  
   useEffect(() => {
  const fetchSkills = async () => {
   const snapshot = await getDocs(collection(db, "courses"));
    const skills = new Set();
    snapshot.forEach(doc => {
      const data = doc.data();
     // ✅ See what's in Firestore
      if (data.skillArea) skills.add(data.skillArea);
    });
    const skillList = [...skills];
    // ✅ Check final list
    setSkillOptions(skillList);
  };
  fetchSkills();
}, []);
  

const handleSearch = async (skillArea, semester) => {
  setLoading(true)
  try{
  const coursesRef = collection(db, "courses");

  const skillQuery = query(coursesRef, where("skillArea", "==", skillArea));
  const semesterQuery = query(coursesRef, where("semester", "==", semester));
  const exactQuery = query(
    coursesRef,
    where("skillArea", "==", skillArea),
    where("semester", "==", semester)
  );

  const [skillSnap, semesterSnap, exactSnap] = await Promise.all([
    getDocs(skillQuery),
    getDocs(semesterQuery),
    getDocs(exactQuery),
  ]);

  const resultsMap = new Map();

  skillSnap.forEach(doc => resultsMap.set(doc.id, doc.data()));
  semesterSnap.forEach(doc => resultsMap.set(doc.id, doc.data()));
  exactSnap.forEach(doc => resultsMap.set(doc.id, doc.data()));

  const finalResults = Array.from(resultsMap.values());

  console.log("Combined results:", finalResults);
  setCourses(finalResults);
}catch(error){
      console.error("Error fetching courses:", error);
  } finally {
    setLoading(false); // ✅ End loading
  }


};

  return (
   <div>
    {!user ? (
      <Login onLogin={setUser} />
    ) : (
      <>
        <CourseForm
          onSearch={handleSearch}
          skillOptions={skillOptions}
          courses={courses}
        />
     {loading ? (
    <p style={{ textAlign: "center", marginTop: "1rem" }}>🔄 Loading courses...</p>
  ) :(
        <div className="recommended-section">
          <h3>Recommended Courses:</h3>
          <div className="course-list">
            {courses.map((course, i) => (
              <div key={i} className="course-card">
                <h4 className='course-title'>{course.courseTitle}</h4>
                <p className="skill-area">{course.skillArea}</p>
                 <span className="semester-badge inline-block bg-gray-200 text-sm px-2 py-1 rounded-full">
          Semester {course.semester}
        </span>

                <a href={course.courseLink} target="_blank" rel="noreferrer">
                  View Course
                </a>
              </div>
            ))}
          </div>
        </div>)}
      </>
    )}
  </div>

  );
}

export default App;