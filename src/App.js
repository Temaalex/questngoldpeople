import { Routes, Route } from 'react-router-dom';
import Error from "./components/ContentError";
import ContentBox from "./components/ContentBox"

import QuizBoss from './components/QuizBoss';
import QuizText from './components/QuizText';
import TheEnd from './components/TheEnd';
import ToBoss from './components/toBoss'


function App() {
  return (
    <Routes>
     
      {/* Ошибка в ответе */}
      <Route path="/0" element={<Error/>} />
      {/* Открытие сундука */}
      <Route path="/1000" element={<ContentBox/>} />
      {/* все кроме */}
      <Route path="*" element={<h1>404 Not Found</h1>} />

{/* Все задачи по карте */}
<Route path="/1" element={<QuizText/>} />
<Route path="/3" element={<QuizText/>} />
<Route path="/3" element={<QuizText/>} />
<Route path="/5" element={<QuizText/>} />
<Route path="/7" element={<QuizText/>} />
<Route path="/9" element={<QuizText/>} />
<Route path="/11" element={<QuizText/>} />
<Route path="/13" element={<QuizText/>} />
<Route path="/15" element={<QuizText/>} />
<Route path="/17" element={<QuizText/>} />
<Route path="/19" element={<QuizText/>} />
<Route path="/21" element={<QuizText/>} />
<Route path="/23" element={<QuizText/>} />
<Route path="/25" element={<QuizText/>} />
<Route path="/27" element={<QuizText/>} />
<Route path="/29" element={<QuizText/>} />
<Route path="/31" element={<QuizText/>} />
<Route path="/33" element={<QuizText/>} />
<Route path="/35" element={<QuizText/>} />
<Route path="/37" element={<QuizText/>} />
<Route path="/39" element={<QuizText/>} />

{/* После открытия коробки */}
<Route path="/41" element={<ToBoss/>} />

{/* Босс */}
<Route path="/42" element={<QuizBoss/>} />

{/* Финиш */}
<Route path="/1001" element={<TheEnd/>} />


    </Routes>
  );
}

export default App;
