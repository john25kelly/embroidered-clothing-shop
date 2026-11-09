import React, { useState } from 'react';

const CLUBWEAR_EMAIL = 'clubwear@example.com';
const publicAsset = (path) => `${process.env.PUBLIC_URL || ''}${path}`;

const products = [
  {
    id: 'kids-t-shirt',
    name: 'Cool Kids T-Shirt',
    category: 'Core range',
    supplier: 'AWDis JustCool JC001B',
    price: '£15.25',
    description: 'Lightweight club T-shirt, available in 30 colours.',
    options: '30 colours',
    details: ['Left chest: 1 × colour print', 'Right chest: initials printed', 'Back: 1 × colour print'],
    image: publicAsset('/images/products/kids-t-shirt.jpg'),
    imageAlt: 'Sky blue Cool Kids T-shirt',
  },
  {
    id: 'kids-hoodie',
    name: 'Kids Hoodie',
    category: 'Core range',
    supplier: 'AWDis Just Hoods JH001B',
    price: '£28.77',
    priceNote: 'Adult hoodie option: £31.99',
    description: 'Personalised club hoodie, available in 46+ colours.',
    options: '46+ colours',
    details: ['Left chest: 1 × embroidered logo', 'Right chest: initials printed', 'Back: 1 × colour print'],
    image: publicAsset('/images/products/kids-hoodie.jpg'),
    imageAlt: 'Lavender Kids Hoodie',
  },
  {
    id: 'adult-polo',
    name: 'Adult Polo Shirt',
    category: 'Core range',
    supplier: 'ProRTX Pro Piqué RX101',
    price: '£18.65',
    vat: true,
    description: 'A classic polo with a ribbed collar and taped neck.',
    options: '20 colours',
    details: ['Left chest: 1 × embroidered logo', 'Right chest: initials printed', 'Back: 1 × colour print'],
    image: publicAsset('/images/products/adult-polo.jpg'),
    imageAlt: 'Black Adult Polo Shirt',
    extra: 'Ribbed collar, taped neck, twin-needle stitching.',
  },
  {
    id: 'soft-shell-jacket',
    name: 'Adult Soft Shell Jacket',
    category: 'Core range',
    supplier: 'ProRTX Two Layer RX500',
    price: '£34.98',
    vat: true,
    description: 'A practical layer for changeable days at the club.',
    options: '5 colours',
    details: ['Left chest: 1 × embroidered logo', 'Right chest: initials printed', 'Back: 1 × colour print'],
    image: publicAsset('/images/products/soft-shell-jacket.jpg'),
    imageAlt: 'Black Adult Soft Shell Jacket',
    extra: 'Showerproof and windproof, with micro fleece lining.',
  },
  {
    id: 'cap',
    name: 'Cap',
    category: 'Headwear & accessories',
    supplier: 'Beechfield Coolmax Flow Mesh BB182',
    price: 'Price to be confirmed',
    description: 'Mesh panels with reflective piping.',
    options: null,
    details: [],
    image: publicAsset('/images/products/cap.jpg'),
    imageAlt: 'Black cap with reflective piping',
  },
  {
    id: 'woolly-hat',
    name: 'Woolly Hat',
    category: 'Headwear & accessories',
    supplier: 'Beechfield Pom-Pom BB426',
    price: 'Price to be confirmed',
    description: '100% soft-touch acrylic. Shown in burgundy.',
    options: null,
    details: [],
    image: publicAsset('/images/products/woolly-hat.jpg'),
    imageAlt: 'Burgundy woolly hat with pom-pom',
  },
  {
    id: 'sun-hat',
    name: 'Sun Hat',
    category: 'Headwear & accessories',
    supplier: 'Result RC095 wide-brim',
    price: 'Price to be confirmed',
    description: '100% cotton with a chin cord. Shown in olive green.',
    options: null,
    details: [],
    image: publicAsset('/images/products/sun-hat.jpg'),
    imageAlt: 'Olive green wide-brim sun hat',
  },
  {
    id: 'neck-scarf',
    name: 'Neck Scarf',
    category: 'Headwear & accessories',
    supplier: 'Tubular scarf',
    price: 'Price to be confirmed',
    description: 'Wear under a helmet or as a sweatband.',
    options: null,
    details: [],
    image: publicAsset('/images/products/neck-scarf.jpg'),
    imageAlt: 'Red tubular neck scarf',
    extra: 'Different supplier; minimum order of 50.',
  },
];

const categories = ['All items', ...new Set(products.map((product) => product.category))];

