import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
  productCount: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, description, productCount }) => {
  return (
    <div className="bg-card border rounded-lg p-6 mb-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">{title}</h1>
      <p className="mt-3 text-lg text-muted-foreground">{description}</p>
      <p className="mt-4 text-sm text-muted-foreground">Showing {productCount} products</p>
    </div>
  );
};

export default CategoryHeader;
