# Sistema de Fila — Projeto

📌 Resumo  
Este projeto simula o funcionamento de um sistema de filas e gera uma imagem com os resultados (tabela_resultados.png). Calcula e exibe:
- Intervalo médio entre chegadas
- Duração média dos atendimentos
- Tabela completa de funcionamento
- Tamanho médio da fila
- Tempo médio de espera

O repositório contém:
- Script Python principal (código de simulação e geração de imagem)
- Frontend opcional em React (`/data-table-frontend`)

---

## ✅ Requisitos
- Windows
- Python 3.8+
- pip
- (Opcional) Node.js + npm — para rodar o frontend
- Git

---

## 🚀 Como executar (Python)

1) Abrir PowerShell na pasta do projeto  
- No Explorer, abra a pasta do projeto, Shift + clique direito → "Abrir janela do PowerShell aqui"

2) Criar e ativar ambiente virtual:
```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

3) Instalar dependências:
- Se existir `requirements.txt`:
```powershell
pip install -r requirements.txt
```
- Senão:
```powershell
pip install matplotlib
```

4) Executar o script principal:
- Se o arquivo estiver nomeado `trabaio.py`:
```powershell
python trabaio.py
```
- Se o arquivo estiver sem extensão (nome `trabaio`), renomeie e execute:
```powershell
Rename-Item .\trabaio .\trabaio.py
python .\trabaio.py
```

---

## 📊 Entrada esperada durante a execução
O programa pedirá:
- Quantidade de clientes
- Horários de chegada (em horas, ex.: `14.50` para 14h30)
- Duração do atendimento (em minutos)

Saída:
- Resultados impressos no terminal
- Arquivo de imagem `tabela_resultados.png` com a tabela de resultados

---

## 🌐 Frontend (opcional)
1. Entrar na pasta do frontend:
```powershell
cd .\data-table-frontend
```
2. Instalar dependências:
```powershell
npm install
```
3. Rodar a aplicação:
```powershell
npm start
```
4. Acessar:
- http://localhost:3000

Estrutura mínima do frontend:
```
data-table-frontend
├── public
│   └── index.html
├── src
│   ├── App.js
│   ├── index.js
│   ├── components
│   │   ├── DataForm.js
│   │   └── DataTable.js
│   ├── styles
│   │   └── main.css
│   └── utils
│       └── storage.js
└── package.json
```

---

## 📤 Enviar mudanças para o GitHub
```powershell
git add .
git commit -m "Atualização do projeto"
git push -u origin main
```

Se ocorrer conflito ao push:
```powershell
git fetch origin
git pull --rebase origin main
# resolver conflitos, depois:
git push -u origin main
```

---

## Observações
- Padronize entradas de horário (use `HH.MM`, por exemplo `14.50` para 14:30).  
- A imagem `tabela_resultados.png` é salva na pasta do projeto após execução.  
- Para dúvidas sobre execução no VS Code, use o terminal integrado (View → Terminal).

Licença: escolha e adicione conforme necessário (ex.: MIT).
