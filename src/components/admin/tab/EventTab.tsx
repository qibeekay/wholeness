import { Plus } from "lucide-react";
import React from "react";
import EventsTable from "../EventsTable";

interface Props {
  setCreateEventOpen: (open: boolean) => void;
  refreshEvents?: number;
  onEventCreated?: () => void;
}

const EventTab = ({
  setCreateEventOpen,
  refreshEvents,
  onEventCreated,
}: Props) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            Events Management
          </h2>
          <p className="text-gray-500">
            Manage all your events and registrations
          </p>
        </div>
        <button
          className="cursor-pointer flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          onClick={() => setCreateEventOpen(true)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Event
        </button>
      </div>
      <EventsTable
        refreshTrigger={refreshEvents}
        onEventCreated={onEventCreated}
      />
    </div>
  );
};

export default EventTab;
