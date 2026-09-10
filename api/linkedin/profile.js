/**
 * GET /api/linkedin/profile
 *
 * Reads the LinkedIn profile through the official API. The access token stays
 * on Vercel and is never sent to the browser.
 */
module.exports = async (req, res) => {
    if (req.method !== "GET") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
    if (!accessToken) {
        return res.status(503).json({ error: "LinkedIn sync is not configured" });
    }

    try {
        const response = await fetch("https://api.linkedin.com/v2/userinfo", {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "X-Restli-Protocol-Version": "2.0.0",
            },
        });

        if (!response.ok) {
            return res
                .status(response.status)
                .json({ error: "LinkedIn request failed" });
        }

        const profile = await response.json();
        return res.status(200).json({
            name: profile.name,
            picture: profile.picture,
            location: profile.locale?.country
                ? new Intl.DisplayNames(["pt-BR"], { type: "region" }).of(
                    profile.locale.country,
                )
                : undefined,
            // These fields are accepted when the LinkedIn app has the corresponding
            // approved products/scopes. userinfo alone does not expose them.
            experiences: Array.isArray(profile.experiences)
                ? profile.experiences
                : undefined,
            skills: Array.isArray(profile.skills) ? profile.skills : undefined,
            updatedAt: new Date().toISOString(),
        });
    } catch (error) {
        console.error("LinkedIn API error:", error);
        return res.status(502).json({ error: "Unable to reach LinkedIn" });
    }
};
