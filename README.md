Sistema de Fila — Projeto
📌 Resumo

Este projeto simula o funcionamento de um sistema de filas, calculando e exibindo:

Intervalo médio entre chegadas

Duração média dos atendimentos

Tabela completa de funcionamento

Tamanho médio da fila

Tempo médio de espera

O script gera também a imagem tabela_resultados.png com os cálculos.

O repositório possui:

Um script Python principal

Um frontend opcional em React (/data-table-frontend)

🚀 Como executar o projeto (Python)
✅ Requisitos

Windows

Python 3.8+

pip

(Opcional) Node.js + npm — caso queira rodar o frontend

Git

📂 1. Abrir o projeto no PowerShell

No Windows Explorer:

Abra a pasta do projeto

Shift + clique direito

Clique em "Abrir janela do PowerShell aqui"

🧪 2. Criar e ativar ambiente virtual
python -m venv .venv
.venv\Scripts\Activate.ps1

📦 3. Instalar dependências
Se existir requirements.txt:
pip install -r requirements.txt

Se NÃO existir:
pip install matplotlib

▶️ 4. Executar o script principal

Se o arquivo estiver nomeado trabaio.py:

python trabaio.py


Se o arquivo estiver sem extensão, renomeie:

Rename-Item .\trabaio .\trabaio.py
python .\trabaio.py

📊 O que o programa vai pedir

Durante a execução, o usuário deve informar:

Quantidade de clientes

Horários de chegada (em horas, ex.: 14.50 para 14h30)

Duração do atendimento (em minutos)

Ao final, o programa:

Exibe os resultados no terminal

Gera a imagem: tabela_resultados.png

🌐 Como rodar o frontend (opcional)
1. Entrar na pasta:
cd .\data-table-frontend

2. Instalar dependências:
npm install

3. Rodar a aplicação:
npm start

4. Acessar no navegador:
http://localhost:3000

🔧 Estrutura do Projeto (Frontend)
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

📤 Como enviar mudanças para o GitHub
git add .
git commit -m "Atualização do projeto"
git push -u origin main


Se o push der conflito:

git fetch origin
git pull --rebase origin main
git push -u origin main
