import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { BrandsPage } from './pages/BrandsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { InfrastructurePage } from './pages/InfrastructurePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ProductDetailModal } from './components/ProductDetailModal';
import { EnquiryModal } from './components/EnquiryModal';
import { FloatingQuoteButton } from './components/FloatingQuoteButton';
import { ProductItem, ProductCategory } from './types';

export type AppPage = 'home' | 'products' | 'brands' | 'calculator' | 'infrastructure' | 'about' | 'contact';

export default function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const [selectedBrandForPage, setSelectedBrandForPage] = useState<string>('all');
  const [selectedCategoryForProducts, setSelectedCategoryForProducts] = useState<ProductCategory | 'all'>('all');

  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedProductForEnquiry, setSelectedProductForEnquiry] = useState<ProductItem | null>(null);
  const [cartProducts, setCartProducts] = useState<ProductItem[]>([]);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<ProductItem | null>(null);
  const [customEnquiryNotes, setCustomEnquiryNotes] = useState('');

  // Synchronize with URL hash on mount & hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace(/^#\/?/, '').toLowerCase().trim();
      if (!rawHash || rawHash === 'home') {
        setCurrentPage('home');
      } else if (rawHash.startsWith('brand')) {
        setCurrentPage('brands');
        const parts = rawHash.split('/');
        if (parts[1]) {
          setSelectedBrandForPage(parts[1]);
        }
      } else if (rawHash.startsWith('product')) {
        setCurrentPage('products');
        const parts = rawHash.split('/');
        if (parts[1]) {
          setSelectedCategoryForProducts(parts[1] as ProductCategory);
        }
      } else if (rawHash.startsWith('calc')) {
        setCurrentPage('calculator');
      } else if (rawHash.startsWith('infra')) {
        setCurrentPage('infrastructure');
      } else if (rawHash.startsWith('about')) {
        setCurrentPage('about');
      } else if (rawHash.startsWith('contact')) {
        setCurrentPage('contact');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Centralized Navigation Handler
  const handleNavigate = (page: string, params?: { brandId?: string; category?: ProductCategory | 'all' }) => {
    let targetHash = page;
    if (page === 'brands') {
      if (params?.brandId) {
        setSelectedBrandForPage(params.brandId);
        targetHash = `brands/${params.brandId}`;
      } else {
        setSelectedBrandForPage('all');
      }
      setCurrentPage('brands');
    } else if (page === 'products') {
      if (params?.category) {
        setSelectedCategoryForProducts(params.category);
        targetHash = `products/${params.category}`;
      } else {
        setSelectedCategoryForProducts('all');
      }
      setCurrentPage('products');
    } else {
      setCurrentPage(page as AppPage);
    }

    window.location.hash = `/${targetHash}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Open Enquiry with a specific product
  const handleEnquireProduct = (product: ProductItem) => {
    setSelectedProductForEnquiry(product);
    setCustomEnquiryNotes('');
    setIsEnquiryOpen(true);
  };

  // Open Enquiry for general / BOQ items
  const handleOpenGeneralEnquiry = () => {
    setSelectedProductForEnquiry(null);
    setCustomEnquiryNotes('');
    setIsEnquiryOpen(true);
  };

  // Open Specification detail modal
  const handleViewProductDetails = (product: ProductItem) => {
    setSelectedProductForDetail(product);
    setIsDetailOpen(true);
  };

  // Toggle item in quote cart
  const handleToggleCart = (product: ProductItem) => {
    setCartProducts((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // Remove single item from quote cart inside modal
  const handleRemoveFromCart = (productId: string) => {
    setCartProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  // Steel calculator estimate injected into enquiry
  const handleAddEstimateToEnquiry = (summaryText: string) => {
    setSelectedProductForEnquiry(null);
    setCustomEnquiryNotes(`ESTIMATE FROM STEEL CALCULATOR:\n${summaryText}`);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenGeneralEnquiry}
        enquiryItemCount={cartProducts.length}
      />

      {/* Dynamic Multi-Page Router View */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenGeneralEnquiry={handleOpenGeneralEnquiry}
          />
        )}

        {currentPage === 'products' && (
          <ProductsPage
            onEnquireProduct={handleEnquireProduct}
            onViewProductDetails={handleViewProductDetails}
            cartProductIds={cartProducts.map((p) => p.id)}
            onToggleCart={handleToggleCart}
            selectedCategoryProp={selectedCategoryForProducts}
            onOpenGeneralEnquiry={handleOpenGeneralEnquiry}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            onEnquireProduct={handleEnquireProduct}
            onViewProductDetails={handleViewProductDetails}
            cartProductIds={cartProducts.map((p) => p.id)}
            onToggleCart={handleToggleCart}
            onOpenGeneralEnquiry={handleOpenGeneralEnquiry}
            initialSelectedBrand={selectedBrandForPage}
          />
        )}

        {currentPage === 'calculator' && (
          <CalculatorPage
            onAddEstimateToEnquiry={handleAddEstimateToEnquiry}
            onOpenGeneralEnquiry={handleOpenGeneralEnquiry}
          />
        )}

        {currentPage === 'infrastructure' && (
          <InfrastructurePage
            onOpenGeneralEnquiry={handleOpenGeneralEnquiry}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            onOpenEnquiry={handleOpenGeneralEnquiry}
            onNavigateToContact={() => handleNavigate('contact')}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onOpenEnquiryModal={handleOpenGeneralEnquiry}
          />
        )}
      </main>

      {/* Industrial Footer */}
      <Footer
        onOpenEnquiry={handleOpenGeneralEnquiry}
        onNavigate={handleNavigate}
        onSelectCategory={(cat) => handleNavigate('products', { category: cat })}
      />

      {/* Global Floating Action Button */}
      <FloatingQuoteButton
        onOpenEnquiry={handleOpenGeneralEnquiry}
        itemCount={cartProducts.length}
      />

      {/* Product Technical Specification Modal */}
      <ProductDetailModal
        isOpen={isDetailOpen}
        product={selectedProductForDetail}
        onClose={() => setIsDetailOpen(false)}
        onEnquire={handleEnquireProduct}
      />

      {/* Official B2B RFQ / Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        selectedProduct={selectedProductForEnquiry}
        enquiryList={cartProducts}
        onRemoveFromList={handleRemoveFromCart}
        initialCustomText={customEnquiryNotes}
      />
    </div>
  );
}
