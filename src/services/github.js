const GITHUB_USERNAME = "brenoASantana";
const GITHUB_API = "https://api.github.com";

// Cache para evitar muitas requisições
const cache = {
  user: null,
  repos: null,
  stats: null,
  lastFetch: null,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutos

const isCacheValid = () => {
  return cache.lastFetch && Date.now() - cache.lastFetch < CACHE_DURATION;
};

// Buscar dados do usuário
export const getGitHubUser = async () => {
  if (isCacheValid() && cache.user) {
    return cache.user;
  }

  try {
    const response = await fetch(`${GITHUB_API}/users/${GITHUB_USERNAME}`);
    const data = await response.json();

    cache.user = {
      name: data.name,
      bio: data.bio,
      avatar: data.avatar_url,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos,
      location: data.location,
      company: data.company,
      blog: data.blog,
      twitter: data.twitter_username,
      createdAt: data.created_at,
    };

    cache.lastFetch = Date.now();
    return cache.user;
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
};

// Buscar repositórios
export const getGitHubRepos = async () => {
  if (isCacheValid() && cache.repos) {
    return cache.repos;
  }

  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    const data = await response.json();

    cache.repos = data
      .filter((repo) => !repo.fork) // Ignorar forks
      .map((repo) => ({
        name: repo.name,
        description: repo.description,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        language: repo.language,
        url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics,
        createdAt: repo.created_at,
        updatedAt: repo.updated_at,
      }))
      .sort((a, b) => b.stars - a.stars); // Ordenar por estrelas

    cache.lastFetch = Date.now();
    return cache.repos;
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
};

export const getGitHubStats = async () => {
  if (isCacheValid() && cache.stats) {
    return cache.stats;
  }

  try {
    const [user, repos] = await Promise.all([
      getGitHubUser(),
      getGitHubRepos(),
    ]);

    if (!user || !repos) return null;

    // Contar linguagens
    const languages = {};
    let totalStars = 0;
    let totalForks = 0;

    for (const repo of repos) {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
      totalStars += repo.stars;
      totalForks += repo.forks;
    }

    // Ordenar linguagens por quantidade
    const topLanguages = Object.entries(languages)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([name, count]) => ({ name, count }));

    // Calcular dias desde a criação da conta
    const accountAge = Math.floor(
      (Date.now() - new Date(user.createdAt).getTime()) / (1000 * 60 * 60 * 24)
    );

    cache.stats = {
      totalRepos: repos.length,
      totalStars,
      totalForks,
      topLanguages,
      accountAge,
      followers: user.followers,
      following: user.following,
    };

    cache.lastFetch = Date.now();
    return cache.stats;
  } catch (error) {
    console.error("Error calculating GitHub stats:", error);
    return null;
  }
};

// Buscar commits recentes (aproximação usando eventos)
export const getRecentActivity = async () => {
  try {
    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/events/public?per_page=100`
    );
    const events = await response.json();

    // Contar commits (eventos do tipo PushEvent)
    const pushEvents = events.filter((e) => e.type === "PushEvent");
    const totalCommits = pushEvents.reduce((sum, event) => {
      return sum + (event.payload.commits?.length || 0);
    }, 0);

    // Calcular streak (dias consecutivos com commits)
    const commitDates = new Set();
    for (const event of pushEvents) {
      const date = new Date(event.created_at).toDateString();
      commitDates.add(date);
    }

    return {
      recentCommits: totalCommits,
      activeDays: commitDates.size,
    };
  } catch (error) {
    console.error("Error fetching GitHub activity:", error);
    return { recentCommits: 0, activeDays: 0 };
  }
};
