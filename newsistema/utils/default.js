
// Funções utilitárias para usar com localStorage

function salvarLocal(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function carregarLocal(chave) {
  const item = localStorage.getItem(chave);
  return item ? JSON.parse(item) : null;
}

