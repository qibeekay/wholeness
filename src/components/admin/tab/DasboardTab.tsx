import {
  Activity,
  BookOpen,
  Calendar,
  FileText,
  Plus,
  Users,
} from "lucide-react";

interface Props {
  setCreateEventOpen: (open: boolean) => void;
  setCreateBlogOpen: (open: boolean) => void;
  setCreateCourseOpen: (open: boolean) => void;
}

const DasboardTab = ({
  setCreateEventOpen,
  setCreateBlogOpen,
  setCreateCourseOpen,
}: Props) => {
  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Events</h3>
            <Calendar className="h-5 w-5 text-blue-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-800">24</div>
            <p className="text-xs text-gray-500 mt-1">+2 from last month</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">
              Active Courses
            </h3>
            <BookOpen className="h-5 w-5 text-green-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-800">12</div>
            <p className="text-xs text-gray-500 mt-1">+3 from last month</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Blog Posts</h3>
            <FileText className="h-5 w-5 text-orange-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-800">48</div>
            <p className="text-xs text-gray-500 mt-1">+8 from last month</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
          <div className="flex flex-row items-center justify-between pb-2">
            <h3 className="text-sm font-medium text-gray-500">Total Users</h3>
            <Users className="h-5 w-5 text-purple-500" />
          </div>
          <div className="mt-2">
            <div className="text-2xl font-bold text-gray-800">1,234</div>
            <p className="text-xs text-gray-500 mt-1">+12% from last month</p>
          </div>
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="pb-4 border-b border-gray-200">
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
              <Activity className="h-5 w-5 text-blue-500" />
              <span>Recent Activity</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Latest updates across your platform
            </p>
          </div>
          <div className="space-y-4 pt-4">
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <Calendar className="h-5 w-5 text-blue-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">
                  New event registration
                </p>
                <p className="text-sm text-gray-500">
                  Understanding Dementia Workshop - 2 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <BookOpen className="h-5 w-5 text-green-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">Course enrollment</p>
                <p className="text-sm text-gray-500">
                  Dementia Care Fundamentals - 4 hours ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <FileText className="h-5 w-5 text-orange-500 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">
                  New blog post published
                </p>
                <p className="text-sm text-gray-500">
                  Supporting Families - 6 hours ago
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="pb-4 border-b border-gray-200">
            <h3 className="flex items-center space-x-2 text-lg font-semibold text-gray-800">
              <Plus className="h-5 w-5 text-blue-500" />
              <span>Quick Actions</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1">Create new content</p>
          </div>
          <div className="space-y-3 pt-4">
            <button
              className="cursor-pointer w-full flex items-center justify-start px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
              onClick={() => setCreateEventOpen(true)}
            >
              <Calendar className="h-5 w-5 mr-3 text-blue-500" />
              <span>Create New Event</span>
            </button>
            <button
              className="cursor-pointer w-full flex items-center justify-start px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
              onClick={() => setCreateCourseOpen(true)}
            >
              <BookOpen className="h-5 w-5 mr-3 text-green-500" />
              <span>Add New Course</span>
            </button>
            <button
              className="cursor-pointer w-full flex items-center justify-start px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700"
              onClick={() => setCreateBlogOpen(true)}
            >
              <FileText className="h-5 w-5 mr-3 text-orange-500" />
              <span>Write Blog Post</span>
            </button>
            <button className="cursor-pointer w-full flex items-center justify-start px-4 py-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-gray-700">
              <Users className="h-5 w-5 mr-3 text-purple-500" />
              <span>View All Users</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DasboardTab;
