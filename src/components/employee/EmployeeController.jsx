export default function AdminHomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Nhân viên</h2>
          <p className="text-2xl font-bold">120</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Khách hàng</h2>
          <p className="text-2xl font-bold">540</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg">Khóa học</h2>
          <p className="text-2xl font-bold">35</p>
        </div>
      </div>
    </div>
  );
}
