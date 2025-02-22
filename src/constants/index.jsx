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
    { label: "Features", id: "features" },
    { label: "Workflow", id: "workflow" },
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
        text: "Portfolio Management",
        description:
            "Easily build and manage your stock market portfolio with a user-friendly interface.",
    },
    {
        icon: <Phone />,
        text: "Multi-Platform Compatibility",
        description:
            "Access your stock portfolio seamlessly across multiple platforms, including mobile, desktop, and web.",
    },
    {
        icon: <LayoutTemplate />,
        text: "Pre-Built Investment Templates",
        description:
            "Jumpstart your investment strategy with a variety of built-in portfolio templates tailored for different risk levels.",
    },
    {
        icon: <RefreshCw />,
        text: "Real-Time Market Data",
        description:
            "Stay updated with real-time stock prices, trends, and market movements to make informed investment decisions.",
    },
    {
        icon: <Users />,
        text: "Collaboration Tools",
        description:
            "Work with financial advisors or team members in real-time to refine your investment strategies.",
    },
    {
        icon: <BarChart />,
        text: "Analytics Dashboard",
        description:
            "Gain valuable insights into your portfolio's performance with an integrated analytics dashboard tracking key metrics.",
    },
];

export const checklistItems = [
    {
        title: "Personalized Learning Plans",
        description:
            "Get a customized roadmap tailored to your financial knowledge and goals, ensuring effective and structured learning.",
    },
    {
        title: "Live 1-on-1 Sessions",
        description:
            "Engage in interactive sessions with a finance expert to clarify doubts, discuss concepts, and get real-time guidance.",
    },
    {
        title: "Practical Case Studies",
        description:
            "Learn through real-world financial scenarios, enhancing your problem-solving skills and market understanding.",
    },
    {
        title: "Investment & Wealth Building Strategies",
        description:
            "Gain insights into smart investment techniques, portfolio management, and wealth accumulation strategies.",
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
