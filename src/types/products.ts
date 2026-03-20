export interface productsInterface {
  name: string;              // Product name
  slug: string;              // URL-friendly identifier
  description: string;       // Product description
  price: number;             // Price in USD
  category: string;          // "medicamentos" | "suplementos" | "cuidado-personal" | "dispositivos-medicos"
  brand: string;             // Brand name
  stock: number;             // Available quantity
  image: string;             // Placeholder image URL
  requiresPrescription: boolean;  // Whether prescription is needed
  createdAt: Date;    
}