# Algovenix Landing Page

A simple landing page for Algovenix, showcasing our upcoming Chrome Extensions and APIs.

## Setup for GitHub Pages

1. Create a new GitHub repository
2. Upload these files to your repository
3. Go to Settings > Pages
4. Set the source to "main" branch and the folder to "/ (root)"
5. Click Save
6. Your site will be published at https://[your-username].github.io/[repo-name]/

## Connecting to Your Custom Domain

### In GitHub:

1. Go to your repository settings
2. Scroll down to the "GitHub Pages" section
3. Under "Custom domain", enter your domain (e.g., algovenix.com)
4. Save the changes
5. GitHub will create a CNAME file in your repository

### In Namecheap:

1. Log in to Namecheap
2. Go to Domain List and click "Manage" next to your domain
3. Click on "Advanced DNS"
4. Add these records:

#### For apex domain (algovenix.com):
Add these A records:
- Type: A, Host: @, Value: 185.199.108.153, TTL: Automatic
- Type: A, Host: @, Value: 185.199.109.153, TTL: Automatic
- Type: A, Host: @, Value: 185.199.110.153, TTL: Automatic
- Type: A, Host: @, Value: 185.199.111.153, TTL: Automatic

#### For www subdomain:
- Type: CNAME, Host: www, Value: [your-username].github.io., TTL: Automatic

5. Wait for DNS propagation (can take up to 24 hours)

## Files

- `index.html`: Main HTML structure
- `styles.css`: CSS styles for the landing page
- `script.js`: JavaScript for countdown timer and form handling

## Setting Up Email Collection

The landing page uses Formspree to handle email submissions. To set it up:

1. Go to [Formspree.io](https://formspree.io/) and create a free account
2. Create a new form
3. Get your form endpoint (it will look like https://formspree.io/f/xaybvpzk)
4. Replace the placeholder URL in the `index.html` file:
   - Find: `<form id="email-form" action="https://formspree.io/f/yourkeyhere" method="POST">`
   - Replace `yourkeyhere` with your actual form ID
5. Configure your form in Formspree to forward submissions to algovenix@gmail.com
6. Optionally, add reCAPTCHA to prevent spam

With this setup, whenever someone submits their email on your landing page, you'll receive a notification at algovenix@gmail.com.