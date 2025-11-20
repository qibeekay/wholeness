// utils/auth.ts
export const getAuthToken = (): string | null => {
  // Since you're using Google OAuth, you might not have a traditional token
  // But you can check if user exists in localStorage
  const user = localStorage.getItem("user");
  return user ? "authenticated" : null; // Simplified for your use case
};

export const isAuthenticated = (): boolean => {
  return localStorage.getItem("user") !== null;
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const getUserBookings = (): number[] => {
  const bookings = localStorage.getItem("userBookings");
  return bookings ? JSON.parse(bookings) : [];
};

export const setUserBookings = (bookings: number[]): void => {
  localStorage.setItem("userBookings", JSON.stringify(bookings));
};
