import { Scissors, Stethoscope, ShoppingBag, Home } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Scissors className="text-primary" size={48} />,
      title: "Banho e Tosa",
      description: "Serviços completos de higiene e estética para deixar seu pet sempre lindo e cheiroso.",
      features: ["Banho relaxante", "Tosa higiênica", "Corte de unhas", "Limpeza de ouvidos"],
      price: "A partir de R$ 35"
    },
    {
      icon: <Stethoscope className="text-secondary" size={48} />,
      title: "Consultas Veterinárias",
      description: "Atendimento médico veterinário completo com profissionais especializados.",
      features: ["Check-up geral", "Vacinação", "Exames clínicos", "Orientação nutricional"],
      price: "A partir de R$ 80"
    },
    {
      icon: <ShoppingBag className="text-primary" size={48} />,
      title: "Acessórios e Produtos",
      description: "Ampla variedade de produtos e acessórios para o cuidado e diversão do seu pet.",
      features: ["Rações premium", "Brinquedos", "Coleiras e guias", "Produtos de higiene"],
      price: "Diversos preços"
    },
    {
      icon: <Home className="text-secondary" size={48} />,
      title: "Hotelzinho para Pets",
      description: "Hospedagem segura e confortável para quando você precisar viajar ou se ausentar.",
      features: ["Ambiente climatizado", "Recreação supervisionada", "Alimentação controlada", "Cuidados especiais"],
      price: "A partir de R$ 50/dia"
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 fade-in">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Oferecemos uma gama completa de serviços para cuidar do seu pet com todo 
            carinho e profissionalismo que ele merece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-service group fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-primary font-semibold">
                    {service.price}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-foreground mb-3">Inclui:</h4>
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="mt-6 w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
                Saiba Mais
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Atendimento Personalizado
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada pet é único e especial. Por isso, adaptamos nossos serviços às 
              necessidades específicas do seu companheiro, garantindo o melhor cuidado possível.
            </p>
            <button 
              onClick={() => {
                const phoneNumber = "5511999999999";
                const message = "Olá! Gostaria de agendar um serviço para meu pet.";
                const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(url, '_blank');
              }}
              className="btn-hero"
            >
              Agende Agora no WhatsApp
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;