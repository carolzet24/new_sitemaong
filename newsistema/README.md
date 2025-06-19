
# Plataforma BETA - Gestão ONG Novo Amanhã

Este projeto é um sistema de gestão completo para a ONG Novo Amanhã, desenvolvido em HTML, CSS, JS e Firebase.

## 🚀 Funcionalidades Implementadas

- Cadastro e login com Firebase Auth
- Controle de permissões por perfil (Coordenador, Secretaria, Professor, Assistente Social)
- Registro e listagem de alunos
- Registro de chamadas com data e turma
- Dashboard com gráficos reais (alunos, doações, logs)
- Registro e envio de doações com comprovante (Firebase Storage)
- Galeria de fotos com upload real
- Envio de documentos para nuvem
- Calendário de eventos pessoais
- Preferências visuais (modo escuro/leitura/fonte) aplicadas automaticamente
- Logs automáticos de ações (auditoria)
- Proteção de rotas por autenticação + permissão
- Assistente virtual (em desenvolvimento)

## 🧑‍💻 Tecnologias Utilizadas

- HTML, CSS, JavaScript
- Firebase Auth, Firestore, Storage
- Bootstrap
- Firebase Hosting (para deploy)

## 📁 Estrutura de Pastas

- `pages/`: todas as páginas do sistema
- `js/`: scripts separados por funcionalidade
- `components/`: navbar, assistente e componentes reutilizáveis
- `css/`: estilos globais e específicos

## 👤 Perfis e Acessos

- **Coordenador**: acesso total
- **Secretario**: tudo, exceto auditoria e chamada
- **Professor**: apenas visualização de alunos, chamada, eventos, galeria
- **Assistente Social**: igual ao professor

## 🛠️ Configuração

Configure seu projeto Firebase e substitua as credenciais em `js/*.js`.  
Para deploy:

```bash
firebase login
firebase init hosting
firebase deploy
```

## ✅ Pronto para produção

Este projeto está limpo, funcional, com estrutura padronizada e pronto para ser expandido.
