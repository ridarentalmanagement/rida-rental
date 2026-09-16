# Rida Rental Management and Services — Website

A free-to-host static website designed for GitHub + Cloudflare Pages.

## Files

- `index.html` — Homepage
- `residential.html` — Residential services
- `commercial.html` — Commercial services
- `contact.html` — Contact / valuation form
- `styles.css` — Full website design
- `script.js` — Mobile menu, carousel, WhatsApp form
- `config.js` — Your phone, email, address and WhatsApp number

## Step 1 — Edit business details

Open `config.js` and replace the placeholders:

```js
window.RIDA_CONFIG = {
  companyName: "Rida Rental Management and Services",
  phoneDisplay: "+91 XXXXX XXXXX",
  whatsappNumber: "91XXXXXXXXXX",
  email: "your-email@example.com",
  address: "Hyderabad, Telangana, India",
  whatsappMessage: "Hello Rida Rental Management and Services, I would like to enquire about property management services."
};
```

Important: `whatsappNumber` must contain digits only and include the country code.

Example:

```js
whatsappNumber: "919876543210"
```

## Step 2 — Upload to GitHub

1. Create a repository.
2. Click **Add file → Upload files**.
3. Upload every file in this folder.
4. Click **Commit changes**.

The homepage must remain named `index.html`.

## Step 3 — Deploy on Cloudflare Pages

1. Open Cloudflare.
2. Go to **Workers & Pages**.
3. Choose **Create → Pages → Connect to Git**.
4. Connect your GitHub account.
5. Select this repository.
6. For a plain HTML/CSS/JS project:
   - Framework preset: **None**
   - Build command: leave blank
   - Build output directory: `/`
7. Deploy.

## Step 4 — Add your domain

In your Cloudflare Pages project:

**Custom domains → Set up a custom domain**

Add your purchased domain.

## Important before publishing

The testimonial text in the homepage is clearly marked as sample content. Replace it with real verified client feedback before making the site public.

The site uses remote Unsplash images. You can later replace them with your own property and company images.
