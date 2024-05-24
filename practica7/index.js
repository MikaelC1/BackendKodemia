const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;
const DATABASE_FILE = 'koders.json';

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Función para leer el archivo JSON
function readDatabase() {
  if (fs.existsSync(DATABASE_FILE)) {
    const data = fs.readFileSync(DATABASE_FILE);
    return JSON.parse(data);
  }
  return [];
};

// Función para escribir en el archivo JSON
function writeDatabase(data) {
  fs.writeFileSync(DATABASE_FILE, JSON.stringify(data));
};

// Ruta para registrar un nuevo koder
app.post('/koders', (req, res) => {
  const { name, age, sex, active } = req.body;
  if (!name || !age || !sex || typeof active !== 'boolean') {
    return res.status(400).json({ message: 'Name, age, sex, and active status are required' });
  }

  const koders = readDatabase();
  koders.push({ name, age, sex, active });
  writeDatabase(koders);

  res.status(201).json({ message: 'Koder registered successfully', koder: { name, age, sex, active } });
});

// Ruta para listar todos los koders
app.get('/koders', (req, res) => {
  const koders = readDatabase();
  res.status(200).json(koders);
});

// Ruta para eliminar un koder por nombre
app.delete('/koders/:name', (req, res) => {
  const { name } = req.params;
  let koders = readDatabase();
  const initialLength = koders.length;
  koders = koders.filter(koder => koder.name !== name);

  if (koders.length === initialLength) {
    return res.status(404).json({ message: 'Koder not found' });
  }

  writeDatabase(koders);
  res.status(200).json({ message: `Koder with name ${name} deleted successfully` });
});

// Ruta para eliminar todos los koders
app.delete('/koders', (req, res) => {
  writeDatabase([]);
  res.status(200).json({ message: 'All koders deleted successfully' });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
