


export interface BookingType {
  bookings: BookingData[];
  monthlyBooking:MonthlyData[]
}

export interface BookingData {
  id: string;
  transaction_id: string;
  amount: string;
  tier_name: string;
  reference: string;
  email: string;
  created_at: string;
}
export interface MonthlyData {
  month: string;
  amount: string;
}