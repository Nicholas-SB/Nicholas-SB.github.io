// Set header avatar to a random pfp from the list
const avatar = document.querySelector('.avatar-inner');
const pick = pfpList[Math.floor(Math.random() * pfpList.length)];
const avatarImg = document.createElement('img');
avatarImg.src = pick.src;
avatarImg.alt = 'mochi';
avatar.innerHTML = '';
avatar.appendChild(avatarImg);

// Render pfp images from pfps.js
const row = document.getElementById('pfp-row');
pfpList.forEach((pfp, i) => {
  const item = document.createElement('div');
  item.className = 'pfp-item';
  const img = document.createElement('img');
  img.src = pfp.src;
  img.alt = 'pfp ' + (i + 1);
  img.loading = 'lazy';
  item.appendChild(img);
  item.addEventListener('click', () => {
    document.getElementById('pfp-zoomed').src = pfp.src;
    document.getElementById('pfp-artist').textContent = pfp.artist ? pfp.artist : 'Missing Source';
    document.getElementById('pfp-overlay').classList.add('active');
  });
  row.appendChild(item);
});

// Discord copy button
function copyDiscord() {
  const handle = document.getElementById('discord-handle').textContent.trim();
  const btn = document.getElementById('copy-discord-btn');
  navigator.clipboard.writeText(handle).then(() => {
    btn.textContent = 'copied!';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'copy';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// Expand/collapse pfp grid
function togglePfps() {
  const btn = document.getElementById('expand-btn');
  const row = document.getElementById('pfp-row');
  const isExpanded = row.classList.contains('expanded');
  if (isExpanded) {
    row.style.transition = 'max-height 0.25s cubic-bezier(0.4, 0, 0.2, 1)';
    row.style.maxHeight = row.scrollHeight + 'px';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const isMobile = window.innerWidth < 768;
        row.style.maxHeight = isMobile ? '156px' : '78px';
      });
    });
    row.classList.remove('expanded');
    btn.textContent = 'expand';
    document.querySelector('.section-pfp').scrollIntoView({ behavior: 'smooth' });
  } else {
    row.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    row.style.maxHeight = row.scrollHeight + 'px';
    row.classList.add('expanded');
    btn.textContent = 'collapse';
  }
}

// Last updated date
const lastUpdated = new Date(document.lastModified);
const formatted = lastUpdated.toLocaleDateString('en-GB', {
  day: 'numeric', month: 'long', year: 'numeric'
});
document.getElementById('last-updated').textContent = 'last updated ' + formatted;