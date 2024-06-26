import mongoose from "mongoose";

export async function setupMongo(): Promise<void> {
  try {
    // Verificando se o banco já está conectado
    if (mongoose.connection.readyState === 1) {
      return;
    }
    console.log("🎲 Connecting to DB...");
    //Forçando o typescript entender que estamos usando a tipagem de string, pois ele pode vir por 'undefined' ou 'string'
    await mongoose.connect(process.env.MONGO_URL as string);
    console.log("✅ DB Connected!");
  } catch {
    //Exibe mensagem de erro caso o banco não consiga se conectar
    throw new Error("❌ DB not connected.");
  }
}
