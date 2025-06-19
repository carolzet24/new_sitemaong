
document.addEventListener('DOMContentLoaded', () => {
  const interval = setInterval(() => {
    const user = sessionStorage.getItem('user');
    if (user) {
      clearInterval(interval);
      loadBetaAssistant();
    }
  }, 200);
});

async function loadBetaAssistant() {
  try {
    const response = await fetch('../components/assistente.html');
    const html = await response.text();
    const betaContainer = document.createElement('div');
    betaContainer.innerHTML = html;
    document.body.appendChild(betaContainer);
    initBetaEvents();
  } catch (error) {
    console.error('Erro ao carregar a assistente Beta:', error);
  }
}

  const betaButton = document.getElementById('beta-button');
  const betaDrawer = document.getElementById('beta-drawer');
  const betaClose = document.getElementById('beta-close');

  betaButton?.addEventListener('click', () => {
    betaDrawer?.classList.add('open');
  });

  betaClose?.addEventListener('click', () => {
    betaDrawer?.classList.remove('open');
  });

  document.addEventListener('click', (event) => {
    const isClickInsideDrawer = betaDrawer?.contains(event.target);
    const isClickOnButton = betaButton?.contains(event.target);
    if (!isClickInsideDrawer && !isClickOnButton && betaDrawer?.classList.contains('open')) {
      betaDrawer.classList.remove('open');
    }
  });
}