import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from './app/store';
import { increase, decrease, removeItem, clearCart, calculateTotals } from './features/cart/cartSlice';

function App() {
  const { cartItems, total, amount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🛒 UMC PlayList</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between items-center border-b py-2">
            <div className="flex items-center gap-4">
              <img src={item.img} alt={item.title} className="w-16 h-16 object-cover" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.singer}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => dispatch(decrease(item.id))} className="px-2 py-1 bg-gray-200">-</button>
              <span>{item.amount}</span>
              <button onClick={() => dispatch(increase(item.id))} className="px-2 py-1 bg-gray-200">+</button>
              <button onClick={() => dispatch(removeItem(item.id))} className="px-2 py-1 text-red-600">🗑</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-4">
        <p>총 수량: <span className="font-bold">{amount}</span>개</p>
        <p>총 금액: <span className="font-bold">{total.toLocaleString()}원</span></p>
        <button onClick={() => dispatch(clearCart())} className="mt-2 bg-red-500 text-white px-4 py-2 rounded">전체 삭제</button>
      </div>
    </div>
  );
}

export default App;

