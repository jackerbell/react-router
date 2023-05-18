import {NavLink} from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink 
              to='/' 
              className={
                ({isActive})=>
                  isActive ? 
                  classes.active : 
                  undefined 
              }
              // style={
              //   ({isActive})=>
              //     isActive ? 
              //     'center' : 
              //     'left' 
              // }
              end // 현재 활성중인 라우트의 url 뒤가 이 경로로 끝나면, 이 링크를 활성화로 간주
              >Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to='/product' 
              className={
                ({isActive})=>
                  isActive ? 
                  classes.active : 
                  undefined 
              }>Product
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;