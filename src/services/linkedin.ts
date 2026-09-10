import type { ProfileData } from "../data/profileData";

const PROFILE_CACHE_KEY = "portfolio:linkedin-profile";
const PROFILE_CACHE_TTL = 15 * 60 * 1000;

interface LinkedInProfileResponse {
    name?: string;
    location?: string;
    experiences?: ProfileData["experiences"];
    education?: ProfileData["education"];
    languages?: ProfileData["languages"];
    skills?: string[];
    updatedAt?: string;
}

const readCachedProfile = (): LinkedInProfileResponse | null => {
    try {
        const cached = localStorage.getItem(PROFILE_CACHE_KEY);
        if (!cached) return null;

        const parsed = JSON.parse(cached) as {
            expiresAt: number;
            profile: LinkedInProfileResponse;
        };
        return parsed.expiresAt > Date.now() ? parsed.profile : null;
    } catch {
        return null;
    }
};

export const getLinkedInProfile =
    async (): Promise<LinkedInProfileResponse | null> => {
        const cached = readCachedProfile();
        if (cached) return cached;

        try {
            const response = await fetch("/api/linkedin/profile");
            if (!response.ok) return null;

            const profile = (await response.json()) as LinkedInProfileResponse;
            localStorage.setItem(
                PROFILE_CACHE_KEY,
                JSON.stringify({ profile, expiresAt: Date.now() + PROFILE_CACHE_TTL }),
            );
            return profile;
        } catch {
            return null;
        }
    };
