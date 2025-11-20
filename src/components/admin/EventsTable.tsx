import { Edit, Trash2, Eye, Users, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { DeleteEvent, GetEvents } from "../../api/events/Events";
import EditEventModal from "./editModals/EditEventModal";
import EventAttendeesModal from "./editModals/EventAttendeesModal";

interface Event {
  id: number;
  title: string;
  event_date: string;
  event_time: string;
  description: string;
  venue: string;
  booked: string;
  capacity: string;
  category: string;
  price: string;
  status: "upcoming" | "ongoing" | "completed";
}

interface EventManagerProps {
  refreshTrigger?: number;
  onEventCreated?: () => void;
}

const EventsTable = ({
  refreshTrigger = 0,
  onEventCreated,
}: EventManagerProps) => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [attendeesModalOpen, setAttendeesModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "upcoming":
        return "bg-blue-100 text-blue-800";
      case "ongoing":
        return "bg-green-100 text-green-800";
      case "completed":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "workshop":
        return "bg-purple-100 text-purple-800";
      case "support":
        return "bg-green-100 text-green-800";
      case "training":
        return "bg-blue-100 text-blue-800";
      case "social":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleViewAttendees = (event: Event) => {
    setSelectedEvent(event);
    setAttendeesModalOpen(true);
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getProduct = async () => {
    const res = await GetEvents();
    setEvents(res);
  };

  useEffect(() => {
    getProduct();
  }, [refreshTrigger]);

  const deleteEvent = async (id: number) => {
    setLoading(true);
    try {
      await DeleteEvent(id);
      if (onEventCreated) {
        onEventCreated();
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (event: Event) => {
    setSelectedEvent(event);
    setEditModalOpen(true);
  };

  if (loading && events.length === 0) {
    return (
      <div className="flex justify-center items-center py-8">
        <div className="text-gray-500">Loading lists...</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Calendar className="h-6 w-6 text-primary" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800">
              Events Management
            </h2>
            <p className="text-gray-500">
              Manage all your events and registrations
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Event Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date & Time
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Venue
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Registration
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Category
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
              {events.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">
                      {event.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {formatDate(event.event_date)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {event.event_time}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event?.venue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <span className="text-sm text-gray-900">
                          {event?.booked}{" "}
                        </span>
                        <span className="text-sm text-gray-500">
                          \ {event.capacity}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getCategoryColor(
                        event.category
                      )}`}
                    >
                      {event.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {event.price === "0" ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <span>£{event.price}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(
                        event?.status
                      )}`}
                    >
                      {event?.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex justify-end space-x-3">
                      <button
                        className="text-gray-400 hover:text-blue-600 cursor-pointer"
                        onClick={() => handleViewAttendees(event)}
                        title="View Attendees"
                      >
                        <Users className="h-4 w-4" />
                      </button>

                      <button
                        className="text-gray-400 hover:text-yellow-600 cursor-pointer"
                        onClick={() => handleEditClick(event)}
                      >
                        <Edit className="h-4 w-4" />
                      </button>
                      <button
                        className="text-gray-400 hover:text-red-600 cursor-pointer"
                        onClick={() => deleteEvent(event?.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {events.length === 0 && !loading && (
            <div className="text-center py-8 text-gray-500">
              No blog posts found. Create your first blog post!
            </div>
          )}
        </div>
        {selectedEvent && (
          <>
            <EditEventModal
              open={editModalOpen}
              onOpenChange={setEditModalOpen}
              event={selectedEvent}
              refresh={onEventCreated}
            />
            <EventAttendeesModal
              open={attendeesModalOpen}
              onOpenChange={setAttendeesModalOpen}
              eventId={selectedEvent.id}
              eventTitle={selectedEvent.title}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default EventsTable;
