/**
 * Vercel Serverless Function: GET /api/github/stats
 *
 * Retorna estatísticas do GitHub do usuário
 * Usado pelo componente RPGDashboard
 *
 * Endpoint: GET /api/github/stats
 * Query: ?username=brenoASantana
 * Response: { topLanguages: [...], totalRepos: number, ... }
 */

module.exports = async (req, res) => {
  try {
    // Validar método HTTP
    if (req.method !== "GET") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { username } = req.query;

    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }

    // TODO: Implementar lógica após Fase 5
    // Fazer chamadas à GitHub API para obter stats
    return res.status(200).json({ topLanguages: [], totalRepos: 0 });
  } catch (error) {
    console.error("GitHub API error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
