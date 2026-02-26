import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: '0xZakk',
  repo: 'openclaw-setup-guide',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'OpenClaw Setup Guide',
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
