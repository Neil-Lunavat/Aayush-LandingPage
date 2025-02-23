import {
    BarChart3,
    LayoutTemplate,
    RefreshCw,
    Users,
    Phone,
    BarChart,
} from "lucide-react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
    { label: "Services", id: "features" },
    { label: "Benefits", id: "workflow" },
    { label: "Pricing", id: "pricing" },
    { label: "Testimonials", id: "testimonials" },
    { label: "Contact Us", id: "bookingform" },
];

export const testimonials = [
    {
        user: "John Doe",
        company: "WealthFront Advisors",
        image: user1,
        text: "The financial guidance I received was top-notch. The team helped me build a diversified investment portfolio, and now I feel more confident about my future.",
    },
    {
        user: "Jane Smith",
        company: "Blue Horizon Capital",
        image: user2,
        text: "I couldn't be happier with the financial planning services. The team's insights and strategic advice have significantly improved my savings and investments.",
    },
    {
        user: "David Johnson",
        company: "Quantum Wealth Management",
        image: user3,
        text: "Working with this firm was a game-changer for my financial goals. Their tailored investment strategies helped me maximize returns while minimizing risks.",
    },
    {
        user: "Ronee Brown",
        company: "Fusion Finance Solutions",
        image: user4,
        text: "The financial planning service was outstanding! They provided me with a clear roadmap for wealth accumulation and retirement planning.",
    },
    {
        user: "Michael Wilson",
        company: "Visionary Asset Management",
        image: user5,
        text: "Their financial expertise helped me navigate complex investment options with ease. I’ve seen a significant increase in my portfolio’s performance.",
    },
    {
        user: "Emily Davis",
        company: "Synergy Financial Group",
        image: user6,
        text: "Thanks to their financial coaching, I finally have a solid budget and investment plan. I’m now on track to achieving my long-term wealth goals!",
    },
];

export const features = [
    {
        icon: <BarChart3 />,
        text: "One-on-One Financial Coaching",
        description:
            "Customized financial planning sessions based on individual financial goals.",
    },
    {
        icon: <Phone />,
        text: "Investment Portfolio Analysis",
        description:
            "Detailed review of existing investments and personalized recommendations.",
    },
    {
        icon: <LayoutTemplate />,
        text: "Free Workshops & Webinars",
        description:
            "Monthly and quarterly financial literacy sessions covering key topics such as budgeting, investing, and retirement planning.",
    },
    {
        icon: <RefreshCw />,
        text: "Online Courses",
        description:
            "Self-paced financial education modules on investment strategies, tax planning, and wealth building.",
    },
    {
        icon: <Users />,
        text: "Retirement & Tax Planning Consultation",
        description:
            "Expert guidance on tax-efficient investing and retirement savings strategies.",
    },
    {
        icon: <BarChart />,
        text: "Personalized Investment Strategies",
        description:
            "Asset allocation and portfolio diversification based on risk appetite and financial aspirations.",
    },
];

export const checklistItems = [
    {
        title: "Achieve Financial Independence",
        description:
            "Learn how to manage, grow, and multiply your wealth, setting yourself up for long-term financial freedom.",
    },
    {
        title: "Access to Expert Knowledge at Low Cost",
        description:
            "More affordable than hiring a financial advisor and get a structured course with 1-on-1 guidance at a fraction of the cost.",
    },
    {
        title: "No Conflicts of Interest",
        description:
            "Pure education, no sales pitch—you teach them how to manage money instead of selling financial products.",
    },
    {
        title: "Make Smart Investment Decisions",
        description:
            "Gain the knowledge to confidently invest in stocks, real estate, and other assets while minimizing risks.",
    },
];

export const pricingOptions = [
    {
        title: "Book a Free Demo Class",
        price: "$0",
        features: [
            "One-on-one consultation",
            "Introductory finance concepts",
            "Personalized learning plan preview",
            "Q&A session with an expert",
        ],
    },
    {
        title: "Start Coaching",
        price: "$49",
        features: [
            "Weekly live tutoring sessions",
            "Personalized financial learning path",
            "Real-world case studies & exercises",
            "Investment & wealth-building strategies",
            "24/7 doubt resolution via chat",
            "Access to premium finance resources",
        ],
    },
];

export const resourcesLinks = [
    { href: "#", text: "Getting Started" },
    { href: "#", text: "Documentation" },
    { href: "#", text: "Tutorials" },
    { href: "#", text: "API Reference" },
    { href: "#", text: "Community Forums" },
];

export const platformLinks = [
    { href: "#", text: "Features" },
    { href: "#", text: "Supported Devices" },
    { href: "#", text: "System Requirements" },
    { href: "#", text: "Downloads" },
    { href: "#", text: "Release Notes" },
];

export const communityLinks = [
    { href: "#", text: "Events" },
    { href: "#", text: "Meetups" },
    { href: "#", text: "Conferences" },
    { href: "#", text: "Hackathons" },
    { href: "#", text: "Jobs" },
];
