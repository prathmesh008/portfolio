# 🚀 Deployment Guide: Prathmesh's Retro Portfolio

This guide will help you deploy your portfolio to the web for free using **Vercel** (the creators of Next.js).

## Phase 1: Push to GitHub (The Foundation)
First, we need to put your code on GitHub to make deployment automatic.

1.  **Create a New Repository** on GitHub:
    *   Go to [github.com/new](https://github.com/new).
    *   Repository Name: `portfolio` (or `retro-portfolio`).
    *   Make it **Public**.
    *   Click **Create repository**.

2.  **Push your code** (Run these commands in your terminal inside `retro-portfolio`):
    ```bash
    # Stop the dev server first (Ctrl + C)
    
    # Initialize git if not already active (you likely have this, but just in case)
    git init

    # Add all files
    git add .

    # Commit changes
    git commit -m "Initial portfolio release"

    # Link to your new GitHub repo
    git remote add origin https://github.com/prathmesh008/portfolio.git

    # Push the code
    git push -u origin main
    ```

## Phase 2: Deploy on Vercel (The "Cherry on Top")
This is where we get your custom name URL.

1.  **Go to Vercel**:
    *   Visit [vercel.com](https://vercel.com) and sign up with **GitHub**.

2.  **Import Project**:
    *   Click **"Add New..."** -> **"Project"**.
    *   You will see your `portfolio` repository from GitHub. Click **Import**.

3.  **Configure Project Name (CRITICAL STEP for your URL)**:
    *   In the **"Project Name"** field, this determines your `.vercel.app` URL.
    *   **Try typing:** `prathmesh` or `prathmesh-upadhyay` or `prathmesh-codes`.
    *   *If available, your URL will be:* `https://prathmesh-upadhyay.vercel.app` (The Cherry 🍒).

4.  **Deploy**:
    *   Leave "Framework Preset" as **Next.js**.
    *   Click **Deploy**.

## Phase 3: Verify
*   Wait about 1 minute.
*   Vercel will show a "Congratulations!" screen.
*   Click the big picture to visit your new site live on the internet!

## Phase 4: Connecting Your Custom Domain (The Real Deal 🎩)
So you bought a domain (e.g., `prathmesh.com`). Here is how to connect it to your Vercel deployment.

### Step 1: Add Domain to Vercel
1.  Go to your Vercel Project Dashboard.
2.  Click on **Settings** (top tab).
3.  Click on **Domains** (left sidebar).
4.  Enter your domain name (e.g., `prathmesh.com`) in the input box and click **Add**.
5.  Select the recommended option (usually "Add prathmesh.com and www.prathmesh.com").

### Step 2: Configure DNS (At your Registrar)
Vercel will show you a huge "Invalid Configuration" error. **This is normal.** It will give you two values to add to your domain registrar (GoDaddy, Namecheap, Hostinger, etc.).

**Option A: The Nameserver Method (Easiest)**
*Use this if you don't use your domain for email or other complicated things.*
1.  Log in to where you bought your domain.
2.  Find **"Nameservers"** or **"DNS Management"**.
3.  Change the Nameservers to Vercel's:
    *   `ns1.vercel-dns.com`
    *   `ns2.vercel-dns.com`
4.  Save. *It may take up to 24 hours to work, but usually takes minutes.*

**Option B: The A Record & CNAME Method (Recommended)**
*Use this if you want to keep your DNS control at your registrar.*
1.  Log in to your registrar.
2.  Find **"manage DNS"** or **"DNS Records"**.
3.  **Add an A Record**:
    *   **Type**: `A`
    *   **Name/Host**: `@` (or leave blank)
    *   **Value/Target**: `76.76.21.21` (This is Vercel's IP)
    *   **TTL**: Automatic or 3600
4.  **Add a CNAME Record** (for the 'www' part):
    *   **Type**: `CNAME`
    *   **Name/Host**: `www`
    *   **Value/Target**: `cname.vercel-dns.com`

### Step 3: Wait for Propagation
1.  Go back to Vercel Domains dashboard.
2.  It might say "Refreshing...".
3.  Once the little circles turn **Blue** (Verification) and then **Green** (Valid), you are live!
4.  Your site is now accessible at `your-domain.com`!
