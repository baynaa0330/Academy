const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white">
      
      {/* Top */}
      <div className="mx-auto flex w-[85vw] items-center justify-between py-16">
        
        {/* Logo */}
        <div className="text-4xl font-bold">
          <span>&lt;</span>
          <span>&gt;</span>
        </div>

        {/* Contact */}
        <div className="flex items-center gap-10">
          
          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700">
              ☎
            </div>

            <span>(976) 7007-1234</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-700">
              ✉
            </div>

            <span>contact@ecommerce.mn</span>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto w-[72vw] border-t border-gray-700"></div>

      {/* Bottom */}
      <div className="mx-auto flex w-[85vw] items-center justify-between py-10">
        
        {/* Copyright */}
        <p className="text-sm text-gray-200">
          © 2024 Ecommerce MN
        </p>

        {/* Socials */}
        <div className="flex items-center gap-7 text-xl">
          <span>●</span>
          <span>◎</span>
          <span>♥</span>
          <span>in</span>
        </div>

      </div>

    </footer>
  );
};

export default Footer;



