export type ProductCategory = 
  | 'reinforcement-steel'
  | 'structural-steel'
  | 'plumbing-solutions'
  | 'civil-infrastructure';

export type SteelProducerType = 'primary' | 'secondary' | 'structural' | 'pipes';

export interface ProductItem {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory?: string;
  brand: string;
  producerType?: SteelProducerType;
  tagline?: string;
  description: string;
  grades?: string[];
  dimensions?: string[];
  standards?: string[];
  applications: string[];
  features?: string[];
  unit?: string;
  badge?: string;
  inStock: boolean;
}

export interface EnquiryItem {
  product: ProductItem;
  quantity: string;
  unit: string;
  notes?: string;
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  projectLocation: string;
  requirementType: string;
  items: EnquiryItem[];
  customMessage: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  focus: string;
  bio: string;
  phone?: string;
}

export interface BrandPartner {
  id: string;
  name: string;
  tagline: string;
  category: string;
  producerType: 'Primary Producer' | 'Secondary Producer' | 'Piping Systems' | 'Precast & Infrastructure';
  description: string;
  productsSupplied: string[];
  accreditation?: string;
}
