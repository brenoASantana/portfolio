/**
 * Vercel Serverless Function: GET /api/spotify/now-playing
 *
 * Retorna a música que está tocando no Spotify do usuário
 * Credenciais sensíveis (CLIENT_SECRET, REFRESH_TOKEN) ficam aqui no backend
 *
 * Endpoint: GET /api/spotify/now-playing
 * Response: { isPlaying: boolean, title?: string, artist?: string, ... }
 */

module.exports = async (req, res) => {
    try {
        // Validar método HTTP
        if (req.method !== "GET") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        // TODO: Implementar lógica após Fase 7
        // Por enquanto, retornar resposta vazia
        return res.status(200).json({ isPlaying: false });
    } catch (error) {
        console.error("Spotify API error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
