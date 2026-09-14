import type { MetadataRoute } from 'next';
import { indexable, origin } from '@/lib/seo';
export const dynamic = 'force-static';

// Robots des moteurs de recherche et des assistants IA. Décision du 14/09/2026 :
// quand le site est indexable, tout le monde est autorisé, y compris les robots
// qui entraînent les modèles. On veut que l'agence soit connue des IA. Pour ne
// laisser que les robots de recherche, retirer les lignes des robots d'entraînement.
const aiSearchBots = ['OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended'];
const aiTrainingBots = ['GPTBot', 'ClaudeBot', 'anthropic-ai', 'CCBot', 'Meta-ExternalAgent', 'Amazonbot', 'Bytespider'];

export default function robots(): MetadataRoute.Robots {
  if (!indexable) return { rules: { userAgent: '*', disallow: '/' } };
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      ...aiSearchBots.map((userAgent) => ({ userAgent, allow: '/' })),
      ...aiTrainingBots.map((userAgent) => ({ userAgent, allow: '/' })),
    ],
    sitemap: origin + '/sitemap.xml',
  };
}
