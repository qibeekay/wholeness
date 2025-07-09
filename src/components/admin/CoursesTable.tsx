import { Edit, Trash2, Eye, Users, BookOpen, Play } from "lucide-react";

interface Course {
  id: number;
  title: string;
  instructor: string;
  enrolled: number;
  duration: string;
  lessons: number;
  price: number;
  level: string;
  category: string;
  status: "active" | "draft" | "archived";
  completionRate: number;
}

const CoursesTable = () => {
  const courses: Course[] = [
    {
      id: 1,
      title: "Dementia Care Fundamentals",
      instructor: "Dr. Sarah Williams",
      enrolled: 245,
      duration: "4 weeks",
      lessons: 12,
      price: 0,
      level: "beginner",
      category: "family",
      status: "active",
      completionRate: 78,
    },
    {
      id: 2,
      title: "Professional Certification Course",
      instructor: "Emma Thompson",
      enrolled: 78,
      duration: "8 weeks",
      lessons: 24,
      price: 299,
      level: "advanced",
      category: "professional",
      status: "active",
      completionRate: 65,
    },
    {
      id: 3,
      title: "Caregiver Wellness Program",
      instructor: "Dr. Michael Chen",
      enrolled: 156,
      duration: "6 weeks",
      lessons: 18,
      price: 49,
      level: "intermediate",
      category: "caregiver",
      status: "draft",
      completionRate: 0,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-2">
          <BookOpen className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-semibold text-gray-800">
            Courses Management
          </h2>
        </div>
        <p className="text-gray-500 mb-6">
          Manage all your courses and enrollments
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Course Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Instructor
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Enrollment
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Duration
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Level
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Completion
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {course.title}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <Play className="h-3 w-3 mr-1" />
                      {course.lessons} lessons
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.instructor}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-900">
                        {course.enrolled}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {course.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(
                        course.level
                      )}`}
                    >
                      {course.level}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {course.price === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <span>£{course.price}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-16 mr-2">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${course.completionRate}%` }}
                          ></div>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500">
                        {course.completionRate}%
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        course.status
                      )}`}
                    >
                      {course.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button className="text-gray-400 hover:text-primary cursor-pointer">
                        <Eye className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-yellow-600 cursor-pointer">
                        <Edit className="h-4 w-4" />
                      </button>
                      <button className="text-gray-400 hover:text-red-600 cursor-pointer">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CoursesTable;
