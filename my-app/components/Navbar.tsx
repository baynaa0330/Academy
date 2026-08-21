export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black p-4 text-white">
      {/* Left: Logo & Category */}
      <div className="flex items-center gap-6">
        <div className="font-bold flex items-center gap-2">
          <span>&lt;&gt;</span> ECOMMERCE
        </div>
        <button className="text-sm">Ангилал ∨</button>
      </div>

      {/* Middle: Search Bar */}
      <div className="flex-1 max-w-md mx-4">
        <input 
          type="text" 
          placeholder="Бүтээгдэхүүн хайх" 
          className="w-full bg-gray-900 rounded px-4 py-1 text-sm text-gray-300"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-4">
        {/* Wishlist Icon */}
        <button className="p-1">♡</button>

        {/* --- REMOVED PROFILE AVATARS HERE --- */}

        {/* Auth Button */}
        <button className="border border-gray-600 rounded-full px-4 py-1 text-sm">
          Log in or create account
        </button>

        {/* Cart Button */}
        <button className="border border-gray-600 rounded-full px-4 py-1 text-sm flex items-center gap-1">
          🛒 Cart
        </button>
      </div>
    </nav>
  );
}