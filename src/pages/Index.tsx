import { Helmet } from 'react-helmet';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useScrollAnimation();

  return (
    <>
      <Helmet>
        <title>PetShop Care - Cuidando do seu pet com amor e carinho</title>
        <meta 
          name="description" 
          content="PetShop Care oferece serviços completos para seu pet: banho e tosa, consultas veterinárias, acessórios e hotelzinho. Mais de 10 anos cuidando dos pets em São Paulo." 
        />
        <meta name="keywords" content="petshop, banho e tosa, veterinário, pets, cães, gatos, São Paulo, cuidados pet" />
        <meta name="author" content="PetShop Care" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="PetShop Care - Cuidando do seu pet com amor e carinho" />
        <meta property="og:description" content="Serviços completos para seu pet com profissionais qualificados. Banho e tosa, consultas veterinárias e muito mais." />
        <meta property="og:site_name" content="PetShop Care" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PetShop Care - Cuidando do seu pet com amor e carinho" />
        <meta name="twitter:description" content="Serviços completos para seu pet com profissionais qualificados." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "PetShop Care",
            "description": "Petshop especializado em cuidados completos para pets",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rua dos Pets, 123",
              "addressLocality": "São Paulo",
              "addressRegion": "SP",
              "postalCode": "01234-567",
              "addressCountry": "BR"
            },
            "telephone": "+55-11-99999-9999",
            "email": "contato@petshopcare.com.br",
            "url": window.location.origin,
            "openingHours": [
              "Mo-Fr 08:00-18:00",
              "Sa 08:00-16:00", 
              "Su 09:00-14:00"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços para Pets",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Banho e Tosa"
                  }
                },
                {
                  "@type": "Offer", 
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Consultas Veterinárias"
                  }
                }
              ]
            }
          })}
        </script>
        
        <link rel="canonical" href={window.location.href} />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
