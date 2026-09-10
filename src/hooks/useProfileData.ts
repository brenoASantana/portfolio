import { useEffect, useState } from "react";
import { type ProfileData, profileData } from "../data/profileData";
import { getLinkedInProfile } from "../services/linkedin";

export const useProfileData = (): ProfileData => {
    const [data, setData] = useState<ProfileData>(profileData);

    useEffect(() => {
        let active = true;

        void getLinkedInProfile().then((linkedinProfile) => {
            if (!active || !linkedinProfile) return;

            setData((current) => ({
                ...current,
                ...(linkedinProfile.name ? { name: linkedinProfile.name } : {}),
                ...(linkedinProfile.location
                    ? { location: linkedinProfile.location }
                    : {}),
                ...(linkedinProfile.experiences?.length
                    ? { experiences: linkedinProfile.experiences }
                    : {}),
                ...(linkedinProfile.education?.length
                    ? { education: linkedinProfile.education }
                    : {}),
                ...(linkedinProfile.languages?.length
                    ? { languages: linkedinProfile.languages }
                    : {}),
                ...(linkedinProfile.skills?.length
                    ? { skills: linkedinProfile.skills }
                    : {}),
            }));
        });

        return () => {
            active = false;
        };
    }, []);

    return data;
};
