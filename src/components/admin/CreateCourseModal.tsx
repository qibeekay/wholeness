import React, { useState } from "react";
import { BookOpen } from "lucide-react";

interface CreateCourseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateCourseModal = ({ open, onOpenChange }: CreateCourseModalProps) => {
  const [courseForm, setCourseForm] = useState({
    title: "",
    description: "",
    instructor: "",
    duration: "",
    lessons: "",
    price: "",
    level: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Course created:", courseForm);
    setCourseForm({
      title: "",
      description: "",
      instructor: "",
      duration: "",
      lessons: "",
      price: "",
      level: "",
      category: "",
      image: "",
    });
    onOpenChange(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-primary/10 backdrop-blur-[3px] flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Modal Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2 text-gray-800">
                <BookOpen className="h-6 w-6 text-primary" />
                Create New Course
              </h2>
              <p className="text-gray-500 mt-1">
                Add a new course to your catalog
              </p>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-500 cursor-pointer"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Modal Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="course-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Course Title
              </label>
              <input
                id="course-title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={courseForm.title}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, title: e.target.value })
                }
                placeholder="Enter course title"
                required
              />
            </div>

            <div>
              <label
                htmlFor="course-description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="course-description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={courseForm.description}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, description: e.target.value })
                }
                placeholder="Course description"
                rows={3}
                required
              />
            </div>

            <div>
              <label
                htmlFor="course-instructor"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Instructor
              </label>
              <input
                id="course-instructor"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={courseForm.instructor}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, instructor: e.target.value })
                }
                placeholder="Instructor name"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="course-duration"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Duration
                </label>
                <input
                  id="course-duration"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={courseForm.duration}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, duration: e.target.value })
                  }
                  placeholder="e.g., 4 weeks"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="course-lessons"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Number of Lessons
                </label>
                <input
                  id="course-lessons"
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={courseForm.lessons}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, lessons: e.target.value })
                  }
                  placeholder="12"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="course-price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price (£)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">£</span>
                  </div>
                  <input
                    id="course-price"
                    type="number"
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-primary"
                    value={courseForm.price}
                    onChange={(e) =>
                      setCourseForm({ ...courseForm, price: e.target.value })
                    }
                    placeholder="0 for free"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="course-level"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Level
                </label>
                <select
                  id="course-level"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={courseForm.level}
                  onChange={(e) =>
                    setCourseForm({ ...courseForm, level: e.target.value })
                  }
                >
                  <option value="">Select level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="course-category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="course-category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={courseForm.category}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, category: e.target.value })
                }
              >
                <option value="">Select category</option>
                <option value="family">Family</option>
                <option value="professional">Professional</option>
                <option value="caregiver">Caregiver</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="course-image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Featured Image URL
              </label>
              <input
                id="course-image"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={courseForm.image}
                onChange={(e) =>
                  setCourseForm({ ...courseForm, image: e.target.value })
                }
                placeholder="https://example.com/image.jpg"
              />
            </div>

            {/* Modal Footer */}
            <div className="flex justify-end space-x-3 pt-4 border-t border-gray-200">
              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="cursor-pointer px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Create Course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourseModal;
