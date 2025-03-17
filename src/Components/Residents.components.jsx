import React, { useState } from 'react';
import ResidentsHeader from './Residents_header.components';
import './Residents.css';

const Residents = () => {
  const [products, setProducts] = useState([]); // Bütün məhsullar
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtrli məhsullar
  const [filters, setFilters] = useState({
    selectedChoice: '',
    selectedChoice1: '',
    selectedChoice2: '',
    selectedChoice3: '',
    selectedChoice4: '',
    selectedChoice5: '',
  });

  // Yeni məhsul əlavə etmək üçün funksiya
  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setFilteredProducts((prevFilteredProducts) => [...prevFilteredProducts, newProduct]);
  };

  // Axtarış funksiyası
    const handleSearch = () => {
      const filtered = products.filter((product) => {
        return (
          (filters.selectedChoice ? product.name.includes(filters.selectedChoice) : true) &&
          (filters.selectedChoice1 ? product.apartment.includes(filters.selectedChoice1) : true) &&
          (filters.selectedChoice2 ? product.garageSpace.includes(filters.selectedChoice2) : true) &&
          (filters.selectedChoice3 ? product.carNumber.includes(filters.selectedChoice3) : true) &&
          (filters.selectedChoice4 ? product.time.includes(filters.selectedChoice4) : true) &&
          (filters.selectedChoice5 ? product.amount.includes(filters.selectedChoice5) : true)
        );
      });
    
      // Yalnız unikal ID-ləri olan məhsullar göstərilsin
      const uniqueFilteredProducts = [];
      const seenIds = new Set();
    
      filtered.forEach((product) => {
        if (!seenIds.has(product.id)) {
          seenIds.add(product.id);
          uniqueFilteredProducts.push(product);
        }
      });
    
      // Axtarış nəticəsini yeniləyirik
      setFilteredProducts(uniqueFilteredProducts);
    };
    
  

  // Axtarış funksiyasını çağıran klik funksiyası
  const handleSearchClick = () => {
    // Axtarışa başlamazdan əvvəl filteredProducts vəziyyətini sıfırlayırıq
    setFilteredProducts([]);
  
    // Filtrleri yeniləyirik
    setFilters({
      selectedChoice,
      selectedChoice1,
      selectedChoice2,
      selectedChoice3,
      selectedChoice4,
      selectedChoice5,
    });
  
    // Bütün inputlar boşdursa, bütün məhsulları göstər
    if (
      selectedChoice === '' &&
      selectedChoice1 === '' &&
      selectedChoice2 === '' &&
      selectedChoice3 === '' &&
      selectedChoice4 === '' &&
      selectedChoice5 === ''
    ) {
      // Bütün məhsulları göstəririk
      setFilteredProducts(products);
    } else {
      handleSearch(); // Axtarışın nəticələrini filtrləyirik
    }
  };
  
  
  return (
    <div className="residents-main">
      <ResidentsHeader 
        setFilters={setFilters} 
        setFilteredProducts={setFilteredProducts}
        handleAddProduct={handleAddProduct} 
        handleSearch={handleSearch} 
        products={products} // products state-i props olaraq göndərilir
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad</th>
            <th>Mənzil</th>
            <th>Qaraj Yeri</th>
            <th>Maşın Nömrəsi</th>
            <th>Vaxt</th>
            <th>Məbləğ</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length === 0 ? (
            <tr>
              <td colSpan="7">Məlumat yoxdur</td>
            </tr>
          ) : (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.apartment}</td>
                <td>{product.garageSpace}</td>
                <td>{product.carNumber}</td>
                <td>{product.time}</td>
                <td>{product.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Residents;
