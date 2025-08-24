import { MessageCircle } from 'lucide-react';
import heroImage from '@/assets/hero-pets.jpg';

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    // Substitua pelo número real do WhatsApp da empresa
    const phoneNumber = "5511999999999"; // Formato: código do país + DDD + número
    const message = "Olá! Gostaria de saber mais sobre os serviços do PetShop Care.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 fade-in">
            Cuidando do seu pet com 
            <span className="text-primary"> amor</span> e 
            <span className="text-secondary"> carinho</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 fade-in">
            No PetShop Care, oferecemos serviços completos para o bem-estar do seu melhor amigo. 
            Profissionais qualificados e ambiente acolhedor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 fade-in">
            <button 
              onClick={handleWhatsAppClick}
              className="btn-hero flex items-center justify-center space-x-2"
            >
              <MessageCircle size={24} />
              <span>Fale Conosco no WhatsApp</span>
            </button>
            
            <button 
              onClick={() => {
                const element = document.getElementById('servicos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              Conheça Nossos Serviços
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;