function enquiryLink(product) {
  const subject = `EDYC clubwear enquiry: ${product.name}`;
  const price = `${product.price}${product.vat ? ' + VAT' : ''}`;
  const body = `Hello,\n\nI would like to enquire about the ${product.name} (${price}).\n\nPlease let me know about sizes, colours, availability, and how to order.\n\nThank you.`;
  return `mailto:${CLUBWEAR_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="East Down Yacht Club clubwear home">
        <img src={publicAsset('/images/edyc-logo.png')} alt="East Down Yacht Club" />
        <span><strong>EDYC</strong><small>CLUBWEAR</small></span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#collection">Collection</a>
        <a href="#ordering">Ordering</a>
        <a href="#setup">Set-up fees</a>
      </nav>
      <a className="header-contact" href={`mailto:${CLUBWEAR_EMAIL}`}>Enquire <span aria-hidden="true">↗</span></a>
    </header>
  );
}

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={product.image} alt={product.imageAlt} loading="lazy" />
      </div>
      <div className="product-card__details">
        <p className="product-card__category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="product-card__supplier">{product.supplier}</p>
        <p className="product-card__price">
          {product.price}{product.vat && <span> + VAT</span>}
        </p>
        <p className="product-card__description">{product.description}</p>
        {product.details.length > 0 && (
          <div className="product-card__includes">
            <h4>Includes</h4>
            <ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
          </div>
        )}
        {product.priceNote && <p className="product-card__note">{product.priceNote}</p>}
        {product.extra && <p className="product-card__extra">{product.extra}</p>}
        {product.options && <p className="product-card__options">{product.options}</p>}
        <a className="product-card__order" href={enquiryLink(product)}>
          Enquire about this item <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All items');
  const visibleProducts = activeCategory === 'All items'
    ? products
    : products.filter((product) => product.category === activeCategory);

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="home">
          <div className="hero__copy">
            <p className="eyebrow"><span /> East Down Yacht Club · Moymore, Killyleagh</p>
            <h1>Clubwear<br />for life <em>afloat.</em></h1>
            <p className="hero__intro">
              A proposed collection of club kit, personalised with the EDYC logo, initials, and print options.
            </p>
            <a className="button button--coral" href="#collection">Explore the collection <span aria-hidden="true">↓</span></a>
            <p className="hero__note">Prices as quoted · Subject to supplier confirmation</p>
          </div>
          <div className="hero__image-wrap">
            <img className="hero__image" src={publicAsset('/images/products/soft-shell-jacket.jpg')} alt="Black soft shell jacket in the EDYC clubwear collection" />
            <div className="hero__badge"><span>EDYC</span><strong>Made<br />for the water</strong></div>
          </div>
        </section>

        <section className="intro-band" aria-label="Collection highlights">
          <p>Club logo</p><span aria-hidden="true">✦</span>
          <p>Personalised initials</p><span aria-hidden="true">✦</span>
          <p>Colour choices across the range</p>
        </section>

        <section className="collection-section section-wrap" id="collection">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Potential range</p>
              <h2>EDYC clubwear</h2>
            </div>
            <p className="section-heading__aside">Browse the proposed range and enquire about sizing, colours, and availability. Final prices and details are subject to confirmation.</p>
          </div>
          <div className="category-list" role="group" aria-label="Filter products by category">
            {categories.map((category) => (
              <button
                className={`category-button${activeCategory === category ? ' is-active' : ''}`}
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <p className="collection-note">Enquiries only: this site does not take payment. VAT is shown separately where stated in the proposal.</p>
        </section>

        <section className="ordering-section" id="ordering">
          <div className="ordering-section__heading">
            <p className="eyebrow">From interest to delivery</p>
            <h2>How ordering works</h2>
            <p>The proposed online shop opens once enough club members are interested.</p>
          </div>
          <div className="order-steps">
            <article className="order-step">
              <span className="order-step__number">01</span>
              <h3>Reach 15 orders</h3>
              <p>At least 15 orders are needed to set up an online store.</p>
            </article>
            <article className="order-step">
              <span className="order-step__number">02</span>
              <h3>Shop for one week</h3>
              <p>The store will be open for a maximum of one week.</p>
            </article>
            <article className="order-step">
              <span className="order-step__number">03</span>
              <h3>Allow 10 working days</h3>
              <p>Orders are expected within 10 working days of the store closing.</p>
            </article>
            <article className="order-step">
              <span className="order-step__number">04</span>
              <h3>Home delivery</h3>
              <p>Delivery to each person who orders is £6 + VAT.</p>
            </article>
          </div>
          <p className="ordering-warning"><span aria-hidden="true">✦</span> Neck scarves come from a different supplier and require a minimum order of 50.</p>
        </section>

        <section className="setup-section section-wrap" id="setup">
          <div className="setup-section__intro">
            <p className="eyebrow">One-off costs</p>
            <h2>Getting the club logo ready.</h2>
            <p>The proposed set-up fees are payable by the club.</p>
          </div>
          <div className="setup-fees">
            <article className="setup-fee">
              <span className="setup-fee__icon" aria-hidden="true">✳</span>
              <div><h3>Embroidery set-up</h3><p>New embroidery set-up fee</p></div>
              <strong>£40 <small>+ VAT</small></strong>
            </article>
            <article className="setup-fee">
              <span className="setup-fee__icon" aria-hidden="true">✳</span>
              <div><h3>Screen print set-up</h3><p>New screen print set-up fee</p></div>
              <strong>£30 <small>+ VAT</small></strong>
            </article>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a className="footer-brand" href="#home">
          <img src={publicAsset('/images/edyc-logo.png')} alt="" />
          <span><strong>East Down Yacht Club</strong><small>Potential clubwear collection</small></span>
        </a>
        <p>Prices as quoted, subject to confirmation.</p>
        <a href={`mailto:${CLUBWEAR_EMAIL}`}>Clubwear enquiries <span aria-hidden="true">↗</span></a>
      </footer>
    </>
  );
}

export default App;
