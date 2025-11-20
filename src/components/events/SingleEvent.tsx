// SingleEvent.tsx
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { useState, useEffect } from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { BookEvent, CancelBooking } from "../../api/events/Events";
import { toast } from "sonner";

interface Props {
  selectedEvent: any;
  setSelectedEvent: any;
}

const SingleEvent = ({ selectedEvent, setSelectedEvent }: Props) => {
  const [isBooked, setIsBooked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [event, setEvent] = useState(selectedEvent);

  /* ---------- get current user ONCE ---------- */
  const [currentUser, setCurrentUser] = useState<any>(null);
  useEffect(() => {
    const raw = localStorage.getItem("user");
    if (raw) setCurrentUser(JSON.parse(raw));
  }, []);

  /* mutate the counters + progress bar instantly */
  const adjustBooked = (delta: number) =>
    setEvent((prev: any) =>
      prev ? { ...prev, booked: Math.max(0, prev.booked + delta) } : prev
    );

  // Check if user is already booked for this event
  useEffect(() => {
    // You might want to fetch this from your user context or API
    const checkBookingStatus = async () => {
      // This is a placeholder - implement based on your user management
      // For now, we'll check localStorage or context
      const userBookings = JSON.parse(
        localStorage.getItem("userBookings") || "[]"
      );
      setIsBooked(userBookings.includes(selectedEvent?.id));
    };

    if (selectedEvent) {
      checkBookingStatus();
    }
  }, [selectedEvent]);


  const getCategoryColor = (category: string) => {
    const colors = {
      workshop: "bg-calming-blue",
      support: "bg-nature-green",
      social: "bg-warm-orange",
      training: "bg-soft-purple",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleBooking = async () => {
    if (!selectedEvent || !currentUser) return;

    setLoading(true);
    try {
      const userId = Number(currentUser.id);
      if (!userId) throw new Error("No user id");

      if (isBooked) {
        const ok = await CancelBooking(selectedEvent.id, userId);
        if (ok) {
          setIsBooked(false);
          adjustBooked(-1);
          /* keep localStorage in sync */
          const list: number[] = JSON.parse(
            localStorage.getItem("userBookings") || "[]"
          );
          localStorage.setItem(
            "userBookings",
            JSON.stringify(list.filter((i) => i !== selectedEvent.id))
          );
        }
      } else {
        const ok = await BookEvent(selectedEvent.id, userId);
        if (ok) {
          setIsBooked(true);
          adjustBooked(+1);
          const list: number[] = JSON.parse(
            localStorage.getItem("userBookings") || "[]"
          );
          list.push(selectedEvent.id);
          localStorage.setItem("userBookings", JSON.stringify(list));
        }
      }
    } catch (e: any) {
    } finally {
      setLoading(false);
    }
  };

  const isEventFull = selectedEvent?.booked >= selectedEvent?.capacity;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => setSelectedEvent(null)}
          className="mb-6 bg-[#ECE1FA] text-primary text-sm sm:text-base rounded-[8px] cursor-pointer px-4 py-2 flex items-center"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-64 relative">
            {selectedEvent?.image && (
              <img
                src={selectedEvent?.image}
                alt={selectedEvent?.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-6 text-white">
                <p
                  className={`${getCategoryColor(
                    selectedEvent?.category
                  )} inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 mb-2`}
                >
                  {selectedEvent?.category.charAt(0).toUpperCase() +
                    selectedEvent?.category.slice(1)}
                </p>
                <h1 className="text-3xl font-bold mb-2">
                  {selectedEvent?.title}
                </h1>
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Event Details</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center space-x-3">
                    <img
                      src={getImageSrc("date.png")}
                      alt="Date icon"
                      className="w-4 sm:w-5 h-4 sm:h-5"
                    />
                    <span>{formatDate(selectedEvent?.event_date)}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#673F9A]" />
                    <span>{selectedEvent?.event_time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#673F9A]" />
                    <span>{selectedEvent?.venue}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#673F9A]" />
                    <span>
                      {selectedEvent?.booked} / {selectedEvent?.capacity}{" "}
                      registered
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Organizer</h2>
                <div className="text-gray-600">
                  <p className="font-medium">{selectedEvent?.organizer}</p>
                  <p className="text-sm">{selectedEvent?.contactEmail}</p>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold p-2">
                    {selectedEvent?.price === 0
                      ? "Free"
                      : `£${selectedEvent?.price}`}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">
                {selectedEvent?.description}
              </p>
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="w-full sm:flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-300"
                      style={{
                        width: `${
                          (selectedEvent?.booked / selectedEvent?.capacity) *
                          100
                        }%`,
                      }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">
                    {selectedEvent?.booked} of {selectedEvent?.capacity} spots
                    filled
                  </p>
                </div>
                <button
                  onClick={handleBooking}
                  disabled={loading || (!isBooked && isEventFull)}
                  className="cursor-pointer bg-primary text-white py-[10px] w-[224px] h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading
                    ? "Processing..."
                    : isBooked
                    ? "Cancel Registration"
                    : isEventFull
                    ? "Event Full"
                    : "Register Now"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleEvent;
