import Logo from '../../assets/logo.png';
const FooterLogo = () => {
  return (
    <div className="my-4 md:my-0">
      <div className="text-2xl font-bold text-white">
        <img src={Logo} alt="Logo" className="h-16 w-auto rounded-[10px]" />
      </div>
    </div>
  );
};

export default FooterLogo;
