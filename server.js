const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const DB_FILE = path.join(__dirname, 'database.json');

function readDB() {
  if (!fs.existsSync(DB_FILE)) {
    return { users: [], links: [] };
  }
  return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

async function seedAdmin() {
  const db = readDB();
  const adminEmail = 'ahujarishi741@gmail.com';
  let admin = db.users.find(u => u.email === adminEmail);
  if (!admin) {
    const hashedPassword = await bcrypt.hash('101202303@#Ra', 10);
    db.users.push({
      id: Date.now(),
      email: adminEmail,
      password: hashedPassword,
      role: 'admin'
    });
    writeDB(db);
    console.log('Default admin user created.');
  }
}
seedAdmin();

const app = express();
app.get("/sw.js", (req, res) => {
  res.setHeader("Content-Type", "application/javascript");
  res.sendFile(path.join(__dirname, "sw.js"));
});
app.use(express.static(__dirname));
app.set('trust proxy', 1);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'super-secret-key-change-it',
  resave: false,
  saveUninitialized: false
}));

function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/login');
}

function layout(title, content) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <script src="https://pl30620850.effectivecpmnetwork.com/e8/4e/b0/e84eb0cf2345328fef1637242f4de322.js"></script>
    <script>(function(s){s.dataset.zone='11468479',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script'))))</script>
    
    <meta name="monetag" content="ac30aa276bb7dab3c2f3ba743ce3b23e">
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title} - ShrinkLink</title>
      <script src="https://cdn.tailwindcss.com"></script>
    

<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function handler(e) {
      // Trigger execution pipeline safely on first user touch
      if (window.tag && typeof window.tag.push === "function") {
        try {
          window.tag.push();
        } catch(err) {}
      }
    }, { once: true });
  });
</script>

</head>
    <body class="bg-slate-900 text-slate-100 min-h-screen flex flex-col justify-between font-sans">
      <nav class="bg-slate-800 border-b border-slate-700 px-6 py-4 flex justify-between items-center shadow-md">
        <a href="/dashboard" class="text-xl font-extrabold tracking-wider text-indigo-400 flex items-center gap-2">
          ⚡ Shrink<span class="text-white">Link</span>
        </a>
        <div class="flex items-center gap-4">
          <a href="/dashboard" class="text-sm font-medium hover:text-indigo-400 transition">Dashboard</a>
          <a href="/logout" class="text-sm bg-rose-600 hover:bg-rose-700 px-3 py-1.5 rounded-lg text-white font-medium transition shadow">Logout</a>
        </div>
      </nav>
      
      <main class="flex-grow flex items-center justify-center p-4">
        ${content}
      </main>

      <footer class="bg-slate-800 border-t border-slate-700 text-center py-4 text-xs text-slate-400">
        &copy; 2026 ShrinkLink. All rights reserved.
      </footer>
    
<script>
  document.addEventListener("click", function() {
    if (!window.adTriggered) {
      window.adTriggered = true;
      var s = document.createElement("script");
      s.dataset.zone = "11468479";
      s.src = "https://nap5k.com/tag.min.js";
      document.body.appendChild(s);
    }
  }, { once: true });
</script>

<script src="https://pl30620852.effectivecpmnetwork.com/16/de/b4/16deb4907056ab8059afdf743e9b9688.js"></script>

<script>
  document.addEventListener("click", function(e) {
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;
    if (!window.smartlinkTriggered) {
      window.smartlinkTriggered = true;
      window.open("https://www.effectivecpmnetwork.com/g0qbk2xi2r?key=0cda79afefd34549ee96c56b3d1a5a4d", "_blank");
    }
  });
</script>


<div id="mobile-ad-container" style="text-align: center; margin: 20px 0;">
  <button id="proceed-btn" style="background: #4F46E5; color: white; padding: 12px 24px; font-size: 16px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Click to Continue / Access Link
  </button>
</div>
<script src="https://quge5.com/88/tag.min.js" data-zone="265635" async data-cfasync="false"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("proceed-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        // Direct physical click event satisfies mobile browser security policies
        if (window.tag && typeof window.tag.push === "function") {
          try { window.tag.push(); } catch(e) {}
        }
      });
    }
  });
