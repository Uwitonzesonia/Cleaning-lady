function Footer() {
  <a
  href="https://wa.me/250792880442"
  target="_blank"
  className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition font-semibold"
>
  <img src="/whatsapp-icon.png" alt="WhatsApp" className="w-5 h-5" />
  WhatsApp Us
</a>

  return (
    <footer>
      <p>© {new Date().getFullYear()} Trust Cleaning Company. All Rights Reserved.</p>
    </footer>
  );
 

}

export default Footer;
