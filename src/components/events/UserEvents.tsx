// UserEvents.tsx
import React, { useEffect, useState } from "react";
import { Calendar, Clock, MapPin, Users, X } from "lucide-react";
import { GetUserBookedEvents, CancelBooking } from "../../api/events/Events";

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  venue: string;
  capacity: number;
  booked: number;
  category: string;
  price: number;
  image: string;
}

const UserEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) setCurrentUser(JSON.parse(raw));
  }, []);

  const fetchUserEvents = async () => {
    try {
      setLoading(true);
      const userEvents = await GetUserBookedEvents();
      setEvents(userEvents);
    } catch (error) {
      console.error("Error fetching user events:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelBooking = async (eventId: number) => {
    const userId = Number(currentUser.id);
    if (!userId) throw new Error("No user id");
    try {
      const success = await CancelBooking(eventId, userId);
      if (success) {
        setEvents(events.filter((event) => event.id !== eventId));
        // Update localStorage
        const userBookings = JSON.parse(
          localStorage.getItem("userBookings") || "[]"
        );
        const updatedBookings = userBookings.filter(
          (id: number) => id !== eventId
        );
        localStorage.setItem("userBookings", JSON.stringify(updatedBookings));
      }
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  useEffect(() => {
    fetchUserEvents();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">Loading your events...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Events</h1>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No upcoming events
            </h3>
            <p className="text-gray-600">
              You haven't registered for any events yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{event.title}</h3>
                    <button
                      onClick={() => handleCancelBooking(event.id)}
                      className="text-red-600 hover:text-red-800 transition-colors"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <p className="text-gray-600 mb-4">{event.description}</p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {new Date(event.event_date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.event_time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-between items-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        event.price === 0
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {event.price === 0 ? "Free" : `£${event.price}`}
                    </span>
                    <span className="text-sm text-gray-500">
                      {event.booked}/{event.capacity} registered
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UserEvents;
