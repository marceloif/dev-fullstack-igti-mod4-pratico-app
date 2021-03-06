//IMPORTE DE ARQUIVOS
import express from 'express';
import { db } from './models/index.js';
import { accountRouter } from './routes/accountsRoutes.js';

//CONEXÃO COM O MONGODB
(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log('Conectado com o mongodb com sucesso');
  } catch (error) {
    console.log('Erro ao conectar no mongodb ' + error);
  }
})();

const app = express();

app.use(express.json());

app.use(accountRouter);

app.listen(process.env.PORT, () => {
  console.log('API Iniciada com Sucesso!');
});
