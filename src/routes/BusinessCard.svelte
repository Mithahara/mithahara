<script>
  export let contacts = {
    phone: ["728-200-2674", "789-589-9800"],
    address: "Opposite Saanwara Sweets, Sec - 14, Panchkula, HR - 134103",
    email: "founder@mithahara.com",
    website: "www.mithahara.com"
  };
</script>

<style>
  .card {
    background: var(--background);
    color: var(--text);
    padding: 2rem;
    max-width: 600px;
    margin: auto;
    border: 1px solid var(--primary);
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    text-align: center;
  }
  h2 {
    margin-bottom: 1.5rem;
  }
  .contact-line {
    margin: 0.5rem 0;
  }

  .item-list {
    list-style: none;
    padding: 0;
    margin: 1rem 0;
  }
  .item-list li {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
  }
  a {
    color: var(--primary);
    text-decoration: none;
    font-weight: bold;
  }
</style>

<div class="card">
  <h2>Mithahara</h2>
  <ul class="item-list">
    <li><span>Phone</span><span>{contacts.phone.join(", ")}</span></li>
    <li><span>Address</span><span>{contacts.address}</span></li>
    <li><span>Email</span><span><a href={"mailto:" + contacts.email}>{contacts.email}</a></span></li>
    <li><span>Website</span><span><a href={"https://" + contacts.website}>{contacts.website}</a></span></li>
  </ul>
</div>