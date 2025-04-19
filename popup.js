document.addEventListener('DOMContentLoaded', () => {
    console.log('Popup carregado!');

    chrome.storage.local.get('notes', (data) => {
      if (data.notes) {
        document.getElementById('notes').value = data.notes;
        console.log('Anotações carregadas:', data.notes);
      } else {
        console.log('Nenhuma anotação encontrada.');
      }
    });

    const saveButton = document.getElementById('save');
    if (saveButton) {
      saveButton.addEventListener('click', () => {
        console.log('Botão Salvar clicado!');
        const notes = document.getElementById('notes').value;
        chrome.storage.local.set({ notes: notes }, () => {
          if (chrome.runtime.lastError) {
            console.error('Erro ao salvar:', chrome.runtime.lastError);
            alert('Erro ao salvar anotações!');
          } else {
            console.log('Anotações salvas:', notes);
            alert('Anotações salvas com sucesso!');
          }
        });
      });
    } else {
      console.error('Botão Salvar não encontrado!');
    }

    const clearButton = document.getElementById('clear');
    if (clearButton) {
      clearButton.addEventListener('click', () => {
        console.log('Botão Limpar clicado!');
        document.getElementById('notes').value = '';
        chrome.storage.local.remove('notes', () => {
          if (chrome.runtime.lastError) {
            console.error('Erro ao limpar:', chrome.runtime.lastError);
            alert('Erro ao limpar anotações!');
          } else {
            console.log('Anotações limpas.');
            alert('Anotações limpas com sucesso!');
          }
        });
      });
    } else {
      console.error('Botão Limpar não encontrado!');
    }
  });