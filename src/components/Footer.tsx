import { Heart, Instagram, Facebook, Twitter } from 'lucide-react';
import petshopLogo from '@/assets/petshop-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      href: "https://instagram.com/petshopcare",
      label: "Instagram"
    },
    {
      icon: <Facebook size={24} />,
      href: "https://facebook.com/petshopcare",
      label: "Facebook"
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/petshopcare",
      label: "Twitter"
    }
  ];

  const quickLinks = [
    { text: "Início", href: "#inicio" },
    { text: "Sobre", href: "#sobre" },
    { text: "Serviços", href: "#servicos" },
    { text: "Contato", href: "#contato" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-petshop-dark to-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src={petshopLogo} 
                alt="PetShop Care Logo" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-2xl font-bold">
                PetShop <span className="text-primary">Care</span>
              </h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Cuidando do seu pet com amor, carinho e profissionalismo há mais de 10 anos. 
              Seu melhor amigo merece o melhor cuidado.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 rounded-full hover:bg-primary hover:scale-110 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href.replace('#', ''))}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {link.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <p>(11) 9999-9999</p>
              <p>contato@petshopcare.com.br</p>
              <p>
                Rua dos Pets, 123<br />
                Centro, São Paulo - SP
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} PetShop Care. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="text-primary mx-1" size={16} fill="currentColor" />
              <span>para pets felizes</span>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-4 space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-xs">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;