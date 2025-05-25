import { Routes, Route, Navigate } from 'react-router-dom';
import ShopGrid from './pages/ShopGrid';
import ProductView from './pages/ProductView';
import StoreTemplate from './pages/StoreTemplate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/store/118361" replace />} />
        <Route path="/store/:id" element={<ShopGrid />} />
        <Route path="/store/:id/product/:id2" element={<ProductView />} />
        <Route path="/store/:id/template" element={<StoreTemplate />} />
    </Routes>
  );
}

export default App;
