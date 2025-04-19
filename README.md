# 📝 Anotações Rápidas na Aba

**Anotações Rápidas na Aba** é uma extensão para navegadores (Chrome, Edge, Firefox) que te permite fazer anotações rápidas direto da barra do navegador.  
Com um clique, você abre um bloco de notas simples, escreve suas ideias, salva localmente e limpa quando quiser.  
Ideal pra quem tá pesquisando, estudando ou só quer anotar algo com aquela rapidez! 🌟

---

## ✨ Funcionalidades

- 🗒️ **Bloco de notas instantâneo**: Abre um popup pra você escrever na hora.
- 💾 **Salvamento local**: Anotações ficam guardadas no navegador usando `chrome.storage.local`.
- 🎨 **Interface simples**: Botões pra salvar e limpar, com visual clean e intuitivo.

---

## 🔧 Como Instalar

### 1. Baixe o projeto

- Clone o repositório:
  ```bash
  git clone https://github.com/hlneto/simple-anotation-extension.git
  ```
- Ou baixe o ZIP e extraia na sua máquina.

---

### 2. Carregue no Chrome

1. Abra o Chrome e vá para `chrome://extensions/`
2. Ative o **Modo Desenvolvedor** (canto superior direito)
3. Clique em **Carregar sem compactação** e selecione a pasta do projeto (`simple-anotation-extension`)
4. O ícone da extensão vai aparecer na barra do navegador!

---

### 3. Teste no Firefox

1. Abra o Firefox e vá para `about:debugging#/runtime/this-firefox`
2. Clique em **Carregar Extensão Temporária**
3. Selecione a pasta do projeto
4. A extensão será carregada temporariamente

---

## 🧠 Como Usar

1. Clique no ícone da extensão na barra do navegador
2. Digite suas anotações na área de texto
3. Clique em **Salvar** pra guardar (as anotações ficam salvas mesmo após fechar o navegador)
4. Clique em **Limpar** pra apagar tudo e começar do zero
5. Feche e reabra o popup pra ver suas anotações carregadas automaticamente

---

## 📁 Estrutura do Projeto

```
simple-anotation-extension/
├── icon.png          # Ícone da extensão (128x128)
├── manifest.json     # Configuração da extensão
├── popup.html        # Interface do popup
├── popup.css         # Estilização do popup
├── popup.js          # Lógica pra salvar e carregar anotações
└── README.md         # Este arquivo
```

---

## ✅ Pré-requisitos

- Navegador compatível (Chrome, Edge ou Firefox)
- Ícone `icon.png` na pasta raiz (128x128)
- Todos os arquivos devem estar salvos em **UTF-8** para suporte total a caracteres brasileiros

---

## 🚀 Próximos Passos

- [ ] Adicionar **autosave** pra salvar anotações automaticamente
- [ ] Incluir opção pra **exportar como .txt**
- [ ] Publicar na **Chrome Web Store**

---

## 🤝 Contribuições

Quer deixar essa extensão ainda mais legal?

1. Faça um **fork**
2. Implemente suas mudanças
3. Envie um **pull request**

Ideias de contribuição:

- Melhorar o CSS com **temas personalizados**
- Adicionar suporte à **sincronização entre dispositivos** (`chrome.storage.sync`)
- Criar um **atalho de teclado** pra abrir o popup

---

## 📄 Licença

Este projeto é licenciado sob a **MIT License**.  
Use, modifique e compartilhe à vontade!

---

## 🙌 Agradecimentos

- À comunidade **open-source**, por compartilhar conhecimento
- **A você**, por testar essa extensão! 🚀

---

**Bora anotar com estilo? Vamo que vamo!** 🎉
