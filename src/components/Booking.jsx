import { useState } from "react";

function Booking() {
  const [form, setForm] = useState({ name:"", phone:"", service:"", date:"", address:"", message:"" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  const handleSubmit = async(e) => {
    e.preventDefault();
    await fetch("https://script.google.com/macros/s/AKfycbw0JJSMDkfhTUM2BIzlLwH69y5lhQtQ4cJ2tXYrD6WpHy33rd_HwtXU0-nGd_EwZpbaLg/exec", {
      method: "POST",
      body: JSON.stringify(form),
    });
    setSent(true);
  };

  return (
    <section id="booking">
      <h2>Book a Cleaning</h2>

      {sent && <p className="success">✅ Booking submitted successfully!</p>}

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" onChange={handleChange} required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} required />
        <select name="service" onChange={handleChange} required>
          <option>Home Deep Cleaning</option>
          <option>Office Cleaning</option>
          <option>Carpet & Sofa Cleaning</option>
        </select>
        <input type="date" name="date" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} required />
        <textarea name="message" placeholder="Additional Notes" onChange={handleChange}></textarea>

        <button type="submit">Submit Booking</button>
      </form>
    </section>
  );
}

export default Booking;
