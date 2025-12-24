const express = require("express");
const axios = require("axios");

// COLE SUAS CREDENCIAIS AQUI (obtidas do Spotify Dashboard)
// ⚠️ NUNCA commite as credenciais! Use apenas localmente
// Obtenha no: https://developer.spotify.com/dashboard/applications
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID || "SEU_CLIENT_ID_AQUI";
const CLIENT_SECRET =
  process.env.SPOTIFY_CLIENT_SECRET || "SEU_CLIENT_SECRET_AQUI";
const REDIRECT_URI = "https://brenoasantana.github.io/portfolio/callback";

const app = express();

app.get("/login", (req, res) => {
  const scope = "user-read-currently-playing user-read-playback-state";
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
    REDIRECT_URI
  )}&scope=${encodeURIComponent(scope)}`;

  console.log("\n🎵 Redirecionando para autenticação do Spotify...\n");
  res.redirect(authUrl);
});

app.get("/callback", async (req, res) => {
  const code = req.query.code;

  if (!code) {
    res.send("<h1>❌ Erro: Código não recebido</h1>");
    return;
  }

  try {
    console.log("📡 Obtendo tokens...");

    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: REDIRECT_URI,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${Buffer.from(
            `${CLIENT_ID}:${CLIENT_SECRET}`
          ).toString("base64")}`,
        },
      }
    );

    const refreshToken = response.data.refresh_token;

    console.log("\n✅ Sucesso! Refresh Token obtido:\n");
    console.log(refreshToken);
    console.log("\n");

    res.send(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Spotify Token - Sucesso! 🎉</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background: #191414;
            color: #fff;
          }
          .container {
            background: #282828;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 60px rgba(0,0,0,.5);
          }
          h1 { color: #1DB954; }
          pre {
            background: #000;
            padding: 15px;
            border-radius: 4px;
            overflow-x: auto;
            color: #1DB954;
            font-size: 14px;
          }
          .instructions {
            background: #1DB954;
            color: #000;
            padding: 15px;
            border-radius: 4px;
            margin-top: 20px;
          }
          code {
            background: #000;
            padding: 2px 6px;
            border-radius: 3px;
            color: #1DB954;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>✅ Sucesso! Token Obtido 🎉</h1>

          <h3>Seu Refresh Token:</h3>
          <pre>${refreshToken}</pre>

          <div class="instructions">
            <h3>📝 Próximos Passos:</h3>
            <ol>
              <li>Copie o token acima</li>
              <li>Crie um arquivo <code>.env</code> na raiz do projeto</li>
              <li>Adicione as seguintes linhas:</li>
            </ol>
            <pre style="background: #000; color: #fff; margin-top: 10px;">
REACT_APP_SPOTIFY_CLIENT_ID=${CLIENT_ID}
REACT_APP_SPOTIFY_CLIENT_SECRET=${CLIENT_SECRET}
REACT_APP_SPOTIFY_REFRESH_TOKEN=${refreshToken}</pre>
            <p><strong>4. Reinicie o servidor:</strong> <code>npm start</code></p>
          </div>

          <p style="margin-top: 20px; color: #b3b3b3;">
            ⚠️ Guarde esse token com segurança e nunca o compartilhe publicamente!
          </p>
        </div>
      </body>
      </html>
    `);
  } catch (error) {
    console.error("❌ Erro:", error.response?.data || error.message);
    res.send(`
      <h1>❌ Erro ao obter token</h1>
      <pre>${JSON.stringify(
        error.response?.data || error.message,
        null,
        2
      )}</pre>
    `);
  }
});

const PORT = 8888;
app.listen(PORT, () => {
  console.log("\n🎵 ================================");
  console.log("   SPOTIFY TOKEN GENERATOR");
  console.log("================================\n");
  console.log(`✅ Servidor rodando em: http://localhost:${PORT}`);
  console.log(`\n👉 Acesse: http://localhost:${PORT}/login\n`);
  console.log("📝 Passos:");
  console.log("   1. Cole suas credenciais no arquivo");
  console.log("   2. Acesse o link acima");
  console.log("   3. Autorize o app no Spotify");
  console.log("   4. Copie o Refresh Token gerado\n");
});
