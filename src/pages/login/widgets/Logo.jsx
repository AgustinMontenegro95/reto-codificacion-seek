import logo from '../../../assets/images/logo.png';

export const Logo = () => {
    return (
        <img
            src={logo}
            alt="Logo"
            draggable={false}
            style={{ width: '250px', margin: 'auto' }}
        />
    );
};