</script>

</body>
    </html>
  `;
}

app.get('/login', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <script src="https://pl30620850.effectivecpmnetwork.com/e8/4e/b0/e84eb0cf2345328fef1637242f4de322.js"></script>
    <script>(function(s){s.dataset.zone='11468479',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script'))))</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Login - ShrinkLink</title>
      <script src="https://cdn.tailwindcss.com"></script>
    

<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function handler(e) {
      // Trigger execution pipeline safely on first user touch
      if (window.tag && typeof window.tag.push === "function") {
        try {
          window.tag.push();
        } catch(err) {}
      }
    }, { once: true });
  });
</script>

</head>
    <body class="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 class="text-3xl font-extrabold text-center mb-6 text-indigo-400">Welcome Back</h2>
        <form method="POST" action="/login" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-slate-300">Email Address</label>
            <input type="email" name="email" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500" placeholder="name@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 text-slate-300">Password</label>
            <input type="password" name="password" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500" placeholder="••••••••" />
          </div>
          <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 transition font-semibold py-2.5 rounded-lg shadow-lg text-white">Login</button>
        </form>
        <p class="text-center text-sm text-slate-400 mt-6">
          Don't have an account? <a href="/signup" class="text-indigo-400 hover:underline">Sign up</a>
        </p>
      </div>
    
<script>
  document.addEventListener("click", function() {
    if (!window.adTriggered) {
      window.adTriggered = true;
      var s = document.createElement("script");
      s.dataset.zone = "11468479";
      s.src = "https://nap5k.com/tag.min.js";
      document.body.appendChild(s);
    }
  }, { once: true });
</script>

<script src="https://pl30620852.effectivecpmnetwork.com/16/de/b4/16deb4907056ab8059afdf743e9b9688.js"></script>

<script>
  document.addEventListener("click", function(e) {
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;
    if (!window.smartlinkTriggered) {
      window.smartlinkTriggered = true;
      window.open("https://www.effectivecpmnetwork.com/g0qbk2xi2r?key=0cda79afefd34549ee96c56b3d1a5a4d", "_blank");
    }
  });
</script>


<div id="mobile-ad-container" style="text-align: center; margin: 20px 0;">
  <button id="proceed-btn" style="background: #4F46E5; color: white; padding: 12px 24px; font-size: 16px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Click to Continue / Access Link
  </button>
</div>
<script src="https://quge5.com/88/tag.min.js" data-zone="265635" async data-cfasync="false"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("proceed-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        // Direct physical click event satisfies mobile browser security policies
        if (window.tag && typeof window.tag.push === "function") {
          try { window.tag.push(); } catch(e) {}
        }
      });
    }
  });
</script>

</body>
    </html>
  `);
});

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  const user = db.users.find(u => u.email === email);
  if (user && await bcrypt.compare(password, user.password)) {
    req.session.userId = user.id;
    res.redirect('/dashboard');
  } else {
    res.send(`Invalid credentials. <a href="/login" class="text-indigo-400 underline">Try again</a>`);
  }
});

app.get('/signup', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <script src="https://pl30620850.effectivecpmnetwork.com/e8/4e/b0/e84eb0cf2345328fef1637242f4de322.js"></script>
    <script>(function(s){s.dataset.zone='11468479',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script'))))</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sign Up - ShrinkLink</title>
      <script src="https://cdn.tailwindcss.com"></script>
    

<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function handler(e) {
      // Trigger execution pipeline safely on first user touch
      if (window.tag && typeof window.tag.push === "function") {
        try {
          window.tag.push();
        } catch(err) {}
      }
    }, { once: true });
  });
</script>

</head>
    <body class="bg-slate-900 text-slate-100 min-h-screen flex items-center justify-center p-4">
      <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 class="text-3xl font-extrabold text-center mb-6 text-indigo-400">Create Account</h2>
        <form method="POST" action="/signup" class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1 text-slate-300">Email Address</label>
            <input type="email" name="email" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500" placeholder="name@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium mb-1 text-slate-300">Password</label>
            <input type="password" name="password" required class="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-indigo-500" placeholder="••••••••" />
          </div>
          <button type="submit" class="w-full bg-indigo-600 hover:bg-indigo-500 transition font-semibold py-2.5 rounded-lg shadow-lg text-white">Sign Up</button>
        </form>
        <p class="text-center text-sm text-slate-400 mt-6">
          Already have an account? <a href="/login" class="text-indigo-400 hover:underline">Login</a>
        </p>
      </div>
    
