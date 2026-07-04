/**
 * Global TypeScript Types
 * Tipos compartilhados em toda a aplicação
 */

/* ============================================================================
   PROFILE & SKILLS
   ============================================================================ */

export interface Skill {
    name: string;
    level: number; // 1-5
    category: "frontend" | "backend" | "devops" | "game-dev" | "database";
    icon?: string;
    color?: string;
}

export interface Experience {
    company: string;
    companyUrl: string;
    role?: string;
    description?: string;
    stacks: {
        frontend?: string[];
        backend?: string[];
        database?: string[];
        infrastructure?: string[];
        tools?: string[];
        methodologies?: string[];
    };
}

export interface ProfileData {
    name: string;
    location: string;
    experiences: Experience[];
    skills: string[];
}

/* ============================================================================
   PRODUCTS & PROJECTS (Vitrine)
   ============================================================================ */

export type ProductCategory = "game" | "web-system" | "tool" | "saas";

export interface Product {
    id: string;
    title: string;
    subtitle: string;
    category: ProductCategory;
    description: string;
    shortDescription: string;
    thumbnail: string; // imagem principal
    images: string[]; // galeria de screenshots
    features: string[]; // lista de features principais
    technologies: string[]; // React, Go, PostgreSQL, etc
    liveLink?: string; // URL do projeto publicado
    githubLink?: string; // URL do repositório
    demoLink?: string; // URL de demo
    year: number; // ano de desenvolvimento
    featured: boolean; // destacado na vitrine
    role?: string; // seu papel neste projeto
    status: "completed" | "in-progress" | "archived";
    tags?: string[]; // tags customizadas
}

/* ============================================================================
   SPOTIFY
   ============================================================================ */

export interface SpotifyTrack {
    isPlaying: boolean;
    title?: string;
    artist?: string;
    album?: string;
    albumImageUrl?: string;
    songUrl?: string;
    progress?: number;
    duration?: number;
}

export interface SpotifyAuthResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token?: string;
}

/* ============================================================================
   GITHUB
   ============================================================================ */

export interface GitHubLanguage {
    name: string;
    count: number;
    percentage: number;
}

export interface GitHubStats {
    totalRepos: number;
    totalCommits: number;
    topLanguages: GitHubLanguage[];
    followers: number;
    following: number;
    publicGists: number;
}

export interface GitHubActivity {
    activeDays: number;
    recentCommits: number;
    currentStreak: number;
    longestStreak: number;
}

/* ============================================================================
   RPG DASHBOARD
   ============================================================================ */

export interface CharacterStats {
    level: number;
    experience: number;
    nextLevel: number;
    daysUntilBirthday: number;
    codingStreak: number;
    linesOfCode: number;
    coffeeConsumed: number;
    bugsFixed: number;
}

export interface CharacterSkill extends Skill {
    proficiency: number; // 0-100 porcentagem
    yearsExperience?: number;
}

/* ============================================================================
   UI COMPONENT PROPS
   ============================================================================ */

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
    variant?: ButtonVariant;
    size?: ButtonSize;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    className?: string;
    type?: "button" | "submit" | "reset";
    ariaLabel?: string;
}

export interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    featured?: boolean;
}

export interface BadgeProps {
    label: string;
    color?: string;
    icon?: string;
    size?: "sm" | "md" | "lg";
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg";
    closeButton?: boolean;
}

export interface SkillBarProps {
    name: string;
    level: number; // 1-5
    color?: string;
    showLabel?: boolean;
}

export interface StatBlockProps {
    label: string;
    value: string | number;
    icon?: string;
    trend?: "up" | "down" | "neutral";
}

/* ============================================================================
   LOCALIZATION
   ============================================================================ */

export type LanguageCode = "en-US" | "pt-BR";

export interface TranslationStrings {
    [key: string]: string | TranslationStrings;
}

/* ============================================================================
   API RESPONSES
   ============================================================================ */

export interface ApiResponse<T = unknown> {
    success: boolean;
    data?: T;
    error?: string;
    message?: string;
}

export interface ApiError {
    code: string;
    message: string;
    statusCode: number;
}
