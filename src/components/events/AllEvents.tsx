import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  MapPin,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import SingleEvent from "./SingleEvent";
import { getImageSrc } from "../../utils/imageUtils";
import { GetEvents } from "../../api/events/Events";

interface Event {
  id: number;
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  venue: string;
  capacity: number;
  booked: number;
  category: "workshop" | "support" | "social" | "training";
  price: number;
  image: string;
  organizer: string;
  contactEmail: string;
}

const AllEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const categories = [
    { value: "all", label: "All Events" },
    { value: "workshop", label: "Workshops" },
    { value: "support", label: "Support Groups" },
    { value: "social", label: "Social Events" },
    { value: "training", label: "Professional Training" },
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      workshop: "bg-calming-blue",
      support: "bg-nature-green",
      social: "bg-warm-orange",
      training: "bg-soft-purple",
    };
    return colors[category as keyof typeof colors] || "bg-gray-500";
  };

  const getEvents = async () => {
    const res = await GetEvents();
    setEvents(res);
  };

  useEffect(() => {
    getEvents();
  }, []);

  const filteredEvents =
    selectedCategory === "all"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  if (selectedEvent) {
    return (
      <SingleEvent
        selectedEvent={selectedEvent}
        setSelectedEvent={setSelectedEvent}
      />
    );
  }

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px]">
            Upcoming Events
          </h1>
          <p className="text-center max-w-2xl mx-auto text-sm sm:text-base">
            Join our community events designed to support, educate, and connect
            individuals and families affected by dementia.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category.value}
              //   variant={
              //     selectedCategory === category.value ? "default" : "outline"
              //   }
              onClick={() => setSelectedCategory(category.value)}
              className={`transition-all duration-200 text-sm sm:text-base rounded-[8px] cursor-pointer px-4 py-2 ${
                selectedCategory === category.value
                  ? "bg-primary text-white"
                  : "bg-[#ECE1FA] text-primary"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="card-hover overflow-hidden cursor-pointer rounded-[16px] bg-white"
              onClick={() => setSelectedEvent(event)}
            >
              <div className="h-48 relative">
                {event.image ? (
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full bg-gradient-to-br from-calming-blue/10 to-nature-green/10 flex items-center justify-center">
                    <Calendar className="h-16 w-16 text-calming-blue/50" />
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <p
                    className={`${getCategoryColor(
                      event.category
                    )} text-white inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary`}
                  >
                    {event.category.charAt(0).toUpperCase() +
                      event.category.slice(1)}
                  </p>
                  <p className="text-lg font-semibold">
                    {event.price === 0 ? "Free" : `£${event.price}`}
                  </p>
                </div>
                <h1 className="text-lg sm:text-xl md:text-[24px] font-semibold text-[#344054] leading-tight sm:leading-normal py-3">
                  {event.title}
                </h1>
                <p className="text-[#667085] text-xs sm:text-sm mt-1 sm:mt-2">
                  {event.description}
                </p>
              </div>

              <div className="p-5">
                <div className="py-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <img
                      src={getImageSrc("date.png")}
                      alt="Date icon"
                      className="w-4 sm:w-5 h-4 sm:h-5"
                    />
                    <span>{event.event_date}</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2">
                    <Clock className="h-5 w-5 text-[#673F9A]" />
                    <span>{event.event_time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-[#673F9A]" />
                    <span>{event.venue}</span>
                  </div>
                  <div className="flex items-center space-x-2 py-2">
                    <Users className="h-5 w-5 text-[#673F9A]" />
                    <span>
                      {event.booked}/{event.capacity} registered
                    </span>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${(event.booked / event.capacity) * 100}%`,
                    }}
                  ></div>
                </div>

                <div className="w-full grid place-items-center pt-6">
                  <button className="cursor-pointer bg-primary text-white py-[10px] w-[224px] h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No events found
            </h3>
            <p className="text-gray-600">
              Try selecting a different category or check back later.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
