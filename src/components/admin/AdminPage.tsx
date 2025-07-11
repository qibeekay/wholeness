import React, { useState } from "react";
import {
  Calendar,
  BookOpen,
  Users,
  FileText,
  Activity,
  Plus,
} from "lucide-react";
import CreateEventModal from "./CreateEventModal";
import CreateCourseModal from "./CreateCourseModal";
import CreateBlogModal from "./CreateBlogModal";
import BlogManager from "./BlogManager";
import CoursesTable from "./CoursesTable";
import EventsTable from "./EventsTable";
import DasboardTab from "./tab/DasboardTab";
import EventTab from "./tab/EventTab";
import CourseTab from "./tab/CourseTab";
import BlogsTab from "./tab/BlogsTab";

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [createEventOpen, setCreateEventOpen] = useState(false);
  const [createCourseOpen, setCreateCourseOpen] = useState(false);
  const [createBlogOpen, setCreateBlogOpen] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <DasboardTab
            setCreateBlogOpen={setCreateBlogOpen}
            setCreateEventOpen={setCreateEventOpen}
            setCreateCourseOpen={setCreateCourseOpen}
          />
        );
      case "events":
        return <EventTab setCreateEventOpen={setCreateEventOpen} />;
      case "courses":
        return <CourseTab setCreateCourseOpen={setCreateCourseOpen} />;
      case "blogs":
        return <BlogsTab setCreateBlogOpen={setCreateBlogOpen} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Admin Dashboard
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Manage events, courses, blogs and content for Wholeness Haven CIC
          </p>
        </div>

        {/* Custom Tab System */}
        <div className="space-y-6">
          {/* Tab Buttons */}
          <div className="grid w-full grid-cols-4 border-b border-gray-200">
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === "dashboard"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("dashboard")}
            >
              Dashboard
            </button>
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === "events"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("events")}
            >
              Events
            </button>
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === "courses"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("courses")}
            >
              Courses
            </button>
            <button
              className={`py-4 px-1 text-center border-b-2 font-medium text-sm cursor-pointer ${
                activeTab === "blogs"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
              onClick={() => setActiveTab("blogs")}
            >
              Blogs
            </button>
          </div>

          {/* Tab Content */}
          <div>{renderTabContent()}</div>
        </div>

        {/* Modals */}
        <CreateEventModal
          open={createEventOpen}
          onOpenChange={setCreateEventOpen}
        />
        <CreateCourseModal
          open={createCourseOpen}
          onOpenChange={setCreateCourseOpen}
        />
        <CreateBlogModal
          open={createBlogOpen}
          onOpenChange={setCreateBlogOpen}
        />
      </div>
    </div>
  );
};

export default AdminPage;
