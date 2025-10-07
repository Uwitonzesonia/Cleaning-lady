import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", service: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We will call you at ${form.phone}.`);
    setForm({ name: "", phone: "", service: "" });
  };

  return (
    <section id="contact">
      <h2>Contact / Book Service</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          required
          autoComplete="off"
          type="tel"
          pattern="[0-9]{10,15}"
          placeholder="Enter phone number"
        />
        <label htmlFor="service">Service</label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          <option value="Carpet Cleaning">Carpet Cleaning</option>
          <option value="Mattress Cleaning">Mattress Cleaning</option>
          <option value="House Cleaning">House Cleaning</option>
          <option value="Sofa Cleaning">Sofa Cleaning</option>
        </select>
        <button type="submit">Request Service</button>
      </form>
    </section>
  );
}

export default Contact;
