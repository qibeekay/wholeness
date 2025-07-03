import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { getImageSrc } from "../../utils/imageUtils";

interface Props {
  selectedEvent: any;
  setSelectedEvent: any;
}
const SingleEvent = ({ selectedEvent, setSelectedEvent }: Props) => {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

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

  const handleRegister = (eventId: number) => {
    setRegisteredEvents((prev) => [...prev, eventId]);
    console.log(`Registered for event ${eventId}`);
  };

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
            {selectedEvent.image && (
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40 flex items-end">
              <div className="p-6 text-white">
                <p
                  className={`${getCategoryColor(
                    selectedEvent.category
                  )} text-white mb-2`}
                >
                  {selectedEvent.category.charAt(0).toUpperCase() +
                    selectedEvent.category.slice(1)}
                </p>
                <h1 className="text-3xl font-bold mb-2">
                  {selectedEvent.title}
                </h1>
                <p className="text-lg opacity-90">
                  {selectedEvent.description}
                </p>
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
                    <span>{formatDate(selectedEvent.date)}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-[#673F9A]" />
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#673F9A]" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-[#673F9A]" />
                    <span>
                      {selectedEvent.registered}/{selectedEvent.capacity}{" "}
                      registered
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Organizer</h2>
                <div className="text-gray-600">
                  <p className="font-medium">{selectedEvent.organizer}</p>
                  <p className="text-sm">{selectedEvent.contactEmail}</p>
                </div>
                <div className="pt-4">
                  <p className="text-2xl font-bold p-2">
                    {selectedEvent.price === 0
                      ? "Free"
                      : `£${selectedEvent.price}`}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">About This Event</h2>
              <p className="text-gray-700 leading-relaxed">
                {selectedEvent.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Location Details</h2>
              <p className="text-gray-700 mb-4">
                {selectedEvent.locationDetails}
              </p>

              {selectedEvent.locationImages.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedEvent.locationImages.map(
                    (image: any, index: any) => (
                      <img
                        key={index}
                        src={image}
                        alt={`${selectedEvent.location} - Image ${index + 1}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    )
                  )}
                </div>
              )}
            </div>

            <div className="border-t pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all duration-300"
                    style={{
                      width: `${
                        (selectedEvent.registered / selectedEvent.capacity) *
                        100
                      }%`,
                    }}
                  ></div>
                </div>
                <button
                  onClick={() => handleRegister(selectedEvent.id)}
                  disabled={
                    registeredEvents.includes(selectedEvent.id) ||
                    selectedEvent.registered >= selectedEvent.capacity
                  }
                  className="cursor-pointer bg-primary text-white py-[10px] w-[224px] h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300"
                >
                  {registeredEvents.includes(selectedEvent.id)
                    ? "Registered!"
                    : selectedEvent.registered >= selectedEvent.capacity
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
