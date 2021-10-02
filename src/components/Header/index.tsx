import './Header.css';

const Header = ({ black }: any) => 
<header className={black ? 'black' : ''}>
    <div className="header--logo">
        <a href="/">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix" />
        </a>
    </div>
    <div className="header--user">
        <a href="/profile">
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" alt="usuário" />
        </a>
    </div>
</header>
export default Header;