export type TProject = {
  id: string
  title: string
  description: string
  longDescription: string
  tags: string[]
  image: string
  demoUrl: string
  githubUrl: string
  features: string[]
  technologies: string[]
}

export const projects: TProject[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    longDescription:
      "A comprehensive e-commerce platform built with Next.js and Node.js. Features include product catalog management, shopping cart functionality, secure payment processing with Stripe, user authentication, order tracking, and an admin dashboard for inventory management.",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=600&width=800",
    demoUrl: "https://ecommerce-demo.sanketupreti.com",
    githubUrl: "https://github.com/sanketupreti/ecommerce-platform",
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "Order history and tracking",
      "Admin dashboard for inventory management",
      "Product reviews and ratings system",
    ],
    technologies: [
      "Next.js for frontend and API routes",
      "MongoDB for database storage",
      "Stripe for payment processing",
      "NextAuth.js for authentication",
      "Tailwind CSS for styling",
      "Vercel for deployment",
    ],
  },
]
