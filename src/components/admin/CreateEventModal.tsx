import React, { useState } from "react";
import { Calendar } from "lucide-react";

interface CreateEventModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreateEventModal = ({ open, onOpenChange }: CreateEventModalProps) => {
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: undefined as Date | undefined,
    time: "",
    venue: "",
    capacity: "",
    category: "",
    price: "",
    image: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Event created:", eventForm);
    setEventForm({
      title: "",
      description: "",
      date: undefined,
      time: "",
      venue: "",
      capacity: "",
      category: "",
      price: "",
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
                <Calendar className="h-6 w-6 text-primary" />
                Create New Event
              </h2>
              <p className="text-gray-500 mt-1">
                Add a new event to your calendar
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
                htmlFor="event-title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Event Title
              </label>
              <input
                id="event-title"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={eventForm.title}
                onChange={(e) =>
                  setEventForm({ ...eventForm, title: e.target.value })
                }
                placeholder="Enter event title"
                required
              />
            </div>

            <div>
              <label
                htmlFor="event-description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Description
              </label>
              <textarea
                id="event-description"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={eventForm.description}
                onChange={(e) =>
                  setEventForm({ ...eventForm, description: e.target.value })
                }
                placeholder="Event description"
                rows={3}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                    onChange={(e) =>
                      setEventForm({
                        ...eventForm,
                        date: e.target.valueAsDate || undefined,
                      })
                    }
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="event-time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Time
                </label>
                <input
                  id="event-time"
                  type="time"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={eventForm.time}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, time: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="event-venue"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Venue
              </label>
              <input
                id="event-venue"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={eventForm.venue}
                onChange={(e) =>
                  setEventForm({ ...eventForm, venue: e.target.value })
                }
                placeholder="Event venue"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="event-capacity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Capacity
                </label>
                <input
                  id="event-capacity"
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                  value={eventForm.capacity}
                  onChange={(e) =>
                    setEventForm({ ...eventForm, capacity: e.target.value })
                  }
                  placeholder="Max attendees"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="event-price"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Price (£)
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">£</span>
                  </div>
                  <input
                    id="event-price"
                    type="number"
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-primary"
                    value={eventForm.price}
                    onChange={(e) =>
                      setEventForm({ ...eventForm, price: e.target.value })
                    }
                    placeholder="0 for free"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="event-category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="event-category"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={eventForm.category}
                onChange={(e) =>
                  setEventForm({ ...eventForm, category: e.target.value })
                }
              >
                <option value="">Select category</option>
                <option value="workshop">Workshop</option>
                <option value="support">Support</option>
                <option value="training">Training</option>
                <option value="social">Social</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="event-image"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Featured Image URL
              </label>
              <input
                id="event-image"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-primary"
                value={eventForm.image}
                onChange={(e) =>
                  setEventForm({ ...eventForm, image: e.target.value })
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
                Create Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
