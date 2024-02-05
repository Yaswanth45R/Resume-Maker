import '../styles/Footer.scss'

const Footer = () =>{
    const currentDate = new Date();
    return(
        <footer className='footer'>
             <p className='footer__text'>Copyright &copy; <a href='https://github.com/Yaswanth45R' target='_blank' rel="noreferrer">Yashwanth</a> {currentDate.getFullYear()}</p>
        </footer>
    )
}

export default Footer;