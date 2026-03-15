// Shared service to compute coding platform stats
import Portfolio from '../models/Portfolio.js';

async function fetchJson(url, options) {
  const res = await fetch(url, options);
  if (!res.ok) throw new Error(`${url} -> ${res.status}`);
  return res.json();
}

export async function fetchCodeforces(handle) {
  if (!handle) return null;
  const json = await fetchJson(`https://codeforces.com/api/user.info?handles=${encodeURIComponent(handle)}`);
  if (json.status !== 'OK') throw new Error('Codeforces status not OK');
  const user = json.result?.[0];
  if (!user) return null;
  return {
    platform: 'Codeforces',
    username: handle,
    rating: user.rating ?? null,
    maxRating: user.maxRating ?? null,
    rank: user.rank ?? null,
    maxRank: user.maxRank ?? null,
    avatar: user.titlePhoto ?? null,
    profileUrl: `https://codeforces.com/profile/${encodeURIComponent(handle)}`
  };
}

export async function fetchLeetCode(username) {
  if (!username) return null;
  // Community API
  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${encodeURIComponent(username)}`);
    if (res.ok) {
      const json = await res.json();
      if (!json?.status || json.status === 'success') {
        return {
          platform: 'LeetCode',
          username,
          totalSolved: json.totalSolved ?? null,
          easySolved: json.easySolved ?? null,
          mediumSolved: json.mediumSolved ?? null,
          hardSolved: json.hardSolved ?? null,
          ranking: json.ranking ?? null,
          contributionPoints: json.contributionPoints ?? null,
          profileUrl: `https://leetcode.com/u/${encodeURIComponent(username)}/`
        };
      }
    }
  } catch {}
  // Minimal fallback
  try {
    const html = await (await fetch(`https://leetcode.com/u/${encodeURIComponent(username)}/`)).text();
    const solvedMatch = html.match(/"numSolved":\s*(\d+)/) || html.match(/totalSolved":\s*(\d+)/);
    const rankingMatch = html.match(/"ranking":\s*(\d+)/);
    return {
      platform: 'LeetCode',
      username,
      totalSolved: solvedMatch ? Number(solvedMatch[1]) : null,
      ranking: rankingMatch ? Number(rankingMatch[1]) : null,
      profileUrl: `https://leetcode.com/u/${encodeURIComponent(username)}/`
    };
  } catch {
    return {
      platform: 'LeetCode',
      username,
      profileUrl: `https://leetcode.com/u/${encodeURIComponent(username)}/`
    };
  }
}

export async function fetchGitHub(username, token = process.env.GITHUB_TOKEN) {
  if (!username) return null;
  const userJson = await fetchJson(`https://api.github.com/users/${encodeURIComponent(username)}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : {}
  });

  let contributionsLastYear = null;
  if (token) {
    try {
      const graphqlRes = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          query: `
            query($login: String!) {
              user(login: $login) {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                  }
                }
              }
            }
          `,
          variables: { login: username }
        })
      });
      if (graphqlRes.ok) {
        const g = await graphqlRes.json();
        contributionsLastYear = g?.data?.user?.contributionsCollection?.contributionCalendar?.totalContributions ?? null;
      }
    } catch {}
  }

  return {
    platform: 'GitHub',
    username,
    publicRepos: userJson.public_repos ?? null,
    followers: userJson.followers ?? null,
    following: userJson.following ?? null,
    contributionsLastYear,
    profileUrl: `https://github.com/${encodeURIComponent(username)}`
  };
}

export async function computeStats() {
  const portfolio = await Portfolio.findOne().lean();
  const codingPlatforms = portfolio?.codingPlatforms || [];
  const getUsername = (name) =>
    codingPlatforms.find(p => (p.name || '').toLowerCase() === name.toLowerCase())?.username || null;

  const leetcodeUser = getUsername('LeetCode') || 'KLU2300032990';
  const codeforcesUser = getUsername('Codeforces') || 'KLU2300032990';
  const githubUser = getUsername('GitHub') || 'munnakumar32990';

  const [leetcode, codeforces, github] = await Promise.all([
    fetchLeetCode(leetcodeUser).catch(() => null),
    fetchCodeforces(codeforcesUser).catch(() => null),
    fetchGitHub(githubUser).catch(() => null)
  ]);

  return {
    fetchedAt: new Date().toISOString(),
    leetcode,
    codeforces,
    github
  };
}


