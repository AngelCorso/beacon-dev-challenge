import mongoose from "mongoose"

const productsSchema = new mongoose.Schema({
  name: String,              // Product name
  slug: String,              // URL-friendly identifier
  description: String,       // Product description
  price: Number,             // Price in USD
  category: String,          // "medicamentos" | "suplementos" | "cuidado-personal" | "dispositivos-medicos"
  brand: String,             // Brand name
  stock: Number,             // Available quantity
  image: String,             // Placeholder image URL
  requiresPrescription: Boolean,  // Whether prescription is needed
  createdAt: Date,           // Timestamp (auto-generated)
})

const Products =
  mongoose.models.Products || mongoose.model("Products", productsSchema)

export default Products