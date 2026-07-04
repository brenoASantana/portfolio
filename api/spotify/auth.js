/**
 * Vercel Serverless Function: POST /api/spotify/auth
 *
 * Autentica e obtém access token do Spotify
 * Mantém credenciais seguras no backend
 *
 * Endpoint: POST /api/spotify/auth
 * Body: { refreshToken?: string }
 * Response: { access_token: string, expires_in: number }
 */

module.exports = async (req, res) => {
    try {
        // Validar método HTTP
        if (req.method !== "POST") {
            return res.status(405).json({ error: "Method not allowed" });
        }

        // TODO: Implementar lógica após Fase 7
        // Usar variáveis de ambiente: SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN
        return res.status(200).json({ access_token: "", expires_in: 3600 });
    } catch (error) {
        console.error("Spotify Auth error:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
