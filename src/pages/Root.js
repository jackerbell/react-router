import {Outlet} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

const Root = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />  {/* children property가 표시될 위치를 지정해줌 */}
      </main>
    </>
  );
};

export default Root;