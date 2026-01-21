
export interface Product {
  id: string;
  name: string;
  category: 'Urban' | 'Hiking';
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
