// Project Image Imports
import AgencyLogo from "../assets/Agency-Logo.png";
import Artboard2 from "../assets/Artboard 2.jpg";
import Logo from "../assets/Logo.png";
import ReactSvg from "../assets/react.svg";

// Carousel-Post
import Carousel1 from "../assets/Carousel-Post/Carousel-1.jpg";
import Carousel2 from "../assets/Carousel-Post/Carousel-2.jpg";
import Carousel3 from "../assets/Carousel-Post/Carousel-3.jpg";
import Carousel4 from "../assets/Carousel-Post/Carousel-4.jpg";
import Carousel5 from "../assets/Carousel-Post/Carousel-5.jpg";

// Client-Comparison
import Comparison1 from "../assets/Client-Comparison/Comparison-1.jpg";
import Comparison2 from "../assets/Client-Comparison/Comparison-2.jpg";
import Comparison3 from "../assets/Client-Comparison/Comparison-3.jpg";
import Comparison4 from "../assets/Client-Comparison/Comparison-4.png";

// Delivery-App-Screenshots
import DeliveryApp1 from "../assets/Delivery-App-Screenshots/Delivery-app-1.png";

// EBC-Banners
import EBC1 from "../assets/EBC-Banners/EBC-1.jpg";
import EBC2 from "../assets/EBC-Banners/EBC-2.jpg";

// Extra-ImageListing
import LunchDinnerFoodKit from "../assets/Extra-ImageListing/Lunch and Dinner Food Kit.jpg";
import MoldTestKit from "../assets/Extra-ImageListing/Mold Test Kit.jpg";
import RecycledGlassVaseMetalStand from "../assets/Extra-ImageListing/Recycled Glass Vase & Metal Stand.jpg";
import AmazonEBC4 from "../assets/Extra-ImageListing/amazon-enhanced-brand-content (4).png";
import AmazonEBC5 from "../assets/Extra-ImageListing/amazon-enhanced-brand-content (5).jpg";
import AmazonEBC1_1 from "../assets/Extra-ImageListing/amazon-enhanced-brand-content-1.png";
import Image1 from "../assets/Extra-ImageListing/image (1).jpg";
import Image2 from "../assets/Extra-ImageListing/image (2).jpg";
import Image3 from "../assets/Extra-ImageListing/image (3).jpg";
import Image4 from "../assets/Extra-ImageListing/image (4).jpg";
import ImageMain from "../assets/Extra-ImageListing/image.jpg";

// Image-Editing
import ImageEditing5 from "../assets/Image-Editing/ImageEditing-5.png";

// Image-Listing
import ImageListing9 from "../assets/Image-Listing/ImageListing-9.jpg";

// Image-Listing-2
import ImageListingSecond7 from "../assets/Image-Listing-2/ImageListing-Second-7.jpg";

// Mushrooms
import Mushrooms8 from "../assets/Mushrooms/Mushrooms-8.jpg";

// Oil-Bottle
import Oil1 from "../assets/Oil-Bottle/Oil-1.png";
import Oil2 from "../assets/Oil-Bottle/Oil-2.png";
import Oil3 from "../assets/Oil-Bottle/Oil-3.png";
import Oil4 from "../assets/Oil-Bottle/Oil-4.png";
import Oil5 from "../assets/Oil-Bottle/Oil-5.png";
import Oil6 from "../assets/Oil-Bottle/Oil-6.png";

// Phone-Cleaner
import PhoneCleaner6 from "../assets/Phone-Cleaner/PhoneCleaner-6.png";

// Soap-Listing
import Soap7 from "../assets/Soap-Listing/Soap-7.png";

// Banners
import Banner1 from "../assets/Banner/Banner-1.png";
import Banner2 from "../assets/Banner/Banner-2.png";
import Banner3 from "../assets/Banner/Banner-3.png";

export const projectCategories = [
  "All",
  "Amazon Listing Images",
  "Social Media Post",
  "App Screenshots",
  "Amazon A+ Content",
];