<script>
  document.addEventListener("click", function() {
    if (!window.adTriggered) {
      window.adTriggered = true;
      var s = document.createElement("script");
      s.dataset.zone = "11468479";
      s.src = "https://nap5k.com/tag.min.js";
      document.body.appendChild(s);
    }
  }, { once: true });
</script>

<script src="https://pl30620852.effectivecpmnetwork.com/16/de/b4/16deb4907056ab8059afdf743e9b9688.js"></script>

<script>
  document.addEventListener("click", function(e) {
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;
    if (!window.smartlinkTriggered) {
      window.smartlinkTriggered = true;
      window.open("https://www.effectivecpmnetwork.com/g0qbk2xi2r?key=0cda79afefd34549ee96c56b3d1a5a4d", "_blank");
    }
  });
</script>


<div id="mobile-ad-container" style="text-align: center; margin: 20px 0;">
  <button id="proceed-btn" style="background: #4F46E5; color: white; padding: 12px 24px; font-size: 16px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Click to Continue / Access Link
  </button>
</div>
<script src="https://quge5.com/88/tag.min.js" data-zone="265635" async data-cfasync="false"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("proceed-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        // Direct physical click event satisfies mobile browser security policies
        if (window.tag && typeof window.tag.push === "function") {
          try { window.tag.push(); } catch(e) {}
        }
      });
    }
  });
</script>

</body>
    </html>
  `);
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const db = readDB();
  if (db.users.some(u => u.email === email)) {
    return res.send(`Email already exists. <a href="/signup" class="text-indigo-400 underline">Try again</a>`);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { id: Date.now(), email, password: hashedPassword, role: 'user' };
  db.users.push(newUser);
  writeDB(db);
  req.session.userId = newUser.id;
  res.redirect('/dashboard');
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => res.redirect('/login'));
});

app.get('/dashboard', isAuthenticated, (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id === req.session.userId);
  const userLinks = db.links.filter(l => l.userId === req.session.userId);
  const totalClicks = userLinks.reduce((acc, l) => acc + l.clicks, 0);

  // Dynamically extract domain protocol and host for short links
  const host = req.get('host').replace(/^smp45\./, 'short.smp45.'); 
  const proto = req.protocol;

  const linksHtml = userLinks.map(l => {
    const shortUrl = `${proto}://${host}/s/${l.shortCode}`;
    return `
      <tr class="border-b border-slate-700 hover:bg-slate-750 transition">
        <td class="px-6 py-4 truncate max-w-xs text-slate-300">${l.originalUrl}</td>
        <td class="px-6 py-4"><a href="${shortUrl}" target="_blank" class="text-indigo-400 hover:underline font-medium">${shortUrl}</a></td>
        <td class="px-6 py-4 text-center font-semibold text-emerald-400">${l.clicks} Clicks</td>
      </tr>
    `;
  }).join('');

  const content = `
    <div class="w-full max-w-5xl mx-auto space-y-8">
      <div class="grid grid-cols-1 gap-6">
        <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl shadow-lg flex items-center justify-between">
          <div>
            <p class="text-slate-400 text-sm font-medium">Total Link Clicks</p>
            <h3 class="text-3xl font-extrabold text-white mt-1">${totalClicks}</h3>
          </div>
          <div class="bg-indigo-600/20 p-4 rounded-xl text-indigo-400">📊</div>
        </div>
      </div>

      <div class="bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-xl">
        <h3 class="text-xl font-bold mb-4 text-indigo-300">Create Short Link</h3>
        <form method="POST" action="/shorten" class="flex flex-col md:flex-row gap-4">
          <input type="url" name="url" placeholder="Paste your long URL here..." required class="flex-grow bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500" />
          <button type="submit" class="bg-indigo-600 hover:bg-indigo-500 transition font-semibold px-8 py-3 rounded-xl shadow-lg text-white">Shorten</button>
        </form>
      </div>

      <div class="bg-slate-800 border border-slate-700 rounded-2xl shadow-xl overflow-hidden">
        <div class="px-6 py-4 border-b border-slate-700">
          <h3 class="text-lg font-bold text-white">Your Managed Links</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-750 text-slate-400 uppercase text-xs tracking-wider border-b border-slate-700">
                <th class="px-6 py-3">Original URL</th>
                <th class="px-6 py-3">Short Link</th>
                <th class="px-6 py-3 text-center">Performance</th>
              </tr>
            </thead>
            <tbody>
              ${linksHtml || `<tr><td colspan="3" class="px-6 py-8 text-center text-slate-500">No short links created yet.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  res.send(layout('Dashboard', content));
});

