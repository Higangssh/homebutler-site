// ===== Terminal Simulation =====

const sequences = [
  {
    command: 'homebutler status',
    output: [
      '',
      '<span class="t-bold">System Status</span>        <span class="t-dim">nas-01 (192.168.1.100)</span>',
      '',
      '  CPU     <span class="t-green">████░░░░░░</span>  <span class="t-green">12%</span>',
      '  Memory  <span class="t-green">██████░░░░</span>  <span class="t-green">4.2 / 16 GB</span>',
      '  Disk    <span class="t-amber">████████░░</span>  <span class="t-amber">62%</span>  (1.2 TB free)',
      '  Uptime  <span class="t-dim">42 days 7 hours</span>',
      '',
      '<span class="t-bold">Services</span>  <span class="t-green">8 running</span>  <span class="t-dim">0 stopped</span>',
      '',
      '  <span class="t-green">●</span> uptime-kuma    <span class="t-dim">:3001</span>   <span class="t-green">healthy</span>',
      '  <span class="t-green">●</span> nextcloud      <span class="t-dim">:8080</span>   <span class="t-green">healthy</span>',
      '  <span class="t-green">●</span> jellyfin       <span class="t-dim">:8096</span>   <span class="t-green">healthy</span>',
      '  <span class="t-green">●</span> vaultwarden    <span class="t-dim">:8222</span>   <span class="t-green">healthy</span>',
      '  <span class="t-green">●</span> homebutler-web <span class="t-dim">:9900</span>   <span class="t-green">healthy</span>',
    ],
    delay: 600
  },
  {
    command: 'homebutler backup drill uptime-kuma',
    output: [
      '',
      '<span class="t-bold">Backup Drill</span>  <span class="t-dim">uptime-kuma</span>',
      '',
      '  Pulling backup snapshot...       <span class="t-green">done</span>',
      '  Starting isolated container...   <span class="t-green">done</span>',
      '  Restoring data volume...         <span class="t-green">done</span>',
      '  Health check (HTTP 200)...       <span class="t-green">done</span>',
      '  Verifying data integrity...      <span class="t-green">done</span>',
      '  Cleaning up container...         <span class="t-green">done</span>',
      '',
      '  <span class="t-green t-bold">✅ DRILL PASSED</span>',
      '  <span class="t-dim">uptime-kuma backup is valid and restorable</span>',
      '  <span class="t-dim">Duration: 23s | Snapshot: 142 MB | Age: 2h ago</span>',
    ],
    delay: 400
  },
  {
    command: 'homebutler alerts --watch',
    output: [
      '',
      '<span class="t-bold">Alert Monitor</span>  <span class="t-dim">watching 3 rules...</span>',
      '',
      '  <span class="t-dim">14:32:01</span>  <span class="t-amber">⚠ ALERT</span>  disk-cleanup  <span class="t-amber">disk_usage 93% > 90%</span>',
      '  <span class="t-dim">14:32:01</span>  <span class="t-blue">→ ACTION</span> running: docker system prune -f',
      '  <span class="t-dim">14:32:08</span>  <span class="t-green">✓ HEALED</span> disk-cleanup  <span class="t-green">disk_usage → 67%</span>',
      '',
      '  <span class="t-dim">14:35:12</span>  <span class="t-red">✗ ALERT</span>  nginx-health  <span class="t-red">HTTP check failed</span>',
      '  <span class="t-dim">14:35:12</span>  <span class="t-blue">→ ACTION</span> running: systemctl restart nginx',
      '  <span class="t-dim">14:35:15</span>  <span class="t-green">✓ HEALED</span> nginx-health  <span class="t-green">HTTP 200 OK</span>',
      '',
      '  <span class="t-dim">Self-healed <span class="t-green">2</span> issues in the last hour</span>',
      '  <span class="t-dim">Watching...</span>',
    ],
    delay: 500
  }
];

const terminalOutput = document.getElementById('terminal-output');
const terminalInput = document.getElementById('terminal-input');
const cursor = document.getElementById('cursor');
let currentSequence = 0;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function typeText(element, text, speed) {
  for (let i = 0; i < text.length; i++) {
    element.textContent += text[i];
    await sleep(speed);
  }
}

async function printOutputLines(lines, lineDelay) {
  for (const line of lines) {
    const div = document.createElement('div');
    div.className = 'terminal-line';
    div.innerHTML = line;
    terminalOutput.appendChild(div);
    await sleep(lineDelay);
  }
}

async function runSequence(seq) {
  // Type the command
  terminalInput.textContent = '';
  cursor.style.display = 'inline';
  await typeText(terminalInput, seq.command, 50);

  // "Execute" — hide cursor briefly
  cursor.style.display = 'none';
  await sleep(300);

  // Move command to output area
  const cmdLine = document.createElement('div');
  cmdLine.className = 'terminal-line';
  cmdLine.innerHTML = '<span class="prompt">$</span> ' + seq.command;
  terminalOutput.appendChild(cmdLine);
  terminalInput.textContent = '';

  // Print output lines with staggered delay
  await printOutputLines(seq.output, seq.delay);

  // Show cursor again
  cursor.style.display = 'inline';
}

async function runTerminal() {
  while (true) {
    const seq = sequences[currentSequence];
    await runSequence(seq);
    await sleep(3000);

    // Clear for next sequence
    terminalOutput.innerHTML = '';
    currentSequence = (currentSequence + 1) % sequences.length;
    await sleep(500);
  }
}

// ===== Copy Buttons =====
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const code = document.getElementById(targetId);
    if (!code) return;

    navigator.clipboard.writeText(code.textContent).then(() => {
      const copyIcon = btn.querySelector('.copy-icon');
      const checkIcon = btn.querySelector('.check-icon');
      copyIcon.style.display = 'none';
      checkIcon.style.display = 'block';
      setTimeout(() => {
        copyIcon.style.display = 'block';
        checkIcon.style.display = 'none';
      }, 2000);
    });
  });
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== Intersection Observer for fade-in =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .arch-layer, .install-card, .install-alt').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// ===== Start terminal =====
document.addEventListener('DOMContentLoaded', () => {
  sleep(800).then(() => runTerminal());
});
