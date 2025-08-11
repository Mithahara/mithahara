<script>
  import { menu, contacts } from '../data.js';
</script>

<style>
  main {
    padding: 2rem;
    max-width: 600px;
    margin: auto;
    font-family: 'Inter', sans-serif;
    color: var(--text);
    text-align: center;
  }
  h1 {
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  .tagline {
    font-size: 0.9rem;
    color: var(--primary);
    margin-bottom: 1.5rem;
    text-transform: uppercase;
  }

  .tagline.motto {
    font-size: 0.85rem;
    color: var(--text);
    font-style: italic;
    margin-top: 0;
    margin-bottom: 2rem;
    text-transform: none;
  }
  .section {
    margin: 2rem 0;
    text-align: left;
  }
  .section h2 {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
    /* Removed underline for menu headings to avoid splitting menu */
    border-bottom: none;
    display: inline-block;
  }
  .item-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .item-list li {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
  }

  /* Section dividers between main sections */
  .faq, .contact {
    padding: 1.5rem 0;
  }
  .faq {
    margin-top: 1.5rem;
  }
  .contact {
    margin-top: 1.5rem;
  }
  .contact {
    margin-top: 2rem;
  }
  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
  }
details {
  margin: 1.5rem 0;
  border: 1px solid var(--primary);
  border-radius: 8px;
  padding: 0.5rem;
}
details summary {
  font-weight: bold;
  cursor: pointer;
  list-style: none;
}
details p {
  margin: 0.5rem 0 0;
}

.divider {
  border: 0;
  height: 1px;
  background: var(--primary);
  margin: 2rem 0;
}
</style>

<main>
  <h1>Mithahara</h1>
  <p class="tagline motto">HEALTHY, HYGIENIC & SUSTAINABLE</p>
  <h2>OUR MENU</h2>
  <p class="tagline">SERVING FRESH FROM 7 AM TO 2:30 PM</p>
  {#each menu as section (section.title)}
    <div class="section">
      <h2>{section.title}</h2>
      <ul class="item-list">
        {#each section.items as item (item.name)}
          <li><span>{item.name}</span><span>{item.price}</span></li>
        {/each}
      </ul>
    </div>
  {/each}


  <hr class="divider" />
  <section class="contact">
    <h2>Contact Details</h2>
    <ul class="item-list">
      <li><span>WhatsApp</span><span><a href={contacts.whatsapp} target="_blank">WhatsApp</a></span></li>
      <li><span>Phone</span><span>{contacts.phone.join(", ")}</span></li>
      <li><span>Address</span><span>{contacts.address}</span></li>
      <li><span>Email</span><span><a href={"mailto:" + contacts.email}>{contacts.email}</a></span></li>
    </ul>
  </section>

  <hr class="divider" />
  <section class="faq">
    <h2>FAQs</h2>
    <div>
      <details>
        <summary>What is Mithahara?</summary>
        <p>Mithahara serves healthy, hygienic, sustainable vegetarian food with eco-friendly plating. Our menu features fresh plates like Appam, Idli, Uttapam, Paranthas, and more, prepared daily.</p>
      </details>
      <details>
        <summary>Since when are you serving?</summary>
        <p>We started on 11th January 2025!</p>
      </details>
      <details>
        <summary>Where are you located?</summary>
        <p>We currently serve in Sector 14, Panchkula — opposite Saanwara Sweets.</p>
      </details>
      <details>
        <summary>Do you take bulk orders?</summary>
        <p>Yes. We accept bulk orders for offices, events, and gatherings. Reach us on WhatsApp to plan your order.</p>
      </details>
    </div>
  </section>

</main>