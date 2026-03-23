import CourseCard from "./CourseCard";
import courses_bg from "../../assets/courses_bg.png";
import { useEffect, useState } from "react";
import { getAllCourses } from "../../services/courseService";

export default function CoursePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCourses()
      .then(setCourses)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="pt-20 text-center text-gray-500">Loading courses...</div>
    );
  }

  return (
    <div className="pt-20 mx-70 mx">
      <section
        className="relative text-center py-24 mb-20 text-white rounded-tl-3xl rounded-br-3xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${courses_bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-tl-3xl rounded-br-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Your Future Starts Here.</h1>

          <p className="text-lg mb-10 max-w-3xl mx-auto">
            Discover curated courses, guided by experienced mentors, and take
            the next step toward your dream career with confidence.
          </p>

          <button className="bg-white text-blue-600 px-10 py-3 rounded-3xl font-semibold shadow hover:scale-105 transition">
            My Courses
          </button>
        </div>
      </section>

      <section className="py-12 px-6 rounded-tl-3xl rounded-br-3xl">
        <div className="max-w-8xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {courses.map((course, index) => (
              <CourseCard key={index} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