app.post('/shorten', isAuthenticated, (req, res) => {
  const { url } = req.body;
  const db = readDB();
  const shortCode = Math.random().toString(36).substring(2, 8);
  db.links.push({
    id: Date.now(),
    shortCode,
    originalUrl: url,
    clicks: 0,
    userId: req.session.userId
  });
  writeDB(db);
  res.redirect('/dashboard');
});

app.get('/s/:code', (req, res) => {
  const db = readDB();
  const link = db.links.find(l => l.shortCode === req.params.code);
  if (!link) return res.send(layout('Not Found', '<div class="text-center"><h2 class="text-2xl font-bold text-rose-500">Link not found.</h2></div>'));

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <script src="https://pl30620850.effectivecpmnetwork.com/e8/4e/b0/e84eb0cf2345328fef1637242f4de322.js"></script>
    <script>(function(s){s.dataset.zone='11468479',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script'))))</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Step 1 - Ad Gate</title>
      <script src="https://cdn.tailwindcss.com"></script>
    

<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function handler(e) {
      // Trigger execution pipeline safely on first user touch
      if (window.tag && typeof window.tag.push === "function") {
        try {
          window.tag.push();
        } catch(err) {}
      }
    }, { once: true });
  });
</script>

</head>
    <body class="bg-slate-900 text-slate-100 min-h-screen flex flex-col justify-between" style="height: 200vh;">
      <div class="max-w-2xl mx-auto w-full p-6 pt-12 space-y-6 text-center">
        <div class="bg-indigo-600/10 border border-indigo-500/20 p-6 rounded-2xl">
          <h2 class="text-2xl font-black text-indigo-400 mb-2">Step 1 of 2</h2>
          <p class="text-slate-300 text-sm">Please wait for the timer and scroll down to the bottom of the page to continue.</p>
        </div>

        <div class="bg-slate-800 p-4 rounded-xl border border-indigo-500/35 inline-block px-6 shadow-md">
          <p class="text-base font-semibold text-white">Time remaining: <span id="timer" class="font-black text-indigo-400 text-2xl">15</span> seconds</p>
        </div>

        
        
        
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
          <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] w-full text-center text-slate-500 text-xs">
            <p>Secure Content Zone A</p>
          </div>
          <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] w-full text-center text-slate-500 text-xs">
            <p>Secure Content Zone B</p>
          </div>
        </div>



      </div>

      <div class="fixed bottom-0 left-0 w-full bg-slate-800/90 backdrop-blur border-t border-slate-700 p-4 text-center shadow-2xl z-50">
        <button id="contBtn" disabled class="bg-slate-700 text-slate-400 cursor-not-allowed font-semibold px-8 py-3 rounded-xl transition shadow">
          Please scroll to bottom & wait...
        </button>
      </div>

      <script>
        let timeLeft = 15;
        let scrolledToBottom = false;
        const timerEl = document.getElementById('timer');
        const btn = document.getElementById('contBtn');

        let countdown = setInterval(() => {
          timeLeft--;
          if (timerEl) timerEl.innerText = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(countdown);
            checkReady();
          }
        }, 1000);

        window.addEventListener('scroll', () => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            scrolledToBottom = true;
            checkReady();
          }
        });

        function checkReady() {
          if (timeLeft <= 0 && scrolledToBottom) {
            btn.disabled = false;
            btn.className = "bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3 rounded-xl transition shadow-lg cursor-pointer";
            btn.innerText = "Continue to Step 2 ➔";
            btn.onclick = () => { window.location.href = '/s/${req.params.code}/step2'; };
          }
        }

        function loadAds() {
          [document.getElementById('ad-slot-1'), document.getElementById('ad-slot-2')].forEach(slot => {
            if (slot && !slot.hasChildNodes()) {
              const s = document.createElement('script');
              s.src = "https://quge5.com/88/tag.min.js";
              s.setAttribute("data-zone", "265635");
              s.async = true;
              s.setAttribute("data-cfasync", "false");
              slot.appendChild(s);
            }
          });
        }
        window.addEventListener('DOMContentLoaded', loadAds);
        setTimeout(loadAds, 500);
      </script>
    
