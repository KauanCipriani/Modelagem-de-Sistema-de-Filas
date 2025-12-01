...existing code...
# Sistema de Fila — trabaio

Resumo rápido
- Script Python que simula atendimento em fila e gera uma imagem com a tabela de resultados (`tabela_resultados.png`).
- Frontend opcional em `data-table-frontend` (React).

Requisitos
- Windows
- Python 3.8+ (recomendado)
- pip
- (opcional) Node.js + npm para o frontend
- Git (para clonar/enviar para o GitHub)

Instalação e execução (PowerShell)
1. Abra o PowerShell na pasta do projeto:
   - No Explorer, abra `C:\Users\Kauan\Desktop\trabaio`, Shift + clique direito → "Abrir janela do PowerShell aqui".

2. Criar e ativar ambiente virtual:
```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
```

3. Instalar dependências Python:
- Se existir `requirements.txt`:
```powershell
pip install -r requirements.txt
```
- Senão, instalar matplotlib manualmente:
```powershell
pip install matplotlib
```

4. Executar o script principal:
- Se o arquivo estiver nomeado `trabaio.py`:
```powershell
python trabaio.py
```
- Se o arquivo atualmente não tiver extensão, renomeie:
```powershell
Rename-Item .\trabaio .\trabaio.py
python .\trabaio.py
```

O programa pedirá:
- Quantos clientes cadastrar
- Horários de chegada (horas decimais, ex: `14.30` ou `14.5`)
- Duração do atendimento em minutos

Ao final será mostrada a tabela no terminal e salva a imagem `tabela_resultados.png` na pasta do projeto.

Commit e push para o GitHub
```powershell
git add .
git commit -m "Adicionar projeto trabaio"
git push -u origin main
```
Se o push for rejeitado porque há alterações remotas:
```powershell
git fetch origin
git pull --rebase origin main
# resolver conflitos se houver, depois:
git push -u origin main
```

Observações
- Saída da imagem: `tabela_resultados.png`.
- Ajuste formatos de entrada (ex.: `14.3` significa 14 horas e 18 minutos; prefira usar `14.50` para 14:30) ou padronize antes de rodar.
- Use o terminal integrado do VS Code (View → Terminal) para executar comandos.

---

# Data Table Frontend

This project is a simple React application that allows users to input data and display it in a table format. The application consists of a form for data entry and a table to display the submitted data.

## Project Structure

```
data-table-frontend
├── public
│   └── index.html        # Main HTML file
├── src
│   ├── index.js          # Entry point for the React application
│   ├── App.js            # Main App component
│   ├── components
│   │   ├── DataForm.js   # Component for data input form
│   │   └── DataTable.js  # Component for displaying data in a table
│   ├── styles
│   │   └── main.css      # CSS styles for the application
│   └── utils
│       └── storage.js    # Utility functions for local storage
├── package.json           # npm configuration file
├── .gitignore             # Files to ignore by Git
└── README.md              # Project documentation
```

## Getting Started (Frontend)

To get started with the frontend, follow these steps:

1. **Entrar na pasta do frontend:**
```powershell
cd .\data-table-frontend
```

2. **Instalar dependências:**
```powershell
npm install
```

3. **Executar a aplicação:**
```powershell
npm start
```

4. **Abrir no navegador:**
Navegue para `http://localhost:3000` para ver a aplicação.

## Usage

- Use the form to input data.
- Submit the form to see the data displayed in the table below.
- The application uses local storage to persist data between sessions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.
