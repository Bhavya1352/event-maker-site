import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: "Birthday Decoration",
    image: "/images/2.jpg",
  },
  {
    title: "Anniversary Decoration",
    image: "/images/3.jpg",
  },
  {
    title: "Love/Proposal Decoration",
    image: "/images/4.jpg",
  },
  {
    title: "First Birthday Decoration",
    image: "/images/5.jpg",
  },
  {
    title: "Kids Birthday Decoration",
    image: "/images/6.jpg",
  },
];

const CategorySection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Explore Our Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link to={`/services/${encodeURIComponent(category.title)}`} key={index}>
              <Card className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-transparent hover:border-primary">
                <CardContent className="p-0">
                  <img src={category.image} alt={category.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 text-center">{category.title}</h3>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