<script>
  document.addEventListener("click", function() {
    if (!window.adTriggered) {
      window.adTriggered = true;
      var s = document.createElement("script");
      s.dataset.zone = "11468479";
      s.src = "https://nap5k.com/tag.min.js";
      document.body.appendChild(s);
    }
  }, { once: true });
</script>

<script src="https://pl30620852.effectivecpmnetwork.com/16/de/b4/16deb4907056ab8059afdf743e9b9688.js"></script>

<script>
  document.addEventListener("click", function(e) {
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;
    if (!window.smartlinkTriggered) {
      window.smartlinkTriggered = true;
      window.open("https://www.effectivecpmnetwork.com/g0qbk2xi2r?key=0cda79afefd34549ee96c56b3d1a5a4d", "_blank");
    }
  });
</script>


<div id="mobile-ad-container" style="text-align: center; margin: 20px 0;">
  <button id="proceed-btn" style="background: #4F46E5; color: white; padding: 12px 24px; font-size: 16px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Click to Continue / Access Link
  </button>
</div>
<script src="https://quge5.com/88/tag.min.js" data-zone="265635" async data-cfasync="false"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("proceed-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        // Direct physical click event satisfies mobile browser security policies
        if (window.tag && typeof window.tag.push === "function") {
          try { window.tag.push(); } catch(e) {}
        }
      });
    }
  });
</script>

