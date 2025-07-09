import { Plus } from "lucide-react";
import React from "react";
import CoursesTable from "../CoursesTable";

interface Props {
  setCreateCourseOpen: (open: boolean) => void;
}

const CourseTab = ({ setCreateCourseOpen }: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Courses Management
          </h2>
          <p className="text-gray-500">
            Manage all your courses and enrollments
          </p>
        </div>
        <button
          className="cursor-pointer flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          onClick={() => setCreateCourseOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Course
        </button>
      </div>
      <CoursesTable />
    </div>
  );
};

export default CourseTab;
