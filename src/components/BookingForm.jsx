import { useState } from "react";
import emailjs, { init } from "@emailjs/browser";

init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        time: "",
        hour: "",
        minute: "",
        period: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

    // Get current timezone for display
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // If this is one of the time components, also update the combined time value
        if (name === "hour" || name === "minute" || name === "period") {
            const hour = name === "hour" ? value : formData.hour || "";
            const minute = name === "minute" ? value : formData.minute || "";
            const period = name === "period" ? value : formData.period || "";

            // Only update the combined time if all components are present
            if (hour && minute && period) {
                const timeString = `${hour}:${minute} ${period}`;
                setFormData((prev) => ({ ...prev, time: timeString }));
            }
        }
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
                    hour: "",
                    minute: "",
                    period: "",
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

    // Generate the maxDate (e.g., 1 months from now)
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 1);
    const maxDateStr = maxDate.toISOString().split("T")[0];

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
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                                Preferred Date
                            </label>
                        </div>

                        <div className="relative group col-span-2">
                            <div className="flex items-center gap-4">
                                <select
                                    name="hour"
                                    value={formData.hour}
                                    onChange={handleChange}
                                    className="w-1/3 bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:border-orange-500 transition-colors duration-300
                         group-hover:border-orange-600"
                                    required
                                >
                                    <option value="" disabled>
                                        Hour
                                    </option>
                                    {[...Array(12)].map((_, i) => (
                                        <option key={i + 1} value={i + 1}>
                                            {i + 1}
                                        </option>
                                    ))}
                                </select>

                                <select
                                    name="minute"
                                    value={formData.minute}
                                    onChange={handleChange}
                                    className="w-1/3 bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:border-orange-500 transition-colors duration-300
                         group-hover:border-orange-600"
                                    required
                                >
                                    <option value="" disabled>
                                        Minute
                                    </option>
                                    <option value="00">00</option>
                                    <option value="30">30</option>
                                </select>

                                <select
                                    name="period"
                                    value={formData.period}
                                    onChange={handleChange}
                                    className="w-1/3 bg-neutral-900 border-2 border-neutral-700 rounded-lg px-4 py-3 text-white 
                         focus:outline-none focus:border-orange-500 transition-colors duration-300
                         group-hover:border-orange-600"
                                    required
                                >
                                    <option value="" disabled>
                                        AM/PM
                                    </option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
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
