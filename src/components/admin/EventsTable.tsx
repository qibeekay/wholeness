import { Edit, Trash2, Eye, Users, Calendar } from "lucide-react";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  venue: string;
  registered: number;
  capacity: number;
  category: string;
  price: number;
  status: "upcoming" | "ongoing" | "completed";
}

const EventsTable = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "Understanding Dementia Workshop",
      date: "2024-01-15",
      time: "10:00 AM - 2:00 PM",
      venue: "Community Center Hall A",
      registered: 18,
      capacity: 30,
      category: "workshop",
      price: 0,
      status: "upcoming",
    },
    {
      id: 2,
      title: "Caregiver Support Group",
      date: "2024-01-20",
      time: "6:00 PM - 8:00 PM",
      venue: "Online via Zoom",
      registered: 12,
      capacity: 20,
      category: "support",
      price: 0,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Professional Training Session",
      date: "2024-01-10",
      time: "9:00 AM - 5:00 PM",
      venue: "Training Center",
      registered: 25,
      capacity: 25,
      category: "training",
      price: 299,
      status: "completed",
    },
  ];

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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

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
                      {formatDate(event.date)}
                    </div>
                    <div className="text-sm text-gray-500">{event.time}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {event.venue}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-gray-400 mr-2" />
                      <div>
                        <span className="text-sm text-gray-900">
                          {event.registered}
                        </span>
                        <span className="text-sm text-gray-500">
                          /{event.capacity}
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
                    {event.price === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      <span>£{event.price}</span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full capitalize ${getStatusColor(
                        event.status
                      )}`}
                    >
                      {event.status}
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

export default EventsTable;
