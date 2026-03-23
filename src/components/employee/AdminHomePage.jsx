import homepage_bg from "../../assets/homepage_bg.png";
import { UserPlus, Search, Pencil, ShieldCheck, BookOpen } from "lucide-react";

export default function AdminHomePage() {
  return (
    <div className="pt-20 mx-70">
      <section
        className="relative text-white rounded-3xl overflow-hidden"
        style={{
          backgroundImage: `url(${homepage_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 p-10">
          <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/90 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h2 className="text-gray-600">Employees</h2>
              <p className="text-3xl font-bold mt-2">120</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h2 className="text-gray-600">Mentors</h2>
              <p className="text-3xl font-bold mt-2">45</p>
            </div>

            <div className="bg-white/90 backdrop-blur-md text-black p-6 rounded-2xl shadow-lg hover:scale-105 transition">
              <h2 className="text-gray-600">Courses</h2>
              <p className="text-3xl font-bold mt-2">78</p>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/90 text-black p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold mb-4">Recent Activities</h2>
              <ul className="space-y-2 text-sm">
                <li>✔ User A registered</li>
                <li>✔ Course React added</li>
                <li>✔ Mentor approved</li>
              </ul>
            </div>

            <div className="bg-white/90 text-black p-6 rounded-2xl shadow">
              <h2 className="text-xl font-bold mb-4">Quick Actions</h2>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white h-24 rounded-xl cursor-pointer transition shadow">
                  <UserPlus size={28} />
                  <span className="font-semibold text-sm">Add Employee</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white h-24 rounded-xl cursor-pointer transition shadow">
                  <Search size={28} />
                  <span className="font-semibold text-sm">Find Employee</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white h-24 rounded-xl cursor-pointer transition shadow">
                  <Pencil size={28} />
                  <span className="font-semibold text-sm">Update Employee</span>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 hover:scale-105 text-white h-24 rounded-xl cursor-pointer transition shadow">
                  <ShieldCheck size={28} />
                  <span className="font-semibold text-sm">Grant Mentor</span>
                </div>

                <div className="col-span-2 flex flex-col items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 hover:scale-102 text-white h-24 rounded-xl cursor-pointer transition shadow">
                  <BookOpen size={28} />
                  <span className="font-semibold text-sm">Manage Courses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-10 bg-white/90 text-black p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">System Admins</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="text-gray-600 border-b">
              <th className="py-2">User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-blue-200 hover:bg-blue-100 transition">
              <td className="py-5 px-10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                  A
                </div>
                Admin A
              </td>
              <td>adminA@gmail.com</td>
              <td>ADMIN</td>
              <td>
                <span className="bg-green-100 font-bold text-green-600 px-2 py-1 rounded text-sm">
                  Normal
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
