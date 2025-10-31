import React, { useState, useEffect } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${form.name}! We will call you at ${form.phone}.`);
    setForm({ name: "", phone: "", service: "" });
  };

  useEffect(() => {
    try {
      const booked = localStorage.getItem("bookService");
      if (booked) {
        setForm((prev) => ({ ...prev, service: booked }));
        localStorage.removeItem("bookService");
      }
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <section id="contact">
      <h2>Contact / Book Service</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={handleChange} required />
        <label>Service</label>
        <select name="service" value={form.service} onChange={handleChange}>
          <option>Carpet Cleaning</option>
          <option>Mattress Cleaning</option>
          <option>House Cleaning</option>
          <option>Sofa Cleaning</option>
        </select>
        <button type="submit">Request Service</button>
      </form>
    </section>
  );
}

export default Contact;
