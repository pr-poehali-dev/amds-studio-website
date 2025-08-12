import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary">AMDS STUDIO</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Главная</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </div>
      </nav>

      {/* Главный раздел */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <img 
            src="https://cdn.poehali.dev/files/6f681dc4-fd93-4901-b451-2978434ae5d3.jpeg" 
            alt="AMDS Studio Logo" 
            className="mx-auto mb-8 w-64 h-64 object-contain opacity-90"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            AMDS STUDIO
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Превращаем необычные идеи в атмосферные фильмы и загадочные истории
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-3">
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть работы
          </Button>
        </div>
      </section>

      {/* О студии */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">О студии</h2>
            <div className="text-lg leading-relaxed space-y-6 text-card-foreground">
              <p>
                AMDS Studio — это команда творцов, которые превращают необычные идеи в атмосферные фильмы и загадочные истории. 
                Мы специализируемся на создании мистических, фантастических и драматических проектов, где каждый кадр наполнен эмоциями, 
                а зрителя ждёт неожиданная развязка.
              </p>
              <p>
                Наша студия объединяет талантливых режиссёров, сценаристов, художников и звукорежиссёров, чтобы вместе создавать 
                уникальные киноленты, которые остаются в памяти надолго. Мы любим эксперименты, нестандартные подходы и визуальную магию — 
                именно поэтому каждый наш проект особенный.
              </p>
              <p className="text-xl font-semibold text-primary">
                AMDS Studio — место, где оживают самые смелые кинематографические мечты! 🎬
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Портфолио */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Не смотри назад", genre: "Психологический хоррор", year: "2025", image: "https://cdn.poehali.dev/files/0e04b0b2-5da0-4afa-84f4-8bee86825803.jpeg", inDevelopment: true }
            ].map((project, index) => (
              <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    {project.inDevelopment && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          В РАЗРАБОТКЕ
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-primary text-sm">{project.genre} • {project.year}</p>
                      {project.inDevelopment && (
                        <p className="text-white/80 text-xs mt-1">Готов в течение месяца</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contact" className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">Контакты</h2>
            <p className="text-lg mb-8 text-card-foreground">
              Готовы обсудить ваш проект? Свяжитесь с нами!
            </p>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Mail" size={24} className="text-primary" />
                <span className="text-lg">info.adms-studio@list.ru</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <span className="text-lg">+7-932-059-87-33</span>
              </div>
              <div className="flex items-center justify-center space-x-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <span className="text-lg">Бузулук, Россия</span>
              </div>
            </div>
            <div className="mt-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">AMDS STUDIO</div>
            <p className="text-muted-foreground mb-6">
              Создаём кино, которое остается в памяти навсегда
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={24} />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
              © 2024 AMDS Studio. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;