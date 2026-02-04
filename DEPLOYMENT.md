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

### Step 2: Configure DNS (Specifically for Hostinger 🟣)
Since you bought your domain on Hostinger, here is exactly what to do:

**Option A: The Nameserver Method (Recommended & Easiest)**
1.  Log in to your **Hostinger Dashboard**.
2.  Click on **Domains** at the top.
3.  Click on your domain `prathmeshupadhyay.in`.
4.  On the left sidebar, look for **"Nameservers"**.
5.  Click **"Change Nameservers"**.
6.  Select **"Change nameservers"** (not Hostinger default).
7.  Delete the existing ones and enter Vercel's:
    *   Nameserver 1: `ns1.vercel-dns.com`
    *   Nameserver 2: `ns2.vercel-dns.com`
8.  Click **Save**.

**Option B: The A Record Method (If you want to keep Hostinger Email)**
1.  In Hostinger, go to your domain and click **"DNS / Zone Editor"** on the left.
2.  **Delete** any A records that point to Hostinger IPs (look for Type `A` and Name `@`).
3.  **Add a New Record**:
    *   **Type**: `A`
    *   **Name**: `@`
    *   **Points to**: `76.76.21.21`
    *   **TTL**: 3600
    *   Click **Add Record**.
4.  **Add CNAME for 'www'**:
    *   **Type**: `CNAME`
    *   **Name**: `www`
    *   **Points to**: `cname.vercel-dns.com`
    *   **TTL**: 3600
    *   Click **Add Record**.

### Step 3: Wait for Propagation
1.  Go back to Vercel Domains dashboard.
2.  It might say "Refreshing...".
3.  Once the little circles turn **Blue** (Verification) and then **Green** (Valid), you are live!
4.  Your site is now accessible at `your-domain.com`!
