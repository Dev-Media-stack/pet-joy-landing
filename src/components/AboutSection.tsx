import { Heart, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const differentials = [
    {
      icon: <Heart className="text-primary" size={32} />,
      title: "Carinho pelos Animais",
      description: "Nossa equipe tem verdadeira paixão pelos pets e trata cada um com amor e cuidado especial."
    },
    {
      icon: <Award className="text-secondary" size={32} />,
      title: "Atendimento Especializado",
      description: "Profissionais qualificados e experientes prontos para oferecer o melhor cuidado."
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Equipe Dedicada",
      description: "Time comprometido com o bem-estar e felicidade do seu companheiro de quatro patas."
    },
    {
      icon: <Clock className="text-secondary" size={32} />,
      title: "Horário Flexível",
      description: "Atendimento adaptado à sua rotina para facilitar o cuidado com seu pet."
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 fade-in">
            Sobre o <span className="text-primary">PetShop Care</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Há mais de 10 anos cuidando dos pets da nossa comunidade com dedicação, 
            carinho e profissionalismo. Somos apaixonados por animais e acreditamos 
            que eles merecem todo o amor e cuidado do mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="card-service text-center fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12 fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-lg text-muted-foreground mb-6">
                Proporcionar o melhor cuidado e carinho para os pets, mantendo-os 
                saudáveis, limpos e felizes. Queremos ser a extensão do amor que 
                você tem pelo seu companheiro.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Produtos de qualidade</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded-full"></div>
                  <span className="text-foreground font-medium">Ambiente seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span className="text-foreground font-medium">Preços justos</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-block bg-white rounded-2xl p-8 shadow-[var(--shadow-card)]">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="inline-block bg-white rounded-2xl p-8 shadow-[var(--shadow-card)] ml-4 mt-4">
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-muted-foreground">Pets atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;