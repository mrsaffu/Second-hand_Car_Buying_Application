import React, { useEffect, useState } from "react";
import { assets, dummyMyBookingsData } from "../../assets/assets";
import Title from "../../Components/owner/Title";

const ManageCars = () => {
  const [bookings, setBookings] = useState([]);

  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title
        title="Manage Bookings"
        subTitle="View all listed cars, update their details, or remove them from the booking platform."
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-500">
            <tr>
              <th className="p-3 font-medium">Car</th>
              <th className="p-3 font-medium max-md:hidden">Date Range</th>
              <th className="p-3 font-medium">Total</th>
              <th className="p-3 font-medium max-md:hidden">Payment</th>
              <th className="p-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking, index) => (
              <tr
                key={index}
                className="border-t border-borderColor text-gray-500"
              >
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={booking.car.image}
                    alt=""
                    className="h-12 w-12 aspect-square rounded-md object-cover"
                  />
                  <div className="max-md:hidden">
                    <p className="font-medium">
                      {booking.car.brand} {booking.car.model}
                    </p>
                    <p className="text-xs">
                      {booking.car.seating_capacity} seats •{" "}
                      {booking.car.transmission}
                    </p>
                  </div>
                </td>

                <td className="p-3 max-md:hidden">{booking.dateRange}</td>

                <td className="p-3">${booking.totalAmount}</td>

                <td className="p-3 max-md:hidden">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      booking.paymentStatus === "Paid"
                        ? "bg-green-100 text-green-500"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {booking.paymentStatus}
                  </span>
                </td>

                <td className="flex items-center gap-2 p-3">
                  <img
                    src={
                      booking.car.isAvaliable
                        ? assets.eye_close_icon
                        : assets.eye_icon
                    }
                    alt=""
                    className="cursor-pointer w-5 h-5"
                  />
                  <img
                    src={assets.delete_icon}
                    alt=""
                    className="cursor-pointer w-5 h-5"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageCars;
