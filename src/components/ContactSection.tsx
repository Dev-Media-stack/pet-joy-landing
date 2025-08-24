import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="text-primary" size={24} />,
      label: "Telefone",
      value: "(11) 9999-9999",
      action: () => window.open("tel:+5511999999999")
    },
    {
      icon: <MessageCircle className="text-secondary" size={24} />,
      label: "WhatsApp",
      value: "(11) 9999-9999",
      action: () => {
        const message = "Olá! Gostaria de mais informações sobre os serviços.";
        window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
      }
    },
    {
      icon: <Mail className="text-primary" size={24} />,
      label: "E-mail",
      value: "contato@petshopcare.com.br",
      action: () => window.open("mailto:contato@petshopcare.com.br")
    },
    {
      icon: <MapPin className="text-secondary" size={24} />,
      label: "Endereço",
      value: "Rua dos Pets, 123 - Centro, São Paulo - SP",
      action: null
    }
  ];

  const workingHours = [
    { day: "Segunda a Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "08:00 - 16:00" },
    { day: "Domingo", hours: "09:00 - 14:00" }
  ];

  return (
    <section id="contato" className="section-padding bg-gradient-to-br from-muted to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 fade-in">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in">
            Estamos prontos para cuidar do seu pet! Entre em contato conosco e 
            agende uma visita ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-center space-x-4 p-4 bg-white rounded-xl shadow-[var(--shadow-soft)] hover:shadow-lg transition-shadow duration-300 ${
                    item.action ? 'cursor-pointer hover:scale-105' : ''
                  }`}
                  onClick={item.action || undefined}
                >
                  <div className="p-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.label}</p>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-xl p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="text-primary" size={24} />
                <h4 className="text-xl font-semibold text-foreground">
                  Horário de Funcionamento
                </h4>
              </div>
              <div className="space-y-3">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-semibold text-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Nossa Localização
            </h3>
            
            <div className="bg-white rounded-xl p-4 shadow-[var(--shadow-soft)]">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975359999895!2d-46.65844892369822!3d-23.561210061855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sS%C3%A3o%20Paulo%2C%20SP!5e0!3m2!1spt!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do PetShop Care"
                />
              </div>
              
              <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  <strong>Endereço completo:</strong>
                </p>
                <p className="text-foreground">
                  Rua dos Pets, 123 - Centro<br />
                  São Paulo - SP, CEP: 01234-567
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-8 text-center">
              <button 
                onClick={() => {
                  const phoneNumber = "5511999999999";
                  const message = "Olá! Gostaria de agendar uma visita ao PetShop Care.";
                  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                  window.open(url, '_blank');
                }}
                className="btn-hero w-full sm:w-auto"
              >
                <MessageCircle size={24} />
                <span>Fale Conosco Agora</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;