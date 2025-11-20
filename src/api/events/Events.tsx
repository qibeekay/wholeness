// events/Events.ts
import axios from "axios";
import { toast } from "sonner";

const URL = import.meta.env.VITE_API_URL;
const bearer = import.meta.env.VITE_BEARER_TOKEN;

// Get all events (keep as is)
export const GetEvents = async () => {
  try {
    const response = await axios.get(`${URL}/events/events.php`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      return [];
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Fetch error", error);
    throw new Error(error.response?.data?.message || "Failed to fetch events");
  }
};

// Get single event - FIXED URL
export const GetSingleEvent = async (id: number) => {
  try {
    const response = await axios.get(`${URL}/events/events.php?id=${id}`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      return null;
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Fetch error", error);
    throw new Error(error.response?.data?.message || "Failed to fetch event");
  }
};

// Create new event (keep as is)
export const CreateNewEvents = async (eventData: {
  title: string;
  description: string;
  event_date: string;
  event_time: string;
  venue: string;
  capacity: string;
  category: string;
  price: string;
  image: File | null;
}) => {
  try {
    const response = await axios.post(`${URL}/events/events.php`, eventData, {
      headers: {
        Authorization: `Bearer ${bearer}`,
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      return null;
    } else {
      toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error creating new event", error);
    toast.error("Error creating event");
    throw new Error(error.response?.data?.message || "Failed to create event");
  }
};

// Edit event - FIXED URL
export const EditEvent = async (
  eventData: {
    title: string;
    description: string;
    event_date: string;
    event_time: string;
    venue: string;
    capacity: string;
    category: string;
    price: string;
    image: File | null;
  },
  id: number
) => {
  try {
    const response = await axios.post(
      `${URL}/events/events.php?id=${id}`,
      eventData,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    if (response.data.success === false) {
      toast.error(response.data.message);
      return null;
    } else {
      toast.success(response.data.message);
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error updating event", error);
    toast.error("Error updating event");
    throw new Error(error.response?.data?.message || "Failed to update event");
  }
};

// Delete event - FIXED URL
export const DeleteEvent = async (id: number) => {
  try {
    const response = await axios.delete(`${URL}/events/events.php?id=${id}`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      return false;
    } else {
      toast.success(response.data.message);
      return true;
    }
  } catch (error: any) {
    console.error("Error deleting event", error);
    toast.error("Error deleting event");
    throw new Error(error.response?.data?.message || "Failed to delete event");
  }
};

// Book event – NEW signature
export const BookEvent = async (eventId: number, userId: number) => {
  try {
    const response = await axios.post(
      `${URL}/events/events.php?id=${eventId}`,
      { action: "book", user_id: userId }, // 👈 payload
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.success === false) {
      toast.error(response.data.message);
      return false;
    }
    toast.success(response.data.message);
    return true;
  } catch (error: any) {
    console.error("Error booking event", error);
    toast.error(error.response?.data?.message || "Error booking event");
    throw error;
  }
};

// Cancel booking – NEW signature
export const CancelBooking = async (eventId: number, userId: number) => {
  try {
    const response = await axios.delete(
      `${URL}/events/events.php?id=${eventId}`,
      {
        headers: { Authorization: `Bearer ${bearer}` },
        data: { action: "cancel", user_id: userId }, // 👈 payload
      }
    );

    if (response.data.success === false) {
      toast.error(response.data.message);
      return false;
    }
    toast.success(response.data.message);
    return true;
  } catch (error: any) {
    console.error("Error cancelling booking", error);
    toast.error(error.response?.data?.message || "Error cancelling booking");
    throw error;
  }
};

// Get user's booked events
export const GetUserBookedEvents = async () => {
  try {
    const response = await axios.get(`${URL}/events/user-events.php`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      return [];
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Error fetching user events", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch user events"
    );
  }
};

// Get event attendees
export const GetEventAttendees = async (eventId: number) => {
  try {
    const response = await axios.get(
      `${URL}/events/events.php?id=${eventId}&action=attendees`,
      {
        headers: {
          Authorization: `Bearer ${bearer}`,
        },
      }
    );

    if (response.data.success === false) {
      toast.error(response.data.message);
      return [];
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Fetch error", error);
    throw new Error(
      error.response?.data?.message || "Failed to fetch attendees"
    );
  }
};
