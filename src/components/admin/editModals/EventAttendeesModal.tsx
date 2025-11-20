import { X, User, Mail, Calendar, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { GetEventAttendees } from "../../../api/events/Events";
import { formatDate } from "../../../utils/formatDate";

interface Attendee {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

interface EventAttendeesModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  eventId: number;
  eventTitle: string;
}

const EventAttendeesModal = ({
  open,
  onOpenChange,
  eventId,
  eventTitle,
}: EventAttendeesModalProps) => {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchAttendees = async () => {
    if (!eventId) return;

    setLoading(true);
    try {
      const data = await GetEventAttendees(eventId);
      setAttendees(data.attendees);
    } catch (error) {
      console.error("Error fetching attendees:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (open) {
      fetchAttendees();
    }
  }, [open, eventId]);

  return (
    <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"}`}>
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500/75"
          onClick={() => onOpenChange(false)}
        />

        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">
                Event Attendees
              </h3>
              <p className="text-sm text-gray-500 mt-1">{eventTitle}</p>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="max-h-96 overflow-y-auto">
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="text-gray-500">Loading attendees...</div>
              </div>
            ) : attendees.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <Users className="h-12 w-12 mx-auto text-gray-300 mb-3" />
                <p>No attendees registered for this event yet.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {attendees.map((attendee) => (
                  <div
                    key={attendee.id}
                    className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="h-5 w-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {attendee.name}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Mail className="h-3 w-3 mr-1" />
                          {attendee.email}
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {formatDate(attendee.created_at)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Total attendees: {attendees.length}
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventAttendeesModal;
