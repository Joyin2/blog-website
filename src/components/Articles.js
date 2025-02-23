import Image from "next/image";
import TechImg from "@/app/images/blog/tech.jpeg";
import NatureImg from "@/app/images/blog/nature.jpg";
import FinanceImg from "@/app/images/blog/finance.jpg";
import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "Elon Musk shows off updates to his brain chips",
    category: "Tech",
    image: TechImg,
    author: "Joana",
    likes: 32,
    comments: 12,
  },
  {
    id: 2,
    title: "The overlooked benefits of real Christmas trees",
    category: "Environment",
    image: NatureImg,
    author: "Ray",
    likes: 40,
    comments: 9,
  },
  {
    id: 3,
    title: "The law comes for Bankman-Fried",
    category: "Finance",
    image: FinanceImg,
    author: "Sam",
    likes: 24,
    comments: 18,
  },
  {
    id: 4,
    title: "Bank of England raises interest rates",
    category: "Economy",
    image: FinanceImg,
    author: "Joana",
    likes: 30,
    comments: 12,
  },
];

export default function Articles() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-500 py-16 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold">
            Best <span className="text-blue-300">Article</span> Today
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow-lg p-4 text-black"
            >
              {/* Image */}
              <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Content */}
              <div className="mt-3">
                <p className="text-gray-500 text-sm">{article.category}</p>
                <h3 className="font-semibold text-lg">{article.title}</h3>

                {/* Author & Actions */}
                <div className="mt-3 flex items-center justify-between text-gray-600 text-sm">
                  <p>👤 {article.author}</p>
                  <div className="flex space-x-2">
                    <p>❤️ {article.likes}</p>
                    <p>💬 {article.comments}</p>
                  </div>
                </div>

                {/* Read More Button */}
                <button className="mt-4 px-4 py-2 text-blue-600 font-medium border border-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg shadow-lg hover:bg-gray-100 transition">
            See All Articles
          </button>
        </div>
      </div>
    </section>
  );
}
