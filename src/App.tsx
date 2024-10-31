import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { 
  Crown, 
  ShoppingBag, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter, 
  Mail,
  Home,
  Info,
  BookOpen,
  ArrowRight,
  ShoppingCart,
  Clock,
  MessageSquare,
  Star,
  MapPin,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { ParticlesBackground } from './components/ParticlesBackground';
import { ContactForm } from './components/ContactForm';
import { BentoGrid } from './components/BentoGrid';

const sections = [
  { id: 'start', label: 'Start', icon: Home },
  { id: 'about', label: 'O firmie', icon: Info },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'shop', label: 'Sklep', icon: ShoppingCart },
  { id: 'contact', label: 'Kontakt', icon: MessageSquare },
];

const blogPosts = [
  {
    title: "Pielęgnacja włosów",
    description: "Najnowsze trendy w pielęgnacji włosów na rok 2024. Poznaj innowacyjne metody i produkty, które zrewolucjonizują Twoją rutynę pielęgnacyjną.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&h=300&fit=crop",
    date: "12 Luty 2024",
    category: "Pielęgnacja"
  },
  {
    title: "Stylizacja włosów",
    description: "Profesjonalne techniki stylizacji dla różnych typów włosów. Dowiedz się, jak osiągnąć wymarzony efekt przy użyciu odpowiednich narzędzi.",
    image: "https://images.unsplash.com/photo-1560869713-da86a9ec4623?w=500&h=300&fit=crop",
    date: "10 Luty 2024",
    category: "Stylizacja"
  },
  {
    title: "Trendy w koloryzacji",
    description: "Poznaj najnowsze trendy w koloryzacji włosów na nadchodzący sezon. Inspirujące kolory i techniki, które pokochają Twoi klienci.",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&h=300&fit=crop",
    date: "8 Luty 2024",
    category: "Koloryzacja"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('start');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative w-full bg-white font-poppins">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.a 
              href="#"
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Crown className="h-6 w-6 text-pink-600" />
              <span className="text-xl font-bold text-gray-900">QueenFryz Professional</span>
            </motion.a>
            
            <div className="hidden md:flex space-x-8">
              {sections.map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 text-sm font-medium transition-colors
                    ${activeSection === id ? 'text-pink-600' : 'text-gray-600 hover:text-pink-500'}`}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-pink-600" />
              ) : (
                <Menu className="h-6 w-6 text-pink-600" />
              )}
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white md:hidden pt-20"
          >
            <nav className="container mx-auto px-4 py-8">
              <div className="flex flex-col space-y-4">
                {sections.map(({ id, label, icon: Icon }) => (
                  <motion.button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-2 text-lg font-medium p-4 rounded-lg transition-colors
                      ${activeSection === id ? 'bg-pink-50 text-pink-600' : 'text-gray-600 hover:bg-pink-50 hover:text-pink-500'}`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section id="start" className="relative min-h-screen flex items-center justify-center">
          <ParticlesBackground />
          <div className="container mx-auto px-4 py-16 text-center relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-gray-900"
            >
              Profesjonalne Produkty do Włosów
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl mb-8 text-gray-600"
            >
              Twój partner w świecie fryzjerstwa profesjonalnego
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button 
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-lg text-lg font-medium"
                onClick={() => scrollToSection('shop')}
              >
                <span className="flex items-center space-x-2">
                  <span>Zobacz ofertę</span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* O Firmie */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              O Firmie
            </motion.h2>
            <BentoGrid />
          </div>
        </section>

        {/* Blog */}
        <section id="blog" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              Blog
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-pink-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-pink-600 text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.description}</p>
                    <Button
                      variant="ghost"
                      className="text-pink-600 hover:text-pink-700 hover:bg-pink-50 p-0 flex items-center gap-2"
                    >
                      Czytaj więcej
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button 
                className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-lg text-lg font-medium"
              >
                <span className="flex items-center space-x-2">
                  <span>Przejdź do bloga</span>
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </section>

        {/* Sklep Online */}
        <section id="shop" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-gray-900"
            >
              Sklep Online
            </motion.h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-600">
              Odkryj naszą pełną kolekcję profesjonalnych produktów do włosów
            </p>
            <Button 
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-lg text-lg font-medium"
            >
              <span className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Przejdź do sklepu</span>
              </span>
            </Button>
          </div>
        </section>

        {/* Kontakt */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center text-gray-900"
            >
              Kontakt
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-pink-100">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                    <MessageSquare className="h-6 w-6 text-pink-600" />
                    Dane kontaktowe
                  </h3>
                  <div className="space-y-4 text-gray-600">
                    <p className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-pink-600" />
                      <span>ul. Przykładowa 123</span>
                    </p>
                    <p className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-pink-600" />
                      <span>00-000 Warszawa</span>
                    </p>
                    <p className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-pink-600" />
                      <span>+48 123 456 789</span>
                    </p>
                    <p className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-pink-600" />
                      <span>kontakt@queenfryz.pl</span>
                    </p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-pink-100">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-900">
                    <Clock className="h-6 w-6 text-pink-600" />
                    Godziny otwarcia
                  </h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Poniedziałek - Piątek: 9:00 - 17:00</p>
                    <p>Sobota: 10:00 - 14:00</p>
                    <p>Niedziela: Zamknięte</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-pink-100">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-900">
                  <MessageSquare className="h-6 w-6 text-pink-600" />
                  Napisz do nas
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <Facebook className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <Instagram className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              className="text-gray-400 hover:text-white"
            >
              <Twitter className="h-6 w-6" />
            </motion.a>
          </div>
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} QueenFryz Professional. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </footer>

      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-pink-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
}

export default App;