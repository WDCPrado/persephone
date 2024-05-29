import { Billboard, Product } from "@/types";

export const products: Product[] = [
  {
    id: "prod-001",
    name: "Cheiro de Poçao do Amor",
    desc: "DESCUBRA A ESSÊNCIA DA HIDRATAÇÃO E CUIDADO COM O CREME HIDRATANTE PERSEPHONE, UMA FÓRMULA LUXUOSA DESENVOLVIDA PARA REVITALIZAR E NUTRIR A SUA PELE. INSPIRADO NA BELEZA ETERNA E NA PUREZA DA NA-» TUREZA, PERSEPHONE COMBINA INGREDIENTES PREMIUM QUE PROPORCIONAM UMA HIDRATAÇÃO INTENSA E DURADOURA, RESTAURANDO A VITALIDADE E LUMINOSIDADE DA PELE. COM UM BLEND EXCLUSIVO DE ÁCIDO HIALURÔNICO, MANTEIGA DE KARITÉ, VITAMINA E E EXTRATOS BOTÂNICOS, PERSEPHONE NÃO APENAS HIDRATA, MAS TAMBÉM PROTEGE E ACALMA, PROMOVENDO UMA PELE MACIA, SAUDÁVEL E RADIANTE. DEIXE-SE ENVOLVER PELA SUAVIDADE E EFICÁCIA DE PERSEPHONE, O SEGREDO PARA UMA PELE IMPECAVELMENTE HIDRATADA E REJUVENESCIDA.",
    price: "30",
    quantity: 100,
    images: [
      {
        id: "img-001",
        productId: "prod-001",
        url: "/prod1.jpg",
        createdAt: "2024-05-27T10:00:00Z",
        updatedAt: "2024-05-27T10:00:00Z",
      },
      {
        id: "img-002",
        productId: "prod-001",
        url: "/prod2.jpg",
        createdAt: "2024-05-27T10:00:00Z",
        updatedAt: "2024-05-27T10:00:00Z",
      },
    ],
  },
];

export const color1 = "#BE6C97";
export const color2 = "#764C73";
export const color3 = "#f887a8";
