"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeLargeTitles"
        background="fluid"
        cardStyle="outline"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Início",
          id: "hero",
        },
        {
          name: "Nossa História",
          id: "about",
        },
        {
          name: "Cardápio",
          id: "products",
        },
        {
          name: "Reservas",
          id: "contact",
        },
      ]}
      brandName="Estação dos Grelhados"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "sparkles-gradient",
      }}
      title="Estação dos Grelhados"
      description="Carnes nobres, fogo vivo e a essência da brasa em cada detalhe. Uma experiência gastronômica inesquecível."
      testimonials={[
        {
          name: "Carlos M.",
          handle: "@carlos",
          testimonial: "A melhor carne que já provei, ponto perfeito.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/senior-woman-eating-restaurant-with-friends_23-2149316752.jpg",
        },
        {
          name: "Ana R.",
          handle: "@ana",
          testimonial: "Ambiente sofisticado e comida impecável.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-senior-man-posing-studio_23-2151156355.jpg",
        },
        {
          name: "Pedro S.",
          handle: "@pedro",
          testimonial: "A seleção de vinhos é maravilhosa.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/woman-sitting-table-outside-smiling_23-2147805662.jpg",
        },
        {
          name: "Lucas P.",
          handle: "@lucas",
          testimonial: "Experiência de outro nível, voltarei sempre.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517418.jpg",
        },
        {
          name: "Julia B.",
          handle: "@julia",
          testimonial: "Simplesmente divino, atendimento excelente.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-homemade-potatoes-fried-mushrooms_140725-2104.jpg",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/abstract-fire-background_1048-6194.jpg"
      imageAlt="roaring fire flames black background"
      mediaAnimation="opacity"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-woman-having-lunch-restaurant_23-2150491815.jpg",
          alt: "Diner portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-bartender-with-arms-crossed-leaning-bar-counter_107420-65491.jpg",
          alt: "Bartender portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-man-restaurant_23-2147861975.jpg",
          alt: "Diner portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-5658.jpg",
          alt: "Diner portrait",
        },
        {
          src: "http://img.b2bpic.net/free-photo/attractive-young-woman-blowing-maple-leaves-looking-camera_23-2148229394.jpg",
          alt: "Diner portrait",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Brasa viva",
        },
        {
          type: "text",
          text: "Carnes Nobres",
        },
        {
          type: "text",
          text: "Experiência única",
        },
        {
          type: "text",
          text: "Alta Gastronomia",
        },
        {
          type: "text",
          text: "Sabor inesquecível",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={false}
      title="A Filosofia do Fogo"
      description="Nossa dedicação começa na seleção rigorosa dos cortes e se estende até o controle preciso da temperatura na brasa. Cada peça é tratada com o respeito que o fogo merece."
      metrics={[
        {
          value: "15+",
          title: "Anos de Tradição",
        },
        {
          value: "20",
          title: "Cortes Nobres",
        },
        {
          value: "300",
          title: "Vinhos Exclusivos",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-meat-barbecue-grill_23-2147841091.jpg"
      mediaAnimation="slide-up"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "A Brasa",
          description: "Fogo controlado para extrair o máximo sabor de cada corte.",
          buttonIcon: "Zap",
          imageSrc: "http://img.b2bpic.net/free-photo/tasty-shish-kebab-steaks-grill_23-2148253387.jpg",
        },
        {
          title: "Cortes Nobres",
          description: "Seleção das melhores raças e origens da pecuária.",
          buttonIcon: "Award",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-juicy-steak-cooking-fire-created-with-generative-ai-technology_185193-110100.jpg",
        },
        {
          title: "Adega Selecionada",
          description: "Harmonização perfeita para cada prato que servimos.",
          buttonIcon: "Wine",
          imageSrc: "http://img.b2bpic.net/free-photo/neoclassical-style-interior-design-with-decor-furnishings_23-2151199416.jpg",
        },
        {
          title: "Ambiente Único",
          description: "Design pensado para proporcionar conforto e sofisticação.",
          buttonIcon: "Armchair",
          imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-woman-striped-trench-coat-happily-talking-cellphone-sitting-near-big-window-while-spending-time-modern-cafe_574295-4851.jpg",
        },
      ]}
      title="Nossos Pilares"
      description="O que nos torna referência em alta gastronomia."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",
          brand: "Principal",
          name: "Ancho Premium",
          price: "R$ 120",
          rating: 5,
          reviewCount: "120",
          imageSrc: "http://img.b2bpic.net/free-photo/beef-steak-with-leaf_181624-808.jpg",
        },
        {
          id: "p2",
          brand: "Principal",
          name: "Costela 12h",
          price: "R$ 98",
          rating: 5,
          reviewCount: "95",
          imageSrc: "http://img.b2bpic.net/free-photo/sizzling-meat-skewers-grilling-fiery-coals_84443-72292.jpg",
        },
        {
          id: "p3",
          brand: "Aves",
          name: "Galeto Grelhado",
          price: "R$ 75",
          rating: 4,
          reviewCount: "40",
          imageSrc: "http://img.b2bpic.net/free-photo/burning-firewood-with-bright-flame-flickering-coals_23-2148253413.jpg",
        },
        {
          id: "p4",
          brand: "Peixes",
          name: "Salmão na Brasa",
          price: "R$ 110",
          rating: 5,
          reviewCount: "65",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-meat-table_23-2150857734.jpg",
        },
        {
          id: "p5",
          brand: "Acompanha",
          name: "Farofa Artesanal",
          price: "R$ 25",
          rating: 4,
          reviewCount: "30",
          imageSrc: "http://img.b2bpic.net/free-photo/delicious-steak-grill-camping-day_23-2148301297.jpg",
        },
        {
          id: "p6",
          brand: "Sobremesa",
          name: "Pudim de Leite",
          price: "R$ 30",
          rating: 5,
          reviewCount: "55",
          imageSrc: "http://img.b2bpic.net/free-photo/man-holds-plate-with-red-gurza-side-view_141793-4739.jpg",
        },
      ]}
      title="Menu Especial"
      description="Descubra nossa seleção exclusiva de pratos."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "100%",
          title: "Satisfação",
          items: [
            "Qualidade premium",
            "Atendimento impecável",
          ],
        },
        {
          id: "m2",
          value: "5k",
          title: "Clientes",
          items: [
            "Satisfeitos",
            "Fiéis",
          ],
        },
        {
          id: "m3",
          value: "50",
          title: "Prêmios",
          items: [
            "Gastronomia",
            "Excelência",
          ],
        },
      ]}
      title="Nossos Números"
      description="Qualidade que fala por si."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          title: "Excelente!",
          quote: "Uma explosão de sabores na boca.",
          name: "Sarah J.",
          role: "Crítica",
          imageSrc: "http://img.b2bpic.net/free-photo/man-standing-with-arms-crossed-bar_107420-65505.jpg",
        },
        {
          id: "2",
          title: "Top",
          quote: "Atendimento e qualidade nota 10.",
          name: "Michael C.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-caucasian-business-male-taking-off-face-mask-virus-protection-show-his-smile-with-cheerful-get-well-fight-spread-covid-19-epidemic-health-ideas-concept_609648-1061.jpg",
        },
        {
          id: "3",
          title: "Amei",
          quote: "Voltarei com certeza absoluta.",
          name: "Emily R.",
          role: "Blogueira",
          imageSrc: "http://img.b2bpic.net/free-photo/young-passionate-woman-with-flower-table_23-2148001712.jpg",
        },
        {
          id: "4",
          title: "Perfeito",
          quote: "O melhor ponto de carne da cidade.",
          name: "David K.",
          role: "Chef",
          imageSrc: "http://img.b2bpic.net/free-photo/couple-having-date-together-luxurious-restaurant_23-2150517418.jpg",
        },
        {
          id: "5",
          title: "Incrível",
          quote: "Ambiente charmoso e comida divina.",
          name: "Ana S.",
          role: "Cliente",
          imageSrc: "http://img.b2bpic.net/free-photo/fried-meat-with-homemade-potatoes-fried-mushrooms_140725-2104.jpg",
        },
      ]}
      title="O que dizem nossos clientes"
      description="A experiência que marca os sentidos."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient",
      }}
      text="Reserve sua mesa agora e vivencie a verdadeira arte do fogo."
      buttons={[
        {
          text: "Reservar Mesa",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Navegação",
          items: [
            {
              label: "Início",
              href: "#hero",
            },
            {
              label: "Cardápio",
              href: "#products",
            },
          ],
        },
        {
          title: "Contato",
          items: [
            {
              label: "WhatsApp",
              href: "#",
            },
            {
              label: "Email",
              href: "#",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacidade",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Estação dos Grelhados"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
