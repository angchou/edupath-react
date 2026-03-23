import { FaFacebook, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-500 to-blue-400 text-white mt-20 pt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-2">EduPath</h2>
          <p className="text-sm text-indigo-100">
            Your Path to Global Education. Helping students achieve their study
            abroad dreams with confidence.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-indigo-100">
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Mentors</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3">Connect with us</h3>
          <div className="flex gap-4 text-xl">
            <FaFacebook className="cursor-pointer hover:scale-110 transition" />
            <FaGithub className="cursor-pointer hover:scale-110 transition" />
            <SiGmail className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-indigo-200 py-4 border-t border-white">
        © {new Date().getFullYear()} EduPath. All rights reserved.
      </div>
    </footer>
  );
}
