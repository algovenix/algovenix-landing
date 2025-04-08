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

## Customization