</body>
    </html>
  `);
});

app.get('/s/:code/step2', (req, res) => {
  const db = readDB();
  const link = db.links.find(l => l.shortCode === req.params.code);
  if (!link) return res.send(layout('Not Found', '<div class="text-center"><h2 class="text-2xl font-bold text-rose-500">Link not found.</h2></div>'));

  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <script src="https://pl30620850.effectivecpmnetwork.com/e8/4e/b0/e84eb0cf2345328fef1637242f4de322.js"></script>
    <script>(function(s){s.dataset.zone='11468479',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script'))))</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Step 2 - Ad Gate</title>
      <script src="https://cdn.tailwindcss.com"></script>
    

<script>
  window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", function handler(e) {
      // Trigger execution pipeline safely on first user touch
      if (window.tag && typeof window.tag.push === "function") {
        try {
          window.tag.push();
        } catch(err) {}
      }
    }, { once: true });
  });
</script>

</head>
    <body class="bg-slate-900 text-slate-100 min-h-screen flex flex-col justify-between" style="height: 200vh;">
      <div class="max-w-2xl mx-auto w-full p-6 pt-12 space-y-6 text-center">
        <div class="bg-emerald-600/10 border border-emerald-500/20 p-6 rounded-2xl">
          <h2 class="text-2xl font-black text-emerald-400 mb-2">Step 2 of 2</h2>
          <p class="text-slate-300 text-sm">Almost there! Wait for the final timer and scroll to the bottom to get your link.</p>
        </div>

        <div class="bg-slate-800 p-4 rounded-xl border border-emerald-500/35 inline-block px-6 shadow-md">
          <p class="text-base font-semibold text-white">Time remaining: <span id="timer" class="font-black text-emerald-400 text-2xl">10</span> seconds</p>
        </div>

        
        
        
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full my-4">
          <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] w-full text-center text-slate-500 text-xs">
            <p>Secure Content Zone A</p>
          </div>
          <div class="bg-slate-800 border border-slate-700 p-6 rounded-2xl flex flex-col items-center justify-center min-h-[160px] w-full text-center text-slate-500 text-xs">
            <p>Secure Content Zone B</p>
          </div>
        </div>



      </div>

      <div class="fixed bottom-0 left-0 w-full bg-slate-800/90 backdrop-blur border-t border-slate-700 p-4 text-center shadow-2xl z-50">
        <button id="getLinkBtn" disabled class="bg-slate-700 text-slate-400 cursor-not-allowed font-semibold px-8 py-3 rounded-xl transition shadow">
          Please scroll to bottom & wait...
        </button>
      </div>

      <script>
        let timeLeft = 10;
        let scrolledToBottom = false;
        const timerEl = document.getElementById('timer');
        const btn = document.getElementById('getLinkBtn');

        let countdown = setInterval(() => {
          timeLeft--;
          if (timerEl) timerEl.innerText = timeLeft;
          if (timeLeft <= 0) {
            clearInterval(countdown);
            checkReady();
          }
        }, 1000);

        window.addEventListener('scroll', () => {
          if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            scrolledToBottom = true;
            checkReady();
          }
        });

        function checkReady() {
          if (timeLeft <= 0 && scrolledToBottom) {
            btn.disabled = false;
            btn.className = "bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-8 py-3 rounded-xl transition shadow-lg cursor-pointer";
            btn.innerText = "Get Link 🔗";
            btn.onclick = () => { window.location.href = '/s/${req.params.code}/finalize'; };
          }
        }

        function loadAds() {
          [document.getElementById('ad-slot-3'), document.getElementById('ad-slot-4')].forEach(slot => {
            if (slot && !slot.hasChildNodes()) {
              const s = document.createElement('script');
              s.src = "https://quge5.com/88/tag.min.js";
              s.setAttribute("data-zone", "265635");
              s.async = true;
              s.setAttribute("data-cfasync", "false");
              slot.appendChild(s);
            }
          });
        }
        window.addEventListener('DOMContentLoaded', loadAds);
        setTimeout(loadAds, 500);
      </script>
    
<script>
  document.addEventListener("click", function() {
    if (!window.adTriggered) {
      window.adTriggered = true;
      var s = document.createElement("script");
      s.dataset.zone = "11468479";
      s.src = "https://nap5k.com/tag.min.js";
      document.body.appendChild(s);
    }
  }, { once: true });
</script>

<script src="https://pl30620852.effectivecpmnetwork.com/16/de/b4/16deb4907056ab8059afdf743e9b9688.js"></script>

<script>
  document.addEventListener("click", function(e) {
    if (e.target.closest("button") || e.target.closest("a") || e.target.closest("input")) return;
    if (!window.smartlinkTriggered) {
      window.smartlinkTriggered = true;
      window.open("https://www.effectivecpmnetwork.com/g0qbk2xi2r?key=0cda79afefd34549ee96c56b3d1a5a4d", "_blank");
    }
  });
</script>


<div id="mobile-ad-container" style="text-align: center; margin: 20px 0;">
  <button id="proceed-btn" style="background: #4F46E5; color: white; padding: 12px 24px; font-size: 16px; font-weight: bold; border: none; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    Click to Continue / Access Link
  </button>
</div>
<script src="https://quge5.com/88/tag.min.js" data-zone="265635" async data-cfasync="false"></script>
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("proceed-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        // Direct physical click event satisfies mobile browser security policies
        if (window.tag && typeof window.tag.push === "function") {
          try { window.tag.push(); } catch(e) {}
        }
      });
    }
  });
</script>

</body>
    </html>
  `);
});

app.get('/s/:code/finalize', (req, res) => {
  const db = readDB();
  const link = db.links.find(l => l.shortCode === req.params.code);
  if (!link) return res.send('Link not found.');
  
  link.clicks += 1;
  writeDB(db);

  res.redirect(link.originalUrl);
});

app.get('/', (req, res) => {
  res.redirect('/login');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
