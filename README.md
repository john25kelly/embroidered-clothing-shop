# EDYC Clubwear

A React clubwear catalog for East Down Yacht Club, inspired by the layout and navigation of the existing `artistic-holistic` site. The initial collection, product images, prices, and ordering terms are based on `EDYC_Clubwear_Collection.pdf`.

## Run locally

```bash
npm install
npm start
```

`npm run build` creates an optimized production build. `npm test` runs the tests.

Pushing to `main` triggers the GitHub Pages workflow. The expected site URL is `https://john25kelly.github.io/embroidered-clothing-shop/`; the repository's Pages setting must allow GitHub Actions deployments.

## Before publishing or taking orders

- Update `CLUBWEAR_EMAIL` in `src/App.js` from the placeholder address to the clubwear contact.
- Confirm supplier prices, VAT treatment, available sizes and colours, and the proposed one-off set-up fees.
- Add the club's chosen payment provider and payment links before publishing a paid-order flow. Product buttons currently open an email enquiry; the site does not take payment or reserve stock.
- Confirm the minimum order, shop opening window, fulfilment timing, delivery charge, and separate neck-scarf minimum with the supplier.

Product category filters work locally. Each product enquiry opens an email prefilled with the selected item. All displayed prices and ordering details are presented as proposed and subject to confirmation.
