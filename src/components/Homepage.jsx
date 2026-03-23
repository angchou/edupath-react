import { useNavigate } from "react-router-dom";
import {
  FaBook,
  FaRoute,
  FaUserGraduate,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
import homepage_bg from "../assets/homepage_bg.png";

export default function Homepage({ role }) {
  const navigate = useNavigate();

  return (
    <div className="pt-20 mx-70">
      <section
        className="relative text-center py-24 text-white rounded-tl-3xl rounded-br-3xl bg-cover bg-center"
        style={{
          backgroundImage: `url(${homepage_bg})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-tl-3xl rounded-br-3xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">
            Your Path to Global Education
          </h1>

          <p className="text-lg mb-10 max-w-3xl mx-auto">
            EduPath helps students navigate their study abroad journey with
            confidence, offering personalized paths, curated courses, and expert
            guidance.
          </p>

          <button
            onClick={() => navigate(`/${role}/courses`)}
            className="bg-white text-blue-600 px-10 py-3 rounded-3xl font-semibold shadow hover:scale-105 transition"
          >
            Get Started
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaRoute className="text-3xl mx-auto mb-4 text-indigo-500" />
          <h3 className="font-semibold text-lg mb-2">Learning Path</h3>
          <p className="text-gray-600">
            Get a clear roadmap tailored to your goals
          </p>
        </div>

        <div className="p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaBook className="text-3xl mx-auto mb-4 text-indigo-500" />
          <h3 className="font-semibold text-lg mb-2">Courses</h3>
          <p className="text-gray-600">Access high-quality curated courses</p>
        </div>

        <div className="p-6 rounded-xl shadow hover:shadow-lg transition text-center">
          <FaUserGraduate className="text-3xl mx-auto mb-4 text-indigo-500" />
          <h3 className="font-semibold text-lg mb-2">Mentorship</h3>
          <p className="text-gray-600">
            Learn directly from experienced mentors
          </p>
        </div>
      </section>

      <section className="bg-gray-100 py-24 px-6 rounded-tl-3xl rounded-br-3xl">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-indigo-500 text-3xl font-bold mb-8 text-center">
            Choose your Courses
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Application Training",
                desc: "Build strong SOP, CV, and interview skills.",
              },
              {
                title: "Mentorship",
                desc: "Get guidance from experienced mentors.",
              },
              {
                title: "Study Planning",
                desc: "Plan your path to study abroad effectively.",
              },
            ].map((course) => (
              <div
                key={course.title}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              >
                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>

                <p className="text-gray-600 mb-4">{course.desc}</p>

                <button
                  className="text-indigo-500 font-medium hover:underline"
                  onClick={() => navigate(`/${role}/courses`)}
                >
                  View Course
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-indigo-500 mb-4">
            Meet Our Team
          </h2>

          <p className="text-gray-600 mb-10">
            A passionate team building EduPath to guide students toward global
            opportunities.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                name: "Chau Gia An",
                role: "Fullstack Developer",
              },
              {
                name: "Le Phong Nha",
                role: "Project Manager",
              },
              {
                name: "Chau Hai Ham",
                role: "Project Coordinator",
              },
              {
                name: "Nguyen Thanh Khang",
                role: "Supporter",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-indigo-200"></div>

                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500 mb-4">{member.role}</p>

                <div className="flex justify-center gap-4 text-gray-500">
                  <FaGithub className="cursor-pointer hover:text-black transition" />
                  <FaFacebook className="cursor-pointer hover:text-blue-500 transition" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
