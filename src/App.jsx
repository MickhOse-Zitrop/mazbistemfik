import {
    RouterProvider,
    Route,
    createRoutesFromElements,
    createHashRouter,
} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Main from './pages/Main';
import History from './pages/Histroy';
import Founders from './pages/Members/Founders';
import Person from './pages/Person';
import Members from './pages/Members/Members';

export default function App() {
    const router = createHashRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="history" element={<History />} />
                    <Route path="founders" element={<Founders />} />
                    <Route path="founders/:person" element={<Person />} />
                    <Route path="members" element={<Members />} />
                    <Route path="members/:person" element={<Person />} />
                    <Route path="contacts" />
                    <Route path="*" element={<Main />} />
                </Route>
            </>
        )
        // { basename: '/mazbistemfik' }
    );

    return <RouterProvider router={router} />;
}