export const projects = [
   {
    id: "banner",
    title: "Banner Design",
    category: "Social Media Post",
    image: Banner1,
    gallery: [Banner2, Banner3, Banner1],
    description:
      "High-engagement social media carousel designs tailored for brand storytelling and audience interaction.",
    tags: ["Photoshop", "Social Media", "Layout Design"],
  },
  {
    id: "carousel-post",
    title: "Carousel Post Design",
    category: "Social Media Post",
    image: Carousel1,
    gallery: [Carousel1, Carousel2, Carousel3, Carousel4, Carousel5],
    description:
      "High-engagement social media carousel designs tailored for brand storytelling and audience interaction.",
    tags: ["Photoshop", "Social Media", "Layout Design"],
  },
  {
    id: "delivery-app",
    title: "Delivery App UI",
    category: "App Screenshots",
    image: DeliveryApp1,
    gallery: [DeliveryApp1],
    description:
      "Clean and intuitive user interface design for a modern delivery application.",
    tags: ["Figma", "UI/UX", "Mobile Design"],
  },
  {
    id: "ebc-banners",
    title: "Amazon EBC Banners",
    category: "Amazon A+ Content",
    image: EBC1,
    gallery: [EBC1, EBC2],
    description:
      "Enhanced Brand Content (EBC) banners designed to boost conversion rates on Amazon listings.",
    tags: ["Amazon Selling", "E-commerce", "Graphic Design"],
  },
  {
    id: "extra-image-listing",
    title: "Premium Product Listings",
    category: "Amazon A+ Content",
    image: ImageMain,
    gallery: [
      ImageMain,
      LunchDinnerFoodKit,
      MoldTestKit,
      RecycledGlassVaseMetalStand,
      AmazonEBC4,
      AmazonEBC5,
      AmazonEBC1_1,
      Image1,
      Image2,
      Image3,
      Image4,
    ],
    description:
      "Detailed project listing images focusing on features, benefits, and high-quality presentation.",
    tags: ["Product Photography", "Listing Optmization", "E-commerce"],
  },
  {
    id: "image-editing",
    title: "Professional Image Editing",
    category: "App Screenshots",
    image: ImageEditing5,
    gallery: [ImageEditing5],
    description:
      "Precise photo manipulation and editing services for commercial and personal use.",
    tags: ["Retouching", "Color Correction", "Photoshop"],
  },
  {
    id: "image-listing",
    title: "E-commerce Product Features",
    category: "Amazon Listing Images",
    image: ImageListing9,
    gallery: [ImageListing9],
    description:
      "Showcasing product features through clean, professional listing graphics.",
    tags: ["Listing", "Marketing", "E-commerce"],
  },
  {
    id: "client-comparison",
    title: "Client Comparison Visuals",
    category: "Amazon Listing Images",
    image: Comparison1,
    gallery: [Comparison1, Comparison2, Comparison3, Comparison4],
    description:
      "Effective visual comparisons for clients to showcase product variations and features.",
    tags: ["Visual Strategy", "Branding", "Comparison"],
  },
  {
    id: "image-listing-2",
    title: "Product Showcase Redux",
    category: "Amazon Listing Images",
    image: ImageListingSecond7,
    gallery: [ImageListingSecond7],
    description:
      "Alternative product showcase layouts for maximum visual impact in marketplace environments.",
    tags: ["Visual Design", "Marketplace", "E-commerce"],
  },

  {
    id: "oil-bottle",
    title: "Oil Bottle 3D Visualization",
    category: "Amazon Listing Images",
    image: Oil1,
    gallery: [Oil1, Oil2, Oil3, Oil4, Oil5, Oil6],
    description:
      "High-end product visualization and branding for premium oil products.",
    tags: ["3D Rendering", "Packaging", "Premium Design"],
  },
  {
    id: "phone-cleaner",
    title: "Phone Cleaner App UI",
    category: "App Screenshots",
    image: PhoneCleaner6,
    gallery: [PhoneCleaner6],
    description:
      "Utility app interface designed for simplicity and ease of use.",
    tags: ["UI/UX", "App Design", "Utility"],
  },
  {
    id: "soap-listing",
    title: "Soap Product Listing",
    category: "Amazon Listing Images",
    image: Soap7,
    gallery: [Soap7],
    description:
      "Natural soap product graphics highlighting texture, ingredients, and brand feel.",
    tags: ["Product Listing", "Natural Branding", "E-commerce"],
  },
    {
    id: "mushrooms",
    title: "Mushroom Product Branding",
    category: "Amazon Listing Images",
    image: Mushrooms8,
    gallery: [Mushrooms8],
    description:
      "Brand identity and packaging design for specialty mushroom products.",
    tags: ["Packaging", "Organic Branding", "Logo"],
  },
];
