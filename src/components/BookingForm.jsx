import { useState } from "react";
import emailjs, { init } from "@emailjs/browser";

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

    // Get current timezone for display
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Generate available time slots (9 AM to 5 PM)
    const generateTimeSlots = () => {
        const slots = [];
        for (let hour = 9; hour <= 17; hour++) {
            const ampm = hour >= 12 ? "PM" : "AM";
            const hour12 = hour > 12 ? hour - 12 : hour;
            const timeString = `${hour12}:00 ${ampm}`;
            slots.push(timeString);
        }
        return slots;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "date") {
            // Check if selected date is a weekend
            const selectedDate = new Date(value);
            const day = selectedDate.getDay();
            if (day === 0 || day === 6) {
                return; // Don't update if weekend
            }
        }
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmitStatus({ type: "", message: "" });

        const templateParams = {
            to_name: "Aayush", // Replace with your client's name
            from_name: formData.name,
            from_email: formData.email,
            meeting_date: formData.date,
            meeting_time: formData.time,
            message: formData.message || "No additional message",
            timezone: timeZone,
        };

        // Using EmailJS send without await
        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams
            )
            .then(() => {
                setSubmitStatus({
                    type: "success",
                    message:
                        "Booking request sent successfully! We will contact you shortly.",
                });
                setFormData({
                    name: "",
                    email: "",
                    date: "",
                    time: "",
                    message: "",
                });
            })
            .catch((error) => {
                setSubmitStatus({
                    type: "error",
                    message:
                        "There was an error sending your booking request. Please try again.",
                });
                console.error("EmailJS Error:", error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // Get today's date and format it for min date attribute
    const today = new Date().toISOString().split("T")[0];

    // Generate the maxDate (e.g., 3 months from now)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateStr = maxDate.toISOString().split("T")[0];

    // Function to determine which dates should be disabled
    const getDisabledDates = () => {
        let dates = [];
        let current = new Date(today);
        let end = new Date(maxDateStr);

        while (current <= end) {
            if (current.getDay() === 0 || current.getDay() === 6) {
                dates.push(new Date(current).toISOString().split("T")[0]);
            }
            current.setDate(current.getDate() + 1);
        }
        return dates;
    };

    const disabledDates = getDisabledDates();

    return (
        <div
            id="bookingform"
            className="flex flex-col items-center mt-6 lg:mt-20 px-4"
        >
            <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                Book a
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}
                    Free Consultation{" "}
                </span>
                Call
            </h2>

            <p className="mt-6 text-lg text-center text-neutral-500 max-w-2xl">
                Take the first step towards your financial goals. Schedule a
                one-on-one consultation to discuss your unique situation and
                learning objectives.
            </p>

            {submitStatus.message && (
                <div
                    className={`mt-4 p-4 rounded-lg w-full max-w-2xl ${
                        submitStatus.type === "success"
                            ? "bg-green-900/50 text-green-300"
                            : "bg-red-900/50 text-red-300"
                    }`}
                >
                    {submitStatus.message}
                </div>
            )}

            <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl">
                <div className="space-y-6">
                    {/* Name Input */}
                    <div className="relative group">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                                     focus:outline-none focus:border-orange-500 transition-colors duration-300
                                     group-hover:border-orange-600"
                            placeholder=" "
                            required
                        />
                        <label
                            className="absolute left-4 -top-3 bg-neutral-900 px-2 text-sm text-neutral-400 
                                        group-hover:text-orange-500 transition-colors duration-300"
                        >
                            Your Name
                        </label>
                    </div>

                    {/* Email Input */}
                    <div className="relative group">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                                     focus:outline-none focus:border-orange-500 transition-colors duration-300
                                     group-hover:border-orange-600"
                            placeholder=" "
                            required
                        />
                        <label
                            className="absolute left-4 -top-3 bg-neutral-900 px-2 text-sm text-neutral-400 
                                        group-hover:text-orange-500 transition-colors duration-300"
                        >
                            Email Address
                        </label>
                    </div>

                    {/* Date and Time Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative group">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                min={today}
                                max={maxDateStr}
                                className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                                         focus:outline-none focus:border-orange-500 transition-colors duration-300
                                         group-hover:border-orange-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                required
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            <label
                                className="absolute left-4 -top-3 bg-neutral-900 px-2 text-sm text-neutral-400 
                                            group-hover:text-orange-500 transition-colors duration-300"
                            >
                                Preferred Date (Weekdays Only)
                            </label>
                        </div>

                        <div className="relative group">
                            <select
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                                         focus:outline-none focus:border-orange-500 transition-colors duration-300
                                         group-hover:border-orange-600"
                                required
                            >
                                <option value="">Select a time</option>
                                {generateTimeSlots().map((time) => (
                                    <option key={time} value={time}>
                                        {time} ({timeZone})
                                    </option>
                                ))}
                            </select>
                            <label
                                className="absolute left-4 -top-3 bg-neutral-900 px-2 text-sm text-neutral-400 
                                            group-hover:text-orange-500 transition-colors duration-300"
                            >
                                Preferred Time
                            </label>
                        </div>
                    </div>

                    {/* Message Input */}
                    <div className="relative group">
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="w-full bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                                     focus:outline-none focus:border-orange-500 transition-colors duration-300
                                     group-hover:border-orange-600"
                            placeholder=" "
                        />
                        <label
                            className="absolute left-4 -top-3 bg-neutral-900 px-2 text-sm text-neutral-400 
                                        group-hover:text-orange-500 transition-colors duration-300"
                        >
                            Message (Optional)
                        </label>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full group overflow-hidden rounded-lg h-14 hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-800 opacity-100 group-hover:opacity-0 transition-opacity duration-300"></span>
                        <span className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 rounded-lg transition-all duration-300"></span>
                        <span className="relative z-10 text-white text-lg font-medium">
                            {loading ? "Sending..." : "Schedule Consultation"}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
