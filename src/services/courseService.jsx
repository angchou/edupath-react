import { BASE_URL } from "../utils/apiConfig";

export const getAllCourses = async () => {
  try {
    const token = localStorage.getItem("token");

    const res = await fetch(BASE_URL + "/api/course/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed");

    const data = await res.json();

    return data.map((c) => ({
      id: c.courseId,
      title: c.courseName,
      description: c.courseDescription,
      students: c.courseSize,
      mentor: c.mentorSummaryResponse?.mentorUserName || "Unknown",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};
