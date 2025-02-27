import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Dish } from '../pages/Dish';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { Pedido } from '../pages/Pedido';
import { PayConfirm } from '../pages/PayConfirm';
import { Navigate } from 'react-router-dom';

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dish/:id" element={<Dish />} />
            <Route path="/newdish" element={<NewDish />} />
            <Route path="/editdish/:id" element={<EditDish />} />
            <Route path="/pedido/" element={<Pedido />} />
            <Route path="/pay/:id" element={<PayConfirm />} />
            <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
    );
};
